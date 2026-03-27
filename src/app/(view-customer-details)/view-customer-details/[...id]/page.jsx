import CardCustomerDetailComponent from '@/app/Component/CardCustomerDetailComponent';

async function page({ params }) {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/customers`)
  const data = await res.json();
  const customers = data.payload;
  const customer = customers.find((item) => item.customerId == id)
  return (
    <div>
      <CardCustomerDetailComponent firstName={customer.firstName} lastName={customer.lastName} birthDate={customer.birthDate} customerId={customer.customerId} moneySpent={customer.moneySpent}/>
      
    </div>
  );
}

export default page;
