"use client";
import { cn } from "@/lib/utils";
import { Patua_One } from "@next/font/google";
import { LogIn, Search, SearchIcon, ShoppingCart } from "lucide-react";
import { Input } from "./ui/input";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const patua = Patua_One({
  subsets: ["latin"],
  weight: "400",
});
const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);
  const [isBorderActive, setIsBorderActive] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [miniScreen, setMiniScreen] = useState<false | true>(false);

  // useEffect(() => {

  //   {miniScreen===true?():""}

  // }, [miniScreen]);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 20) {
      setIsBorderActive(difference > 0);
      setIsHidden(difference > 0);

      lastYRef.current = y;
    }
  });

  // useEffect(() => {
  //   isHidden===false?(setIsBorderActive(false)):(setIsBorderActive(true))

  // }, [isHidden])

  const border = "border-slate-300 border-b-[1px]";
  return (
    <header className="bg-white fixed flex flex-col  w-full ">
      <nav
        className={` bg-white z-50 flex justify-between transition-all duration-500    items-center max-lg:px-2 max-lg:py-2 px-4 py-3`}
      >
        <div className="max-lg:hidden flex justify-center items-center">
          <ShoppingCart
            width={10}
            height={10}
            className="h-6 w-6 cursor-pointer -translate-y-[1px] transition-all duration-200 "
          />
          <p className="opacity-25 px-5 text-2xl">|</p>

          <button className=" group bg-white rounded-lg border flex items-center justify-center font-Yekan ">
            <div className="py-2 px-4 flex items-center justify-center">
              <div className="text-sm -translate-y-[3px] ">
                ورود<span className="px-1">|</span>ثبت نام
              </div>
              <LogIn className="group-hover:-translate-x-2 transition duration-200 ml-4 rotate-180" />
            </div>
          </button>
        </div>
        <div className={cn("max-lg:w-full w-[700px] ", patua.className)}>
          <div className="flex items-center justify-center">
            <button
              onClick={() => setIsSearchOpen((prev) => !prev)}
              className="max-lg:w-full lg:mr-4 text-[#a1a3a8] flex items-center justify-end font-Yekan w-[700px] h-[45px] bg-neutral-100 rounded-lg "
            >
              <div className={cn("lg:hidden mr-2 -translate-y-[2px] text-3xl text-[#ee384e]",patua.className)}>
                 digikala
              </div>
            
              <div className="lg:hidden mr-[5px] -translate-y-[2px]">
                در 
              </div>
              <div className="-translate-y-[2px] ">
                جستجو


              </div>
              <Search className="mx-6" />
            </button>

            <span className=" max-lg:hidden text-3xl text-[#ee384e] tracking-wide">
              digikala
            </span>
          </div>
        </div>
        {/* here */}
      </nav>
      <motion.div
        animate={isHidden ? "hidden" : "visible"}
        whileHover="visible"
        onFocusCapture={() => setIsHidden(false)}
        variants={{
          hidden: {
            y: "-200%",
          },
          visible: {
            y: "0%",
          },
        }}
        transition={{ duration: 0.4 }}
        className=" border-slate-300 border-b-[1px] flex w-full justify-center"
      >
        oslknd
      </motion.div>
    </header>
  );
};

export default Header;
