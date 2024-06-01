import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsTwitterX } from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-teal-300 via-teal-500 to-teal-800 rounded-lg text-white">
                Programmer{" "}
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3">
            <div className="">
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://portfolio-ivan-duarte.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio
                </Footer.Link>

                <Footer.Link
                  href="https://nomeolvido.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Todo App Project
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div className="">
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/IvanNehuenDuarte?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Footer.Link>

                <Footer.Link
                  href="https://www.linkedin.com/in/iv%C3%A1n-nehuen-duarte/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
          <Footer.Icon
            href="https://www.instagram.com/ivan_nehuen_duarte/"
            icon={BsInstagram}
          />
          <Footer.Icon href="https://x.com/IvanNehuenD" icon={BsTwitterX} />
        </div>
      </div>
    </Footer>
  );
}
