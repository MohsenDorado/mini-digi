"use client"
import { cn } from '@/lib/utils';
import {Patua_One} from '@next/font/google'
import { LogIn, SearchIcon, ShoppingCart } from "lucide-react";
import { Input } from './ui/input';

const patua=Patua_One({
  subsets:['latin'],
  weight:'400',
})
const Header = () => {
  return (
    <header className="flex justify-between border-b-[1px] border-slate-300 items-center max-lg:px-2 max-lg:py-2 px-6 py-3 ">
      <div className="max-lg:hidden flex justify-center items-center">
        <ShoppingCart
          width={10}
          height={10}
          className="h-6 w-6 cursor-pointer -translate-y-[1px] transition-all duration-200 "
        />
        <p className="opacity-25 px-5 text-2xl">|</p>
        
        <button className=" group bg-white rounded-lg border flex items-center justify-center font-Yekan ">
          <div className="py-2 px-4 flex items-center justify-center">
            <div className="text-sm -translate-y-[3px] ">ورود<span className="px-1">|</span>ثبت نام</div>
            <LogIn className="group-hover:-translate-x-2 transition duration-200 ml-4 rotate-180"/>

          </div>

            
        </button>
      </div>
      <div className={cn("max-lg:w-full w-[700px] ",patua.className)}>
        <div className='flex items-center justify-center'>
          {/* <Input/> */}
          <div
        className={cn(
          "flex grow h-10 items-center rounded-md border bg-neutral-100 pl-3 text-sm  cursor-pointer w-full lg:mr-4",
          
        )}
      >
        <input
        placeholder='جستجو'
         
          className={cn("placeholder:-translate-y-[2px] font-bold w-full p-2  cursor-pointer text-right bg-slate-100 font-Yekan")}
        />
        <SearchIcon className="h-[20px] w-[20px] mr-3 ml-2" />
      </div>

        <span className=' max-lg:hidden text-3xl text-[#ee384e] tracking-wide'>digikala</span>
        </div>

         </div>
    </header>
  );
};

export default Header;
