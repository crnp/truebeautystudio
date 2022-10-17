import Link from "next/link";
import Image from "next/image";
import {
  RiInstagramFill,
  RiWhatsappFill,
  RiFacebookFill,
} from "react-icons/ri";
import { IoLogoTiktok } from "react-icons/io5";
import { HiMail } from "react-icons/hi";
import { FiChevronRight } from "react-icons/fi";
import { Popover, Transition } from "@headlessui/react";

import logo from "@/images/true_logo_browser_sidebar.png";
import { useState } from "react";
import type { ReactNode } from "react";

import { cx } from "@/utils/cx";

type ISidebarItemProps = {
  name: string;
  link: string;
  dropdown?: boolean;
  secondary?: boolean;
  children?: ReactNode;
};

type ISidebarItemChildProps = {
  name: string;
  link: string;
};

export const Sidebar = () => {
  return (
    <>
      <div className="p-6 min-h-screen bg-true-gray peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
        <div className="flex flex-col justify-start items-center">
          <Link href="/">
            <Image
              src={logo}
              width={250}
              height={112}
              className="cursor-pointer"
            />
          </Link>
          <div className="flex-col justify-center items-center border-b border-white border-opacity-10 py-4 w-full">
            <Sidebar.Item name="SELAMAT DATANG" link="/" />
            <Sidebar.Item name="TENTANG PERAWATAN RAMBUT" link="#" dropdown>
              <Sidebar.ItemChild name="HAIR TREATMENT CREAMBATHS" link="#" />
              <Sidebar.ItemChild name="KERATIN STRAIGHTENING" link="#" />
              <Sidebar.ItemChild name="HAIRCUTS" link="#" />
              <Sidebar.ItemChild name="COLOURING" link="#" />
              <Sidebar.ItemChild name="HAIR MASK" link="#" />
              <Sidebar.ItemChild name="SMOOTHING+" link="#" />
            </Sidebar.Item>
            <Sidebar.Item
              name="TENTANG PERAWATAN TUBUH DAN KULIT"
              link="#"
              dropdown
            >
              <Sidebar.ItemChild name="BODY WHITENING" link="#" />
              <Sidebar.ItemChild name="BODY SCRUB" link="#" />
              <Sidebar.ItemChild name="WAXING" link="#" />
              <Sidebar.ItemChild name="RATUS TREATMENT" link="#" />
              <Sidebar.ItemChild name="SAUNA" link="#" />
            </Sidebar.Item>
            <Sidebar.Item name="TENTANG PERAWATAN WAJAH" link="#" dropdown>
              <Sidebar.ItemChild name="ACNE TREATMENT" link="#" />
              <Sidebar.ItemChild name="GLOW ENHANCING" link="#" />
              <Sidebar.ItemChild name="SLOW AGING TREATMENT" link="#" />
              <Sidebar.ItemChild name="SNOW BRIGHTENING" link="#" />
              <Sidebar.ItemChild name="MICRODERMABRATION" link="#" />
              <Sidebar.ItemChild name="FACE DETOX" link="#" />
            </Sidebar.Item>
            <Sidebar.Item name="KATALOG PRODUK (COMING SOON)" link="#" />
            <Sidebar.Item name="BOOK NOW ⟶" link="#" />
          </div>
          <div className="flex-col justify-center items-center border-b border-white border-opacity-10 py-4 w-full">
            <Sidebar.Item name="FILOSOFI TRUE." link="#" secondary />
            <Sidebar.Item name="GALERI & BERITA" link="#" secondary />
            <Sidebar.Item name="BEAUTY BAR" link="#" secondary />
            <Sidebar.Item name="LOKASI" link="#" secondary />
            <Sidebar.Item name="HUBUNGI KAMI" link="#" secondary />
            <Sidebar.Item name="KRITIK DAN SARAN" link="#" secondary />
            <Sidebar.Item name="BEAUTY BLOGS" link="#" secondary />
            <Sidebar.Item name="KARIR" link="#" secondary />
            <Sidebar.Item name="SUBSCRIBE" link="#" secondary />
          </div>
          <div className="flex wrap gap-2 justify-around items-center p-4 w-full">
            <Link href="https://whatsapp.com">
              <RiWhatsappFill className="text-3xl text-gray-300 cursor-pointer hover:text-white transition-colors duration-300 ease-in-out" />
            </Link>
            <Link href="https://instagram.com">
              <RiInstagramFill className="text-3xl text-gray-300 cursor-pointer hover:text-white transition-colors duration-300 ease-in-out" />
            </Link>
            <Link href="https://tiktok.com">
              <IoLogoTiktok className="text-3xl text-gray-300 cursor-pointer hover:text-white transition-colors duration-300 ease-in-out" />
            </Link>
            <Link href="https://facebook.com">
              <RiFacebookFill className="text-3xl text-gray-300 cursor-pointer hover:text-white transition-colors duration-300 ease-in-out" />
            </Link>
            <Link href="mailto:example@mail.com">
              <HiMail className="text-3xl text-gray-300 cursor-pointer hover:text-white transition-colors duration-300 ease-in-out" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const Item = ({
  dropdown = false,
  secondary = false,
  ...props
}: ISidebarItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  if (dropdown) {
    return (
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button className="focus:outline-none w-full">
              <div
                className={cx(
                  "z-10 flex justify-between items-center my-2 px-3 py-2 rounded-md group cursor-pointer hover:shadow-lg transition-colors duration-300 ease-in-out",
                  open
                    ? "bg-true-pink hover:bg-true-lightpink"
                    : "hover:bg-true-darkpink"
                )}
              >
                <h3
                  className={cx(
                    "text-base text-start text-true-pink group-hover:text-white font-semibold uppercase",
                    secondary && "text-true-dark-pink",
                    open && "text-white"
                  )}
                >
                  {props.name}
                </h3>
                <FiChevronRight
                  className={cx(
                    "text-[3em] text-true-pink group-hover:text-white",
                    secondary && "text-true-dark-pink",
                    open &&
                      "text-white rotate-90 transform transition-transform ease-linear duration-75"
                  )}
                />
              </div>
            </Popover.Button>
            <Transition
              enter="transition duration-200 ease-out"
              enterFrom="-translate-y-5 opacity-0"
              enterTo="translate-y-0 opacity-100"
              leave="transition duration-150 ease-out"
              leaveFrom="translate-y-0 opacity-100"
              leaveTo="-translate-y-5 opacity-0"
            >
              <Popover.Panel className="z-0 flex mb-2 ml-3 border-l border-true-pink text-white justify-start items-center gap-4 px-3 p-2">
                <ul>{props.children}</ul>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  } else {
    return (
      <Link href={props.link}>
        <div className="flex justify-between items-center my-2 px-3 py-2 hover:bg-true-darkpink rounded-md group cursor-pointer hover:shadow-lg transition-colors duration-300 ease-in-out">
          <h3
            className={cx(
              "text-base text-start text-true-pink group-hover:text-white font-semibold uppercase",
              secondary && "text-true-lighterpink"
            )}
          >
            {props.name}
          </h3>
        </div>
      </Link>
    );
  }
};
const ItemChild = (props: ISidebarItemChildProps) => (
  <Link href={props.link}>
    <li className="py-1 cursor-pointer font-semibold border-b border-white border-opacity-20 hover:text-true-pink transition-colors duration-300 ease-in-out">
      {props.name}
    </li>
  </Link>
);
Sidebar.Item = Item;
Sidebar.ItemChild = ItemChild;
