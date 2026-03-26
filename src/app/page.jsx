import CustomerHomepageCardComponent from './Component/CustomerHomepageCardComponent';
import ProductHomepageCardComponent from './Component/ProductHomepageCardComponent';

async function page() {
  const user = await fetch('https://homework-api.noevchanmakara.site/api/v1/customers');
  const totalUser = await user.json();

  return (
    <>
      <div className="w-full flex justify-center items-center gap-10">
        <ProductHomepageCardComponent />
        <CustomerHomepageCardComponent totalUser={totalUser.payload.length} />
      </div>
    </>
  );
}

export default page;
