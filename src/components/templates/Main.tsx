import { ReactNode, useState, Fragment } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { HiMail } from "react-icons/hi";
import { Dialog, Transition } from "@headlessui/react";

import { AppConfig } from "@/utils/AppConfig";
import { Sidebar } from "@/components/layouts/Sidebar/Sidebar";

import logo from "@/images/true_logo_onpink.png";
import Image from "next/image";
import Link from "next/link";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

export const Main = (props: IMainProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row text-gray-100 antialiased">
      {props.meta}
      <div className="lg:hidden">
        <div className="flex justify-between items-center px-8 py-4">
          <Image src={logo} width={60} height={55} />
          <GiHamburgerMenu
            className="text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <Transition show={isOpen} as={Fragment}>
          <Dialog
            unmount={false}
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="fixed z-40 inset-0 overflow-y-auto"
          >
            <div className="flex w-[34vw]">
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-in duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-30"
                entered="opacity-30"
                leave="transition-opacity ease-out duration-300"
                leaveFrom="opacity-30"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="z-20 fixed inset-0 bg-black bg-opacity-30" />
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
      <aside className="lg:basis-1/6 overflow-y-auto custom-scroll h-screen hidden lg:block">
        <Sidebar />
      </aside>
      <main className="flex-col lg:basis-5/6 overflow-y-auto overflow-x-hidden custom-scroll h-screen px-4 md:py-4 md:px-8 lg:px-16 lg:py-12">
        {props.children}
        <footer className="flex flex-col gap-8 justify-center items-center mt-8 text-center text-sm">
          <div className="flex gap-4 group justify-end">
            <Link href="https://instagram.com">
              <RiInstagramFill className="text-4xl text-gray-300 cursor-pointer  hover:text-white transition-colors duration-150 ease-in-out" />
            </Link>
            <Link href="https://whatsapp.com">
              <RiWhatsappFill className="text-4xl text-gray-300 cursor-pointer opacity-90 hover:text-white transition-colors duration-150 ease-in-out" />
            </Link>
            <Link href="mailto:example@mail.com">
              <HiMail className="text-4xl text-gray-300 cursor-pointer opacity-90 hover:text-white transition-color duration-150 ease-in-out" />
            </Link>
          </div>
          © Copyright {new Date().getFullYear()} {AppConfig.title}.
        </footer>
      </main>
    </div>
  );
};
