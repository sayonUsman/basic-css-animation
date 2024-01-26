import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

const cn = (...params: ClassValue[]) => {
  return twMerge(clsx(params));
};

export default cn;
