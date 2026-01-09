
import React from "react";

const Labor = () => {
  return (
    <section id="labor" className="tab-content">
      <div className="flex flex-col md:flex-row gap-8">
       <aside className="md:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h3 className="text-lg font-bold text-green-800 mb-4">تصفية العمالة</h3>
            <ul className="space-y-2">
              <li>
                <button className="category-filter w-full text-right px-4 py-2 rounded-md hover:bg-green-50 active:bg-green-600 active:text-white transition duration-300 active">
                  جميع العمالة
                </button>
              </li>
              <li>
                <button className="category-filter w-full text-right px-4 py-2 rounded-md hover:bg-green-50 transition duration-300">
                  حصاد
                </button>
              </li>
              <li>
                <button className="category-filter w-full text-right px-4 py-2 rounded-md hover:bg-green-50 transition duration-300">
                  تقليم
                </button>
              </li>
              <li>
                <button className="category-filter w-full text-right px-4 py-2 rounded-md hover:bg-green-50 transition duration-300">
                  تعبئة وتغليف
                </button>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-green-800 mt-8 mb-4">نطاق الأجر</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="min-salary" className="block text-sm font-medium text-gray-700 mb-1">
                  الحد الأدنى (DA/يوم)
                </label>
                <input
                  type="number"
                  id="min-salary"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-right"
                />
              </div>
              <div>
                <label htmlFor="max-salary" className="block text-sm font-medium text-gray-700 mb-1">
                  الحد الأقصى (DA/يوم)
                </label>
                <input
                  type="number"
                  id="max-salary"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-right"
                />
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition duration-300">
                تطبيق الفلتر
              </button>
            </div>
          </div>
        </aside>
        <div className="md:w-3/4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <h2 className="text-2xl font-bold text-green-800 mb-4 sm:mb-0">العمالة الموسمية المتاحة</h2>
            <div className="flex items-center">
              <span className="text-sm text-gray-600 ml-2">ترتيب حسب:</span>
              <select className="border border-gray-300 rounded-md px-3 py-2 focus:ring-green-500 focus:border-green-500 text-right">
                <option>الأعلى تقييمًا</option>
                <option>الأقل أجرًا</option>
                <option>الأعلى أجرًا</option>
                <option>الأحدث</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="product-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300">
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="عامل"
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h3 className="font-bold">أحمد محمد</h3>
                    <div className="flex text-yellow-400">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">
                  <i className="fas fa-briefcase text-green-600 ml-2"></i>
                  قطف الزيتون والتمور
                </p>
                <p className="text-gray-600 mb-2">
                  <i className="fas fa-map-marker-alt text-green-600 ml-2"></i>
                  تبسة
                </p>
                <p className="text-gray-600 mb-3">
                  <i className="fas fa-money-bill-wave text-green-600 ml-2"></i>
                  1200 DA/يوم
                </p>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md">
                  تواصل مع العامل
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Labor;


