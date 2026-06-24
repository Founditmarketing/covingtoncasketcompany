import { useRef, useState } from 'react';
import { Play } from 'lucide-react';

export default function AboutUs() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    setPlaying(true);
  };

  return (
    <section
      className="section-frame relative py-24 overflow-hidden text-[#152239] font-serif bg-cover bg-center"
      style={{ backgroundImage: "url('/tanbackgroundtexture.png')" }}
    >
      {/* Tan texture + slight white overlay to keep it light and readable */}
      <div className="absolute inset-0 bg-white/60 pointer-events-none" />

      <div className="max-w-[96rem] mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-12 relative z-10">

        {/* Left: Video Spotlight */}
        <div className="w-full lg:w-7/12 relative group z-10">
          <div className="card-frame relative rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(21,34,57,0.25)] aspect-video border border-[#152239]/10 bg-black">
            <video
              ref={videoRef}
              src="/heritage-video.mp4"
              poster="/heritage-poster.jpg"
              controls={playing}
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />

            {/* Custom play overlay (hidden once playing) */}
            {!playing && (
              <button
                type="button"
                onClick={handlePlay}
                aria-label="Play the Covington heritage video"
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
              >
                <div className="absolute inset-0 bg-[#152239]/40 transition-colors duration-500 group-hover:bg-[#152239]/20" />
                <div className="relative w-16 h-16 bg-[#b1a17c]/20 border border-[#b1a17c]/50 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(177,161,124,0.3)] group-hover:scale-110 group-hover:bg-[#d21243] group-hover:border-[#d21243] transition-all duration-300">
                  <Play className="w-6 h-6 text-[#b1a17c] group-hover:text-white ml-1.5" />
                </div>
              </button>
            )}
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#b1a17c]/10 -z-10 rounded-full blur-3xl" />
        </div>

        {/* Right: Copy */}
        <div className="w-full lg:w-5/12 z-10">
          <h4 className="text-[#b1a17c] font-sans font-bold tracking-widest text-xs uppercase mb-4 flex items-center gap-2">
            <span className="h-px w-6 bg-[#b1a17c]" /> Our Heritage
          </h4>
          <h2 className="text-4xl md:text-5xl mb-8 leading-tight font-light text-[#152239]">
            Crafting Dignity. <br />
            <span className="italic text-[#b1a17c]">Empowering Directors.</span>
          </h2>
          <p className="font-sans text-[#152239]/70 text-sm leading-relaxed mb-6">
            At Covington, we believe every life deserves a dignified tribute. For over a century, our family has partnered directly with funeral homes to provide beautifully crafted metal and hardwood caskets.
          </p>
          <p className="font-sans text-[#152239]/70 text-sm leading-relaxed mb-8">
            We bypass the middleman, offering you uncompromising quality, bespoke customization through our exclusive Storyboards, and unparalleled service—ensuring you can offer the very best to the families you serve.
          </p>
          <button className="text-[#b1a17c] border-b border-[#b1a17c]/50 pb-1 font-sans font-bold uppercase tracking-widest text-xs hover:text-[#152239] hover:border-[#152239] transition-colors duration-300 flex items-center gap-2">
            Learn More About Covington <span className="text-lg leading-none">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
