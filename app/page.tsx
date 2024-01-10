"use client";
import { AllCourt } from "@/component/AllCourt";
import { Balls } from "@/component/Balls";
import { DottedLineDrawing } from "@/component/DottedLineDrawing";
import { HalfCourt } from "@/component/HalfCourt";
import { Header } from "@/component/Header";
import { Player } from "@/component/Player";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import Draggable from "react-draggable";

// const DottedLineDrawing = dynamic(
//   () => import("../component/DottedLineDrawing"),
//   {
//     ssr: false,
//   }
// );

export default function Home() {
  const [isHalfCourt, setIsHalfCourt] = useState(true);

  return (
    <main className="flex min-h-screen flex-col items-center px-4 lg:px-24 pt-4 lg:gap-4">
      <Header setIsHalfCourt={setIsHalfCourt} />
      <div className="p-4">{isHalfCourt ? <HalfCourt /> : <AllCourt />}</div>
      <div className="flex justify-between lg:w-full gap-2 lg:gap-4 flex-col ">
        <div className="box-border lg:p-4 lg:w-1/3 flex-wrap">
          <Player gkColor="green" cpColor="red"></Player>
        </div>
        <div className="box-border lg:p-4 lg:w-1/3 flex-wrap">
          <Player gkColor="gray" cpColor="blue"></Player>
        </div>
        <div className="box-border lg:p-4 lg:w-1/3">
          <Balls />
        </div>
        <DottedLineDrawing />
      </div>
    </main>
  );
}
