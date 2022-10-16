import type { ReactNode } from "react";
import Link from "next/link";

import { cx } from "@/utils/cx";

type ICard = {
  title: string;
  children: ReactNode;
  button: string;
  link: string;
  small?: boolean;
};

export const Card = (props: ICard) => {
  return (
    <div
      className={cx(
        "flex flex-col gap-4 items-start bg-white text-true-gray text-start p-6 lg:p-10",
        props.small ? "justify-start" : "justify-center"
      )}
    >
      <h1
        className={cx(
          "font-bold tracking-wider",
          props.small ? "text-base lg:text-2xl" : "text-xl lg:text-5xl"
        )}
      >
        {props.title}
      </h1>
      <p className="text-base lg:text-lg">{props.children}</p>
      <Link href={props.link}>
        <button className="bg-true-gray text-white px-16 py-3 font-bold transition-opacity duration-150 ease-in-out hover:opacity-80">
          {props.button}
        </button>
      </Link>
    </div>
  );
};
