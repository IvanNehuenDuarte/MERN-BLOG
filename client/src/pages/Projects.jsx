import React from "react";
import CallToAction from "../components/CallToAction.jsx";

export default function Projects() {
  return (
    <div className="mt-14 min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="text-md text-gray-500 dark:text-gray-200">
        Build fun and engaging projects while learning different languages and
        technologies
      </p>
      <CallToAction />
    </div>
  );
}
