import DisplayCardComponent from '@/app/Component/DisplayCardComponent';

async function page() {
 
  const data = await fetch('https://homework-api.noevchanmakara.site/api/v1/products');

  const products = await data.json();
  const getAllProducts = await products.payload;
  return (
    <div className="w-full p-5">
      <DisplayCardComponent getAllProducts={getAllProducts} />
    </div>
  );
}

export default page;
