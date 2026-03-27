import CardDetailComponent from '@/app/Component/CardDetailComponent';
async function page({ params }) {
  const { id } = await params;
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`);
  const res = await data.json();
  const product = res.payload;

  return (
    <div>
      {product.filter((item) => item.productId == id)
        .map((item) => (
          <CardDetailComponent
            key={item.productId}
            name={item.name}
            price={item.price}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
    </div>
  );
}

export default page;
