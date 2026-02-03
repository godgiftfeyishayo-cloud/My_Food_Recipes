import { TextAlignJustify } from "lucide-react";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <header className="bg-yellow-400 p-4 shadow-md flex items-center gap-1.5 justify-between sticky top-0">
      <h1 className="text-3xl text-white text-center logo">Food Recipe Hub</h1>
      <TextAlignJustify
        className="text-white md:hidden cursor-pointer"
        onClick={() => setOpenNav(!openNav)}
      />
      <Sidebar isNavOpen={openNav} />

      {/* DESKTOP NAVBAR */}
      <nav className="hidden md:block gap-6 text-white font-medium">
        <ul className="flex gap-4">
          <li>Home</li>
          <li>Support</li>
          <li>Recipes</li>
          <li>Category</li>
        </ul>
        {/* <p href="#" className="hover:text-amber-900 duration-300">
          Home
        </p>
        <p href="#" className="hover:text-amber-900 duration-300">
          About
        </p>
        <p href="#" className="hover:text-amber-900 duration-300">
          Contact
        </p> */}
      </nav>
    </header>
  );
}
