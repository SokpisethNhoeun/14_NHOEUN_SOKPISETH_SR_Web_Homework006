'use client';
import { Calendar, CreditCard, User,ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function CardCustomerDetailComponent({ firstName , lastName , birthDate ,moneySpent,customerId}) {
 

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 ">
        <div className="flex bg-white rounded-2xl overflow-hidden max-w-xl w-full border border-gray-100 shadow shadow-gray-500">
          <div className="flex flex-col items-center justify-center bg-gray-50 px-8 py-8 w-44">
            <div className="w-32 h-32 relative overflow-hidden rounded-full shadow-2xl shadow-amber-200 border-5 border-white hover:scale-110 duration-300">
            <Image 
            src={'/phone-wallpaper-4k_5b3e0b4a-4249-47fb-a326-b5718a38a860.webp'}
            fill
            alt='logo'
            className='rounded-full hover:scale-110 duration-300'
            

            />
            </div>
            <p className="mt-3 text-sm font-semibold text-gray-900">{firstName} {lastName}</p>
          </div>

          <div className="flex-1 px-6 py-5 flex flex-col gap-4">
            <Link href = {'/customers'}>
            <button className="text-xs text-gray-400 uppercase tracking-widest text-left hover:text-gray-600 flex items-center gap-3">
               <ArrowLeft/> Back to customer table
            </button>
            </Link>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Full Name</p>
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-sm font-semibold text-gray-900">{firstName} {lastName}</span>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1 ">Total Spent</p>
                <div className="flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-green-500" />
                  <span className="text-xl font-semibold text-gray-900">${moneySpent}</span>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Birthdate</p>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-sm font-semibold text-gray-900">{birthDate}</span>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Account ID</p>
                <p className="text-xs text-gray-400 bg-gray-100 rounded-lg px-2 py-1.5 break-all leading-relaxed">
                  {customerId}
                </p>
              </div>
            </div>

            <div className="flex gap-3 mt-1">
              <button className="flex-1 bg-gray-900 text-white text-sm font-medium py-2.5 rounded-xl hover:bg-amber-500 transition-colors">
                Edit Profile
              </button>
              <button className="flex-1 bg-rose-50 text-rose-500 text-sm font-medium py-2.5 rounded-xl hover:bg-rose-100 transition-colors">
                Delete This User
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCustomerDetailComponent;
