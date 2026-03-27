'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Bell, CreditCard, Settings, ShoppingCart, User } from 'lucide-react';
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="cursor-pointer flex gap-4 outline-none">
              <div className="w-12 h-12 relative rounded-full flex items-center justify-center overflow-hidden">
                <Image src="/logo.webp" fill alt="logo" />
              </div>
              <div className="flex flex-col">
                <p className="font-extrabold">Admin User</p>
                <p className="tracking-wide text-gray-400">KSHRD</p>
              </div>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-64 rounded-2xl shadow-xl mt-2 mr-4">
            <DropdownMenuLabel className="flex flex-col py-3">
              <span className="font-bold text-gray-800">Admin User</span>
              <span className="text-sm text-gray-400 font-normal">admin@hrdshop.com</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex items-center gap-3 px-4 py-2.5 cursor-pointer">
              <User className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium">My Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-3 px-4 py-2.5 cursor-pointer">
              <CreditCard className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium">Billing</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-3 px-4 py-2.5 cursor-pointer">
              <Settings className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium">Settings</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default NavHomePageComponents;
