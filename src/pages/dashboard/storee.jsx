import Products from "./partials/Products";


const Storee = () => {
  return (
    <div dir="rtl" className="bg-gray-50 font-sans text-gray-900">
      <Header />
      <Hero />
      <main className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HowItWorks />
        <Products />
        <Labor />
        <Rentals />
        <Transport />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Storee;