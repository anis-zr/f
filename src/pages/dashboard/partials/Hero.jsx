/*
import React from "react";

export default function Hero() {
  return (
    <section className="bg-green-700 pt-24 pb-16 md:pt-32 md:pb-24 text-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">AGRI Market</h1>
          <p className="text-lg text-green-100 mb-8">
            منصة متكاملة لبيع المنتجات الزراعية، إيجاد العمالة، تأجير المعدات وتنظيم النقل
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => window.switchTab && window.switchTab("products")}
              className={`tab-btn ${window.location.hash === "#products" || !window.location.hash ? "bg-green-600" : "bg-green-800"} hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200`}
            >
              المنتجات
            </button>

            <button
              onClick={() => window.switchTab && window.switchTab("medicines")}
              className={`tab-btn ${window.location.hash === "#medicines" ? "bg-green-600" : "bg-green-800"} hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200`}
            >
              الادوية والمبيدات
            </button>

            <button
              onClick={() => window.switchTab && window.switchTab("seeds")}
              className={`tab-btn ${window.location.hash === "#seeds" ? "bg-green-600" : "bg-green-800"} hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200`}
            >
              البذور و الشتلة
            </button>

            <button
              onClick={() => window.switchTab && window.switchTab("labor")}
              className={`tab-btn ${window.location.hash === "#labor" ? "bg-green-600" : "bg-green-800"} hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200`}
            >
              العمالة
            </button>

            <button
              onClick={() => window.switchTab && window.switchTab("transports")}
              className={`tab-btn ${window.location.hash === "#transports" ? "bg-green-600" : "bg-green-800"} hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200`}
            >
              خدمات النقل
            </button>

            <button
              onClick={() => window.switchTab && window.switchTab("rentals")}
              className={`tab-btn ${window.location.hash === "#rentals" ? "bg-green-600" : "bg-green-800"} hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200`}
            >
              تأجير المعدات
            </button>
          </div>

          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="ابحث عن منتجات، عمالة، معدات..."
              className="w-full px-5 py-3 rounded-lg border-0 focus:ring-2 focus:ring-green-300 text-right"
            />
            <button className="absolute left-3 top-3 text-green-600" aria-label="بحث" type="button">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}




*/

// components/Hero.jsx
import React from 'react';
import { useApp } from './Appcontext';

const Hero = React.memo(() => {
  const { switchTab } = useApp();

  const tabs = [
    { id: 'products', label: 'المنتجات' },
    { id: 'a', label: 'الادوية والمبيدات' },
    { id: 'a', label: 'البذور و الشتلة' },
    { id: 'labor', label: 'العمالة الموسمية' },
    { id: 'transport', label: 'خدمات النقل' },
    { id: 'rentals', label: 'تأجير المعدات' }
  ];

  return (
    <section className="bg-green-700 pt-24 pb-16 md:pt-32 md:pb-24 text-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">AGRI Market</h1>
          <p className="text-lg text-green-100 mb-8">
            منصة متكاملة لبيع المنتجات الزراعية، إيجاد العمالة، تأجير المعدات وتنظيم النقل
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => switchTab(tab.id)}
                className={`tab-btn px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  index < 3 
                    ? 'bg-white text-green-700' 
                    : 'bg-green-800 hover:bg-green-900 text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <SearchBar />
        </div>
      </div>
    </section>
  );
});

const SearchBar = React.memo(() => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="relative max-w-md mx-auto">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="ابحث عن منتجات، عمالة، معدات..."
        className="w-full px-5 py-3 rounded-lg border-0 focus:ring-2 focus:ring-green-300 text-right"
      />
      <button 
        type="submit"
        className="absolute left-3 top-3 text-green-600 hover:text-green-700 transition-colors duration-200"
        aria-label="بحث"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </form>
  );
});

export default Hero;