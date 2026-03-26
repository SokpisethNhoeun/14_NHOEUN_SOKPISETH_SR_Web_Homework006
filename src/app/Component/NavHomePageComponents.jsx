'use client';
import { Bell, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
function NavHomePageComponents() {
  return (
    <div>
      <div className="w-full sticky top-0 p-5 pr-12 flex items-center justify-end gap-5 border-b border-gray-300 backdrop-blur-sm bg-white/30">
        {' '}
        <div className="cursor-pointer relative">
          <Bell className="text-gray-700" />
          <span className="absolute top-1 right-0.5 block w-2 h-2 bg-blue-500 rounded-full" />
        </div>
        <div className="cursor-pointer relative">
          <ShoppingCart className="text-gray-700" />
          <span className="absolute -top-2 -right-1 block w-4 h-4 bg-blue-500 rounded-full" />
          <span className="absolute -top-2 right-[1px] block rounded-full text-white text-[10px]">
            3
          </span>
        </div>
        <p className="text-[30px] font-[100] text-gray-300">|</p>
        <div className="cursor-pointer flex gap-4">
          <div className=" w-12 h-12 relative rounded-full  flex items-center justify-center overflow-hidden">
            <Image src="/logo.webp" fill alt="logo" />
          </div>
          <div className="flex flex-col">
            <p className="font-extrabold">Admin User</p>
            <p className="tracking-wide text-gray-400">KSHRD</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavHomePageComponents;
