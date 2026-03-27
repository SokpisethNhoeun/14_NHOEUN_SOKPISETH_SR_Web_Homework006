'use client';
import { ArrowLeft, Heart, Share2, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function CardDetailComponent({ name, description, price,imageUrl }) {
 
  return (
    <div className="w-full h-screen flex bg-white items-center justify-center">
      <div className="w-[60%] flex justify-center shadow-sm drop-shadow-2xl shadow-gray-400 rounded-3xl overflow-hidden">
        <div className="relative w-full bg-[#eceae3] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(255,255,255,0.45),transparent_65%)] pointer-events-none" />

          <div className="absolute top-8 left-8 flex flex-col gap-2 z-10">
            <span className="px-4 py-1.5 rounded-full bg-[#1a1a2e] text-white text-[11px] font-bold tracking-widest uppercase">
              New Arrival
            </span>
            <span className="px-4 py-1.5 rounded-full border border-[#1a1a2e]  text-[11px] font-bold tracking-widest uppercase">
              Free Shipping
            </span>
          </div>

          <div className="absolute top-8 right-8 flex flex-col gap-3 z-10">
            <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-sm hover:bg-white hover:scale-105 transition-all">
              <Heart size={16} className="" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-sm hover:bg-white hover:scale-105 transition-all">
              <Share2 size={16} className="" />
            </button>
          </div>

          <div className="relative w-[75%] aspect-square">
            <Image
              src={ imageUrl ||`/phone-wallpaper-4k_5b3e0b4a-4249-47fb-a326-b5718a38a860.webp`}
              alt="iPhone 17 Pro Max"
              fill
              className="object-cover drop-shadow-2xl"
              priority
            />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center px-10  py-14 gap-7 bg-white">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 /50 text-sm font-medium tracking-wide hover: transition-colors w-fit"
          >
            <ArrowLeft size={15} />
            Back to Product
          </Link>

          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#4a9d8f]">
            Premium Experience
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold  leading-none tracking-tight">
            {name}
          </h1>

          <div className="flex items-center gap-4">
            <span className="text-4xl font-bold ">{price}</span>
            <div className="flex flex-col">
              <span className="text-sm /40 line-through">{price+200}</span>
              <span className="text-xs font-bold text-[#4a9d8f] tracking-wide uppercase">
                Save 20% Today
              </span>
            </div>
          </div>

          <div className="h-px bg-[#1a1a2e]/10 w-full" />

          <p className="/60 text-base leading-relaxed border-l-2 border-[#4a9d8f] pl-4">
           {description}
          </p>

          <div className="flex flex-col gap-3">
            <label className="text-xs font-bold tracking-[0.18em] uppercase ">
              Select Quantity
            </label>
            <div className="flex items-center gap-4 bg-gray-300 w-fit p-3 rounded-2xl">
              <button className="w-10 h-10  flex items-center justify-center text-xl font-light  ">
                −
              </button>
              <span className="w-6 text-center text-lg font-extrabold ">1</span>
              <button className="w-10 h-10  flex items-center justify-center text-xl font-light   ">
                +
              </button>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-4 pt-2">
            <button className="flex-1 flex items-center justify-center gap-2 bg-[#1a1a2e] text-white py-4 px-6 rounded-xl text-sm font-semibold tracking-wide hover:bg-[#2d2d4e] active:scale-[0.98] transition-all shadow-md shadow-[#1a1a2e]/20">
              <ShoppingCart size={17} />
              Add to Cart
            </button>
            <button className="flex-1 py-4 px-6 rounded-xl border-2 border-[#1a1a2e]  text-sm font-semibold tracking-wide hover:bg-[#1a1a2e] hover:text-white active:scale-[0.98] transition-all">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetailComponent;
