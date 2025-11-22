import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Xush kelibsiz{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              MyApp
            </span>
            'ga
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Zamonaviy va qulay ilova sizning barcha ehtiyojlaringiz uchun. Bizning xizmatlarimiz bilan hayotingizni osonlashtiring.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 hover:shadow-xl font-medium">
              Boshlash
            </button>
            <button className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 font-medium">
              Batafsil
            </button>
          </div>
        </div>

      
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl transform rotate-1 opacity-20"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tez va Samarali</h3>
                <p className="text-gray-600 text-sm">Yuqori tezlik va samaradorlik bilan ishlaydigan platforma</p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Xavfsiz</h3>
                <p className="text-gray-600 text-sm">Ma'lumotlaringiz himoyalangan va xavfsiz</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Oson Foydalanish</h3>
                <p className="text-gray-600 text-sm">Intuitiv interfeys va qulay funksiyalar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nima uchun{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              MyApp
            </span>
            ?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bizning platformamiz sizga eng yaxshi tajribani taqdim etadi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
     
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 border border-blue-100">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
              <span className="text-white text-3xl">📱</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Responsive Dizayn</h3>
            <p className="text-gray-600 text-sm">Barcha qurilmalarda mukammal ishlaydi</p>
          </div>

  
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 border border-indigo-100">
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
              <span className="text-white text-3xl">🚀</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Yuqori Tezlik</h3>
            <p className="text-gray-600 text-sm">Cheksiz tezlik va ishlash qobiliyati</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 border border-blue-100">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
              <span className="text-white text-3xl">💎</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Sifat</h3>
            <p className="text-gray-600 text-sm">Eng yuqori sifatli xizmat ko'rsatish</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 border border-indigo-100">
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
              <span className="text-white text-3xl">🎨</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Zamonaviy UI</h3>
            <p className="text-gray-600 text-sm">Chiroyli va zamonaviy interfeys</p>
          </div>
        </div>
      </section>


      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Foydalanuvchilar</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Muvaffaqiyatli Buyurtmalar</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Mijozlar Mamnunligi</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-blue-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hoziroq Boshlang!
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Bizning platformamizga qo'shiling va ajoyib imkoniyatlardan foydalaning
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 hover:shadow-xl font-medium text-lg">
            Ro'yxatdan O'tish
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;