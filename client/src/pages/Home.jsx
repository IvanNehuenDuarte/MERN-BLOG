import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction.jsx";
import PostCard from "../components/PostCard.jsx";

// URL
const API_URL = import.meta.env.VITE_BACK_URL.replace(/\/$/, "");

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`${API_URL}/api/post/getposts`);
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="mt-14">
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold lg:text-6xl">Bienvenido A Mi Blog</h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Aquí encontrará diversos artículos y tutoriales sobre temas como
          desarrollo web, ingeniería de software y lenguajes de programación.
        </p>
        <Link
          to="/search"
          className="text-sm sm:text-sm text-teal-500 font-bold hover:underline"
        >
          Ver Todos los Posts
        </Link>
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">
              Post Recientes
            </h2>
            <div className="flex flex-wrap gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              Ver Todos Los Posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
