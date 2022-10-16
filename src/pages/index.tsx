import type { NextPage } from "next";

import Image from "next/image";
import Link from "next/link";

import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { HiMail } from "react-icons/hi";

import { Meta } from "@/components/layouts/Meta";
import { Main } from "@/components/templates/Main";

import image1 from "@/images/photo-1.jpg";
import image2 from "@/images/photo-2.jpg";
import image3 from "@/images/photo-3.jpg";

import square1 from "@/images/square-1.jpg";
import { Card } from "@/components/layouts/Card/Card";

const Home: NextPage = () => {
  return (
    <Main
      meta={
        <Meta title="TRUE Beauty Studio" description="TRUE Beauty Studio." />
      }
    >
      <section className="flex flex-col border-b border-white border-opacity-10">
        <div className="flex gap-4 group justify-end">
          <Link href="https://instagram.com">
            <RiInstagramFill className="text-4xl lg:text-2xl text-gray-300 cursor-pointer  hover:text-white transition-colors duration-150 ease-in-out" />
          </Link>
          <Link href="https://whatsapp.com">
            <RiWhatsappFill className="text-4xl lg:text-2xl text-gray-300 cursor-pointer hover:text-white transition-colors duration-150 ease-in-out" />
          </Link>
          <Link href="mailto:example@mail.com">
            <HiMail className="text-4xl lg:text-2xl text-gray-300 cursor-pointer hover:text-white transition-colors duration-150 ease-in-out" />
          </Link>
        </div>
        <div className="flex flex-col gap-8 items-end py-8 md:py-14">
          <Link href="#">
            <button className="true-button uppercase">
              BOOK OR RESCHEDULE YOUR APPOINTMENT HERE
            </button>
          </Link>
          <Link href="#">
            <button className="true-button uppercase">
              SHOP PHYSICAL GIFT CARDS + PRODUCTS
            </button>
          </Link>
          <Link href="#">
            <button className="true-button uppercase">
              SHOP INSTANT DIGITAL GIFT CARDS
            </button>
          </Link>
        </div>
      </section>
      <section className="flex flex-col border-b border-white border-opacity-10 py-8 md:py-10">
        <h1 className="text-2xl pb-6 text-true-pink font-semibold uppercase">
          Lorem ipsum dolor sit amet
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          autem voluptates vero nam nulla quidem perferendis, maxime quia quod
          velit nihil praesentium a esse expedita minus officiis architecto
          provident adipisci.
        </p>
        <div className="grid md:grid-cols-2 gap-4 py-10">
          <Image src={square1} width={640} height={640} />
          <Card title="DAY SPA" button="EXPLORE" link="#">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            veniam, vel, accusamus voluptate aliquid ipsa debitis, optio
            accusantium odit ad rem eum praesentium laborum quidem voluptates
            saepe qui facilis velit.
          </Card>
          <Image src={square1} width={640} height={640} />
          <Card title="SKIN CLINIC" button="ENHANCE" link="#">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            veniam, vel, accusamus voluptate aliquid ipsa debitis, optio
            accusantium odit ad rem eum praesentium laborum quidem voluptates
            saepe qui facilis velit.
          </Card>
        </div>
        <div className="grid md:grid-cols-3 gap-4 py-10">
          <Image
            className="md:order-1"
            src={square1}
            width={640}
            height={640}
          />
          <div className="md:order-4">
            <Card small title="GIFT CARDS" button="BUY NOW" link="#">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Card>
          </div>
          <Image
            className="md:order-2"
            src={square1}
            width={640}
            height={640}
          />
          <div className="md:order-5">
            <Card small title="PHILOSOPHY" button="BUY NOW" link="#">
              Dicta, consequuntur libero qui officiis quisquam aliquid numquam
              ullam necessitatibus aspernatur omnis eum ipsam rerum tempora
              recusandae doloribus placeat laudantium?
            </Card>
          </div>
          <Image
            className="md:order-3"
            src={square1}
            width={640}
            height={640}
          />
          <div className="md:order-6">
            <Card small title="GALLERY" button="BUY NOW" link="#">
              Quam, architecto.
            </Card>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Home;
