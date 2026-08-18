import { motion } from "motion/react";

import { ChevronRight, LucideIcon } from "lucide-react";

type PresentationTopicsTypes = {
  icon: LucideIcon,
  title: string,
  description: string,
  actionRoute: () => void
}

export function PresentationTopics({ icon: Icon, title, description, actionRoute }: PresentationTopicsTypes){
  return(
    <motion.button 
      className="group relative w-full flex items-center gap-4 p-6 rounded-xl bg-gradient-to-r self-center from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700 border border-neutral-700 hover:border-neutral-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-accent-orange/10 cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      onClick={ actionRoute }
    >
      <div className="flex-shrink-0 p-3 rounded-lg bg-accent-orange group-hover:bg-accent-orange/90 transition-all duration-300">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1 text-left">
        <p className="text-white font-semibold text-lg mb-1 group-hover:text-accent-orange transition-colors duration-300">
          { title }
        </p>
        <p className="text-neutral-400 text-sm leading-relaxed">
          { description }
        </p>
      </div>
      <ChevronRight 
        className="w-6 h-6 text-neutral-500 group-hover:text-accent-orange group-hover:translate-x-1 transition-all duration-300"
      />
      <div className="absolute inset-0 rounded-xl bg-accent-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.button>
  )
}
