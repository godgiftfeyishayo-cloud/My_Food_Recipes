import React from "react";

export default function Sidebar({ isNavOpen }) {
  return (
    <aside
      className={`fixed top-0 left-0 bg-amber-500 w-1/2 bottom-0 duration-700 ${isNavOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      Sidebar
    </aside>
  );
}
