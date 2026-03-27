import { PackageSearch } from 'lucide-react';
function NotFoundComponent({ text, setQuery ,filteredProducts ,isFound}) {
    const handleClear = () => {

        setQuery('');
        
    }
  return (
    <div className="w-full max-h-full overflow-hidden flex flex-col gap-3 items-center justify-center  ">
      <div className="p-5">
        <PackageSearch width={64} />
      </div>
      <p className="font-bold text-xl">No products found</p>
      <div className="">we couldn't find any products matching '{text}'</div>
      <button className="text-blue-400 underline cursor-pointer" onClick={() => handleClear()}>
        {' '}
        Clear Search
      </button>
    </div>
  );
}

export default NotFoundComponent;
