import { StaticImageData } from 'next/image';

export type Certificate = {
  name: string;
  issuedDate: string;
  link?: string;
};

export type Activity = {
  title: string;
  description: string;
  period?: string;
};

export type InstitutionData = {
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
