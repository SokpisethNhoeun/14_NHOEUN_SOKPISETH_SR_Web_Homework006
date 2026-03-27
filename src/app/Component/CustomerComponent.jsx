'use client';
import { Calendar, Search,Eye } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

function CustomerComponent({ data }) {
  const [query, setQuery] = useState('');
  console.log(data);
  const filterCustomers =
    query.trim() !== ''
      ? data.filter(
          (item) =>
            item.firstName.toLowerCase().includes(query.toLowerCase()) ||
            item.lastName.toLowerCase().includes(query.toLowerCase())
        )
      : data;

  const customerNotfound = filterCustomers.length > 0;
  console.log(customerNotfound);
  console.log(query);
  return (
    <div className="w-full p-5 space-y-5">
      <div className="w-full flex items-center justify-between ">
        <h1 className="font-extrabold text-3xl">List All Customers</h1>
        <div className="relative flex-1 items-center gap-2 max-w-2xl">
          <Search
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40 pointer-events-none"
          />
          <input
            id="txtSearch"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search customers…"
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white border border-black/10 text-sm text-black placeholder:text-black/35 focus:outline-none focus:shadow focus:shadow-gray-500 transition"
          />
        </div>
      </div>
      <table className="w-full text-center p-5 shadow shadow-gray-500 rounded-2xl overflow-hidden">
        <thead>
          <tr className="bg-gray-50">
            <th className="p-8 text-left">Customer Name</th>
            <th className="p-8 text-left">Birthdate</th>
            <th className="p-8 text-center">Amount Spent</th>
            <th className="p-8 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {customerNotfound ? (
            filterCustomers.map((item) => (
              <tr
                key={item.customerId}
                className="hover:bg-slate-100 rounded-2xl duration-300 overflow-hidden"
              >
                <td className="p-4">
                  <div className="flex flex-col items-start">
                    <h1>
                      {item.firstName} {item.lastName}
                    </h1>
                    <span className="text-slate-400 w-[12ch] truncate inline-block">
                      {' '}
                      ID : {item.customerId}
                    </span>{' '}
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex items-center gap-2 justify-start text-slate-400">
                    <Calendar />
                    <span>{item.birthDate}</span>
                  </div>
                </td>

                <td className="p-4 text-center text-green-400 font-bold text-lg">
                  $ {item.moneySpent}
                </td>
                <td className="p-4 text-center flex w-full items-center justify-center">
                  <Link href = {`view-customer-details/${item.customerId}`}>
                  <button className='shadow shadow-gray-400 cursor-pointer px-3 gap-3 py-2 rounded-lg flex text-slate-400 text-sm items-center hover:bg-black/80 hover:text-white duration-200'>
                  <Eye />  Views profile
                  </button>
                  </Link>
                  
                  
                  </td>
              </tr>
            ))
          ) : (
            <tr className="bg-white">
              <td colSpan={'4'} className="p-16 text-slate-400 ">
                {' '}
                <i> No customers data available</i>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerComponent;
