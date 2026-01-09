

import React from "react";

export default function Footerr() {
    return (
        <footer className="bg-green-900 text-white py-12" dir="rtl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4">AGRI MARKET</h3>
                        <p className="text-green-200 mb-4">منصة متكاملة لخدمات القطاع الزراعي</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-green-300 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-green-300 hover:text-white"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-green-300 hover:text-white"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-green-300 mb-4">الخدمات</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-green-200">سوق المنتجات</a></li>
                            <li><a href="#" className="hover:text-green-200">العمالة الموسمية</a></li>
                            <li><a href="#" className="hover:text-green-200">خدمات النقل</a></li>
                            <li><a href="#" className="hover:text-green-200">تأجير المعدات</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-green-300 mb-4">روابط سريعة</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-green-200">عن المنصة</a></li>
                            <li><a href="#" className="hover:text-green-200">الأسئلة الشائعة</a></li>
                            <li><a href="#" className="hover:text-green-200">سياسة الخصوصية</a></li>
                            <li><a href="#" className="hover:text-green-200">شروط الاستخدام</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-green-300 mb-4">اتصل بنا</h4>
                        <address className="not-italic text-green-200">
                            <p className="mb-2"><i className="fas fa-map-marker-alt ml-2"></i></p>
                            <p className="mb-2"><i className="fas fa-phone ml-2"></i> +966 12 345 6789</p>
                            <p className="mb-2"><i className="fas fa-envelope ml-2"></i> info@greenharvest.com</p>
                        </address>
                    </div>
                </div>

                <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-300">
                    <p>&copy; 2023 GreenHarvest. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
}
