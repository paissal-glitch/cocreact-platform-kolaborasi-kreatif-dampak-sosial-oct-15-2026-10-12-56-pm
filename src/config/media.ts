/**
 * CoCreAct Centralized Media Asset Registry
 * 
 * Maps logical asset names to actual static paths within the /public/media directory.
 * Ensures consistent asset referencing, typed autocompletion, and easy asset replacement
 * across development and production environments.
 */

export interface MediaAsset {
  src: string;
  alt: {
    id: string;
    en: string;
  };
  dimensions?: {
    width: number;
    height: number;
    aspectRatio: string;
  };
}

export const MEDIA = {
  brand: {
    logo: '/media/brand/cocreact-logo.png',
    logoPng: '/media/brand/cocreact-logo.png',
    logoSvg: '/media/brand/cocreact-logo.svg',
    sproutSvg: '/media/brand/brand-sprout.svg',
    favicon: '/favicon.svg',
  },
  hero: {
    // Cinematic hero background video configuration
    videoId: 'q0VzUigrb_g',
    embedUrl: 'https://www.youtube-nocookie.com/embed/q0VzUigrb_g?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=q0VzUigrb_g&playsinline=1&modestbranding=1&enablejsapi=1',
    // Fallback documentary photograph (supports both new /media/hero and legacy /assets/images paths)
    poster: '/media/hero/hero_collaboration_documentary.jpg',
    legacyFallback: '/assets/images/hero_collaboration_documentary_1792061992349.jpg',
    alt: {
      id: 'Dokumentasi perancangan inisiatif kolaboratif CoCreAct',
      en: 'CoCreAct collaborative initiative design documentation',
    },
  },
  programs: {
    cocreactVol1: {
      src: '/media/programs/portfolio_cocreact_vol1.jpg',
      legacySrc: '/assets/images/portfolio_cocreact_vol1_1792062039777.jpg',
      alt: {
        id: 'Dokumentasi Peresmian CoCreAct Vol. 1',
        en: 'CoCreAct Vol. 1 Launching Documentation',
      },
    },
    drawingCompetition: {
      src: '/media/programs/portfolio_drawing_competition.jpg',
      legacySrc: '/assets/images/portfolio_drawing_competition_1792062042111.jpg',
      alt: {
        id: 'Lomba Gambar & Mewarnai Anak',
        en: 'Kids Drawing and Coloring Competition',
      },
    },
    outdoorCulture: {
      src: '/media/programs/portfolio_outdoor_culture.jpg',
      legacySrc: '/assets/images/portfolio_outdoor_culture_1792062042130.jpg',
      alt: {
        id: 'Aktivasi Budaya Luar Ruang',
        en: 'Outdoor Cultural Activation',
      },
    },
    inclusivePesona: {
      src: '/media/programs/portfolio_inclusive_pesona.jpg',
      legacySrc: '/assets/images/portfolio_inclusive_pesona_1792062042660.jpg',
      alt: {
        id: 'Pelatihan Inklusif Pesona Pendidik',
        en: 'Inclusive Educator Training',
      },
    },
    pesonaEducator: {
      src: '/media/programs/portfolio_pesona_educator.jpg',
      legacySrc: '/assets/images/portfolio_pesona_educator.jpg',
      alt: {
        id: 'Dokumentasi Kelas Edukasi #03 Pesona Edukator Upskilling Tenaga Pendidik SLB',
        en: 'Class Education #03 Pesona Educator - Special Needs Teachers Upskilling',
      },
    },
  },
  gallery: {
    creativeLearning: {
      src: '/media/gallery/pillar_creative_learning.jpg',
      legacySrc: '/assets/images/pillar_creative_learning_1792061992189.jpg',
      alt: {
        id: 'Pilar Pembelajaran Kreatif',
        en: 'Creative Learning Pillar',
      },
    },
    projectDevelopment: {
      src: '/media/gallery/pillar_project_development.jpg',
      legacySrc: '/assets/images/pillar_project_development_1792061994096.jpg',
      alt: {
        id: 'Pilar Pengembangan Proyek',
        en: 'Project Development Pillar',
      },
    },
    communityImpact: {
      src: '/media/gallery/pillar_community_impact.jpg',
      legacySrc: '/assets/images/pillar_community_impact_1792061992535.jpg',
      alt: {
        id: 'Pilar Dampak Komunitas',
        en: 'Community Impact Pillar',
      },
    },
  },
  icons: {
    sparkles: '/media/icons/sparkles.svg',
  },
  backgrounds: {
    ambientMesh: '/media/backgrounds/ambient-mesh.svg',
  },
} as const;

export type MediaRegistry = typeof MEDIA;

