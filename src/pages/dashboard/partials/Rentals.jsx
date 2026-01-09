
import React from "react";

const Rentals = () => {
  return (
    <section id="rentals" className="tab-content">
      <div className="flex flex-col md:flex-row gap-8">
        {/* الفلاتر الجانبية */}
        <aside className="md:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h3 className="text-lg font-bold text-green-800 mb-4">تصفية المعدات</h3>
            <ul className="space-y-2">
              {[
                "جميع المعدات",
                "جرارات",
                "آلات الحصاد",
                "أنظمة الري",
                "أراضي",
                "معدات أخرى",
              ].map((category, index) => (
                <li key={index}>
                  <button
                    className={`category-filter w-full text-right px-4 py-2 rounded-md hover:bg-green-50 transition duration-300 ${
                      index === 0 ? "active bg-green-600 text-white" : ""
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-bold text-green-800 mt-8 mb-4">نطاق السعر</h3>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="min-rent"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  الحد الأدنى (DA/يوم)
                </label>
                <input
                  type="number"
                  id="min-rent"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-right"
                />
              </div>
              <div>
                <label
                  htmlFor="max-rent"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  الحد الأقصى (DA/يوم)
                </label>
                <input
                  type="number"
                  id="max-rent"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-right"
                />
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition duration-300">
                تطبيق الفلتر
              </button>
            </div>
          </div>
        </aside>

        {/* قائمة المعدات */}
        <div className="md:w-3/4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <h2 className="text-2xl font-bold text-green-800 mb-4 sm:mb-0">
              المعدات المتاحة للتأجير
            </h2>
            <div className="flex items-center">
              <span className="text-sm text-gray-600 ml-2">ترتيب حسب:</span>
              <select className="border border-gray-300 rounded-md px-3 py-2 focus:ring-green-500 focus:border-green-500 text-right">
                <option>الأعلى تقييمًا</option>
                <option>الأقل سعرًا</option>
                <option>الأعلى سعرًا</option>
                <option>الأحدث</option>
              </select>
            </div>
          </div>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image:
                  "https://tse3.mm.bing.net/th/id/OIP.5q1haIuzYJPYXc2I0sbKhwHaD8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
                title: "جرار زراعي 2022",
              },
              {
                image: "https://i.ytimg.com/vi/FnRv8Mfc04Y/hqdefault.jpg",
                title: "حصادة زراعية 2022",
              },
              {
                image:
                  "https://image.made-in-china.com/318f0j00AEmtCQRBHWVh/4LZ-0-8ricecombineharvester-1-MP4.webp",
                title: "جرار زراعي 2022",
              },
              {
                image:
                  "https://i.ytimg.com/vi/fEmLcQABwAo/oardefault.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLDwJ7L9wOw7UaaVlNPRjTwnM0cryg",
                title: "قلابة زراعية 2022",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="product-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-2">
                    <i className="fas fa-user text-green-600 ml-2"></i>
                    مهدي
                  </p>
                  <p className="text-gray-600 mb-2">
                    <i className="fas fa-map-marker-alt text-green-600 ml-2"></i>
                    تبسة
                  </p>
                  <p className="text-gray-600 mb-3">
                    <i className="fas fa-money-bill-wave text-green-600 ml-2"></i>
                    30000 DA/يوم
                  </p>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md">
                    استأجر الآن
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rentals;