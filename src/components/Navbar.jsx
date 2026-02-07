import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "About", href: "#about" },
    { id: 3, name: "Projects", href: "#projects" },
    { id: 4, name: "Skills", href: "#skills" },
    { id: 5, name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full bg-darker/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold gradient-text">
          Villadarez Portfolio
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setNav(!nav)}
          className="md:hidden cursor-pointer z-50"
        >
          {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-full h-full bg-darker/95 backdrop-blur-md flex flex-col justify-center items-center transition-all duration-300"
              : "fixed left-[-100%]"
          }
        >
          <ul className="flex flex-col gap-8 text-2xl">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setNav(false)}
                  className="hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
