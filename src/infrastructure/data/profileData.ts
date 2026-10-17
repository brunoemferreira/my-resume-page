import type { CareerItem, EducationItem, CertificationItem, SkillCategory } from '../../@types/profile';

export const PROFILE_INFO = {
  name: 'Bruno Ferreira',
  fullName: 'Bruno Eduardo de Moura Ferreira',
  role: 'Mid-level Chatbot Developer & Arquiteto de Software',
  company: 'UY3 · Infraestrutura de Crédito',
  location: 'Campinas e Região, SP, Brasil',
  email: 'brunoemf@gmail.com',
  phone: '19 99292-2054',
  whatsappUrl: 'https://api.whatsapp.com/send?1=pt_BR&phone=5519992922054',
  githubUrl: 'https://github.com/brunoemferreira',
  linkedinUrl: 'https://www.linkedin.com/in/brunoemf/',
  avatarUrl: '/assets/images/profile.png',
  yearsOfExperience: 18,
  totalRepos: 51,
  totalPostGrad: 4,
  bio: 'Desenvolvedor com 18+ anos de sólida experiência, especialista na plataforma Blip para automação conversacional financeira e crédito (FGTS e consignado). Experiência comprovada em clientes como Banco Pan, Banco Safra e UY3, unindo Clean Architecture, TDD e ecossistemas TypeScript, Node.js e .NET.'
};

