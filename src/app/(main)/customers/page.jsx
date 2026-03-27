import CustomerComponent from '@/app/Component/CustomerComponent';
import React from 'react'

async function page() {
const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/customers`)
const customers = await res.json();
const data = customers.payload;
  return (
    <div>
        <CustomerComponent data={data}/>
    </div>
  )
}

export default page
