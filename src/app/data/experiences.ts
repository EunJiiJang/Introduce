export type Experience = {
  id: number;
  period: string;
  company: string;
  role: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    id: 1,
    period: '2024 — Present',
    company: 'Company A',
    role: 'Frontend Developer',
    description: 'React 기반 제품 UI 개발 및 디자인 시스템 구축',
  },
  {
    id: 2,
    period: '2022 — 2024',
    company: 'Company B',
    role: 'Full Stack Developer',
    description: '웹 서비스 전반 설계·개발 및 운영 자동화',
  },
  {
    id: 3,
    period: '2021 — 2022',
    company: 'Company C',
    role: 'Software Engineer',
    description: '사내 도구 개발과 레거시 시스템 개선',
  },
  {
    id: 4,
    period: '2020 — 2021',
    company: 'Company D',
    role: 'Junior Developer',
    description: '프론트엔드 기능 구현 및 협업 프로세스 정립',
  },
];
