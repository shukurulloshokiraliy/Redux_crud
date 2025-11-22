import React from 'react';

const About_us = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Biz{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Haqimizda
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Biz zamonaviy texnologiyalar va innovatsion yechimlar orqali mijozlarimizga eng yaxshi xizmatni taqdim etamiz
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-blue-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Bizning Hikoyamiz</h2>
              <p className="text-gray-600 mb-4">
                2020-yilda tashkil etilgan MyApp kompaniyasi O'zbekistonda raqamli xizmatlar sohasida yetakchi o'rinlardan birini egallagan.
              </p>
              <p className="text-gray-600 mb-4">
                Bizning jamoamiz tajribali mutaxassislardan iborat bo'lib, mijozlarimizga eng yuqori sifatli mahsulot va xizmatlarni taqdim etishga intiladi.
              </p>
              <p className="text-gray-600">
                Bugungi kunda 10,000 dan ortiq foydalanuvchi bizning xizmatlarimizdan foydalanmoqda va bu son kundan-kunga ortib bormoqda.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center text-3xl">
                      🎯
                    </div>
                    <div>
                      <div className="text-2xl font-bold">Missiyamiz</div>
                      <div className="text-blue-100 text-sm">Innovatsiya va sifat</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center text-3xl">
                      👁️
                    </div>
                    <div>
                      <div className="text-2xl font-bold">Viziyamiz</div>
                      <div className="text-blue-100 text-sm">Kelajak texnologiyalari</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bizning{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Qadriyatlarimiz
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Biz quyidagi tamoyillar asosida ishlaymiz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2 border border-blue-100">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
              <span className="text-white text-3xl">💡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovatsiya</h3>
            <p className="text-gray-600 text-sm">Doimo yangi g'oyalar va yechimlarni qidiramiz</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2 border border-indigo-100">
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
              <span className="text-white text-3xl">🤝</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Hamkorlik</h3>
            <p className="text-gray-600 text-sm">Jamoada ishlash va o'zaro yordamlashish</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2 border border-blue-100">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
              <span className="text-white text-3xl">⭐</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Sifat</h3>
            <p className="text-gray-600 text-sm">Yuqori sifatli mahsulot va xizmatlar</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2 border border-indigo-100">
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
              <span className="text-white text-3xl">🎓</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">O'sish</h3>
            <p className="text-gray-600 text-sm">Doimiy rivojlanish va o'rganish</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bizning{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Jamoa
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional va tajribali mutaxassislar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2 overflow-hidden border border-blue-100">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-4xl font-bold text-blue-600">
                AS
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Alisher Sharipov</h3>
              <p className="text-blue-600 font-medium mb-2">CEO & Founder</p>
              <p className="text-gray-600 text-sm">10 yillik tajriba, texnologiya va biznes</p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2 overflow-hidden border border-indigo-100">
            <div className="h-48 bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-4xl font-bold text-indigo-600">
                NO
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Nilufar Olimova</h3>
              <p className="text-indigo-600 font-medium mb-2">CTO</p>
              <p className="text-gray-600 text-sm">8 yillik dasturlash va arxitektura tajribasi</p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2 overflow-hidden border border-blue-100">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-4xl font-bold text-blue-600">
                RK
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Rustam Karimov</h3>
              <p className="text-blue-600 font-medium mb-2">Design Lead</p>
              <p className="text-gray-600 text-sm">6 yillik UX/UI dizayn tajribasi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Biz bilan bog'laning!
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Savollaringiz bormi? Biz doimo sizga yordam berishga tayyormiz
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 hover:shadow-xl font-medium">
              Aloqa
            </button>
            <button className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105 font-medium">
              Email Yuborish
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About_us;