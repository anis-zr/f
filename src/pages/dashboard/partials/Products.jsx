import React from "react";

const Products = () => {
  return (
    <section id="products" className="bg-gray-50 py-16" dir="rtl" lang="ar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-2">🛒 السوق الزراعي</h2>
          <p className="text-gray-600">تصفح العروض والمنتجات الزراعية بكل سهولة</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* الفلاتر */}
          <aside className="bg-white p-6 rounded-xl shadow-md h-fit">
            <h3 className="text-lg font-semibold text-green-800 mb-4">تصفية النتائج</h3>

            <div className="mb-6">
              <h4 className="font-medium text-gray-700 mb-2">الفئة</h4>
              <ul className="space-y-2">
                <li>
                  <label className="flex items-center space-x-2 space-x-reverse">
                    <input type="checkbox" className="text-green-600" />
                    <span>الخضر</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2 space-x-reverse">
                    <input type="checkbox" className="text-green-600" />
                    <span>الفواكه</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2 space-x-reverse">
                    <input type="checkbox" className="text-green-600" />
                    <span>اخرى</span>
                  </label>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-700 mb-2">السعر</h4>
              <input
                type="range"
                min="0"
                max="10000"
                className="w-full accent-green-600"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>0 دج</span>
                <span>10,000 دج</span>
              </div>
            </div>
          </aside>

          {/* المنتجات */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-green-800">جميع المنتجات</h3>
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500">
                <option>ترتيب حسب الأحدث</option>
                <option>السعر: من الأقل للأعلى</option>
                <option>السعر: من الأعلى للأقل</option>
              </select>
            </div>

            {/* شبكة المنتجات */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* منتج 1 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCnUGKPh1amTBnWPDofMmwOmKTaSSAVyjWHA&s"
                  alt="منتج"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-green-800 mb-1">
                     عنب ممتازة   </h4>
                  <p className="text-gray-600 text-sm mb-2">مناسب لجميع أنواع التربة</p>
                  <p className="text-green-700 font-semibold mb-4">2500 دج / كيس</p>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition">
                    <i className="fas fa-shopping-cart ml-2"></i> أضف إلى السلة
                  </button>
                </div>
              </div>


{/* منتج 2 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <img
                  src="https://files.ekmcdn.com/719dfc/images/tomate-crimson-crush-f1-8077-p.png"
                  alt="منتج"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-green-800 mb-1">
                     طماطم عالية الجودة
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">مردودية ممتازة ومقاومة للأمراض</p>
                  <p className="text-green-700 font-semibold mb-4">1200 دج / كغ</p>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition">
                    <i className="fas fa-shopping-cart ml-2"></i> أضف إلى السلة
                  </button>
                </div>
              </div>

              {/* منتج 3 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShUITgIDu3-1Tk7QUHtSF1OF7-8XmEGniME0vCSfy-Qg&s"
                  alt="منتج"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-green-800 mb-1">
                   بطاطا
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">صديق للبيئة وآمن على المحاصيل</p>
                  <p className="text-green-700 font-semibold mb-4">3500 دج / لتر</p>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition">
                    <i className="fas fa-shopping-cart ml-2"></i> أضف إلى السلة
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;