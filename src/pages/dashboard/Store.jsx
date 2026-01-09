/*import { useEffect, useState } from "react";
import Footerr from "./partials/Footer";
import Header from "./partials/Header";
import Hero from "./partials/Hero";
import HowItWorks from "./partials/HowItWorks";
import Labor from "./partials/Labor";
import Products from "./partials/Products";
import Rentals from "./partials/Rentals";
import Transport from "./partials/Transport";
import React from "react";
export default function Store() {
  // try detect existing active tab in DOM (fallback to 'products')
  const detectInitial = () => {
    try {
      // Get from URL hash first
      const hash = window.location.hash.replace('#', '');
      if (hash) return hash;
      
      // Fallback to DOM
      const el = document.querySelector(".tab-content.active");
      return el?.id || "products";
    } catch {
      return "products";
    }
  };

  const [activeTab, setActiveTab] = useState(detectInitial);

  useEffect(() => {
    // expose legacy global function (or override) to switch tab from old JS / Hero buttons
    const prev = window.switchTab;
    window.switchTab = (tabId) => {
      if (!tabId) return;
      setActiveTab(tabId);
      // also emit legacy event for other listeners
      window.dispatchEvent(new CustomEvent("legacy:switchTab", { detail: { tabId } }));
    };

    // when activeTab changes, toggle class "active" on .tab-content sections so legacy css/js works
    function applyActiveClass(tab) {
      const tabs = document.querySelectorAll(".tab-content");
      tabs.forEach((t) => {
        if (t.id === tab) t.classList.add("active");
        else t.classList.remove("active");
      });
      // optionally update URL hash
      try { history.replaceState(null, "", `#${tab}`); } catch {}
    }

    applyActiveClass(activeTab);

    // listen to external legacy events too
    const onLegacySwitch = (e) => {
      const tab = e?.detail?.tabId;
      if (tab) setActiveTab(tab);
    };
    window.addEventListener("legacy:switchTab", onLegacySwitch);

    return () => {
      // cleanup
      if (prev) window.switchTab = prev;
      else delete window.switchTab;
      window.removeEventListener("legacy:switchTab", onLegacySwitch);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once to setup

  // keep DOM classes in sync whenever state updates
  useEffect(() => {
    const tabs = document.querySelectorAll(".tab-content");
    tabs.forEach((t) => {
      if (t.id === activeTab) t.classList.add("active");
      else t.classList.remove("active");
    });
    try { history.replaceState(null, "", `#${activeTab}`); } catch {}
  }, [activeTab]);

  return (
    <div dir="rtl">
      <Header />
      <Hero />

      <main className="mt-6">
  
        <div className="transition-all duration-300">
          {activeTab === "products" && (
            <div className="tab-content fade-in" id="products">
              <Products />
            </div>
          )}
          {activeTab === "labor" && (
            <div className="tab-content fade-in" id="labor">
              <Labor />
            </div>
          )}
          {activeTab === "transports" && (
            <div className="tab-content fade-in" id="transports">
              <Transport />
            </div>
          )}
          {activeTab === "rentals" && (
            <div className="tab-content fade-in" id="rentals">
              <Rentals />
            </div>
          )}
          {activeTab === "medicines" && (
            <div className="tab-content fade-in" id="medicines">
              <h2 className="text-2xl font-bold mb-4 text-right">الادوية والمبيدات</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                </div>
            </div>
          )}
          {activeTab === "seeds" && (
            <div className="tab-content fade-in" id="seeds">
              <h2 className="text-2xl font-bold mb-4 text-right">البذور و الشتلة</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  
              </div>
            </div>
          )}
        </div>
        <HowItWorks />
      </main>

      <Footerr />
    </div>
    
  );}
*/


// App.jsx
import React, { useEffect } from 'react';

import Header from './partials/Header';
import Hero from './partials/Hero';
import Products from './partials/Products';
import Labor from './partials/Labor';
import Transport from './partials/Transport';
import Rentals from './partials/Rentals';
import HowItWorks from './partials/HowItWorks';
//import Newsletter from './partials/Newsletter';
import Footerr from './partials/Footer';

import { useApp ,AppProvider} from './partials/Appcontext';

 const AppContent = () => {
  const { activeTab } = useApp();

  useEffect(() => {
    // Expose global functions for legacy compatibility
    window.switchTab = (tabId) => {
      // This will be handled by the context
      window.dispatchEvent(new CustomEvent('switchTab', { detail: { tabId } }));
    };

    return () => {
      delete window.switchTab;
    };
  }, []);

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'products':
        return <Products />;
      case 'labor':
        return <Labor />;
      case 'transport':
        return <Transport />;
      case 'rentals':
        return <Rentals />;
      case 'a':
        return <Products />; // Fallback for 'a' tab
      default:
        return <Products />;
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      
      <main className="mt-6">
        {renderActiveTab()}
        <HowItWorks />
        
      </main>

      <Footerr />
    </div>
  );
}; 
const App = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
