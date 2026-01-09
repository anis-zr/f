import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800">
            كيف يعمل AGRI MARKET؟
          </h2>
          <p className="text-gray-600 mt-2">
            منصة متكاملة لجميع احتياجاتك الزراعية
          </p>
        </div>

        {/* البطاقات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* البطاقة 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-store text-green-600 text-xl"></i>
            </div>
            <h3 className="font-bold text-lg mb-2">بيع أو اشترِ منتجات</h3>
            <p className="text-gray-600">
              سوق متكامل لبيع وشراء المنتجات الزراعية بكل سهولة
            </p>
          </div>

          {/* البطاقة 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-users text-green-600 text-xl"></i>
            </div>
            <h3 className="font-bold text-lg mb-2">ابحث عن عمالة</h3>
            <p className="text-gray-600">
              تواصل مع عمالة موسمية محترفة لمساعدتك في مواسم الحصاد
            </p>
          </div>

          {/* البطاقة 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-truck text-green-600 text-xl"></i>
            </div>
            <h3 className="font-bold text-lg mb-2">نظم النقل</h3>
            <p className="text-gray-600">
              جدولة نقل محاصيلك مع سائقين موثوقين
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
