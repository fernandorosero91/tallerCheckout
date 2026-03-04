import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-12 min-h-screen" style={{ backgroundColor: '#e8e8e8' }}>
      {/* Left Side - Shopping Cart */}
      <div className="col-span-8 flex flex-col justify-between bg-white p-12">
        {/* Header */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <span className="text-5xl font-bold text-black">O</span>
            <h1 className="text-2xl font-light tracking-wide" style={{ color: '#9ca3af' }}>Your Shopping Cart</h1>
          </div>

          {/* Cart Items */}
          <div className="flex flex-col gap-4">
            {/* Item 1 - Denim T-Shirt */}
            <div className="flex items-center rounded-xl p-5 relative" style={{ backgroundColor: '#f5f5f5' }}>
              <div className="bg-white rounded-full flex items-center justify-center overflow-hidden" style={{ width: '90px', height: '90px', minWidth: '90px' }}>
                <Image 
                  src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=200&h=200&fit=crop" 
                  alt="Denim T-Shirt"
                  width={90}
                  height={90}
                  className="object-cover"
                />
              </div>
              <div className="flex items-center flex-1 ml-6">
                <div style={{ width: '160px' }}>
                  <p className="text-base font-medium text-black">Denim T-Shirt</p>
                  <p className="text-xs" style={{ color: '#b0b0b0' }}>Ref: 037197855</p>
                </div>
                <div className="text-sm ml-6" style={{ width: '70px', color: '#6b7280' }}>Blue</div>
                <div className="flex items-center gap-3 ml-8">
                  <button className="flex items-center justify-center rounded-full text-white text-sm" style={{ width: '22px', height: '22px', backgroundColor: '#b8b8b8' }}>+</button>
                  <span className="text-base text-black">2</span>
                  <button className="flex items-center justify-center rounded-full text-white text-sm" style={{ width: '22px', height: '22px', backgroundColor: '#b8b8b8' }}>−</button>
                </div>
                <div className="text-base font-medium text-black text-right ml-6" style={{ width: '130px' }}>7500.00 NGN</div>
              </div>
              <button className="absolute top-5 right-6 text-xl" style={{ color: '#b0b0b0' }}>×</button>
            </div>

            {/* Item 2 - Denim Pants */}
            <div className="flex items-center rounded-xl p-5 relative" style={{ backgroundColor: '#f5f5f5' }}>
              <div className="bg-white rounded-full flex items-center justify-center overflow-hidden" style={{ width: '90px', height: '90px', minWidth: '90px' }}>
                <Image 
                  src="https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=200&fit=crop" 
                  alt="Denim Pants"
                  width={90}
                  height={90}
                  className="object-cover"
                />
              </div>
              <div className="flex items-center flex-1 ml-6">
                <div style={{ width: '160px' }}>
                  <p className="text-base font-medium text-black">Denim Pants</p>
                  <p className="text-xs" style={{ color: '#b0b0b0' }}>Ref: 011018220</p>
                </div>
                <div className="text-sm ml-6" style={{ width: '70px', color: '#6b7280' }}>Blue</div>
                <div className="flex items-center gap-3 ml-8">
                  <button className="flex items-center justify-center rounded-full text-white text-sm" style={{ width: '22px', height: '22px', backgroundColor: '#b8b8b8' }}>+</button>
                  <span className="text-base text-black">3</span>
                  <button className="flex items-center justify-center rounded-full text-white text-sm" style={{ width: '22px', height: '22px', backgroundColor: '#b8b8b8' }}>−</button>
                </div>
                <div className="text-base font-medium text-black text-right ml-6" style={{ width: '130px' }}>9000.00 NGN</div>
              </div>
              <button className="absolute top-5 right-6 text-xl" style={{ color: '#b0b0b0' }}>×</button>
            </div>

            {/* Item 3 - Sony Smartwatch */}
            <div className="flex items-center rounded-xl p-5 relative" style={{ backgroundColor: '#f5f5f5' }}>
              <div className="bg-white rounded-full flex items-center justify-center overflow-hidden" style={{ width: '90px', height: '90px', minWidth: '90px' }}>
                <Image 
                  src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=200&h=200&fit=crop" 
                  alt="Sony Smartwatch"
                  width={90}
                  height={90}
                  className="object-cover"
                />
              </div>
              <div className="flex items-center flex-1 ml-6">
                <div style={{ width: '160px' }}>
                  <p className="text-base font-medium text-black">Sony Smartwat...</p>
                  <p className="text-xs" style={{ color: '#b0b0b0' }}>Ref: 004822981</p>
                </div>
                <div className="text-sm ml-6" style={{ width: '70px', color: '#6b7280' }}>Black</div>
                <div className="flex items-center gap-3 ml-8">
                  <button className="flex items-center justify-center rounded-full text-white text-sm" style={{ width: '22px', height: '22px', backgroundColor: '#b8b8b8' }}>+</button>
                  <span className="text-base text-black">1</span>
                  <button className="flex items-center justify-center rounded-full text-white text-sm" style={{ width: '22px', height: '22px', backgroundColor: '#b8b8b8' }}>−</button>
                </div>
                <div className="text-base font-medium text-black text-right ml-6" style={{ width: '130px' }}>24500.00 NGN</div>
              </div>
              <button className="absolute top-5 right-6 text-xl" style={{ color: '#b0b0b0' }}>×</button>
            </div>

            {/* Item 4 - Cognac Oxford */}
            <div className="flex items-center rounded-xl p-5 relative" style={{ backgroundColor: '#f5f5f5' }}>
              <div className="bg-white rounded-full flex items-center justify-center overflow-hidden" style={{ width: '90px', height: '90px', minWidth: '90px' }}>
                <Image 
                  src="https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=200&h=200&fit=crop" 
                  alt="Cognac Oxford"
                  width={90}
                  height={90}
                  className="object-cover"
                />
              </div>
              <div className="flex items-center flex-1 ml-6">
                <div style={{ width: '160px' }}>
                  <p className="text-base font-medium text-black">Cognac Oxford</p>
                  <p className="text-xs" style={{ color: '#b0b0b0' }}>Ref: 005174902</p>
                </div>
                <div className="text-sm ml-6" style={{ width: '70px', color: '#6b7280' }}>Brown</div>
                <div className="flex items-center gap-3 ml-8">
                  <button className="flex items-center justify-center rounded-full text-white text-sm" style={{ width: '22px', height: '22px', backgroundColor: '#b8b8b8' }}>+</button>
                  <span className="text-base text-black">1</span>
                  <button className="flex items-center justify-center rounded-full text-white text-sm" style={{ width: '22px', height: '22px', backgroundColor: '#b8b8b8' }}>−</button>
                </div>
                <div className="text-base font-medium text-black text-right ml-6" style={{ width: '130px' }}>4500.00 NGN</div>
              </div>
              <button className="absolute top-5 right-6 text-xl" style={{ color: '#b0b0b0' }}>×</button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-8 pt-6">
          <button className="flex items-center gap-2 text-sm" style={{ color: '#9ca3af' }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Shop</span>
          </button>
          <div className="flex items-center gap-4">
            <span className="text-sm" style={{ color: '#6b7280' }}>Subtotal:</span>
            <span className="text-lg font-semibold text-black">45500.00 NGN</span>
          </div>
        </div>
      </div>

      {/* Right Side - Card Details */}
      <div className="col-span-4 flex flex-col relative" style={{ backgroundColor: '#4a4a4a' }}>
        {/* Decorative circles */}
        <div className="absolute left-0 rounded-full" style={{ width: '40px', height: '40px', top: '130px', marginLeft: '-20px', backgroundColor: '#6a6a6a' }}></div>
        <div className="absolute left-0 rounded-full" style={{ width: '32px', height: '32px', top: '170px', marginLeft: '-16px', backgroundColor: '#d4af37' }}></div>
        <div className="absolute left-0 rounded-full" style={{ width: '40px', height: '40px', top: '210px', marginLeft: '-20px', backgroundColor: '#6a6a6a' }}></div>

        <div className="flex flex-col flex-1 p-14 pt-28">
          <h2 className="text-4xl font-light mb-16 tracking-wide" style={{ color: '#d4af37', letterSpacing: '1px' }}>Card Details</h2>

          {/* Card Type Selection */}
          <div className="flex flex-col mb-14">
            <label className="text-sm mb-6 font-light tracking-wide" style={{ color: '#d5d5d5' }}>Select Card Type</label>
            <div className="flex gap-5 items-center">
              <button className="bg-white rounded-lg flex items-center justify-center shadow-lg" style={{ width: '64px', height: '44px' }}>
                <div className="flex items-center gap-1">
                  <div className="rounded-full" style={{ width: '20px', height: '20px', backgroundColor: '#eb001b' }}></div>
                  <div className="rounded-full" style={{ width: '20px', height: '20px', backgroundColor: '#f79e1b', marginLeft: '-8px' }}></div>
                </div>
              </button>
              <button className="text-base font-medium tracking-wider" style={{ color: '#8a8a8a' }}>VISA</button>
              <button className="text-base font-medium tracking-wider italic" style={{ color: '#8a8a8a' }}>Verve</button>
            </div>
          </div>

          {/* Card Number */}
          <div className="flex flex-col mb-14">
            <label className="text-sm mb-5 font-light tracking-wide" style={{ color: '#d5d5d5' }}>Card Number</label>
            <input 
              type="text" 
              className="bg-transparent w-full focus:outline-none text-base"
              style={{ borderBottom: '1.5px solid #6a6a6a', paddingBottom: '14px', color: '#ffffff' }}
            />
          </div>

          {/* Expiry Date and CVV */}
          <div className="flex gap-12 mb-16">
            <div className="flex flex-col flex-1">
              <label className="text-sm mb-5 font-light tracking-wide" style={{ color: '#d5d5d5' }}>Expiry Date</label>
              <input 
                type="text" 
                className="bg-transparent w-full focus:outline-none text-base"
                style={{ borderBottom: '1.5px solid #6a6a6a', paddingBottom: '14px', color: '#8a8a8a' }}
                placeholder="__ / __ / __"
              />
            </div>
            <div className="flex flex-col" style={{ width: '90px' }}>
              <label className="text-sm mb-5 font-light tracking-wide" style={{ color: '#d5d5d5' }}>CVV</label>
              <input 
                type="text" 
                className="bg-transparent w-full focus:outline-none text-center text-base"
                style={{ borderBottom: '1.5px solid #6a6a6a', paddingBottom: '14px', color: '#8a8a8a' }}
                placeholder="___"
              />
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <button className="w-full font-bold text-lg flex items-center justify-center tracking-wide" style={{ backgroundColor: '#f5c842', color: '#3a3a3a', padding: '20px 0', letterSpacing: '1px' }}>
          Checkout
        </button>
      </div>
    </div>
  );
}
