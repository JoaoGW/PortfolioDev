'use client';

import { useEffect } from 'react';

import Image, { StaticImageData } from 'next/image';

import { motion, AnimatePresence } from 'motion/react';

import { X, GraduationCap, MapPin, Calendar, Award, BookOpen, ExternalLink } from 'lucide-react';

type Certificate = {
  name: string;
  issuedDate: string;
  link?: string;
};

type Activity = {
  title: string;
  description: string;
  period?: string;
};

type InstitutionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  institutionLogo: StaticImageData;
  institutionName: string;
  courseType: string;
  courseName: string;
  modality: 'Presencial' | 'EAD' | 'Híbrido';
  startDate: string;
  endDate?: string;
  status: 'Concluído' | 'Em andamento' | 'Trancado';
  location?: string;
  description?: string;
  certificates?: Certificate[];
  activities?: Activity[];
  skills?: string[];
};

export function InstitutionModal({
  isOpen,
  onClose,
  institutionLogo,
  institutionName,
  courseType,
  courseName,
  modality,
  startDate,
  endDate,
  status,
  location,
  description,
  certificates = [],
  activities = [],
  skills = [],
}: InstitutionModalProps) {
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

  const modalityColors = {
    Presencial: 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
    EAD: 'from-purple-500/20 to-purple-600/20 border-purple-500/30',
    Híbrido: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30',
  };

  const statusColors = {
    Concluído: 'bg-green-500/20 text-green-400 border-green-500/30',
    'Em andamento': 'bg-blue-500/20 text-white border-blue-500/30',
    Trancado: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
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
              className="relative w-full max-w-4xl max-h-[90vh] bg-slate-950 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto border border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-48 bg-gradient-to-br from-[#72BF6A] to-[#0096C7] p-8">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={ onClose }
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </motion.button>

                <div className="flex items-center gap-6 h-full">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="w-32 h-32 bg-white rounded-xl shadow-xl p-4 flex items-center justify-center"
                  >
                    <Image
                      src={ institutionLogo }
                      alt={ institutionName }
                      className="object-contain max-w-full max-h-full"
                    />
                  </motion.div>

                  <div className="flex-1">
                    <motion.h2
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl font-bold text-white mb-2"
                    >
                      { institutionName }
                    </motion.h2>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex flex-wrap gap-2"
                    >
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${modalityColors[modality]} border backdrop-blur-sm text-white`}>
                        {modality}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${statusColors[status]}`}>
                        {status}
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="overflow-y-auto max-h-[calc(90vh-12rem)] p-8 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3 text-slate-300">
                    <GraduationCap className="w-5 h-5 text-[#72BF6A]" />
                    <div>
                      <p className="text-sm text-slate-500">{courseType}</p>
                      <p className="text-xl font-semibold text-white">{courseName}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 text-slate-300">
                      <Calendar className="w-5 h-5 text-[#0096C7]" />
                      <div>
                        <p className="text-sm text-slate-500">Período</p>
                        <p className="font-medium">
                          { startDate } - { endDate || 'Atual' }
                        </p>
                      </div>
                    </div>

                    {location && (
                      <div className="flex items-center gap-3 text-slate-300">
                        <MapPin className="w-5 h-5 text-[#72BF6A]" />
                        <div>
                          <p className="text-sm text-slate-500">Localização</p>
                          <p className="font-medium">{ location }</p>
                        </div>
                      </div>
                    )}
                  </div>

                  { description && (
                    <div className="mt-4 p-4 bg-slate-900/50 rounded-lg border border-slate-800">
                      <p className="text-slate-300 leading-relaxed">{ description }</p>
                    </div>
                  )}
                </motion.div>

                { skills.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-3"
                  >
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-[#72BF6A]" />
                      Habilidades e Conhecimentos
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      { skills.map((skill, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + index * 0.05 }}
                          className="px-3 py-1.5 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-full text-sm text-slate-300 hover:border-[#72BF6A]/50 transition-colors"
                        >
                          { skill }
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}

                { certificates.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="space-y-3"
                  >
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#0096C7]" />
                      Certificados
                    </h3>
                    <div className="space-y-2">
                      { certificates.map((cert, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          className="p-4 bg-slate-900/50 rounded-lg border border-slate-800 hover:border-[#0096C7]/50 transition-all group"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <p className="font-semibold text-white group-hover:text-[#0096C7] transition-colors">
                                {cert.name}
                              </p>
                              <p className="text-sm text-slate-500 mt-1">{cert.issuedDate}</p>
                            </div>
                            { cert.link && (
                              <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-slate-800 hover:bg-[#0096C7]/20 transition-colors"
                              >
                                <ExternalLink className="w-4 h-4 text-slate-400" />
                              </a>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                { activities.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="space-y-3"
                  >
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-[#72BF6A]" />
                      Atividades e Projetos
                    </h3>
                    <div className="space-y-3">
                      { activities.map((activity, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.9 + index * 0.1 }}
                          className="p-4 bg-slate-900/50 rounded-lg border border-slate-800 hover:border-[#72BF6A]/50 transition-all"
                        >
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <h4 className="font-semibold text-white">{ activity.title }</h4>
                            { activity.period && (
                              <span className="text-sm text-slate-500 whitespace-nowrap">
                                { activity.period }
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-slate-400 leading-relaxed">
                            { activity.description }
                          </p>
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