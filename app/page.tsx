"use client";
import { AllCourt } from "@/component/AllCourt";
import { Balls } from "@/component/Balls";
import { HalfCourt } from "@/component/HalfCourt";
import { Header } from "@/component/Header";
import { Player } from "@/component/Player";
import Image from "next/image";
import { useState } from "react";
import Draggable from "react-draggable";

export default function Home() {
  const [isHalfCourt, setIsHalfCourt] = useState(true);

  return (
    <main className="flex min-h-screen flex-col items-center px-24 pt-4 gap-4">
      <Header setIsHalfCourt={setIsHalfCourt} />
      <div className="w-full p-4 bg-blue-400">
        {isHalfCourt ? <HalfCourt /> : <AllCourt />}
      </div>
      <div className="flex justify-between w-full gap-4">
        <div className="box-border p-4 bg-blue-400 w-1/3 flex-wrap">
          <Player gkColor="green" cpColor="red"></Player>
        </div>
        <div className="box-border p-4 bg-blue-400 w-1/3 flex-wrap">
          <Player gkColor="gray" cpColor="blue"></Player>
        </div>
        <div className="box-border p-4 bg-blue-400 w-1/3">
          <Balls />
        </div>
      </div>
    </main>
  );
}
