import React from "react";

export default function About() {
  return (
    <div className="mt-14 min-h-screen flex items-start justify-center">
      <div className="max-w-2xl mx-auto p-3">
        <div className="">
          <h1 className="text-3xl font-semibold text-center my-7">
            About Code Planet
          </h1>
          <div className="text-md text-gray-500 dark:text-gray-300 flex flex-col gap-6 tracking-widest">
            <p className="">
              ¡Hola! Soy Iván Duarte, un entusiasta de la programación en
              constante aprendizaje. Este blog es mi espacio para compartir todo
              lo que voy descubriendo en el fascinante mundo de la programación.
            </p>
            <h2 className="text-2xl font-semibold text-center my-7 text-gray-800 dark:text-gray-200">
              ¿Qué Encontrarás Aquí?
            </h2>
            Este blog es un diario de mi aprendizaje, donde comparto: <br />{" "}
            <p className="">
              <b className="text-gray-800 dark:text-gray-100">
                • Tutoriales y Guías:
              </b>{" "}
              Paso a paso de los proyectos en los que estoy trabajando.
              <br />
              <b className="text-gray-800 dark:text-gray-100">
                • Consejos y Trucos:
              </b>{" "}
              Pequeñas joyas que he descubierto y que pueden hacer la vida más
              fácil a otros programadores.
              <br />
              <b className="text-gray-800 dark:text-gray-100">
                • Reflexiones y Experiencias:
              </b>{" "}
              Mis pensamientos sobre el proceso de aprendizaje, los obstáculos
              que he enfrentado y cómo los he superado.
            </p>
            <h2 className="text-2xl font-semibold text-center my-7 text-gray-800 dark:text-gray-200">
              ¿Por Qué Lo Hago?
            </h2>
            <p className="">
              Creo firmemente en el poder del aprendizaje compartido. Mi
              objetivo es crear una comunidad donde todos podamos aprender unos
              de otros y crecer juntos. No soy un experto, pero estoy
              comprometido a mejorar cada día, y espero que mis experiencias
              puedan ser útiles para todos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
