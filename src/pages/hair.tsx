import React from "react";

import Image from "next/image";

import { Meta } from "@/components/layouts/Meta";
import { Main } from "@/components/templates/Main";

import image2 from "@/images/photo-2.jpg";

const Hair = () => {
  return (
    <Main
      meta={
        <Meta
          title="ADORA | Hair Treatments"
          description="ADORA Beauty Bar | Hair Treatments."
        />
      }
    >
      <div className="hair h-screen px-6 py-12 md:py-0 flex justify-center items-start flex-col">
        <h1 className="text-3xl text-center font-bold">Hair Treatments</h1>
        <Image
          src={image2}
          width={640}
          height={427}
          placeholder="blur"
          className="group-hover:scale-105 transition ease-out duration-200"
        />
      </div>
    </Main>
  );
};

export default Hair;
