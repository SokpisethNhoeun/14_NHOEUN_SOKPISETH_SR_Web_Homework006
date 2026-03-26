import CardComponents from '@/app/Component/CardComponents';

async function page() {
  const data = await fetch('https://homework-api.noevchanmakara.site/api/v1/products');
  const products = await data.json();
  const getAllProducts = await products.payload;

  console.log(getAllProducts);
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mt-[1%] p-5">
        {getAllProducts.map((item) => 
        
          
        <CardComponents key={item.productId}  name={item.name} price={item.price} description={item.description}/>
      )
        
        }
      
      </div>
    </div>
  );
}

export default page;
