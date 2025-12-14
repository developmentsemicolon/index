export interface Technology {
  id: string;
  name: string;
  category: 'ai' | 'frontend' | 'backend' | 'database' | 'cloud' | 'mobile';
  icon?: string;
  description: {
    en: string;
    pt: string;
    es: string;
  };
  featured?: boolean;
  link?: string;
}

export const technologies: Technology[] = [
  // AI/ML - Featured
  {
    id: 'langchain',
    name: 'LangChain',
    category: 'ai',
    featured: false,
    description: {
      en: 'Framework for building LLM-powered applications with chains and agents',
      pt: 'Framework para construir aplicações com LLM usando chains e agents',
      es: 'Framework para construir aplicaciones con LLM usando chains y agents'
    },
    link: 'https://langchain.com'
  },
  {
    id: 'pinecone',
    name: 'Pinecone',
    category: 'ai',
    featured: false,
    description: {
      en: 'Vector database for semantic search and similarity matching',
      pt: 'Banco de dados vetorial para busca semântica e correspondência de similaridade',
      es: 'Base de datos vectorial para búsqueda semántica y coincidencia de similitud'
    },
    link: 'https://pinecone.io'
  },
  {
    id: 'rag',
    name: 'RAG',
    category: 'ai',
    featured: false,
    description: {
      en: 'Retrieval-Augmented Generation for context-aware AI responses',
      pt: 'Retrieval-Augmented Generation para respostas de IA com contexto',
      es: 'Retrieval-Augmented Generation para respuestas de IA con contexto'
    }
  },
  {
    id: 'openai',
    name: 'OpenAI',
    category: 'ai',
    description: {
      en: 'Advanced AI models and APIs',
      pt: 'Modelos e APIs de IA avançados',
      es: 'Modelos y APIs de IA avanzados'
    },
    link: 'https://openai.com'
  },
  {
    id: 'google-gemini',
    name: 'Google Gemini',
    category: 'ai',
    description: {
      en: 'Google\'s advanced multimodal AI model for complex reasoning',
      pt: 'Modelo de IA multimodal avançado do Google para raciocínio complexo',
      es: 'Modelo de IA multimodal avanzado de Google para razonamiento complejo'
    },
    link: 'https://deepmind.google/technologies/gemini'
  },
  {
    id: 'embeddings',
    name: 'Embeddings',
    category: 'ai',
    description: {
      en: 'Vector embeddings for semantic understanding',
      pt: 'Embeddings vetoriais para compreensão semântica',
      es: 'Embeddings vectoriales para comprensión semántica'
    }
  },
  // Frontend
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    description: {
      en: 'Modern UI library for building interactive interfaces',
      pt: 'Biblioteca moderna de UI para construir interfaces interativas',
      es: 'Biblioteca moderna de UI para construir interfaces interactivas'
    },
    link: 'https://react.dev'
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    description: {
      en: 'React framework for production with SSR and SSG',
      pt: 'Framework React para produção com SSR e SSG',
      es: 'Framework React para producción con SSR y SSG'
    },
    link: 'https://nextjs.org'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    description: {
      en: 'Typed superset of JavaScript',
      pt: 'Superset tipado do JavaScript',
      es: 'Superset tipado de JavaScript'
    },
    link: 'https://typescriptlang.org'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    description: {
      en: 'Utility-first CSS framework',
      pt: 'Framework CSS utility-first',
      es: 'Framework CSS utility-first'
    },
    link: 'https://tailwindcss.com'
  },
  {
    id: 'vite',
    name: 'Vite',
    category: 'frontend',
    description: {
      en: 'Next generation frontend tooling',
      pt: 'Ferramentas de frontend de próxima geração',
      es: 'Herramientas de frontend de próxima generación'
    },
    link: 'https://vitejs.dev'
  },
  {
    id: 'angular',
    name: 'Angular',
    category: 'frontend',
    description: {
      en: 'Platform and framework for building single-page client applications',
      pt: 'Plataforma e framework para construir aplicações single-page',
      es: 'Plataforma y framework para construir aplicaciones single-page'
    },
    link: 'https://angular.io'
  },
  {
    id: 'vuejs',
    name: 'Vue.js',
    category: 'frontend',
    description: {
      en: 'Progressive JavaScript framework for building user interfaces',
      pt: 'Framework JavaScript progressivo para construir interfaces de usuário',
      es: 'Framework JavaScript progresivo para construir interfaces de usuario'
    },
    link: 'https://vuejs.org'
  },
  {
    id: 'nuxt',
    name: 'Nuxt.js',
    category: 'frontend',
    description: {
      en: 'Vue.js framework for building modern web applications',
      pt: 'Framework Vue.js para construir aplicações web modernas',
      es: 'Framework Vue.js para construir aplicaciones web modernas'
    },
    link: 'https://nuxt.com'
  },
  {
    id: 'svelte',
    name: 'Svelte',
    category: 'frontend',
    description: {
      en: 'Component framework that compiles to vanilla JavaScript',
      pt: 'Framework de componentes que compila para JavaScript vanilla',
      es: 'Framework de componentes que compila a JavaScript vanilla'
    },
    link: 'https://svelte.dev'
  },
  {
    id: 'sveltekit',
    name: 'SvelteKit',
    category: 'frontend',
    description: {
      en: 'Full-stack framework for Svelte applications',
      pt: 'Framework full-stack para aplicações Svelte',
      es: 'Framework full-stack para aplicaciones Svelte'
    },
    link: 'https://kit.svelte.dev'
  },
  {
    id: 'astro',
    name: 'Astro',
    category: 'frontend',
    description: {
      en: 'Modern static site builder with component islands',
      pt: 'Construtor moderno de sites estáticos com component islands',
      es: 'Constructor moderno de sitios estáticos con component islands'
    },
    link: 'https://astro.build'
  },
  {
    id: 'remix',
    name: 'Remix',
    category: 'frontend',
    description: {
      en: 'Full-stack web framework for React',
      pt: 'Framework web full-stack para React',
      es: 'Framework web full-stack para React'
    },
    link: 'https://remix.run'
  },
  {
    id: 'redux',
    name: 'Redux',
    category: 'frontend',
    description: {
      en: 'Predictable state container for JavaScript apps',
      pt: 'Container de estado previsível para aplicações JavaScript',
      es: 'Contenedor de estado predecible para aplicaciones JavaScript'
    },
    link: 'https://redux.js.org'
  },
  {
    id: 'zustand',
    name: 'Zustand',
    category: 'frontend',
    description: {
      en: 'Small, fast and scalable state management solution',
      pt: 'Solução de gerenciamento de estado pequena, rápida e escalável',
      es: 'Solución de gestión de estado pequeña, rápida y escalable'
    },
    link: 'https://zustand-demo.pmnd.rs'
  },
  {
    id: 'tanstack-query',
    name: 'TanStack Query',
    category: 'frontend',
    description: {
      en: 'Powerful data synchronization for React, Vue, and more',
      pt: 'Sincronização de dados poderosa para React, Vue e mais',
      es: 'Sincronización de datos potente para React, Vue y más'
    },
    link: 'https://tanstack.com/query'
  },
  {
    id: 'framer-motion',
    name: 'Framer Motion',
    category: 'frontend',
    description: {
      en: 'Production-ready motion library for React',
      pt: 'Biblioteca de animação pronta para produção para React',
      es: 'Biblioteca de animación lista para producción para React'
    },
    link: 'https://www.framer.com/motion'
  },
  {
    id: 'shadcn',
    name: 'shadcn/ui',
    category: 'frontend',
    description: {
      en: 'Beautifully designed components built with Radix UI and Tailwind CSS',
      pt: 'Componentes lindamente projetados construídos com Radix UI e Tailwind CSS',
      es: 'Componentes bellamente diseñados construidos con Radix UI y Tailwind CSS'
    },
    link: 'https://ui.shadcn.com'
  },
  // Backend
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    description: {
      en: 'JavaScript runtime for server-side development',
      pt: 'Runtime JavaScript para desenvolvimento server-side',
      es: 'Runtime JavaScript para desarrollo server-side'
    },
    link: 'https://nodejs.org'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    description: {
      en: 'Versatile programming language for backend and AI',
      pt: 'Linguagem de programação versátil para backend e IA',
      es: 'Lenguaje de programación versátil para backend e IA'
    },
    link: 'https://python.org'
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'backend',
    description: {
      en: 'Modern Python web framework for APIs',
      pt: 'Framework web Python moderno para APIs',
      es: 'Framework web Python moderno para APIs'
    },
    link: 'https://fastapi.tiangolo.com'
  },
  {
    id: 'express',
    name: 'Express',
    category: 'backend',
    description: {
      en: 'Minimalist web framework for Node.js',
      pt: 'Framework web minimalista para Node.js',
      es: 'Framework web minimalista para Node.js'
    },
    link: 'https://expressjs.com'
  },
  // Database
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    description: {
      en: 'Advanced  relational database',
      pt: 'Banco de dados relacional  avançado',
      es: 'Base de datos relacional  avanzada'
    },
    link: 'https://postgresql.org'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    description: {
      en: 'NoSQL document database',
      pt: 'Banco de dados NoSQL de documentos',
      es: 'Base de datos NoSQL de documentos'
    },
    link: 'https://mongodb.com'
  },
  // Cloud
  {
    id: 'aws',
    name: 'AWS',
    category: 'cloud',
    description: {
      en: 'Amazon Web Services cloud platform',
      pt: 'Plataforma cloud Amazon Web Services',
      es: 'Plataforma cloud Amazon Web Services'
    },
    link: 'https://aws.amazon.com'
  },
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'cloud',
    description: {
      en: 'Platform for frontend deployment',
      pt: 'Plataforma para deploy de frontend',
      es: 'Plataforma para deploy de frontend'
    },
    link: 'https://vercel.com'
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'cloud',
    description: {
      en: 'Containerization platform',
      pt: 'Plataforma de containerização',
      es: 'Plataforma de containerización'
    },
    link: 'https://docker.com'
  },
  // Mobile
  {
    id: 'react-native',
    name: 'React Native',
    category: 'mobile',
    description: {
      en: 'Framework for building native mobile apps',
      pt: 'Framework para construir apps móveis nativos',
      es: 'Framework para construir apps móviles nativos'
    },
    link: 'https://reactnative.dev'
  },
  {
    id: 'flutter',
    name: 'Flutter',
    category: 'mobile',
    description: {
      en: 'UI toolkit for cross-platform apps',
      pt: 'Kit de UI para apps multiplataforma',
      es: 'Kit de UI para apps multiplataforma'
    },
    link: 'https://flutter.dev'
  },
  {
    id: 'pwa',
    name: 'PWA',
    category: 'mobile',
    description: {
      en: 'Progressive Web Applications',
      pt: 'Aplicações Web Progressivas',
      es: 'Aplicaciones Web Progresivas'
    }
  },
  {
    id: 'electron',
    name: 'Electron',
    category: 'mobile',
    description: {
      en: 'Framework for building cross-platform desktop applications with web technologies',
      pt: 'Framework para construir aplicações desktop multiplataforma com tecnologias web',
      es: 'Framework para construir aplicaciones de escritorio multiplataforma con tecnologías web'
    },
    link: 'https://www.electronjs.org'
  }
];

