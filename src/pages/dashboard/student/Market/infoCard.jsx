// src/pages/dashboard/student/components/InfoCard.jsx
import React from 'react';

export default function InfoCard({ label, quantite, onClick }) {
  return (
    <div
      className="flex-1 bg-white p-6 rounded-xl shadow-md border border-gray-200/50 hover:shadow-lg transition cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <p className="text-xl font-medium opacity-80">{label}</p>
        <p className="text-2xl font-bold">{quantite}</p>
      </div>
    </div>
  );
}