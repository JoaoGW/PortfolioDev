import Image, { StaticImageData } from 'next/image';

type TechFilterButtonTypes = {
  techLogo: StaticImageData,
  techName: string,
  filterAction: () => void
}

export function TechFilterButton({ techLogo, techName, filterAction }: TechFilterButtonTypes){
  return(
    <button 
      className="flex flex-row justify-center items-center gap-2 border-2 border-[#72BF6A] p-3 rounded-xl" 
      onClick={ () => filterAction }
    >
      <Image src={ techLogo } alt={`Logo ${ techName }`} width={38} height={38} />
      <span className='font-bold text-xl'>{ techName }</span>
    </button>
  )
}