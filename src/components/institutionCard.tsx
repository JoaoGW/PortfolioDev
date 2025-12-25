import Image, { StaticImageData } from "next/image";

type InstitutionCardTypes = {
  institutionLogo: StaticImageData,
  institutionAltImage: string,
  institurionName: string,
  institutionCourse: string,
  institutionCourseLevel: string,
  institurionOpenDetails: () => void
}

export function InstitutionCard({ institutionLogo, institutionAltImage, institurionName, institutionCourse, institutionCourseLevel, institurionOpenDetails }: InstitutionCardTypes) {
  return (
    <button className="group relative w-80 min-h-[32.8125rem]" onClick={ institurionOpenDetails }>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#72BF6A] to-[#0096C7] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
      <div className="relative flex w-full h-full flex-col items-center rounded-2xl bg-slate-950 p-8 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <div className="relative mb-6 p-4 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 shadow-xl w-[212px] h-[212px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#72BF6A]/10 to-[#0096C7]/10 rounded-xl"></div>
          <Image
            src={ institutionLogo }
            width={180}
            height={180}
            alt={ institutionAltImage }
            className='relative z-10 transition-transform duration-300 group-hover:scale-110 object-contain max-w-full max-h-full'
          />
        </div>
        <div className="w-full space-y-3 flex flex-col flex-1">
          <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-[#72BF6A] to-[#0096C7] bg-clip-text text-transparent">
            { institurionName }
          </h3>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
          <p className="text-slate-300 text-center font-semibold flex-1 flex items-center justify-center">
            { institutionCourse }
          </p>
          <div className="flex justify-center">
            <span className="px-4 py-1.5 bg-gradient-to-r from-[#72BF6A]/20 to-[#0096C7]/20 border border-[#72BF6A]/30 rounded-full text-sm text-slate-200 font-semibold">
              { institutionCourseLevel }
            </span>
          </div>
        </div>
      </div>
    </button>
  )
}