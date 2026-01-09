import React from "react";

export default function Header() {
    return (
        <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-10" dir="rtl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* الشعار */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <svg className="h-10 w-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-2 text-xl font-bold text-green-800">AGRI MARKET</span>
                        </div>
                    </div>

                    {/* القائمة الرئيسية لسطح المكتب */}
                    <div className="hidden md:flex items-center space-x-4 space-x-reverse">
                        <a href="#marketplace" className="nav-link flex items-center text-green-800 hover:text-green-600 px-3 py-2 font-medium mx-1">
                            <i className="fas fa-store ml-2"></i> السوق
                        </a>

                        <a href="#a" className="nav-link flex items-center text-green-800 hover:text-green-600 px-3 py-2 font-medium mx-1">
                            <i className="fas fa-store ml-2"></i> الادوية و المبيدات
                        </a>

                        <a href="#a" className="nav-link flex items-center text-green-800 hover:text-green-600 px-3 py-2 font-medium mx-1">
                            <i className="fas fa-store ml-2"></i> البذور و الشتلة
                        </a>

                        <a href="#labor" className="nav-link flex items-center text-green-800 hover:text-green-600 px-3 py-2 font-medium mx-1">
                            <i className="fas fa-users ml-2"></i> العمالة
                        </a>

                        <a href="#transport" className="nav-link flex items-center text-green-800 hover:text-green-600 px-3 py-2 font-medium mx-1">
                            <i className="fas fa-truck ml-2"></i> النقل
                        </a>

                        <a href="#rentals" className="nav-link flex items-center text-green-800 hover:text-green-600 px-3 py-2 font-medium mx-1">
                            <i className="fas fa-tractor ml-2"></i> التأجير
                        </a>

                        {/* زر إضافة عرض */}
                        <button
                            onClick={() => window.openAddForm && window.openAddForm()}
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center"
                        >
                            <i className="fas fa-plus ml-2"></i> أضف عرضك
                        </button>

                        {/* سلة التسوق */}
                        <div className="relative">
                            <button className="cart-button p-2 relative">
                                <i className="fas fa-shopping-cart text-xl text-green-800"></i>
                                <span className="cart-count absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center hidden">0</span>
                            </button>

                            <div id="cart-dropdown" className="hidden absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-lg z-50 border border-gray-200">
                                <div className="p-3 border-b border-gray-200">
                                    <h3 className="font-bold text-green-800">سلة التسوق</h3>
                                </div>
                                <div id="cart-items" className="max-h-96 overflow-y-auto">
                                    {/* سيتم ملؤها بالجافاسكريبت */}
                                </div>
                                <div id="cart-total"></div>
                            </div>
                        </div>

                        {/* الملف الشخصي */}
                                     <select name="" id=""    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center">
                                <option value=""  className="bg-white hover:bg-green text-black">
                           
                             
                                <span className="ml-2 hidden lg:inline">حسابي</span>
                            
                            </option>

                           <option value="" className="bg-white hover:bg-green text-black">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">
                                    <i className="fas fa-user-circle ml-2"></i> الملف الشخصي
                                </a></option>
                             <option value=""  className="bg-white hover:bg-green text-black">   <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">
                                    <i className="fas fa-shopping-bag ml-2"></i> طلباتي
                                </a> </option>
                             <option value=""  className="bg-white hover:bg-blue text-black" >   <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">
                                    <i className="fas fa-cog ml-2"></i> الإعدادات
                                </a> </option>
                                <div className="border-t border-gray-100"></div>
                               <option value=""  className="bg-white hover:bg-green text-black"> <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">
                                    <i className="fas fa-sign-out-alt ml-2"></i> تسجيل خروج
                                </a> </option>
                            
                        
                        </select>
                    </div>

                    {/* زر القائمة المتنقلة */}
                    <div className="flex items-center md:hidden">
                        <button
                            id="mobile-menu-button"
                            className="text-gray-500 hover:text-green-600 focus:outline-none"
                            onClick={() => {
                                const el = document.getElementById("mobile-menu");
                                el?.classList.toggle("hidden");
                            }}
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* القائمة المتنقلة */}
            <div id="mobile-menu" className="mobile-menu hidden md:hidden bg-white shadow-md">
                <div className="px-2 pt-2 pb-3 space-y-2">
                    <a href="#marketplace" className="block px-3 py-2 text-green-800 font-medium hover:bg-green-50 rounded-md mx-1">
                        <i className="fas fa-store ml-3"></i> السوق
                    </a>
                    <a href="#labor" className="block px-3 py-2 text-green-800 font-medium hover:bg-green-50 rounded-md mx-1">
                     العمالة
                    </a>
                    <a href="#transport" className="block px-3 py-2 text-green-800 font-medium hover:bg-green-50 rounded-md mx-1">
                        النقل
                    </a>
                    <a href="#rentals" className="block px-3 py-2 text-green-800 font-medium hover:bg-green-50 rounded-md mx-1">
                       التأجير
                    </a>
                    <div className="pt-2 border-t border-gray-200 mx-2">
                        <a href="#" onClick={() => window.openAddForm && window.openAddForm()} className="block px-3 py-2 text-green-800 font-medium hover:bg-green-50 rounded-md">
                         أضف عرضك
                        </a>
                        <a href="#" className="block px-3 py-2 text-green-800 font-medium hover:bg-green-50 rounded-md">
                            السلة (3)
                        </a>
                        <a href="#" className="block px-3 py-2 text-green-800 font-medium hover:bg-green-50 rounded-md">
                             حسابي
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

