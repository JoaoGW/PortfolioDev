'use client';
import { useEffect } from 'react';

import Image, { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

import { X, Briefcase, MapPin, Calendar, Code, Users, ChevronRight } from 'lucide-react';

type Responsibility = {
  title: string;
  description: string;
  achievements?: string[];
};

type Technology = {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
};

type EnterpriseModalProps = {
  isOpen: boolean;
  onClose: () => void;
  companyLogo: StaticImageData;
  companyName: string;
  role: string;
  employmentType: 'Tempo integral' | 'Meio período' | 'Freelance' | 'Estágio' | 'Contrato';
  remuneration: 'Remunerado' | 'Não Remunerado';
  startDate: string;
  endDate?: string;
  duration: string;
  location: string;
  description?: string;
  responsibilities?: Responsibility[];
  technologies?: Technology[];
  achievements?: string[];
};

export function EnterpriseModal({
  isOpen,
  onClose,
  companyLogo,
  companyName,
  role,
  employmentType,
  remuneration,
  startDate,
  endDate,
  duration,
  location,
  description,
  responsibilities = [],
  technologies = [],
  achievements = [],
}: EnterpriseModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const employmentTypeColors = {
    'Tempo integral': 'from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-400',
    'Meio período': 'from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-400',
    'Freelance': 'from-orange-500/20 to-orange-600/20 border-orange-500/30 text-orange-400',
    'Estágio': 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 text-cyan-400',
    'Contrato': 'from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 text-emerald-400',
  };

  const remunerationColors = {
    'Remunerado': 'bg-green-500/20 text-green-400 border-green-500/30',
    'Não Remunerado': 'bg-gray-500/20 text-gray-400 border-gray-500/30',
  };

  const techCategoryColors = {
    frontend: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
    backend: 'border-green-500/40 text-green-400 bg-green-500/10',
    database: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
    tools: 'border-orange-500/40 text-orange-400 bg-orange-500/10',
    other: 'border-slate-500/40 text-slate-400 bg-slate-500/10',
  };

  return (
    <AnimatePresence>
      { isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={ onClose }
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-slate-950 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto border border-slate-800"
              onClick={ (e) => e.stopPropagation() }
            >
              <div className="relative h-52 bg-slate-950 px-8 pb-8 pt-12">
                <div className="absolute inset-0 bg-gray-900" />
                
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={ onClose }
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors border border-white/10"
                >
                  <X className="w-6 h-6 text-white" />
                </motion.button>

                <div className="relative flex items-start gap-6 h-full">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="w-28 h-28 bg-white rounded-xl shadow-2xl p-3 flex items-center justify-center border border-slate-200"
                  >
                    <Image
                      src={ companyLogo }
                      alt={ companyName }
                      className="object-contain max-w-full max-h-full"
                    />
                  </motion.div>

                  <div className="flex-1 pt-2">
                    <motion.h2
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl font-bold text-white mb-2"
                    >
                      { companyName }
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 }}
                      className="text-xl text-slate-300 font-semibold mb-3"
                    >
                      { role }
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex flex-wrap gap-2"
                    >
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${employmentTypeColors[employmentType]} border backdrop-blur-sm`}>
                        { employmentType }
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${remunerationColors[remuneration]}`}>
                        { remuneration }
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="overflow-y-auto max-h-[calc(90vh-13rem)] p-8 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  <div className="flex items-start gap-3 p-4 bg-slate-900/50 rounded-lg border border-slate-800">
                    <Calendar className="w-5 h-5 text-[#0096C7] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 mb-1 uppercase tracking-wide">Período</p>
                      <p className="font-semibold text-white text-sm">{startDate} - {endDate || 'Atual'}</p>
                      <p className="text-xs text-slate-400 mt-1">{duration}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-slate-900/50 rounded-lg border border-slate-800">
                    <MapPin className="w-5 h-5 text-[#72BF6A] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 mb-1 uppercase tracking-wide">Localização</p>
                      <p className="font-semibold text-white text-sm">{location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-slate-900/50 rounded-lg border border-slate-800">
                    <Briefcase className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 mb-1 uppercase tracking-wide">Modalidade</p>
                      <p className="font-semibold text-white text-sm">{employmentType}</p>
                    </div>
                  </div>
                </motion.div>

                { description && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="p-5 bg-gradient-to-br from-slate-900/50 to-slate-900/30 rounded-lg border border-slate-800"
                  >
                    <p className="text-slate-300 leading-relaxed">{description}</p>
                  </motion.div>
                )}

                { technologies.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <Code className="w-5 h-5 text-[#0096C7]" />
                      Tecnologias e Ferramentas
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      { technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.0 + index * 0.03 }}
                          className={`px-3 py-2 rounded-lg text-sm font-medium border ${ techCategoryColors[tech.category] } hover:scale-105 transition-transform`}
                        >
                          { tech.name }
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}

                { responsibilities.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <Users className="w-5 h-5 text-[#72BF6A]" />
                      Responsabilidades e Realizações
                    </h3>
                    <div className="space-y-4">
                      { responsibilities.map((resp, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          className="p-5 bg-slate-900/50 rounded-lg border border-slate-800 hover:border-[#72BF6A]/30 transition-all group"
                        >
                          <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-[#72BF6A] group-hover:translate-x-1 transition-transform" />
                            { resp.title }
                          </h4>
                          <p className="text-sm text-slate-400 leading-relaxed mb-3 ml-6">
                            { resp.description }
                          </p>
                          {resp.achievements && resp.achievements.length > 0 && (
                            <ul className="space-y-1.5 ml-6">
                              {resp.achievements.map((achievement, idx) => (
                                <li key={idx} className="text-sm text-slate-400 flex items-start gap-2">
                                  <span className="text-[#0096C7] mt-1.5 text-xs">▪</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}