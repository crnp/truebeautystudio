import React from "react";

import Image from "next/image";

import { Meta } from "@/components/layouts/Meta";
import { Main } from "@/components/templates/Main";

import image1 from "@/images/photo-1.jpg";

const Facial = () => {
  return (
    <Main
      meta={
        <Meta
          title="ADORA | Facial Treatments"
          description="ADORA Beauty Bar | Facial Treatments."
        />
      }
    >
      <div className="facial h-screen px-6 py-12 md:py-0 flex justify-center items-start flex-col">
        <h1 className="text-3xl text-center font-bold">Facial Treatments</h1>
        <Image
          src={image1}
          width={640}
          height={427}
          placeholder="blur"
          className="group-hover:scale-105 transition ease-out duration-200"
        />
      </div>
    </Main>
  );
};

export default Facial;
