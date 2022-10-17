import type { NextPage } from "next";

import Image from "next/image";
import Link from "next/link";

import {
  RiInstagramFill,
  RiWhatsappFill,
  RiFacebookFill,
} from "react-icons/ri";
import { IoLogoTiktok } from "react-icons/io5";
import { HiMail } from "react-icons/hi";

import { Meta } from "@/components/layouts/Meta";
import { Main } from "@/components/templates/Main";

import square1 from "@/images/square-1.jpg";
import { Card } from "@/components/layouts/Card/Card";

const Home: NextPage = () => {
  return (
    <Main
      meta={
        <Meta
          title="TRUE. BEAUTY STUDIO JAKARTA"
          description="TRUE. BEAUTY STUDIO JAKARTA"
        />
      }
    >
      <section className="flex flex-col border-b border-white border-opacity-10">
        <div className="flex gap-4 group justify-end">
          <Link href="https://whatsapp.com">
            <RiWhatsappFill className="text-4xl lg:text-3xl text-gray-300 cursor-pointer hover:text-white transition-colors duration-150 ease-in-out" />
          </Link>
          <Link href="https://instagram.com">
            <RiInstagramFill className="text-4xl lg:text-3xl text-gray-300 cursor-pointer  hover:text-white transition-colors duration-150 ease-in-out" />
          </Link>
          <Link href="https://tiktok.com">
            <IoLogoTiktok className="text-4xl lg:text-3xl text-gray-300 cursor-pointer  hover:text-white transition-colors duration-150 ease-in-out" />
          </Link>
          <Link href="https://facebook.com">
            <RiFacebookFill className="text-4xl lg:text-3xl text-gray-300 cursor-pointer  hover:text-white transition-colors duration-150 ease-in-out" />
          </Link>
          <Link href="mailto:example@mail.com">
            <HiMail className="text-4xl lg:text-3xl text-gray-300 cursor-pointer hover:text-white transition-colors duration-150 ease-in-out" />
          </Link>
        </div>
        <div className="flex flex-col gap-8 items-end py-8 md:py-14">
          <Link href="#">
            <button className="true-button uppercase">
              SEGERA BUAT APPOINTMENT ANDA DISINI
            </button>
          </Link>
          <Link href="#">
            <button className="true-button uppercase">
              KETAHUI LEBIH BANYAK TENTANG KAMI DISINI
            </button>
          </Link>
          <Link href="#">
            <button className="true-button uppercase">
              PROMO DAN PENAWARAN MENARIK DISINI
            </button>
          </Link>
        </div>
      </section>
      <section className="flex flex-col border-b border-white border-opacity-10 py-8 md:py-10">
        <h1 className="text-2xl pb-6 text-true-pink font-semibold uppercase">
          BELIEVE YOUR TRUE.-SELF!
        </h1>
        <p className="font-serif mb-6">
          Percaya-lah kepada jati diri-mu. Sebuah kalimat yang kami percaya
          dapat menjadi penyemangat kamu untuk memulai hari.{" "}
          <b>TRUE. Beauty Studio </b>
          menawarkan pengalaman perawatan diri yang berbeda. Kami berada di
          bilangan Kebon Jeruk, Jakarta Barat dengan lokasi yang mudah
          dijangkau. Nikmati pengalaman konsultasi serta pengerjaan staf ahli
          kami di bidang kecantikan. Tempat untuk berdiskusi, memulai kembali
          sambil memanjakan diri, dan jangan lupa, believe your TRUE.-self!
        </p>
        <p className="font-serif mb-6 text-true-darkpink hover:text-true-darkerpink cursor-pointer">
          Kami sangat peduli dengan kelestarian dan keberlangsungan lingkungan
          hidup, klik disini untuk mengetahui lebih lanjut peran kami pada
          lingkungan dan masyarakat.
        </p>
        <p className="font-serif text-true-darkpink hover:text-true-darkerpink cursor-pointer">
          Kepercayaan kamu pada kami sangat kami hargai. Klik disini untuk
          kritik dan saran.
        </p>
        <div className="grid md:grid-cols-2 gap-4 py-10">
          <Image src={square1} width={640} height={640} />
          <Card title="SALON RAMBUT" button="TELUSURI" link="#">
            HAIR TREATMENT CREAMBATHS, KERATIN STRAIGHTENING, HAIRCUTS,
            COLOURING, HAIR MASK, SMOOTHING+
          </Card>
          <Image src={square1} width={640} height={640} />
          <Card title="TUBUH DAN KULIT" button="TELUSURI" link="#">
            BODY WHITENING, BODY SCRUB, WAXING, RATUS TREATMENT, SAUNA
          </Card>
          <Image src={square1} width={640} height={640} />
          <Card title="FACE TREATMENT" button="TELUSURI" link="#">
            ACNE TREATMENT, GLOW ENHANCING, SLOW AGING TREATMENT, SNOW
            BRIGHTENING, MICRODERMABRATION, FACE DETOX
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
