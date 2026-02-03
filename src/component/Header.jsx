import { TextAlignJustify } from "lucide-react";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <header className="bg-yellow-400 p-4 shadow-md flex items-center gap-1.5 justify-between sticky top-0">
      <h1 className="text-3xl text-white text-center logo">Food Recipe Hub</h1>
      <TextAlignJustify
        className="text-white"
        onClick={() => setOpenNav(!openNav)}
      />
      <Sidebar isNavOpen={openNav} />
    </header>
  );
}
