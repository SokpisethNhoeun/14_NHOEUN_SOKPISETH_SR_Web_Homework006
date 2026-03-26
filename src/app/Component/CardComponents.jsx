'use client';
import { ArrowUpRight, Star } from 'lucide-react';
import Image from 'next/image';
function CardComponents({ name, description, price }) {
  return (
    <div className="group h-full hover:-translate-y-3 duration-300">
      <div className="relative h-full w-full shadow shadow-gray-400 grid grid-rows-8 rounded-3xl">
        <div className="absolute top-3 left-3 z-50">
          <p className="font-bold text-[10px] text-white">NEW</p>
        </div>
        <div className="absolute top-9 left-3 z-50 bg-white/90 flex justify-center items-center px-2 rounded-lg gap-1">
          <Star fill="gold" width={14} className="text-yellow-300" />
          <p className="font-bold text-[10px] text-black">4.6</p>
        </div>

        <div className="row-span-5 relative overflow-hidden rounded-t-2xl">
          <Image
            src={'/phone-wallpaper-4k_5b3e0b4a-4249-47fb-a326-b5718a38a860.webp'}
            fill
            alt="Headphone"
            className="rounded-t-2xl overflow-hidden group-hover:scale-110 duration-300 "
          />
        </div>
        <div className="row-span-3 flex flex-col p-3 justify-between gap-3">
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-blue-500 font-bold text-[12px] uppercase">Flagship Serial</p>
              <h1 className="text-black/705 font-extrabold text-xl">{name}</h1>
            </div>
            <div className="text-xl font-bold"> ${price}</div>
          </div>
          <p className="text-gray-500">{description}</p>
          <div className="text-center bg-black/90 text-white p-3 rounded-2xl flex items-center justify-center gap-3  cursor-pointer hover:bg-blue-500">
            {' '}
            View Product <ArrowUpRight width={15} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponents;
