
import React from "react";

const Transport = () => {
  return (
    <section id="transports" className="tab-content">
      <div className="flex flex-col md:flex-row gap-8">
        {/* الفلاتر الجانبية */}
        <aside className="md:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h3 className="text-lg font-bold text-green-800 mb-4">
              تصفية المعدات
            </h3>
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

            <h3 className="text-lg font-bold text-green-800 mt-8 mb-4">
              نطاق السعر
            </h3>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="min-rent"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  الحد الأدنى (ر.س/يوم)
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
                  الحد الأقصى (ر.س/يوم)
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
            {/* بطاقة معدات */}
            <div className="product-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300">
              <img
                src="https://tse4.mm.bing.net/th/id/OIP.ygwsIVMEGqe7LpZX_OcIrAHaJ4?r=0&pid=ImgDet&w=191&h=254&c=7&o=7&rm=3"
                alt="جرار زراعي"
                className=" w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">جرار زراعي 2022</h3>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transport;


/*

 <section id="transport" class="tab-content">
    <div class="flex flex-col md:flex-row gap-8">
      
        <aside class="md:w-1/4">
            <div class="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 class="text-lg font-bold text-green-800 mb-4">تصفية الشاحنات</h3>
                <ul class="space-y-2">
                    <li>
                        <button class="category-filter w-full text-right px-4 py-2 rounded-md hover:bg-green-50 active:bg-green-600 active:text-white transition duration-300 active">
                            جميع الشاحنات
                        </button>
                    </li>
                    <li>
                        <button class="category-filter w-full text-right px-4 py-2 rounded-md hover:bg-green-50 transition duration-300">
                            شاحنات تبريد
                        </button>
                    </li>
                    <li>
                        <button class="category-filter w-full text-right px-4 py-2 rounded-md hover:bg-green-50 transition duration-300">
                            شاحنات قلاب
                        </button>
                    </li>
                    <li>
                        <button class="category-filter w-full text-right px-4 py-2 rounded-md hover:bg-green-50 transition duration-300">
                            شاحنات صغيرة
                        </button>
                    </li>
                </ul>

                <h3 class="text-lg font-bold text-green-800 mt-8 mb-4">سعة الشاحنة</h3>
                <div class="space-y-4">
                    <div>
                        <label for="min-capacity" class="block text-sm font-medium text-gray-700 mb-1">الحد الأدنى (طن)</label>
                        <input type="number" id="min-capacity" class="w-full px-3 py-2 border border-gray-300 rounded-md text-right">
                    </div>
                    <div>
                        <label for="max-capacity" class="block text-sm font-medium text-gray-700 mb-1">الحد الأقصى (طن)</label>
                        <input type="number" id="max-capacity" class="w-full px-3 py-2 border border-gray-300 rounded-md text-right">
                    </div>
                    <button class="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition duration-300">
                        تطبيق الفلتر
                    </button>
                </div>
            </div>
        </aside>
        
      
        <div class="md:w-3/4">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                <h2 class="text-2xl font-bold text-green-800 mb-4 sm:mb-0">خدمات النقل المتاحة</h2>
                <div class="flex items-center">
                    <span class="text-sm text-gray-600 ml-2">ترتيب حسب:</span>
                    <select class="border border-gray-300 rounded-md px-3 py-2 focus:ring-green-500 focus:border-green-500 text-right">
                        <option>الأعلى تقييمًا</option>
                        <option>الأقل سعرًا</option>
                        <option>الأعلى سعرًا</option>
                        <option>الأحدث</option>
                    </select>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             
                <div class="product-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300">
                    <img src="https://tse4.mm.bing.net/th/id/OIP.ygwsIVMEGqe7LpZX_OcIrAHaJ4?r=0&pid=ImgDet&w=191&h=254&c=7&o=7&rm=3" 
                         alt="شاحنة نقل" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h3 class="font-bold text-lg mb-2">شاحنة تبريد - 7 طن</h3>
                        <p class="text-gray-600 mb-2">
                            <i class="fas fa-user text-green-600 ml-2"></i>
                           لزهر
                        </p>
                        <p class="text-gray-600 mb-2">
                            <i class="fas fa-map-marked-alt text-green-600 ml-2"></i>
                             ينقل إلى جميع مناطق تبسة
                        </p>
                        <p class="text-gray-600 mb-3">
                            <i class="fas fa-tags text-green-600 ml-2"></i>
                            5000 DA للشحنة داخل المدينة
                        </p>
                        <button class="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md">
                            اطلب النقل
                        </button>
                    </div>
                </div>
               <div class="product-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300">
                    <img src="https://th.bing.com/th/id/OIP.H4JgeeRzGDNGUWzgNcsoIAHaEc?w=293&h=180&c=7&r=0&o=5&pid=1.7" 
                         alt="شاحنة نقل" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h3 class="font-bold text-lg mb-2">شاحنة تبريد - 10 طن</h3>
                        <p class="text-gray-600 mb-2">
                            <i class="fas fa-user text-green-600 ml-2"></i>
                            محمد علي
                        </p>
                        <p class="text-gray-600 mb-2">
                            <i class="fas fa-map-marked-alt text-green-600 ml-2"></i>
                             ينقل إلى جميع مناطق تبسة
                        </p>
                        <p class="text-gray-600 mb-3">
                            <i class="fas fa-tags text-green-600 ml-2"></i>
                            5000 DA للشحنة داخل المدينة
                        </p>
                        <button class="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md">
                            اطلب النقل
                        </button>
                    </div>
                </div>
                
               <div class="product-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300">
                    <img src="https://tse4.mm.bing.net/th/id/OIP.ygwsIVMEGqe7LpZX_OcIrAHaJ4?r=0&pid=ImgDet&w=191&h=254&c=7&o=7&rm=3"
                         alt="شاحنة نقل" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h3 class="font-bold text-lg mb-2">شاحنة نقل - 6 طن</h3>
                        <p class="text-gray-600 mb-2">
                            <i class="fas fa-user text-green-600 ml-2"></i>
                            يوسف
                        </p>
                        <p class="text-gray-600 mb-2">
                            <i class="fas fa-map-marked-alt text-green-600 ml-2"></i>
                             ينقل إلى جميع مناطق تبسة
                        </p>
                        <p class="text-gray-600 mb-3">
                            <i class="fas fa-tags text-green-600 ml-2"></i>
                            5000 DA للشحنة داخل المدينة
                        </p>
                        <button class="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md">
                            اطلب النقل
                        </button>
                    </div>
                </div>
                
                
          
              
            </div>
        </div>
    </div>
</section>
*/