"use client";
import { Court } from "@/component/Court";
import { Header } from "@/component/Header";
import { Player } from "@/component/Player";
import Image from "next/image";
import Draggable from "react-draggable";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24 pt-4 gap-4">
      <Header />
      <div className="w-full p-4 bg-blue-400">
        <Court />
      </div>
      <div className="flex justify-between w-full gap-4">
        <div className="box-border p-4 bg-blue-400 w-1/3">
          <Player gkColor="green" cpColor="red"></Player>
        </div>
        <div className="box-border p-4 bg-blue-400 w-1/3">
          <Player gkColor="gray" cpColor="blue"></Player>
        </div>
        <div className="box-border p-4 bg-blue-400 w-1/3">
          <Draggable defaultPosition={{ x: 0, y: 0 }}>
            <Image
              src="/ball.png"
              alt="ボールの画像"
              width={60}
              height={60}
              priority
              className="cursor-pointer"
            />
          </Draggable>
        </div>
      </div>
    </main>
  );
}
