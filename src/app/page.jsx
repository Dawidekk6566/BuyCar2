"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import AOS from "aos";
import "aos/dist/aos.css";

import Suzuki from "public/suzuki.png";
import Toyota from "public/toyota.png";
import Mclaren from "public/mclaren.png";

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

function AiOutlineMenu(props) {
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
      <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
    </svg>
  );
}

function AiOutlineWhatsApp(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      t={1569683925316}
      viewBox="0 0 1024 1024"
      pId={14972}
      height="1em"
      width="1em"
      {...props}
    >
      <defs />
      <path
        d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z"
        pId={14973}
      />
      <path
        d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z"
        pId={14974}
      />
    </svg>
  );
}

function SiTiktok(props) {
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
      <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function FaInstagram(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 448 512"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  );
}

function AiFillFacebook(props) {
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
      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" />
    </svg>
  );
}

export default function Home() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const lenis = new Lenis();

    const handleScroll = (e) => {
      console.log(e);
    };

    lenis.on("scroll", handleScroll);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.off("scroll", handleScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

  const ref = useRef(null);
  const doClick = () => ref.current?.scrollIntoView({ behavior: "smooth" });

  const ref2 = useRef(null);
  const doClick2 = () => ref2.current?.scrollIntoView({ behavior: "smooth" });

  const ref3 = useRef(null);
  const doClick3 = () => ref3.current?.scrollIntoView({ behavior: "smooth" });

  const mainRef = useRef(null);
  const mainClick = () =>
    mainRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="flex flex-col overflow-hidden">
      <nav
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-delay="10"
        data-aos-duration="500"
        data-aos-easing="linear"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        className="h-28 bg-[#1A1A1A] w-full text-white flex items-center justify-center px-32 sticky"
      >
        <div className="flex items-center gap-12">
          <div></div>
          <h1 className="text-3xl hover:cursor-pointer">BuyCar</h1>
          <ul>
            <li className="gap-12 flex items-center max-lg:hidden lg-flex">
              <button onClick={mainClick} className="hover:cursor-pointer">
                Strona główna
              </button>
              <button onClick={doClick} className="hover:cursor-pointer">
                Dlaczego my?
              </button>
              <button onClick={doClick2} className="hover:cursor-pointer">
                Opinie klientów
              </button>
              <button onClick={doClick3} className="hover:cursor-pointer">
                Kontakt
              </button>
            </li>
            <div onClick={handleNav} className="block lg:hidden">
              {!nav ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </div>
          </ul>
          <div
            className={
              !nav
                ? "fixed left-0 top-0 w-[55%] border-r border-r-gray-800 h-full bg-[#131111] ease-in-out duration-200"
                : "fixed left-[-100%]"
            }
          >
            <ul className="p-14">
              <h1 className="text-2xl font-semibold flex justify-center">
                BuyCar2
              </h1>
              <p className="pt-4 border-b border-gray-400">
                Kolekcja samochodów
              </p>
              <p className="pt-4 border-b border-gray-400">Wiadomości</p>
              <p className="pt-4 border-b border-gray-400">Kontakt</p>
              <p className="pt-4 border-b border-gray-400">Opinie</p>
              <p className="pt-4">O nas</p>
            </ul>
          </div>
        </div>
      </nav>
      <div
        ref={mainRef}
        data-aos="fade-down"
        data-aos-offset="150"
        data-aos-delay="10"
        data-aos-duration="500"
        data-aos-easing="linear"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        className="about-us h-full max-md:h-full bg-center bg-cover px-3 flex-col justify-center items-center flex border-b-8 border-sky-100"
      >
        <div className="flex justify-center items-center text-white rounded-xl mt-20 h-24 w-48 bg-black/90">
          <h1 className="text-3xl text-center font-semibold">
            Czym jest BuyCar?
          </h1>
        </div>
        <div className="scroll my-12 p-12 max-h-72 w-auto bg-black/90 rounded-xl flex items-center">
          <span className="text-center max-md:text-sm max-lg max-w-lg leading-6 text-white">
            BuyCar to renomowana firma zajmująca się sprzedażą samochodów. Od
            momentu swojego powstania firma zyskała reputację solidnego i
            zaufanego dostawcy pojazdów na rynku. BuyCar specjalizuje się w
            oferowaniu różnorodnych marek i modeli samochodów, zarówno nowych,
            jak i używanych.
          </span>
        </div>
      </div>
      <div
        ref={ref}
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="10"
        data-aos-duration="500"
        data-aos-easing="linear"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        className="div1 why-us h-full max-md:h-full bg-center bg-cover px-32 text-white flex-col justify-center items-center flex"
      >
        <h2 className="text-3xl mt-16 font-medium text-center">
          Dlaczego warto kupić samochód w BuyCar?
        </h2>
        <div className="flex justify-evenly w-full max-md:flex-col items-center my-20 gap-8">
          <div className="flex-col max-md:w-72 flex justify-center items-center p-8 h-48 bg-black/80 rounded-xl">
            <SiCashapp font-size="32"></SiCashapp>
            <p className="text-xl max-lg:text-base text-center mt-4">
              Szeroki wybór wysokiej jakości samochodów w przystępnych cenach
            </p>
          </div>
          <div className="flex-col max-sm:w-72 flex justify-center items-center p-8 h-48 bg-black/80 rounded-xl">
            <FaHandshake font-size="32"></FaHandshake>
            <p className="text-xl max-lg:text-base text-center mt-4">
              Fachowa pomoc w wyborze samochodu dopasowanego do Twoich potrzeb i
              budżetu
            </p>
          </div>
        </div>
      </div>
      <section
        ref={ref2}
        data-aos="fade-down"
        data-aos-offset="100"
        data-aos-delay="100"
        data-aos-duration="500"
        data-aos-easing="linear"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        className=" px-16 flex justify-center h-full mb-20"
      >
        <div className="mt-20">
          <h2 className="text-4xl text-center">Opinia klientów</h2>
          <div className="flex max-md:items-center gap-4 mt-4 max-xl:flex-col">
            <div className="w-96 max-md:w-72 max-md:h-52 h-48 bg-[#333333] p-6 rounded-xl flex flex-col justify-between">
              <span className="text-sm text-white">
                Jestem bardzo zadowolony z usług BuyCar. Ich zespół ekspertów
                pomógł mi wybrać samochód, który odpowiada moim potrzebom i
                budżetowi. Samochód, który kupiłem, jest również wysokiej
                jakości. Dziękuję BuyCar!
              </span>
              <p className="text-white font-semibold">Wulan Sari</p>
            </div>
            <div className="w-96 h-48 max-md:w-72 max-md:h-52 bg-[#333333] p-6 rounded-xl flex flex-col justify-between">
              <span className="text-sm text-white">
                BuyCar udowodnił, że kupowanie samochodu przez Internet może być
                bardzo łatwe i przyjemne. Jestem bardzo zadowolony z zakupionego
                samochodu i usług świadczonych przez zespół BuyCar.
              </span>
              <p className="text-white font-semibold">Agus Santoso</p>
            </div>
            <div className="w-96 h-48 max-md:w-72 max-md:h-52 bg-[#333333] p-6 rounded-xl flex flex-col justify-between">
              <span className="text-sm text-white">
                BuyCar zapewnia wyjątkową obsługę. Byli bardzo responsywni i
                pomagali mi na każdym etapie zakupu. Dokonując z nimi transakcji
                czuję się bardzo bezpiecznie i komfortowo.
              </span>
              <p className="text-white font-semibold">Sri Hartini</p>
            </div>
          </div>
          <div className="flex gap-4 mt-4 max-xl:flex-col">
            <div className="w-96 h-48 max-md:w-72 max-md:h-52 bg-[#333333] p-6 rounded-xl flex flex-col justify-between">
              <span className="text-sm text-white">
                Jestem bardzo zadowolony z samochodu, który kupiłem od BuyCar.
                Samochód jest w doskonałym stanie i bardzo przystępnej cenie.
                Zdecydowanie polecę BuyCar moim znajomym.
              </span>
              <p className="text-white font-semibold">Budi Cahyono</p>
            </div>
            <div className="w-96 h-48 max-md:w-72 max-md:h-52 bg-[#333333] p-6 rounded-xl flex flex-col justify-between">
              <span className="text-sm text-white">
                Kupiłem samochód od BuyCar i jestem bardzo zadowolony z zakupów.
                Zakupiony przeze mnie samochód był w bardzo dobrym stanie i
                bardzo przystępnej cenie. Dziękuję BuyCar!
              </span>
              <p className="text-white font-semibold">Iwan Pranata</p>
            </div>
            <div className="w-96 h-48 max-md:w-72 max-md:h-52 bg-[#333333] p-6 rounded-xl flex flex-col justify-between">
              <span className="text-sm text-white">
                Jestem bardzo zadowolony z zakupu samochodu w BuyCar. Zapewniają
                wybór wysokiej jakości i niedrogich samochodów, a także
                doskonałą obsługę. Gorąco polecam BuyCar wszystkim, którzy chcą
                kupić samochód.
              </span>
              <p className="text-white font-semibold">Ahmad Faris</p>
            </div>
          </div>
        </div>
      </section>
      <section
        ref={ref3}
        className="mclaren justify-center h-56 max-lg:h-72 max-sm:h-96 flex items-center bg-center bg-cover"
      >
        <div className="my-20 mx-28 flex w-full justify-between max-lg:flex-col items-center">
          <h3 className="text-white text-xl max-md:text-xl m-2 max-lg:text-center">
            Kup teraz swój wymarzony samochód w BuyCar i ciesz się łatwym i
            przyjemnym zakupem samochodu! Na co czekasz?
          </h3>
          <button className="w-60 h-16 bg-[#0072ED] text-white rounded-xl hover:cursor-pointer hover:bg-[#2786eb] ease-in-out duration-200">
            Skontaktuj się
          </button>
        </div>
      </section>
      <footer className="h-full w-full bg-[#1A1A1A] text-white flex justify-center">
        <div className="flex items-center max-md:flex-col max-md:mb-8">
          <div className="mx-28 mt-6 mb-8">
            <p>© 2023 BuyCar 2</p>
          </div>
          <div className="flex mx-28 gap-8">
            <AiOutlineWhatsApp className="text-2xl hover:cursor-pointer"></AiOutlineWhatsApp>
            <SiTiktok className="text-2xl hover:cursor-pointer"></SiTiktok>
            <FaInstagram className="text-2xl hover:cursor-pointer"></FaInstagram>
            <AiFillFacebook className="text-2xl hover:cursor-pointer"></AiFillFacebook>
          </div>
        </div>
      </footer>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    </main>
  );
}
