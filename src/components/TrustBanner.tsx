export default function TrustBanner() {
  return (
    <section className="bg-[#0d1625] py-6 border-y border-white/5 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
        
        <div className="text-[#b1a17c] text-xs font-bold w-full md:w-64 border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:pr-6 mb-4 md:mb-0 text-center md:text-left">
          THE COVINGTON LEGACY
          <div className="text-[9px] opacity-50 font-normal mt-1">FAMILY OWNED SINCE 1924</div>
        </div>
        
        <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-4 gap-4 px-0 md:px-8 opacity-40 grayscale contrast-125">
          <div className="flex flex-col items-center text-center">
            <span className="text-[10px] md:text-xs font-bold text-white">PREMIER PARTNER: OAK RIDGE</span>
            <span className="text-[8px] text-white">ESTABLISHED 1932</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-[10px] md:text-xs font-bold uppercase text-white">Southern Funeral Directors</span>
            <span className="text-[8px] text-white">MEMBER SINCE 1945</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-[10px] md:text-xs font-bold text-white">BBB ACCREDITED A+</span>
            <span className="text-[8px] text-white">VETERAN RECOGNIZED</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-[10px] md:text-xs font-bold uppercase text-white">FLORIDA DIRECTORS GUILD</span>
            <span className="text-[8px] text-white">GOLD STATUS</span>
          </div>
        </div>

        <div className="hidden md:flex gap-1.5 ml-8">
           <div className="w-1.5 h-1.5 rounded-full bg-[#d21243]" />
           <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
           <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
        </div>

      </div>
    </section>
  );
}
