import Image, { StaticImageData } from 'next/image';

interface BubbleProps {
  image: StaticImageData;
  alt: string;
  size?: number;
}

export function Bubble({ image, alt, size = 140 }: BubbleProps){
  return(
    <div className="relative inline-block animate-float">
      <div 
        className="relative rounded-full backdrop-blur-md bg-white/10 border border-white/20 overflow-hidden"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
        
        <div className="absolute top-[10%] left-[25%] w-[35%] h-[35%] bg-white/40 rounded-full blur-2xl" />
        
        <div className="absolute top-[15%] right-[20%] w-[20%] h-[20%] bg-white/50 rounded-full blur-lg" />
        
        <div className="relative w-full h-full flex items-center justify-center p-4">
          <Image
            src={image}
            alt={alt}
            width={size * 0.6}
            height={size * 0.6}
            className="object-contain"
          />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(-5px) translateX(-5px);
          }
          75% {
            transform: translateY(-15px) translateX(3px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}