import { TextAlignJustify } from "lucide-react";
import Sidebar from "./Sidebar";

export default function Header() {
  return (
    <header className="bg-yellow-400 p-4 shadow-md flex items-center gap-1.5 justify-between sticky top-0">
      <h1 className="text-3xl text-white text-center logo">Food Recipe Hub</h1>
      <TextAlignJustify className="text-white" />
      <Sidebar />
    </header>
  );
}
