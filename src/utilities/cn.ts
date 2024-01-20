import { twMerge } from "tailwind-merge";
import { clsx, ClassArray } from "clsx";

const cn = (...params: ClassArray) => {
  return twMerge(clsx(params));
};

export default cn;
