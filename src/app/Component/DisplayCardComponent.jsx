'use client';
import { Search } from 'lucide-react';
import { useState } from 'react';
import CardComponents from './CardComponents';
import NotFoundComponent from './NotFoundComponent';

function DisplayCardComponent({ getAllProducts }) {
  const [query, setQuery] = useState('');

  const filteredProducts = 
    query.trim() === ''
      ? getAllProducts
      : getAllProducts.filter(
          (item) =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
        );

  const isFound = filteredProducts.length > 0;

  return (
    <div className="relative h-screen">
      <div className="w-full flex items-center justify-between ">
        <h1 className="font-extrabold text-3xl">List All Products</h1>
        <div className="relative flex-1 items-center gap-2 max-w-2xl">
          <Search
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40 pointer-events-none"
          />
          <input
            id="txtSearch"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products…"
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white border border-black/10 text-sm text-black placeholder:text-black/35 focus:outline-none focus:shadow focus:shadow-gray-500 transition"
          />
        </div>
      </div>

      {isFound ? (
        <div className="grid grid-cols-4 gap-4 mt-[3%]">
          {filteredProducts.map((item) => (
            <CardComponents
              key={item.productId}
              productId={item.productId}
              name={item.name}
              price={item.price}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      ) : (
        <div className="absolute mt-[2%] w-full h-7/10 flex items-center justify-center border border-black/50 bg-slate-100 rounded-3xl">
          <NotFoundComponent text={query} setQuery={setQuery} />
        </div>
      )}
    </div>
  );
}

export default DisplayCardComponent;