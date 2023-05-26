"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";

function SiCashapp(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      role="img"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <title />
      <path d="M23.59 3.47A5.1 5.1 0 0 0 20.54.42C19.23 0 18.04 0 15.62 0H8.36c-2.4 0-3.61 0-4.9.4A5.1 5.1 0 0 0 .41 3.46C0 4.76 0 5.96 0 8.36v7.27c0 2.41 0 3.6.4 4.9a5.1 5.1 0 0 0 3.05 3.05c1.3.41 2.5.41 4.9.41h7.28c2.41 0 3.61 0 4.9-.4a5.1 5.1 0 0 0 3.06-3.06c.41-1.3.41-2.5.41-4.9V8.38c0-2.41 0-3.61-.41-4.91zM17.42 8.1l-.93.93a.5.5 0 0 1-.67.01 5 5 0 0 0-3.22-1.18c-.97 0-1.94.32-1.94 1.21 0 .9 1.04 1.2 2.24 1.65 2.1.7 3.84 1.58 3.84 3.64 0 2.24-1.74 3.78-4.58 3.95l-.26 1.2a.49.49 0 0 1-.48.39H9.63l-.09-.01a.5.5 0 0 1-.38-.59l.28-1.27a6.54 6.54 0 0 1-2.88-1.57v-.01a.48.48 0 0 1 0-.68l1-.97a.49.49 0 0 1 .67 0c.91.86 2.13 1.34 3.39 1.32 1.3 0 2.17-.55 2.17-1.42 0-.87-.88-1.1-2.54-1.72-1.76-.63-3.43-1.52-3.43-3.6 0-2.42 2.01-3.6 4.39-3.71l.25-1.23a.48.48 0 0 1 .48-.38h1.78l.1.01c.26.06.43.31.37.57l-.27 1.37c.9.3 1.75.77 2.48 1.39l.02.02c.19.2.19.5 0 .68z" />
    </svg>
  );
}

function FaHandshake(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 640 512"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z" />
    </svg>
  );
}

function AiOutlineClose(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col">
      <nav className="h-24 bg-[#1A1A1A] text-white flex items-center justify-between px-32">
        <div className="flex items-center gap-12">
          <h1 className="text-3xl hover:cursor-pointer">BuyCar</h1>
          <p className="hover:cursor-pointer underline-offset-8 underline">
            Strona główna
          </p>
          <p className="hover:cursor-pointer">Kolekcja samochodów</p>
          <p className="hover:cursor-pointer">Wiadomości</p>
        </div>
        <div className="flex">
          <button className="h-12 w-32 bg-[#128C7E] rounded-2xl">
            +48 111 111 111
          </button>
        </div>
      </nav>
      <div className="h-[35rem] max-md:h-[38rem] justify-center bg-gradient-to-br from-[#0072ED] to-[#9608C8] px-32 text-white flex-col items-center flex">
        <h2 className="text-3xl my-20 font-medium text-center">
          Dlaczego warto kupić samochód w BuyCar?
        </h2>
        <div className="flex justify-between w-full max-md:flex-col">
          <div className="flex-col flex items-center">
            <SiCashapp font-size="32"></SiCashapp>
            <p className="text-xl max-w-md text-center mt-4">
              Szeroki wybór wysokiej jakości samochodów w przystępnych cenach
            </p>
          </div>
          <div className="flex-col flex items-center max-md:mt-8">
            <FaHandshake font-size="32"></FaHandshake>
            <p className="text-xl max-w-md text-center mt-4">
              Fachowa pomoc w wyborze samochodu dopasowanego do Twoich potrzeb i
              budżetu
            </p>
          </div>
        </div>
      </div>
      <section className="h-[38rem] px-32 justify-center items-center max-md:flex-col">
        <div className="pt-20 flex justify-between items-center">
          <h2 className="text-3xl">Najnowsze samochody</h2>
          <p className="text-[#0072ED] hover:cursor-pointer flex-nowrap">Sprawdź kolekcję samochodów</p>
        </div>
        <div className="flex-col flex mt-6">
        <button className="flex-col mb-2 w-96 h-16 focus:bg-[#0072ED] focus:text-white ease-in-out duration-200 text-lg flex justify-center items-center">Toyota Corolla Cross Hybrid GR Sport</button>
        <button className="flex-col mb-2 w-96 h-16 focus:bg-[#0072ED] focus:text-white ease-in-out duration-200 text-lg flex justify-center items-center">Suzuki Grand Vitara</button>
        <button className="flex-col mb-2 w-96 h-16 focus:bg-[#0072ED] focus:text-white ease-in-out duration-200 text-lg flex justify-center items-center">Suzuki S-Presso</button>
        <button className="flex-col mb-2 w-96 h-16 focus:bg-[#0072ED] focus:text-white ease-in-out duration-200 text-lg flex justify-center items-center">Subaru WRX</button>
        <button className="flex-col mb-2 w-96 h-16 focus:bg-[#0072ED] focus:text-white ease-in-out duration-200 text-lg flex justify-center items-center">Chery Omoda 5</button>
        </div>
      </section>
    </main>
  );
}
