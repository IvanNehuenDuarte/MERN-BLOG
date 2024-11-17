import { Button } from "flowbite-react";
import React from "react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">¿Quieres saber más sobre programación?</h2>

        <p className="text-gray-500 my-2">
          ¡Participe y mire los posteos de la comunidad!
        </p>

        <a
          href="/sign-in"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button
            gradientDuoTone="tealToLime"
            className="rounded-tl-xl rounded-bl-none w-full"
          >
            Ingresar
          </Button>
        </a>
      </div>

      <div className="p-7 flex-1">
        <img src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto" />
      </div>
    </div>
  );
}
