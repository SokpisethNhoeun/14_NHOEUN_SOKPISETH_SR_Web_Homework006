'use client';
import { ArrowUpRight, ShoppingBag, Star } from 'lucide-react';
import Link from 'next/link'
import Image from 'next/image';
function CardComponents({productId, name, description, price,imageUrl }) {
  return (
    
    <div className="group h-full hover:-translate-y-3 duration-300">
      <div className="relative h-full w-full shadow shadow-gray-400 grid grid-rows-8 rounded-3xl">
        <div className="absolute top-3 left-3 z-50">
          <p className="font-bold text-[10px] text-white">NEW</p>
        </div>
        <div className="absolute top-9 left-3 z-50 bg-white/90 flex justify-center items-center px-2 rounded-lg gap-1">
          <Star fill="gold" width={12} className="text-yellow-300" />
          <p className="font-bold text-[8px] text-black">4.6</p>
        </div>

        <div className="row-span-5 relative overflow-hidden rounded-t-2xl">
<div className="absolute w-full h-full  flex justify-center items-center opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0  transition-all duration-500 z-2">
            <div className="p-3 rounded-full bg-white/80">
              {' '}
              <ShoppingBag />
            </div>
          </div>
          <Image
           src={imageUrl || '/phone-wallpaper-4k_5b3e0b4a-4249-47fb-a326-b5718a38a860.webp'}
            fill
            alt="Phone"
            className="rounded-t-2xl overflow-hidden group-hover:scale-110 duration-1000 "
          />
        </div>
        <div className="row-span-3 flex flex-col p-3 justify-between gap-3">
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-blue-500 font-bold text-[10px] uppercase">Flagship Serial</p>
              <h1 className="text-black/705 font-extrabold text-lg group-hover:text-blue-500">{name}</h1>
            </div>
            <div className="text-md font-extrabold"> ${price}</div>
          </div>
          <p className="text-gray-500 text-xs line-clamp-2">{description}</p>
          <Link href={`view-detail-product/${productId}`}> <div className="text-center bg-black/90 text-sm text-white p-2 rounded-2xl flex items-center justify-center gap-3  cursor-pointer hover:bg-blue-500">
            {' '}
            View Product <ArrowUpRight width={15} />
          </div></Link>
         
        </div>
      </div>
    </div>
  );
}

export default CardComponents;
