'use client'
import { Group, Panel, Separator } from "react-resizable-panels";
import Conversation from "./ui/Conversation";
import MindMap from "./ui/MindMap";
import Sidebar from "./ui/Sidebar";
import { useState } from "react";
import { Menu } from "./Helpers/icons";

export default function Home() {
  const [isSideBarOpen, setisSideBarOpen] = useState<boolean>(true);

  const toggleSideBar = () => {
    setisSideBarOpen((prev) => !prev)
  }

  return (
    <div className="w-full h-screen shrink-0 relative">
      {!isSideBarOpen && (
        <button
          onClick={toggleSideBar}
          className="absolute top-4 left-4 z-50 p-2 rounded-md bg-gray-200/50 hover:bg-(--color-secondary) border-2 shadow-lg transition cursor-pointer text-2xl text-(--color-text)"
        >
          <Menu />
        </button>
      )}
      <Group className="h-screen w-full flex gap-0 bg-(--color-main)" orientation="horizontal">
        <Panel defaultSize={20} minSize="15%" hidden={!isSideBarOpen}><Sidebar state={isSideBarOpen} func={toggleSideBar} /></Panel>
        <Separator />
        <Panel defaultSize={50} minSize="50%">  <MindMap /></Panel>
        <Separator />
        <Panel defaultSize={30} minSize="20%"><Conversation /></Panel>
      </Group>
    </div>
  );
}
