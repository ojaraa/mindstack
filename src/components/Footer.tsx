import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between sm:fixed bottom-0 left-0 right-0 w-full px-6 py-8">
      <div className="flex flex-col gap-2 text-sm ">
        <p>ABOUT</p>
        <p>&copy; 2026 MindStack. All rights reserved.</p>
      </div>
      <div className="flex items-center gap-6">
        <a href="https://github.com/ojaraa" target="_blank">
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/okereke-favour-230234198/"
          target="_blank"
        >
          <Linkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
