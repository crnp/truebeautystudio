import React from "react";

import Image from "next/image";

import { Meta } from "@/components/layouts/Meta";
import { Main } from "@/components/templates/Main";

import image3 from "@/images/photo-3.jpg";

const Nail = () => {
  return (
    <Main
      meta={
        <Meta
          title="ADORA | Nail Treatments"
          description="ADORA Beauty Bar | Nail Treatments."
        />
      }
    >
      <div className="Nail h-screen px-6 py-12 md:py-0 flex justify-center items-start flex-col">
        <h1 className="text-3xl text-center font-bold">Nail Treatments</h1>
        <Image
          src={image3}
          width={640}
          height={427}
          placeholder="blur"
          className="group-hover:scale-105 transition ease-out duration-200"
        />
      </div>
    </Main>
  );
};

export default Nail;
