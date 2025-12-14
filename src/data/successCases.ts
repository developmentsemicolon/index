export interface SuccessCase {
  id: string;
  companyName: string;
  companyLogo: string;
  website: string;
  industry?: string;
  projectType?: string;
  description: {
    en: string;
    pt: string;
    es: string;
  };
  technologies?: string[];
  featured?: boolean;
}

export const successCases: SuccessCase[] = [
  {
    id: 'deepread',
    companyName: 'Deepread',
    companyLogo: 'https://devlfmd.github.io/semicolon/images/deepread-logo.png',
    website: 'https://deepread.com',
    industry: 'AI/ML',
    projectType: 'AI Platform',
    description: {
      en: 'AI-powered reading and content analysis platform',
      pt: 'Plataforma de leitura e análise de conteúdo com IA',
      es: 'Plataforma de lectura y análisis de contenido con IA'
    },
    technologies: ['LangChain', 'Pinecone', 'RAG', 'OpenAI', 'React', 'Node.js'],
    featured: false
  },
  {
    id: 'leadowl',
    companyName: 'LeadOwl',
    companyLogo: 'https://devlfmd.github.io/semicolon/images/leadowl-logo.png',
    website: 'https://leadowl.com',
    industry: 'SaaS',
    projectType: 'Lead Generation Platform',
    description: {
      en: 'Intelligent lead generation and management platform',
      pt: 'Plataforma inteligente de geração e gestão de leads',
      es: 'Plataforma inteligente de generación y gestión de leads'
    },
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AI Integration'],
    featured: false
  },
  {
    id: 'cleanmac',
    companyName: 'CleanMac App',
    companyLogo: 'https://developmentsemicolon.github.io/images/cleanmac-logo.png',
    website: 'https://developmentsemicolon.github.io/cleanmacapp',
    industry: 'Desktop App',
    projectType: 'macOS Application',
    description: {
      en: 'Free Mac cleanup tool with Chrome extension integration',
      pt: 'Ferramenta gratuita de limpeza para Mac com integração de extensão Chrome',
      es: 'Herramienta gratuita de limpieza para Mac con integración de extensión Chrome'
    },
    technologies: ['macOS', 'Swift', 'Chrome Extension', 'System Cleanup'],
    featured: false
  },
  {
    id: 'vidlo',
    companyName: 'Vidlo',
    companyLogo: 'https://devlfmd.github.io/semicolon/images/vidlo-logo.png',
    website: 'https://vidlo.video',
    industry: 'Video/Tech',
    projectType: 'Video Platform',
    description: {
      en: 'Video platform with advanced features',
      pt: 'Plataforma de vídeo com recursos avançados',
      es: 'Plataforma de video con características avanzadas'
    },
    technologies: ['React', 'Video Processing', 'Cloud Storage'],
    featured: false
  },
  {
    id: 'roboagro',
    companyName: 'Roboagro',
    companyLogo: 'https://devlfmd.github.io/semicolon/images/roboagro-logo.png',
    website: 'https://www.roboagro.com.br',
    industry: 'AgTech',
    projectType: 'Agricultural Technology',
    description: {
      en: 'Agricultural technology solutions and automation',
      pt: 'Soluções de tecnologia agrícola e automação',
      es: 'Soluciones de tecnología agrícola y automatización'
    },
    technologies: ['IoT', 'Data Analytics', 'Mobile App'],
    featured: false
  },
  {
    id: '2local-ai',
    companyName: '2Local.AI',
    companyLogo: 'https://devlfmd.github.io/semicolon/images/2localai-logo.png',
    website: 'https://www.2local.ai',
    industry: 'AI/Local Business',
    projectType: 'AI Platform',
    description: {
      en: 'AI-powered local business solutions',
      pt: 'Soluções de IA para negócios locais',
      es: 'Soluciones de IA para negocios locales'
    },
    technologies: ['LangChain', 'Pinecone', 'RAG', 'Local Search', 'AI'],
    featured: false
  },
  {
    id: 'iconsorcio',
    companyName: 'iConsórcio',
    companyLogo: 'https://devlfmd.github.io/semicolon/images/iconsorcio-logo.png',
    website: 'https://www.sitconsistemas.com.br/pagina-iconsorcio/',
    industry: 'Finance',
    projectType: 'Financial Platform',
    description: {
      en: 'Consortium management platform',
      pt: 'Plataforma de gestão de consórcios',
      es: 'Plataforma de gestión de consorcios'
    },
    technologies: ['React', 'Financial APIs', 'Backend Systems'],
    featured: false
  },
  {
    id: 'escallo',
    companyName: 'Escallo',
    companyLogo: 'https://devlfmd.github.io/semicolon/images/escallo-logo.png',
    website: 'https://escallo.com.br',
    industry: 'E-commerce',
    projectType: 'E-commerce Platform',
    description: {
      en: 'E-commerce platform with modern features',
      pt: 'Plataforma de e-commerce com recursos modernos',
      es: 'Plataforma de comercio electrónico con características modernas'
    },
    technologies: ['E-commerce', 'Payment Integration', 'React'],
    featured: false
  },
  {
    id: 'yby-online',
    companyName: 'Yby Online',
    companyLogo: 'https://devlfmd.github.io/semicolon/images/yby-logo.png',
    website: 'https://www.instagram.com/ybyonline/',
    industry: 'Social Media/E-commerce',
    projectType: 'Social Commerce',
    description: {
      en: 'Social commerce platform',
      pt: 'Plataforma de comércio social',
      es: 'Plataforma de comercio social'
    },
    technologies: ['Social Integration', 'E-commerce', 'Mobile'],
    featured: false
  },
  {
    id: 'recicle-bem',
    companyName: 'Recicle bem',
    companyLogo: 'https://devlfmd.github.io/semicolon/images/recicle-bem-logo.png',
    website: 'https://reciclebem.com.br',
    industry: 'Sustainability',
    projectType: 'Sustainability Platform',
    description: {
      en: 'Recycling and sustainability platform',
      pt: 'Plataforma de reciclagem e sustentabilidade',
      es: 'Plataforma de reciclaje y sostenibilidad'
    },
    technologies: ['Sustainability Tech', 'Mobile App', 'Web Platform'],
    featured: false
  },
  {
    id: 'goprimy',
    companyName: 'GoPrimy',
    companyLogo: 'https://devlfmd.github.io/semicolon/images/goprimy-logo.svg',
    website: 'https://goprimy.com',
    industry: 'SaaS',
    projectType: 'Software Platform',
    description: {
      en: 'Innovative software solutions platform',
      pt: 'Plataforma de soluções de software inovadoras',
      es: 'Plataforma de soluciones de software innovadoras'
    },
    technologies: ['Web Platform', 'SaaS', 'Modern Tech'],
    featured: false
  },
  {
    id: 'dalton',
    companyName: 'Dalton - Color Vision Assistant',
    companyLogo: 'https://lh3.googleusercontent.com/MeS2L41Oz1nLZei6XDRCk_On-6094tC-fT0WyhJDKercd103s-w-lkACbCsFSEewt2_t39uo8RceKvVbHFBbShrra6M=s120',
    website: 'https://chromewebstore.google.com/detail/dalton-color-vision-assis/eoaikgnogcllklmipcgamlkiofnblhml',
    industry: 'Accessibility',
    projectType: 'Chrome Extension',
    description: {
      en: 'Professional color adjustment tool for color vision deficiencies. Enhance web accessibility for protanopia, deuteranopia, tritanopia and more.',
      pt: 'Ferramenta profissional de ajuste de cores para deficiências de visão de cores. Melhore a acessibilidade web para protanopia, deuteranopia, tritanopia e mais.',
      es: 'Herramienta profesional de ajuste de colores para deficiencias de visión de colores. Mejora la accesibilidad web para protanopia, deuteranopia, tritanopia y más.'
    },
    technologies: ['Chrome Extension', 'Accessibility', 'Color Vision'],
    featured: false
  },
];

