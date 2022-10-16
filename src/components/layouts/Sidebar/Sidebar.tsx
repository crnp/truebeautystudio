import Link from "next/link";
import Image from "next/image";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { FiChevronRight } from "react-icons/fi";
import { Popover, Transition } from "@headlessui/react";

import logo from "@/images/true_logo.png";
import { ReactNode, useState } from "react";

import { cx } from "@/utils/cx";

type ISidebarItemProps = {
  name: string;
  link: string;
  dropdown?: boolean;
  children?: ReactNode;
};

type ISidebarItemChildProps = {
  name: string;
  link: string;
};

export const Sidebar = () => {
  return (
    <>
      <div className="p-6 min-h-screen bg-true-pink peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
        <div className="flex flex-col justify-start items-center">
          <Link href="/">
            <Image
              src={logo}
              width={6203}
              height={2557}
              className="cursor-pointer"
            />
          </Link>
          <div className="my-4 border-b border-true-gray pb-4">
            <Sidebar.Item name="Home" link="/" />
            <Sidebar.Item name="Facial Treatments" link="/facial/" dropdown>
              <Sidebar.ItemChild name="UV" link="#" />
              <Sidebar.ItemChild name="Face Mask" link="#" />
            </Sidebar.Item>
            <Sidebar.Item name="Nail Treatments" link="/nails/" dropdown>
              <Sidebar.ItemChild name="Manicure" link="#" />
            </Sidebar.Item>
            <Sidebar.Item name="Hair Treatments" link="/hair/" />
            <Sidebar.Item name="Special Deals" link="/deals/" />
            <Sidebar.Item name="Special Deals" link="/deals/" />
            <Sidebar.Item name="Special Deals" link="/deals/" />
            <Sidebar.Item name="Special Deals" link="/deals/" />
            <Sidebar.Item name="Special Deals" link="/deals/" />
            <Sidebar.Item name="Special Deals" link="/deals/" />
            <Sidebar.Item name="Special Deals" link="/deals/" />
            <Sidebar.Item name="Special Deals" link="/deals/" />
            <Sidebar.Item name="Special Deals" link="/deals/" />
            <Sidebar.Item name="Special Deals" link="/deals/" />
            <Sidebar.Item name="Special Deals" link="/deals/" />
            <Sidebar.Item name="Special Deals" link="/deals/" />
            <Sidebar.Item name="Special Deals" link="/deals/" />
            <Sidebar.Item name="Special Deals" link="/deals/" />
            <Sidebar.Item name="Special Deals" link="/deals/" />
            <Sidebar.Item name="Special Deals" link="/deals/" />
            <Sidebar.Item name="Special Deals" link="/deals/" />
            <Sidebar.Item name="Special Deals" link="/deals/" />
            <Sidebar.Item name="Special Deals" link="/deals/" />
            <Sidebar.Item name="Special Deals" link="/deals/" />
            <Sidebar.Item name="Special Deals" link="/deals/" />
            <Sidebar.Item name="Special Deals" link="/deals/" />
            <Sidebar.Item name="Special Deals" link="/deals/" />
            <Sidebar.Item name="Special Deals" link="/deals/" />
            <Sidebar.Item name="Special Deals" link="/deals/" />
            <Sidebar.Item name="Special Deals" link="/deals/" />
          </div>
          <div className="flex gap-8">
            <Link href="https://instagram.com">
              <RiInstagramFill className="text-3xl text-true-gray hover:text-gray-600 cursor-pointer" />
            </Link>
            <Link href="https://whatsapp.com">
              <RiWhatsappFill className="text-3xl text-true-gray hover:text-gray-600 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const Item = ({ dropdown = false, ...props }: ISidebarItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  if (dropdown) {
    return (
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button className="focus:outline-none w-full">
              <div
                className={cx(
                  "flex mb-2 justify-between items-center gap-4 px-3 p-2 hover:bg-true-gray rounded-md group cursor-pointer hover:shadow-lg",
                  open && "bg-true-gray"
                )}
              >
                <h3
                  className={cx(
                    "text-base text-start text-true-gray group-hover:text-white font-semibold",
                    open && "text-white"
                  )}
                >
                  {props.name}
                </h3>
                <FiChevronRight
                  className={cx(
                    "text-2xl text-true-gray group-hover:text-white",
                    open &&
                      "text-white rotate-90 transform transition-transform ease-linear duration-75"
                  )}
                />
              </div>
            </Popover.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Popover.Panel className="bg-white rounded-md">
                <div className="flex mb-2 justify-start items-center bg-true-darkpink gap-4 px-3 p-2 rounded-md">
                  <ul>{props.children}</ul>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  } else {
    return (
      <Link href={props.link} onClick={() => setIsOpen(!isOpen)}>
        <div className="flex mb-2 justify-between items-center gap-4 px-3 p-2 hover:bg-true-gray rounded-md group cursor-pointer hover:shadow-lg">
          <h3
            className={cx(
              "text-base text-start text-true-gray group-hover:text-white font-semibold",
              isOpen && "text-white"
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
    <li className="py-1 cursor-pointer hover:text-true-gray">| {props.name}</li>
  </Link>
);
Sidebar.Item = Item;
Sidebar.ItemChild = ItemChild;
