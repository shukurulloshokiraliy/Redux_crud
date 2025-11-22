import React, { useState } from 'react';
import Burger from '../assets/images/menu-burger.svg'
const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Open Modal Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        <img src={Burger} alt="" className='w-6' />
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-start z-50">
          {/* Modal Content */}
          <div className="bg-white w-full max-w-md h-full overflow-y-auto animate-slide-in">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold">Profil</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                ✕
              </button>
            </div>

            {/* User Info */}
            <div className="p-6 border-b">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  EL
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Erniyozov Laziz</h3>
                  <p className="text-gray-600">+998913310907</p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              {/* Ma'lumotlarim */}
              <button className="w-full flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition">
                <span className="text-2xl">👤</span>
                <span className="text-gray-800">Ma'lumotlarim</span>
              </button>

              {/* Buyurtmalarim - Active */}
              <button className="w-full flex items-center gap-4 px-6 py-4 bg-green-50 border-l-4 border-green-500">
                <span className="text-2xl">🛍️</span>
                <span className="text-green-600 font-medium">Buyurtmalarim</span>
              </button>

              {/* Saralanganlar */}
              <button className="w-full flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition">
                <span className="text-2xl">❤️</span>
                <span className="text-gray-800">Saralanganlar</span>
              </button>

              {/* Sharhlrim */}
              <button className="w-full flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition">
                <span className="text-2xl">💬</span>
                <span className="text-gray-800">Sharhlrim</span>
              </button>

              {/* Manzillarim */}
              <button className="w-full flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition">
                <span className="text-2xl">📍</span>
                <span className="text-gray-800">Manzillarim</span>
              </button>

              {/* Bildirishnomalar */}
              <button className="w-full flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition relative">
                <span className="text-2xl">🔔</span>
                <span className="text-gray-800">Bildirishnomalar</span>
                <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  12
                </span>
              </button>
            </div>

            {/* Divider */}
            <div className="border-t my-2"></div>

            {/* Bottom Menu */}
            <div className="py-2">
              {/* Biz bilan bog'lanish */}
              <button className="w-full flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition">
                <span className="text-2xl">❓</span>
                <span className="text-gray-800">Biz bilan bog'lanish</span>
              </button>

              {/* Chiqish */}
              <button className="w-full flex items-center gap-4 px-6 py-4 hover:bg-red-50 transition text-red-500">
                <span className="text-2xl">🚪</span>
                <span className="font-medium">Chiqish</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Profile;