import { useState, Fragment, useEffect } from "react";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
import {
  RiInstagramFill,
  RiWhatsappFill,
  RiFacebookFill,
  RiCloseFill,
} from "react-icons/ri";
import { IoLogoTiktok } from "react-icons/io5";
import { HiMail } from "react-icons/hi";
import { Dialog, Transition } from "@headlessui/react";

import { AppConfig } from "@/utils/AppConfig";
import { Sidebar } from "@/components/layouts/Sidebar/Sidebar";

import logo from "@/images/true_logo_browser_sidebar.png";

import { cx } from "@/utils/cx";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

export const Main = (props: IMainProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const [announcement, setAnnouncement] = useState(true);

  const closeAnnouncement = () => {
    setAnnouncement(false);
  };

  return (
    <div className="flex flex-col lg:flex-row text-gray-100 antialiased overflow-y-hidden h-screen">
      {props.meta}
      <div
        className={cx(
          announcement
            ? "flex text-center shadow-lg fixed top-0 left-0 w-screen z-10"
            : "hidden"
        )}
      >
        <Link href="#">
          <span className="bg-true-lightpink basis-11/12 text-white font-serif text-xs py-2">
            Setiap Treatment anda berkontribusi untuk lingkungan. <br />
            <Link href="#">
              <span className="mr-1 text-true-gray cursor-pointer hover:text-true-lighterpink inline-block">
                Jl Ashofa Raya No 56, Kebon Jeruk, Jakarta Barat
              </span>
            </Link>
            <span className="inline-block">
              {" | "}
              Buka SETIAP HARI dari pukul 10-21 WIB{" | "}
            </span>
            <span className="inline-block">(+62) 8-9999-43-888{" | "}</span>
            <span className="ml-1 text-true-gray cursor-pointer hover:text-true-lighterpink inline-block">
              Klik disini untuk buat appointment perawatan
            </span>
          </span>
        </Link>
        <div
          className="flex bg-true-pink basis-1/12 text-2xl items-center justify-center py-2 hover:bg-true-darkpink transition-colors duration-300 ease-in-out"
          onClick={closeAnnouncement}
        >
          <RiCloseFill />
        </div>
      </div>
      <div className="sticky lg:hidden">
        <div
          className={cx(
            "flex justify-between items-center px-8 py-2",
            announcement && "pt-28 sm:pt-20"
          )}
        >
          <Image src={logo} width={111.5} height={49.94} />
          <GiHamburgerMenu
            className="text-3xl"
            onClick={() => {
              setIsOpen(true);
            }}
          />
        </div>
        <Transition show={isOpen} as={Fragment}>
          <Dialog
            unmount={false}
            onClose={() => {
              setIsOpen(false);
            }}
            className="fixed z-40 inset-0 overflow-y-auto"
          >
            <div className="flex w-3/5 md:w-5/12">
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-in duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-70"
                leave="transition-opacity ease-out duration-300"
                leaveFrom="opacity-70"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="z-20 fixed inset-0 bg-black bg-opacity-50" />
              </Transition.Child>
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <div
                  className={`z-50 overflow-hidden
                         shadow-xl`}
                >
                  <aside className="overflow-y-auto lg:hidden">
                    <Sidebar />
                  </aside>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
      <aside
        className={cx(
          "lg:basis-1/5 overflow-y-auto custom-scroll h-screen hidden lg:block",
          announcement && "pt-12"
        )}
      >
        <Sidebar />
      </aside>
      <main
        className={cx(
          "flex-col lg:basis-4/5 lg:overflow-y-auto overflow-x-hidden lg:custom-scroll h-screen px-4 py-4 pb-8 md:px-8 lg:px-16",
          announcement ? "lg:pt-20" : "lg:pt-12"
        )}
      >
        {props.children}
        <footer className="flex flex-col justify-center items-center mt-8 text-center text-sm">
          <div className="flex gap-4 mb-6 group justify-end">
            <Link href="https://whatsapp.com">
              <RiWhatsappFill className="text-4xl text-gray-300 cursor-pointer opacity-90 hover:text-white transition-colors duration-150 ease-in-out" />
            </Link>
            <Link href="https://instagram.com">
              <RiInstagramFill className="text-4xl text-gray-300 cursor-pointer  hover:text-white transition-colors duration-150 ease-in-out" />
            </Link>
            <Link href="https://tiktok.com">
              <IoLogoTiktok className="text-4xl text-gray-300 cursor-pointer  hover:text-white transition-colors duration-150 ease-in-out" />
            </Link>
            <Link href="https://facebook.com">
              <RiFacebookFill className="text-4xl text-gray-300 cursor-pointer  hover:text-white transition-colors duration-150 ease-in-out" />
            </Link>
            <Link href="mailto:example@mail.com">
              <HiMail className="text-4xl text-gray-300 cursor-pointer opacity-90 hover:text-white transition-colors duration-150 ease-in-out" />
            </Link>
          </div>
          <span>
            © {new Date().getFullYear()} {AppConfig.title}, All Rights Reserved.
          </span>
          <span className="italic">
            Website created by <b>Calvin</b> and <b>Noosa Technologies</b>
          </span>
        </footer>
      </main>
    </div>
  );
};
