import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen" style={{ backgroundColor: '#e8e8e8' }}>
      {/* Left Side - Shopping Cart */}
      <div className="col-span-1 lg:col-span-8 flex flex-col justify-between bg-white p-6 md:p-12">
        {/* Header */}
        <div>
          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <span className="text-4xl md:text-5xl font-bold text-black">O</span>
            <h1 className="text-xl md:text-2xl font-light tracking-wide" style={{ color: '#9ca3af' }}>Your Shopping Cart</h1>
          </div>

          {/* Cart Items */}
          <div className="flex flex-col gap-3 md:gap-4">
            {/* Item 1 - Denim T-Shirt */}
            <div className="flex items-center rounded-xl p-4 md:p-5 relative" style={{ backgroundColor: '#f5f5f5' }}>
              <div className="bg-white rounded-full flex items-center justify-center overflow-hidden" style={{ width: '70px', height: '70px', minWidth: '70px' }}>
                <Image 
                  src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=200&h=200&fit=crop" 
                  alt="Denim T-Shirt"
                  width={70}
                  height={70}
                  className="object-cover"
                />
              </div>
              <div className="flex items-center flex-1 ml-4 md:ml-6 flex-wrap md:flex-nowrap gap-2 md:gap-0">
                <div className="w-full md:w-auto" style={{ minWidth: '140px' }}>
                  <p className="text-sm md:text-base font-medium text-black">Denim T-Shirt</p>
                  <p className="text-xs" style={{ color: '#b0b0b0' }}>Ref: 037197855</p>
                </div>
                <div className="text-xs md:text-sm md:ml-6" style={{ width: '60px', color: '#6b7280' }}>Blue</div>
                <div className="flex items-center gap-2 md:gap-3 md:ml-8">
                  <button className="flex items-center justify-center rounded-full text-white text-xs md:text-sm" style={{ width: '20px', height: '20px', backgroundColor: '#b8b8b8' }}>+</button>
                  <span className="text-sm md:text-base text-black">2</span>
                  <button className="flex items-center justify-center rounded-full text-white text-xs md:text-sm" style={{ width: '20px', height: '20px', backgroundColor: '#b8b8b8' }}>−</button>
                </div>
                <div className="text-sm md:text-base font-medium text-black text-right md:ml-6" style={{ width: '110px' }}>7500.00 NGN</div>
              </div>
              <button className="absolute top-4 right-4 text-lg md:text-xl" style={{ color: '#b0b0b0' }}>×</button>
            </div>

            {/* Item 2 - Denim Pants */}
            <div className="flex items-center rounded-xl p-4 md:p-5 relative" style={{ backgroundColor: '#f5f5f5' }}>
              <div className="bg-white rounded-full flex items-center justify-center overflow-hidden" style={{ width: '70px', height: '70px', minWidth: '70px' }}>
                <Image 
                  src="https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=200&fit=crop" 
                  alt="Denim Pants"
                  width={70}
                  height={70}
                  className="object-cover"
                />
              </div>
              <div className="flex items-center flex-1 ml-4 md:ml-6 flex-wrap md:flex-nowrap gap-2 md:gap-0">
                <div className="w-full md:w-auto" style={{ minWidth: '140px' }}>
                  <p className="text-sm md:text-base font-medium text-black">Denim Pants</p>
                  <p className="text-xs" style={{ color: '#b0b0b0' }}>Ref: 011018220</p>
                </div>
                <div className="text-xs md:text-sm md:ml-6" style={{ width: '60px', color: '#6b7280' }}>Blue</div>
                <div className="flex items-center gap-2 md:gap-3 md:ml-8">
                  <button className="flex items-center justify-center rounded-full text-white text-xs md:text-sm" style={{ width: '20px', height: '20px', backgroundColor: '#b8b8b8' }}>+</button>
                  <span className="text-sm md:text-base text-black">3</span>
                  <button className="flex items-center justify-center rounded-full text-white text-xs md:text-sm" style={{ width: '20px', height: '20px', backgroundColor: '#b8b8b8' }}>−</button>
                </div>
                <div className="text-sm md:text-base font-medium text-black text-right md:ml-6" style={{ width: '110px' }}>9000.00 NGN</div>
              </div>
              <button className="absolute top-4 right-4 text-lg md:text-xl" style={{ color: '#b0b0b0' }}>×</button>
            </div>

            {/* Item 3 - Sony Smartwatch */}
            <div className="flex items-center rounded-xl p-4 md:p-5 relative" style={{ backgroundColor: '#f5f5f5' }}>
              <div className="bg-white rounded-full flex items-center justify-center overflow-hidden" style={{ width: '70px', height: '70px', minWidth: '70px' }}>
                <Image 
                  src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=200&h=200&fit=crop" 
                  alt="Sony Smartwatch"
                  width={70}
                  height={70}
                  className="object-cover"
                />
              </div>
              <div className="flex items-center flex-1 ml-4 md:ml-6 flex-wrap md:flex-nowrap gap-2 md:gap-0">
                <div className="w-full md:w-auto" style={{ minWidth: '140px' }}>
                  <p className="text-sm md:text-base font-medium text-black">Sony Smartwat...</p>
                  <p className="text-xs" style={{ color: '#b0b0b0' }}>Ref: 004822981</p>
                </div>
                <div className="text-xs md:text-sm md:ml-6" style={{ width: '60px', color: '#6b7280' }}>Black</div>
                <div className="flex items-center gap-2 md:gap-3 md:ml-8">
                  <button className="flex items-center justify-center rounded-full text-white text-xs md:text-sm" style={{ width: '20px', height: '20px', backgroundColor: '#b8b8b8' }}>+</button>
                  <span className="text-sm md:text-base text-black">1</span>
                  <button className="flex items-center justify-center rounded-full text-white text-xs md:text-sm" style={{ width: '20px', height: '20px', backgroundColor: '#b8b8b8' }}>−</button>
                </div>
                <div className="text-sm md:text-base font-medium text-black text-right md:ml-6" style={{ width: '110px' }}>24500.00 NGN</div>
              </div>
              <button className="absolute top-4 right-4 text-lg md:text-xl" style={{ color: '#b0b0b0' }}>×</button>
            </div>

            {/* Item 4 - Cognac Oxford */}
            <div className="flex items-center rounded-xl p-4 md:p-5 relative" style={{ backgroundColor: '#f5f5f5' }}>
              <div className="bg-white rounded-full flex items-center justify-center overflow-hidden" style={{ width: '70px', height: '70px', minWidth: '70px' }}>
                <Image 
                  src="https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=200&h=200&fit=crop" 
                  alt="Cognac Oxford"
                  width={70}
                  height={70}
                  className="object-cover"
                />
              </div>
              <div className="flex items-center flex-1 ml-4 md:ml-6 flex-wrap md:flex-nowrap gap-2 md:gap-0">
                <div className="w-full md:w-auto" style={{ minWidth: '140px' }}>
                  <p className="text-sm md:text-base font-medium text-black">Cognac Oxford</p>
                  <p className="text-xs" style={{ color: '#b0b0b0' }}>Ref: 005174902</p>
                </div>
                <div className="text-xs md:text-sm md:ml-6" style={{ width: '60px', color: '#6b7280' }}>Brown</div>
                <div className="flex items-center gap-2 md:gap-3 md:ml-8">
                  <button className="flex items-center justify-center rounded-full text-white text-xs md:text-sm" style={{ width: '20px', height: '20px', backgroundColor: '#b8b8b8' }}>+</button>
                  <span className="text-sm md:text-base text-black">1</span>
                  <button className="flex items-center justify-center rounded-full text-white text-xs md:text-sm" style={{ width: '20px', height: '20px', backgroundColor: '#b8b8b8' }}>−</button>
                </div>
                <div className="text-sm md:text-base font-medium text-black text-right md:ml-6" style={{ width: '110px' }}>4500.00 NGN</div>
              </div>
              <button className="absolute top-4 right-4 text-lg md:text-xl" style={{ color: '#b0b0b0' }}>×</button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-6 md:mt-8 pt-4 md:pt-6">
          <button className="flex items-center gap-2 text-xs md:text-sm" style={{ color: '#9ca3af' }}>
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Shop</span>
          </button>
          <div className="flex items-center gap-3 md:gap-4">
            <span className="text-xs md:text-sm" style={{ color: '#6b7280' }}>Subtotal:</span>
            <span className="text-base md:text-lg font-semibold text-black">45500.00 NGN</span>
          </div>
        </div>
      </div>

      {/* Right Side - Card Details */}
      <div className="col-span-1 lg:col-span-4 flex flex-col relative" style={{ backgroundColor: '#4a4a4a' }}>
        {/* Decorative circles - hidden on mobile */}
        <div className="hidden lg:block absolute left-0 rounded-full" style={{ 
          width: '20px', 
          height: '20px', 
          top: '135px', 
          marginLeft: '-10px', 
          backgroundColor: '#6a6a6a',
          boxShadow: 'inset -2px -2px 3px rgba(0, 0, 0, 0.5)',
          zIndex: 10
        }}></div>
        <div className="hidden lg:block absolute left-0 rounded-full" style={{ 
          width: '20px', 
          height: '20px', 
          top: '175px', 
          marginLeft: '-10px', 
          backgroundColor: '#d4af37',
          boxShadow: 'inset -2px -2px 3px rgba(0, 0, 0, 0.3), 0 0 10px rgba(212, 175, 55, 0.4)',
          zIndex: 10
        }}></div>
        <div className="hidden lg:block absolute left-0 rounded-full" style={{ 
          width: '20px', 
          height: '20px', 
          top: '215px', 
          marginLeft: '-10px', 
          backgroundColor: '#6a6a6a',
          boxShadow: 'inset -2px -2px 3px rgba(0, 0, 0, 0.5)',
          zIndex: 10
        }}></div>

        <div className="flex flex-col flex-1 p-8 md:p-12 lg:p-20 pt-12 md:pt-20 lg:pt-32">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-light mb-14 md:mb-16 lg:mb-20 tracking-wide" style={{ color: '#d4af37', letterSpacing: '2px' }}>Card Details</h2>

          {/* Card Type Selection */}
          <div className="flex flex-col mb-12 md:mb-14 lg:mb-16">
            <label className="text-sm mb-6 md:mb-7 font-light tracking-wide" style={{ color: '#b0b0b0' }}>Select Card Type</label>
            <div className="flex gap-6 md:gap-7 items-center">
              <button className="bg-white rounded-lg flex items-center justify-center shadow-md" style={{ width: '64px', height: '42px' }}>
                <div className="flex items-center">
                  <div className="rounded-full" style={{ width: '22px', height: '22px', backgroundColor: '#eb001b' }}></div>
                  <div className="rounded-full" style={{ width: '22px', height: '22px', backgroundColor: '#f79e1b', marginLeft: '-9px' }}></div>
                </div>
              </button>
              <button className="text-base font-medium tracking-wider" style={{ color: '#7a7a7a' }}>VISA</button>
              <button className="text-base font-medium tracking-wider italic" style={{ color: '#7a7a7a' }}>Verve</button>
            </div>
          </div>

          {/* Card Number */}
          <div className="flex flex-col mb-12 md:mb-14 lg:mb-16">
            <label className="text-sm mb-6 font-light tracking-wide" style={{ color: '#b0b0b0' }}>Card Number</label>
            <input 
              type="text" 
              className="bg-transparent w-full focus:outline-none text-base"
              style={{ borderBottom: '1.5px solid #6a6a6a', paddingBottom: '16px', color: '#ffffff' }}
            />
          </div>

          {/* Expiry Date and CVV */}
          <div className="flex gap-12 md:gap-14 mb-16 md:mb-18 lg:mb-20">
            <div className="flex flex-col flex-1">
              <label className="text-sm mb-6 font-light tracking-wide" style={{ color: '#b0b0b0' }}>Expiry Date</label>
              <input 
                type="text" 
                className="bg-transparent w-full focus:outline-none text-base"
                style={{ borderBottom: '1.5px solid #6a6a6a', paddingBottom: '16px', color: '#7a7a7a' }}
                placeholder="__ / __ / __"
              />
            </div>
            <div className="flex flex-col" style={{ width: '100px' }}>
              <label className="text-sm mb-6 font-light tracking-wide" style={{ color: '#b0b0b0' }}>CVV</label>
              <input 
                type="text" 
                className="bg-transparent w-full focus:outline-none text-center text-base"
                style={{ borderBottom: '1.5px solid #6a6a6a', paddingBottom: '16px', color: '#7a7a7a' }}
                placeholder="___"
              />
            </div>
          </div>
        </div>
        {/* Checkout Button */}
        <button className="w-full font-bold text-lg flex items-center justify-center tracking-wide" style={{ backgroundColor: '#f5c842', color: '#3a3a3a', padding: '22px 0', letterSpacing: '2px' }}>
          Checkout
        </button>
      </div>
    </div>
  );
}