export const CAREER_HISTORY: CareerItem[] = [
  {
    id: 'uy3',
    role: 'Mid-level Chatbot Developer',
    company: 'UY3 · Infraestrutura de Crédito',
    period: 'Outubro de 2023 – Presente',
    location: 'São Paulo / Remoto',
    tag: 'Atual',
    color: 'flame',
    description: 'Desenvolvimento e aprimoramento de contatos inteligentes na plataforma Blip com foco em esteiras financeiras automatizadas.',
    highlights: [
      'Desenvolvimento de contato inteligente para antecipação do Saque-Aniversário do FGTS com automação completa (consulta, simulação e contratação).',
      'Criação de fluxo conversacional para antecipação de FGTS com split de pagamento para liquidação direta de contas.',
      'Implementação de contato inteligente de crédito consignado privado do trabalhador (CLT) integrado a serviços de margem e elegibilidade.',
      'Integração de APIs seguras de BackOffice e terceiros para comunicação resiliente.'
    ]
  },
  {
    id: 'take-blip',
    role: 'Junior ChatBot Developer',
    company: 'Take Blip',
    period: 'Agosto de 2021 – Agosto de 2023 (2 anos 1 mês)',
    location: 'Belo Horizonte / Remoto',
    tag: 'Fintech & Bots',
    color: 'cyan',
    description: 'Desenvolvimento de contatos inteligentes de grande escala na plataforma Blip para clientes estratégicos.',
    highlights: [
      'Construção de fluxos complexos para clientes de grande porte do setor financeiro, como Banco Pan e Banco Safra.',
      'Desenvolvimento de scripts JavaScript no Blip para tracking analítico, validação de dados e consumo de APIs.',
      'Desenvolvimento de APIs intermediárias para integração com Clean Code, TDD e Design Patterns.',
      'Testes automatizados End-to-End (E2E) para chatbots utilizando Node.js e Cypress.'
    ]
  },
  {
    id: 'indra',
    role: 'Analista de Sistemas',
    company: 'Indra',
    period: 'Junho de 2019 – Agosto de 2021 (2 anos 3 meses)',
    location: 'Campinas e Região, Brasil',
    tag: 'ERP & Utilities',
    color: 'indigo',
    description: 'Sistemas corporativos para distribuição de energia elétrica.',
    highlights: [
      'Desenvolvimento e sustentação de funcionalidades no ERP SGD/SGS para distribuição de energia elétrica (Delphi 7 e Oracle PL/SQL).',
      'Implementação de novas features no SGS Mobile para Windows Mobile utilizando C# .NET e banco Oracle, aprimorando a eficiência de campo.'
    ]
  },
  {
    id: 'assist-software',
    role: 'Analista de Desenvolvimento de Software',
    company: 'Assist Software (Sistemas em Logística)',
    period: 'Setembro de 2013 – Maio de 2019 (5 anos 9 meses)',
    location: 'Campinas e Região',
    tag: 'WMS & .NET',
    color: 'emerald',
    description: 'Modernização de arquitetura e desenvolvimento de soluções de logística.',
    highlights: [
      'Migração de sistema WMS de alta carga de Delphi 7 para arquitetura moderna .NET MVC.',
      'Construção de relatórios e dashboards analíticos de performance em DevExpress XtraReports / .NET.'
    ]
  },
  {
    id: 'early-career',
    role: 'Analista Desenvolvedor Delphi (Bases Sólidas)',
    company: 'AJI Sistemas · Novosis · Foto Ótica Sousas',
    period: '2002 – 2013 (11 anos)',
    location: 'São Paulo',
    tag: 'Bancos de Dados & TMS',
    color: 'flame',
    description: 'Mais de uma década desenvolvendo sistemas corporativos de missão crítica em transportes (TMS e AJI Bank em Firebird), licitações públicas (SCPN em SQL Server) e controle financeiro de alta precisão.'
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: 'utfpr',
    degree: 'Pós-Graduação',
    field: 'Desenvolvimento Web com TypeScript e Inteligência Artificial',
    institution: 'Universidade Tecnológica Federal do Paraná (UTFPR)',
    period: '2026 – 2027',
    isPostGrad: true
  },
  {
    id: 'fetes',
    degree: 'Pós-Graduação',
    field: 'Desenvolvimento Back-End com Ênfase em Node.js',
    institution: 'FETES - Faculdade de Educação e Tecnologia do ES',
    period: '2025 – 2026',
    isPostGrad: true
  },
  {
    id: 'vincit-java',
    degree: 'Pós-Graduação',
    field: 'Desenvolvimento Orientado a Objetos em Java',
    institution: 'Faculdade VINCIT',
    period: '2019 – 2020',
    isPostGrad: true
  },
  {
    id: 'uniciv-dotnet',
    degree: 'Pós-Graduação',
    field: 'Arquitetura de Soluções em Plataforma .NET (C#)',
    institution: 'Centro de Inovação VincIT - UNICIV',
    period: '2018 – 2019',
    isPostGrad: true
  },
  {
    id: 'fai',
    degree: 'Graduação Tecnológica',
    field: 'Processamento de Dados e Engenharia de Software',
    institution: 'FAI - Faculdades Adamantinenses Integradas',
    period: '1999 – 2001',
    isPostGrad: false
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  { id: 'scrum-fund', name: 'Scrum Fundamentals Certified', badgeImg: '/assets/badges/certiprof_scrumfundation.png', issuer: 'CertiProf' },
  { id: 'devops-essentials', name: 'DevOps Essentials Certificate', badgeImg: '/assets/badges/certiprof_devops.png', issuer: 'CertiProf' },
  { id: 'python-ds', name: 'Fundamentos de Python para Data Science', badgeImg: '/assets/badges/cert_scrumStudy.png', issuer: 'Data Science Academy' },
  { id: 'devops-lead', name: 'DevOps Leader & Lean IT', badgeImg: '/assets/badges/itcerts_devopslead.png', issuer: 'IT Certs' },
  { id: 'six-sigma', name: 'Six Sigma & Agile Management', badgeImg: '/assets/badges/vmedu_6sigma.png', issuer: 'VMEdu' }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'chatbots',
    title: 'Chatbots & IA Conversacional',
    icon: 'chatbots',
    skills: ['Blip Platform', 'Design Conversacional', 'WebHooks & REST APIs', 'WhatsApp Integration', 'Venom Bot', 'Inteligência Artificial']
  },
  {
    id: 'backend',
    title: 'Backend & Microsserviços',
    icon: 'backend',
    skills: ['Node.js', 'TypeScript', 'C# / .NET MVC', 'Express', 'Arquitetura de APIs', 'Delphi']
  },
  {
    id: 'architecture',
    title: 'Qualidade & Clean Code',
    icon: 'architecture',
    skills: ['Clean Architecture', 'Clean Code', 'SOLID Principles', 'Test-Driven Development (TDD)', 'Cypress E2E', 'Scrum / Agile']
  },
  {
    id: 'database',
    title: 'Bancos de Dados',
    icon: 'database',
    skills: ['Oracle PL/SQL', 'PostgreSQL', 'MySQL', 'SQL Server', 'Firebird', 'SQLite']
  },
  {
    id: 'frontend',
    title: 'Frontend & Mobile',
    icon: 'frontend',
    skills: ['React', 'React Native', 'TypeScript', 'HTML5 / Modern CSS', 'Micro-SaaS', 'Mobile First']
  },
  {
    id: 'devops',
    title: 'DevOps & Ferramentas',
    icon: 'devops',
    skills: ['Git & GitHub', 'Docker', 'Puppeteer (Web Scraping)', 'CI/CD Pipelines', 'Linux']
  }
];
