import React, { useState } from "react";
import { Alert, Button, FileInput, Select, TextInput, Modal } from "flowbite-react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase.js";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
// Import Froala Editor and CSS Froala
import FroalaEditor from "react-froala-wysiwyg";
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/js/plugins/paragraph_format.min.js";
import "froala-editor/js/plugins/code_view.min.js";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/themes/dark.min.css";
import "froala-editor/css/plugins/code_view.min.css";

export default function CreatePost() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({ content: "", categories: [] });
  const [publishError, setPublishError] = useState(null);
  const [categories, setCategories] = useState([
    "Uncategorized",
"JavaScript",
"ReactJs",
"NodeJs",
"Express",
"ThreeJs",
"Coffee",
  ])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newCategory, setNewCategory] = useState("")

  const navigate = useNavigate();

  const handleUploadImage = async () => {
    try {
      if (!file) {
        setImageUploadError("Please select an image");
        return;
      }
      setImageUploadError(null);

      const storage = getStorage(app);

      const fileName = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, fileName);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError("Image upload failed");
          setImageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData({ ...formData, image: downloadURL });
          });
        }
      );
    } catch (error) {
      setImageUploadError("Image upload file");
      setImageUploadProgress(null);
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/post/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      if (res.ok) {
        setPublishError(null);
        navigate(`/post/${data.slug}`);
      }
    } catch (error) {
      setPublishError("Something went wrong");
    }
  };

  const handleAddCategory = async () => {
    if (newCategory.trim()) {
      setCategories([...categories, newCategory.trim()])
      setFormData({ ...formData, categories: [...formData.categories, newCategory.trim()] });
      setNewCategory("")
      setIsModalOpen(false);
    }

    try {
      await fetch('/api/category/addcategory', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newCategory.trim() })
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen pt-14">
      <h1 className="text-center text-3xl my-7 font-semibold">CreatePost</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            onChange={(e) => {
              setFormData({ ...formData, title: e.target.value });
            }}
          />
          <Select
            onChange={(e) => {
              if (e.target.value === "addCategory") {
                setIsModalOpen(true)
              } else {
                setFormData({ ...formData, category: e.target.value})
              }
            }}
          >
            <option value='uncategorized'>Select a category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          <option value="addCategory">Add Category</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
            onClick={handleUploadImage}
            disabled={imageUploadProgress}
          >
            {imageUploadProgress ? (
              <div className="w-16 h-16">
                <CircularProgressbar
                  value={imageUploadProgress}
                  text={`${imageUploadProgress || 0}%`}
                />
              </div>
            ) : (
              "Upload Image"
            )}
          </Button>
        </div>
        {imageUploadError && <Alert color="failure">{imageUploadError}</Alert>}
        <div className="">
          {formData.image && (
            <img
              src={formData.image}
              alt="upload"
              className="w-full h-72 object-cover"
            />
          )}
        </div>
        <FroalaEditor
          tag="textarea"
          config={{
            theme: "dark",
            placeholderText: "Edit Your Content Here!",
            charCounterCount: false,
          }}
          model={formData.content}
          onModelChange={(content) => {
            setFormData({ ...formData, content });
          }}
        />

        <Button type="submit" gradientDuoTone="purpleToPink">
          Publish
        </Button>
      </form>
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header>Add New Category</Modal.Header>
        <Modal.Body>
          <TextInput type="text" placeholder="New Category" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
