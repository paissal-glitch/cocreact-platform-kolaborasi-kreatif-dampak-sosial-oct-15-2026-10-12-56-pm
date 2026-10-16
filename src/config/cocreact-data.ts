/**
 * CoCreAct Central Content & Configuration Data
 * 
 * Master data structure with centralized bilingual dictionary (ID / EN),
 * site configuration, 7 verified portfolio projects, strategic pillars,
 * collaboration philosophy, process timeline, and impact areas.
 */

import { MEDIA } from './media';

export { MEDIA };

export type Language = 'id' | 'en';

export interface SiteConfig {
  heroVideoId: string;
  contactUrl: string;
  inquiryEmail: string;
  instagramUrl: string;
  linkedinUrl: string;
  youtubeUrl: string;
}

export const siteConfig: SiteConfig = {
  heroVideoId: 'q0VzUigrb_g',
  contactUrl: 'https://wa.me/?text=Halo%20CoCreAct,%20saya%20ingin%20berdiskusi%20tentang%20kolaborasi.',
  inquiryEmail: 'kolaborasi@cocreact.org',
  instagramUrl: 'https://instagram.com/cocreact',
  linkedinUrl: 'https://linkedin.com/company/cocreact',
  youtubeUrl: 'https://youtube.com/@cocreact',
};

export type ProjectRole =
  | 'Inisiator'
  | 'Penyelenggara'
  | 'Fasilitator'
  | 'Kolaborator'
  | 'Mitra Pendukung';

export interface ProjectItem {
  id: string;
  title: string;
  date: { id: string; en: string };
  category: { id: string; en: string };
  role?: { id: ProjectRole; en: string };
  roleDetail?: { id: string; en: string };
  summary: { id: string; en: string };
  image: string;
  imageAlt: { id: string; en: string };
  caseStudy?: {
    background: { id: string; en: string };
    objectives: { id: string[]; en: string[] };
    roleDescription: { id: string; en: string };
    partners?: string[];
    activities: { id: string[]; en: string[] };
    outputs: { id: string[]; en: string[] };
    lessonsLearned: { id: string[]; en: string[] };
  };
}

export interface PillarItem {
  number: string;
  title: { id: string; en: string };
  description: { id: string; en: string };
  keywords: string[];
}

export interface ProcessStage {
  number: string;
  name: { id: string; en: string };
  description: { id: string; en: string };
}

export interface ImpactArea {
  title: { id: string; en: string };
  description: { id: string; en: string };
}

export const BRAND_DICTIONARY = {
  name: 'CoCreAct',
  expansion: 'Collaboration · Creative · Action',
  tagline: {
    id: 'Bukan Siapa, Tetapi Apa.',
    en: 'Not Who, But What.',
  },
  positioning: {
    id: 'Platform kolaborasi lintas sektor yang menghubungkan individu, komunitas, institusi pendidikan, bisnis, dan pemerintah untuk mengubah ide menjadi program dan aksi berdampak nyata.',
    en: 'A cross-sector collaboration platform connecting individuals, communities, educators, businesses, and government to transform ideas into relevant programs and meaningful action.',
  },
};

export const HEADER_NAV_LINKS = [
  { label: { id: 'Tentang', en: 'About' }, href: '#about' },
  { label: { id: 'Pilar', en: 'Pillars' }, href: '#services' },
  { label: { id: 'Portofolio', en: 'Portfolio' }, href: '#portfolio' },
  { label: { id: 'Proses', en: 'Process' }, href: '#process' },
  { label: { id: 'Dampak', en: 'Impact' }, href: '#numbers' },
];

export const HERO_CONTENT = {
  eyebrow: 'COLLABORATION · CREATIVE · ACTION',
  staticHeadline: {
    id: 'Banyak kemungkinan.',
    en: 'Endless possibilities.',
  },
  typingPhrases: {
    id: [
      'mulai dari ide.',
      'mencoba hal baru.',
      'belajar bersama.',
      'menciptakan sesuatu.',
      'bergerak bersama.',
    ],
    en: [
      'starting from an idea.',
      'trying new things.',
      'learning together.',
      'creating something.',
      'moving forward together.',
    ],
  },
  headlineLead: {
    id: 'Banyak kemungkinan.',
    en: 'Endless possibilities.',
  },
  headlineAccent: {
    id: 'mulai dari ide.',
    en: 'starting from an idea.',
  },
  supportingText: {
    id: 'CoCreAct mempertemukan gagasan, kreativitas, dan berbagai potensi untuk mengembangkan program yang relevan dan bermakna bagi masyarakat.',
    en: 'CoCreAct brings ideas, creativity, and diverse capabilities together to develop programs that are relevant and meaningful to communities.',
  },
  primaryCta: {
    id: 'Jelajahi Karya Kami ↘',
    en: 'Explore Our Work ↘',
  },
  secondaryCta: {
    id: 'Mulai Kolaborasi ↗',
    en: "Let's Collaborate ↗",
  },
  scrollIndicator: {
    id: 'Gulir ke bawah',
    en: 'Scroll down',
  },
  fallbackImage: MEDIA.hero.poster,
  fallbackImageAlt: {
    id: 'Dokumentasi perancangan inisiatif kolaboratif CoCreAct',
    en: 'CoCreAct collaborative initiative design documentation',
  },
};

export const ABOUT_CONTENT = {
  sectionLabel: '01 / TENTANG KAMI',
  sectionLabelEn: '01 / ABOUT US',
  headline: {
    id: 'Ide yang baik membutuhkan lebih dari sekadar ide.',
    en: 'A good idea requires more than just an idea.',
  },
  body: {
    id: 'Dibutuhkan orang-orang yang mau mendengar, ruang untuk bereksperimen, dan kolaborasi yang mengubah gagasan menjadi pengalaman nyata. CoCreAct hadir untuk menghubungkan semuanya.',
    en: 'It takes people willing to listen, spaces to experiment, and collaboration that transforms concepts into tangible experiences. CoCreAct exists to connect them all.',
  },
  supportingStatement: {
    id: '“Bukan Siapa, Tetapi Apa.”',
    en: '“Not Who, But What.”',
  },
  corePrinciples: [
    {
      label: { id: 'Mendengar', en: 'Listen' },
      detail: { id: 'Memahami konteks dan kebutuhan riil warga.', en: 'Understanding genuine community contexts and needs.' },
    },
    {
      label: { id: 'Menciptakan', en: 'Co-Create' },
      detail: { id: 'Merancang program secara setara dan terbuka.', en: 'Designing programs equitably and transparently.' },
    },
    {
      label: { id: 'Mewujudkan', en: 'Activate' },
      detail: { id: 'Menggerakkan aksi nyata lintas disiplin.', en: 'Mobilizing interdisciplinary, meaningful action.' },
    },
  ],
};

export const PILLARS_CONTENT = {
  sectionLabel: '02 / PILAR KAMI',
  sectionLabelEn: '02 / OUR PILLARS',
  headline: {
    id: 'Tiga cara untuk bergerak bersama.',
    en: 'Three ways to move forward together.',
  },
  pillars: [
    {
      number: '01',
      title: {
        id: 'Creative Learning & Development',
        en: 'Creative Learning & Development',
      },
      description: {
        id: 'Mengembangkan pengetahuan, keterampilan, dan keberanian untuk mencoba melalui kelas, lokakarya, pelatihan, dan pengalaman kreatif.',
        en: 'Developing knowledge, skills, and the confidence to experiment through classes, workshops, training, and creative experiences.',
      },
      keywords: [
        'Creative Workshops',
        'Skills Development',
        'Educational Programs',
        'Learning Experiences',
      ],
    },
    {
      number: '02',
      title: {
        id: 'Community & Social Impact',
        en: 'Community & Social Impact',
      },
      description: {
        id: 'Menghadirkan ruang partisipasi yang mempertemukan masyarakat, membuka akses, dan mendorong keterlibatan yang lebih bermakna.',
        en: 'Creating participatory spaces that bring communities together, opening access, and fostering meaningful civic engagement.',
      },
      keywords: [
        'Community Initiatives',
        'Inclusion',
        'Public Engagement',
        'Social and Environmental Initiatives',
      ],
    },
    {
      number: '03',
      title: {
        id: 'Collaboration & Project Development',
        en: 'Collaboration & Project Development',
      },
      description: {
        id: 'Menghubungkan kebutuhan, gagasan, dan sumber daya lintas sektor untuk merancang serta menjalankan program bersama.',
        en: 'Bridging community needs, ideas, and cross-sector resources to design and execute impactful collaborative programs.',
      },
      keywords: [
        'Cross-sector Partnerships',
        'Collaborative Projects',
        'Program Development',
        'Creative Campaigns',
      ],
    },
  ] as PillarItem[],
};

export const PORTFOLIO_CONTENT = {
  sectionLabel: '03 / PORTOFOLIO',
  sectionLabelEn: '03 / SELECTED WORK',
  headline: {
    id: 'Kolaborasi yang sudah bergerak.',
    en: 'Collaborations already in motion.',
  },
  supportingText: {
    id: 'Setiap program berangkat dari kebutuhan yang berbeda. Yang menyatukan semuanya adalah kemauan untuk belajar, bekerja bersama, dan menciptakan pengalaman yang berarti.',
    en: 'Every initiative originates from a distinct need. What unites them is the dedication to learn, collaborate, and build meaningful experiences together.',
  },
  ctaText: {
    id: 'Punya gagasan yang ingin dikembangkan? Mari bicarakan ↗',
    en: 'Have an initiative you want to develop? Let’s talk ↗',
  },
  caseStudyButton: {
    id: 'Detail Studi Kasus',
    en: 'Case Study Details',
  },
};

export const VERIFIED_PROJECTS: ProjectItem[] = [
  {
    id: 'cocreact-vol-1',
    title: 'CoCreAct Vol. 1',
    date: { id: '14, 21, & 28 Desember 2024', en: '14, 21, and 28 December 2024' },
    category: { id: 'Komunitas Kreatif', en: 'Creative Community' },
    role: { id: 'Inisiator', en: 'Initiator' },
    roleDetail: { id: 'Inisiator Ruang Pertemuan & Berbagi Karya', en: 'Gathering Space Initiator & Facilitator' },
    summary: {
      id: 'Rangkaian kegiatan perdana CoCreAct sebagai ruang pertemuan, kreativitas, dan kolaborasi.',
      en: 'The inaugural series of CoCreAct initiatives providing a dedicated space for gathering, creativity, and collaboration.',
    },
    image: MEDIA.programs.cocreactVol1.src,
    imageAlt: {
      id: 'Pameran zine dan karya fotografi komunitas dalam CoCreAct Vol. 1',
      en: 'Community zine and photography exhibition in CoCreAct Vol. 1',
    },
    caseStudy: {
      background: {
        id: 'Kebutuhan akan ruang terbuka yang menyatukan pegiat seni visual independen, fotografer, pembuat film muda, dan pembuat zine di ruang fisik yang egaliter.',
        en: 'The need for an open physical space uniting independent visual artists, photographers, young filmmakers, and zine creators.',
      },
      objectives: {
        id: [
          'Membuka ruang temu mandiri tanpa sekat antar praktisi kreatif dan publik.',
          'Mendorong pertukaran metode pembuatan karya cetak mandiri dan media alternatif.',
          'Menumbuhkan jaringan awal kolaborasi kreatif antar komunitas lokal.',
        ],
        en: [
          'Create an inclusive gathering space between creative practitioners and the public.',
          'Encourage exchange of self-publishing and independent media techniques.',
          'Foster an initial cross-community collaboration network.',
        ],
      },
      roleDescription: {
        id: 'CoCreAct bertindak sebagai inisiator wadah, mengorkestrasi tata ruang kolaboratif, memfasilitasi sesi diskusi, dan mengelola jalannya kegiatan bersama kurator independen.',
        en: 'CoCreAct acted as initiator, organizing the collaborative space, facilitating discussions, and managing activities alongside independent curators.',
      },
      partners: ['Kolektif Fotografi Lokal', 'Komunitas Zine Independen', 'Ruang Publik Kreatif'],
      activities: {
        id: [
          'Pameran karya fotografi & zine independen',
          'Sesi berbagi pengalaman pembuatan media mandiri',
          'Pemutaran film pendek komunitas & dialog pembuat film',
          'Meja barter karya dan materi edukasi',
        ],
        en: [
          'Independent photo and zine showcase',
          'Self-publishing knowledge sharing sessions',
          'Community short film screening and filmmaker dialogue',
          'Work swap table and educational resources',
        ],
      },
      outputs: {
        id: [
          'Katalog zine kolaboratif edisi khusus',
          'Dokumentasi arsip karya komunitas',
          'Terjalinnya jejaring kolaborator lintas bidang',
        ],
        en: [
          'Special collaborative zine catalogue',
          'Archival community documentation',
          'Established cross-sector collaborator network',
        ],
      },
      lessonsLearned: {
        id: [
          'Format partisipatif yang santai namun terstruktur menghasilkan interaksi yang jauh lebih mendalam dibanding pameran satu arah.',
        ],
        en: [
          'Participatory, egalitarian formats foster significantly deeper engagement than conventional one-way showcases.',
        ],
      },
    },
  },
  {
    id: 'drawing-design-competition',
    title: 'Drawing & Design Competition',
    date: { id: 'Agustus 2025', en: 'August 2025' },
    category: { id: 'Pendidikan Kreatif', en: 'Creative Education' },
    role: { id: 'Penyelenggara', en: 'Organizer' },
    roleDetail: { id: 'Penyelenggara Teknis & Pendamping Kuratorial', en: 'Technical Organizer & Curatorial Facilitator' },
    summary: {
      id: 'Kompetisi menggambar dan desain yang membuka ruang ekspresi serta kreativitas bagi peserta.',
      en: 'A drawing and design competition opening expressive spaces and creative exploration for participants.',
    },
    image: MEDIA.programs.drawingCompetition.src,
    imageAlt: {
      id: 'Peserta muda menggambar dan mendesain karya bertema menjaga lingkungan bersama',
      en: 'Young participants drawing and designing works on collective environmental care',
    },
    caseStudy: {
      background: {
        id: 'Menyalurkan bakat ekspresi visual generasi muda sembari membangun kesadaran kritis terhadap ruang hidup dan lingkungan sekitar.',
        en: 'Channeling young visual expression while building critical awareness of living spaces and shared environments.',
      },
      objectives: {
        id: [
          'Memberi ruang eksplorasi ide mengenai pelestarian lingkungan melalui bahasa visual.',
          'Mengapresiasi gagasan generasi muda mengenai ruang publik yang ramah dan lestari.',
          'Menyediakan umpan balik konstruktif dari mentor desain profesional.',
        ],
        en: [
          'Provide a platform for visual ideas addressing environmental preservation.',
          'Celebrate youth perspectives on accessible, sustainable public spaces.',
          'Offer constructive mentorship from design professionals.',
        ],
      },
      roleDescription: {
        id: 'CoCreAct merancang tema kuratorial, menyusun rubrik penilaian yang berorientasi proses dan gagasan, serta memfasilitasi pendampingan karya.',
        en: 'CoCreAct framed the curatorial theme, designed process-oriented evaluation criteria, and facilitated participant mentoring.',
      },
      partners: ['Pendidik Seni Rupa', 'Komunitas Peduli Lingkungan', 'Sanggar Belajar'],
      activities: {
        id: [
          'Sesi pengantar pemahaman tema ‘Ruang Kita, Rumah Kita, Alam Kita’',
          'Kompetisi menggambar dan perancangan desain poster',
          'Apresiasi terbuka dan umpan balik antar peserta',
        ],
        en: [
          'Orientation on the theme ‘Our Space, Our Home, Our Nature’',
          'Live sketching and poster design competition',
          'Open appreciation and peer feedback sessions',
        ],
      },
      outputs: {
        id: [
          'Koleksi karya desain bertema pelestarian lingkungan',
          'Pameran digital karya peserta',
        ],
        en: [
          'Curated environmental design portfolio',
          'Digital exhibition of participant artworks',
        ],
      },
      lessonsLearned: {
        id: [
          'Menggabungkan menggambar dan desain sebagai satu kompetisi utuh memungkinkan peserta memilih medium yang paling sesuai dengan pesan yang ingin disampaikan.',
        ],
        en: [
          'Treating drawing and design under a single competition allows participants to choose the most authentic medium for their voice.',
        ],
      },
    },
  },
  {
    id: 'cocreact-vol-2',
    title: 'CoCreAct Vol. 2: Building Sustainable and Safe Outdoor Culture',
    date: { id: '17 Februari 2026', en: '17 February 2026' },
    category: { id: 'Komunitas & Keberlanjutan', en: 'Community & Sustainability' },
    role: { id: 'Kolaborator', en: 'Collaborator' },
    roleDetail: { id: 'Kolaborator Perancangan Program & Fasilitasi', en: 'Program Design & Facilitation Collaborator' },
    summary: {
      id: 'Program yang mengangkat budaya kegiatan luar ruang yang aman dan berkelanjutan.',
      en: 'A dedicated initiative cultivating a safe, responsible, and sustainable outdoor recreation culture.',
    },
    image: MEDIA.programs.outdoorCulture.src,
    imageAlt: {
      id: 'Sesi edukasi etika luar ruang dan keselamatan bersama penggiat alam terbuka',
      en: 'Outdoor ethics and safety education session with wilderness practitioners',
    },
    caseStudy: {
      background: {
        id: 'Meningkatnya minat kegiatan alam bebas membutuhkan peningkatan literasi keselamatan, kesiapsiagaan, dan komitmen pelestarian ekosistem alam.',
        en: 'Rising interest in outdoor adventures requires heightened safety literacy, environmental stewardship, and emergency preparedness.',
      },
      objectives: {
        id: [
          'Mempromosikan prinsip leave-no-trace dan etika ramah lingkungan dalam aktivitas alam terbuka.',
          'Membagikan standar dasar keselamatan penjelajahan dan mitigasi risiko darurat.',
          'Menyinergikan pegiat petualangan dengan pemandu lokal dan pengelola kawasan.',
        ],
        en: [
          'Promote leave-no-trace principles and environmental ethics in wilderness settings.',
          'Disseminate baseline navigational safety standards and risk management.',
          'Align outdoor enthusiasts with local rangers and area managers.',
        ],
      },
      roleDescription: {
        id: 'CoCreAct berkolaborasi merumuskan format edukasi interaktif, menyelaraskan materi bersama narasumber ahli, dan menyusun modul panduan ringkas.',
        en: 'CoCreAct collaborated on interactive educational formats, curated expert content, and drafted field guide modules.',
      },
      partners: ['Klub Pecinta Alam', 'Komunitas Pendakian Ramah Sampah', 'Instruktur Outdoor Safety'],
      activities: {
        id: [
          'Workshop navigasi dasar dan manajemen perjalanan berkelanjutan',
          'Diskusi etika konservasi alam dan penanganan sampah terpadu',
          'Simulasi penanganan kedaruratan di alam terbuka',
        ],
        en: [
          'Basic navigation and sustainable expedition planning workshop',
          'Waste management and wilderness conservation dialogue',
          'Emergency scenario simulations in outdoor settings',
        ],
      },
      outputs: {
        id: [
          'Buku saku etika dan keselamatan kegiatan luar ruang',
          'Komitmen bersama kelompok penggiat alam untuk monitoring jalur',
        ],
        en: [
          'Pocket guide on outdoor safety and conservation ethics',
          'Joint community pact on sustainable trail monitoring',
        ],
      },
      lessonsLearned: {
        id: [
          'Simulasi langsung di alam menghasilkan retensi pemahaman keselamatan yang jauh lebih kuat dibanding ceramah ruang tertutup.',
        ],
        en: [
          'Direct field simulations yield significantly higher retention of safety practices than classroom theory.',
        ],
      },
    },
  },
  {
    id: 'kelas-edukasi-pesona-01',
    title: 'CoCreAct Kelas Edukasi #01: PESONA',
    date: { id: '25 April, 2, 9, & 16 Mei 2026', en: '25 April, 2, 9, and 16 May 2026' },
    category: { id: 'Pendidikan Inklusif', en: 'Inclusive Education' },
    role: { id: 'Fasilitator', en: 'Facilitator' },
    roleDetail: { id: 'Fasilitator Metode Inklusif & Komunikasi Visual', en: 'Inclusive Facilitator & Visual Media Designer' },
    summary: {
      id: 'Program edukasi HIV/AIDS dan kesehatan seksual yang inklusif bagi masyarakat umum, teman Tuli, dan penyandang disabilitas.',
      en: 'An inclusive HIV/AIDS and sexual health educational initiative designed for the public, Deaf peers, and people with disabilities.',
    },
    image: MEDIA.programs.inclusivePesona.src,
    imageAlt: {
      id: 'Lokakarya edukasi kesehatan dengan kartu visual dan bahasa isyarat inklusif',
      en: 'Health education workshop utilizing visual cards and sign language interpretation',
    },
    caseStudy: {
      background: {
        id: 'Akses informasi kesehatan reproduksi dan pencegahan HIV/AIDS yang seringkali sulit dipahami oleh kelompok disabilitas akibat minimnya materi adaptif.',
        en: 'Limited access to reproductive health and HIV/AIDS prevention literacy among persons with disabilities due to scarcity of adaptive materials.',
      },
      objectives: {
        id: [
          'Menghadirkan materi kesehatan reproduksi yang ramah bahasa isyarat dan visual komunikatif.',
          'Menghapus stigma seputar HIV/AIDS melalui pemahaman ilmiah yang memanusiakan.',
          'Menciptakan ruang belajar aman, saling menghormati, dan tanpa prasangka.',
        ],
        en: [
          'Deliver sign-language-friendly, accessible visual reproductive health learning tools.',
          'De-stigmatize HIV/AIDS through compassionate, evidence-based science.',
          'Establish a safe, supportive, prejudice-free learning environment.',
        ],
      },
      roleDescription: {
        id: 'CoCreAct mendampingi penyusunan media visual komunikasi (kartu bergambar, infografis, video ramah Tuli) dan memfasilitasi kelancaran sesi bersama konselor kesehatan.',
        en: 'CoCreAct facilitated visual communication materials (flashcards, infographics, subtitled videos) and co-facilitated sessions with counselors.',
      },
      partners: ['Tenaga Kesehatan Spesialis', 'Juru Bahasa Isyarat', 'Organisasi Advokasi Kesehatan'],
      activities: {
        id: [
          'Penyusunan materi terjemahan visual dan teks mudah dipahami',
          'Sesi kelas interaktif berkala dengan juru bahasa isyarat',
          'Ruang konsultasi privat yang aman bagi peserta',
        ],
        en: [
          'Co-designing plain-language visual learning materials',
          'Interactive class sessions supported by certified sign language interpreters',
          'Confidential, safe consultation spaces for participants',
        ],
      },
      outputs: {
        id: [
          'Modul panduan visual edukasi PESONA',
          'Set media bantu belajar fisik dan digital',
        ],
        en: [
          'PESONA visual health educational guidebook',
          'Physical and digital accessible learning kit',
        ],
      },
      lessonsLearned: {
        id: [
          'Mendesain materi edukasi dengan prinsip inklusif sejak awal membuat materi tersebut lebih mudah dipahami oleh semua kalangan masyarakat.',
        ],
        en: [
          'Inclusive design from day one inherently makes educational content clearer and more accessible for everyone.',
        ],
      },
    },
  },
  {
    id: 'kelas-edukasi-video-02',
    title: 'CoCreAct Kelas Edukasi #02: Video Creation',
    date: { id: '30 Agustus 2026', en: '30 August 2026' },
    category: { id: 'Pendidikan Kreatif', en: 'Creative Education' },
    role: { id: 'Penyelenggara', en: 'Organizer' },
    roleDetail: { id: 'Penyelenggara & Fasilitator Teknis', en: 'Organizer & Technical Facilitator' },
    summary: {
      id: 'Kelas edukasi dan pengembangan keterampilan dalam pembuatan video.',
      en: 'An educational workshop cultivating practical storytelling and technical video creation skills.',
    },
    image: MEDIA.gallery.creativeLearning.src,
    imageAlt: {
      id: 'Praktik produksi video mobile dan penyuntingan konten kreatif bersama peserta kelas',
      en: 'Mobile video production practice and editing session with workshop participants',
    },
    caseStudy: {
      background: {
        id: 'Ponsel pintar merupakan alat yang sangat mudah diakses, namun pegiat komunitas sering membutuhkan bimbingan teknis untuk merangkai cerita visual bermakna.',
        en: 'Smartphones are ubiquitous, yet community storytellers benefit immensely from hands-on guidance in crafting impactful narratives.',
      },
      objectives: {
        id: [
          'Membekali peserta dengan keterampilan teknis pengambilan gambar, audio sederhana, dan penyuntingan di ponsel.',
          'Mengajarkan cara merangkai cerita berdampak sosial dari kehidupan sehari-hari.',
          'Memastikan akses yang inklusif bagi peserta dengan ragam latar belakang.',
        ],
        en: [
          'Equip participants with mobile filming, basic lighting/audio, and editing proficiency.',
          'Teach techniques for structuring social impact narratives from everyday stories.',
          'Ensure barrier-free learning access across diverse participant groups.',
        ],
      },
      roleDescription: {
        id: 'CoCreAct menyusun silabus terapan, menyediakan bimbingan praktik intensif, dan memfasilitasi pemutaran karya akhir.',
        en: 'CoCreAct designed the applied syllabus, provided one-on-one coaching, and curated the showcase screening.',
      },
      partners: ['Videografer Dokumenter Independen', 'Komunitas Kreatif Lokal'],
      activities: {
        id: [
          'Teori dasar komposisi, audio, dan pencahayaan alami',
          'Praktik pengambilan gambar di lapangan',
          'Sesi penyuntingan menggunakan aplikasi ponsel terbuka',
          'Screening mini dan telaah karya bersama',
        ],
        en: [
          'Composition, audio capture, and natural lighting fundamentals',
          'Direct field shooting exercises',
          'Hands-on mobile video editing',
          'Mini screening and constructive peer critique',
        ],
      },
      outputs: {
        id: [
          'Kompilasi video cerita pendek karya peserta',
          'Panduan ringkas produksi video smartphone',
        ],
        en: [
          'Short video compilation created by participants',
          'Concise smartphone video production guide',
        ],
      },
      lessonsLearned: {
        id: [
          'Keterbatasan alat bukan penghambat narasi; kejernihan sudut pandang dan empati cerita adalah kunci utama video yang berkesan.',
        ],
        en: [
          'Gear limitations never obstruct storytelling; clarity of perspective and authentic empathy make videos memorable.',
        ],
      },
    },
  },
  {
    id: 'pesona-educator',
    title: 'PESONA Educator',
    date: { id: '16 September 2026', en: '16 September 2026' },
    category: { id: 'Pengembangan Pendidik', en: 'Educator Development' },
    role: { id: 'Kolaborator', en: 'Collaborator' },
    roleDetail: { id: 'Kolaborator Fasilitasi & Pengembangan Modul Guru', en: 'Facilitation Collaborator & Teacher Module Co-Creator' },
    summary: {
      id: 'Penguatan kapasitas guru SLB dalam pendidikan HIV/AIDS dan kesehatan reproduksi inklusif, sebagai kelanjutan dari program PESONA.',
      en: 'Capacity-strengthening workshop for special needs (SLB) teachers in inclusive HIV/AIDS and reproductive health education.',
    },
    image: MEDIA.programs.inclusivePesona.src,
    imageAlt: {
      id: 'Sesi peningkatan kapasitas guru SLB dalam pengajaran kesehatan reproduksi adaptif',
      en: 'Capacity-building session for SLB teachers on adaptive health pedagogy',
    },
    caseStudy: {
      background: {
        id: 'Banyak guru di Sekolah Luar Biasa (SLB) menghadapi tantangan dalam menjelaskan topik sensitif kesehatan reproduksi secara nyaman, ilmiah, dan mudah dicerna siswa berkebutuhan khusus.',
        en: 'Special education educators often navigate challenges discussing sensitive health topics with comfort, scientific accuracy, and accessible pedagogy.',
      },
      objectives: {
        id: [
          'Meningkatkan kepercayaan diri dan kapasitas guru SLB dalam mengajarkan pendidikan kesehatan reproduksi.',
          'Menyediakan toolkit panduan kurikulum adaptif yang telah diuji coba.',
          'Membangun jejaring guru untuk saling bertukar metode pengajaran inklusif.',
        ],
        en: [
          'Strengthen confidence and methodology for SLB teachers addressing reproductive health.',
          'Provide field-tested adaptive classroom lesson modules.',
          'Establish a peer network of educators sharing inclusive pedagogical methods.',
        ],
      },
      roleDescription: {
        id: 'CoCreAct membantu merancang modul ajar pedagogis, menyusun alat peraga visual, dan memfasilitasi lokakarya bersama spesialis kurikulum inklusif.',
        en: 'CoCreAct helped structure pedagogical modules, assembled visual teaching aids, and co-facilitated sessions with inclusive education specialists.',
      },
      partners: ['Jaringan Pengajar SLB', 'Lembaga Ahli Kesehatan Publik', 'Psikolog Remaja'],
      activities: {
        id: [
          'Bedah tantangan komunikasi di kelas inklusi',
          'Simulasi pengajaran materi sensitif dengan pendekatan empatik',
          'Penyusunan rencana pelaksanaan pembelajaran (RPP) adaptif',
        ],
        en: [
          'Mapping communication barriers in inclusive classrooms',
          'Empathetic roleplay simulations for sensitive topic delivery',
          'Drafting adaptive daily lesson plans',
        ],
      },
      outputs: {
        id: [
          'Pedoman Pengajar PESONA untuk SLB',
          'Kumpulan alat bantu visual untuk ruang kelas',
        ],
        en: [
          'PESONA Educator Guidelines for Special Education',
          'Classroom visual toolkit for adaptive learning',
        ],
      },
      lessonsLearned: {
        id: [
          'Merancang alat ajar langsung bersama para guru menghasilkan solusi praktis yang siap diterapkan pada ritme kelas sesungguhnya.',
        ],
        en: [
          'Co-designing learning aids directly with practicing teachers results in realistic tools ready for daily classroom implementation.',
        ],
      },
    },
  },
  {
    id: 'aksi-mangrove-yatim',
    title: 'Aksi Penanaman 1.000 Bibit Mangrove & Santunan Anak Yatim',
    date: { id: '19 September 2026', en: '19 September 2026' },
    category: { id: 'Komunitas & Lingkungan', en: 'Community & Environment' },
    role: { id: 'Mitra Pendukung', en: 'Supporting Partner' },
    roleDetail: { id: 'Mitra Pendukung Dokumentasi & Pendampingan Aksesibilitas', en: 'Supporting Partner for Documentation & Accessibility Support' },
    summary: {
      id: 'Inisiatif lingkungan dan sosial yang melibatkan kolaborasi dengan Teman Istimewa dan Gerkatin. Peran CoCreAct mencakup dukungan dokumentasi serta aksesibilitas dan pendampingan bagi peserta Tuli.',
      en: 'An environmental and social initiative collaborating with Teman Istimewa and Gerkatin, where CoCreAct supported documentation, accessibility, and Deaf peer mentorship.',
    },
    image: MEDIA.gallery.communityImpact.src,
    imageAlt: {
      id: 'Kolaborasi penanaman bibit mangrove dan pendampingan di kawasan pesisir',
      en: 'Collaborative mangrove planting and community mentorship along coastal area',
    },
    caseStudy: {
      background: {
        id: 'Inisiatif gabungan pelestarian garis pantai melalui penanaman mangrove yang juga menyatukan momen kepedulian sosial bersama anak-anak panti asuhan dan komunitas Tuli.',
        en: 'A joint coastal conservation project planting 1,000 mangroves while creating an inclusive day of environmental discovery with foster children and Deaf peers.',
      },
      objectives: {
        id: [
          'Mendukung rehabilitasi ekosistem pesisir dengan penanaman 1.000 bibit mangrove produktif.',
          'Menyediakan pengalaman edukasi alam langsung dengan pendampingan aksesibel ramah Tuli.',
          'Mendokumentasikan seluruh proses secara terarah untuk pertanggungjawaban bersama.',
        ],
        en: [
          'Support coastal restoration through planting 1,000 productive mangrove saplings.',
          'Provide hands-on ecological education with dedicated Deaf-accessible companionship.',
          'Document the initiative transparently for all collaborative partners.',
        ],
      },
      roleDescription: {
        id: 'Peran CoCreAct mencakup dukungan dokumentasi audio-visual, rekapitulasi narasi dampak, serta pendampingan aksesibilitas dan komunikasi bagi peserta Tuli bersama Gerkatin dan Teman Istimewa.',
        en: 'CoCreAct provided audio-visual documentation, impact reporting, and on-ground accessibility accompaniment for Deaf participants alongside Gerkatin and Teman Istimewa.',
      },
      partners: ['Teman Istimewa', 'Gerkatin', 'Komunitas Relawan Konservasi'],
      activities: {
        id: [
          'Pengenalan fungsi ekologis mangrove bagi perlindungan pesisir',
          'Aksi penanaman 1.000 bibit mangrove bersama peserta',
          'Permainan edukasi ramah isyarat dan penyerahan santunan',
          'Penyusunan arsip video dokumentasi naratif',
        ],
        en: [
          'Ecological briefing on mangrove coastal resilience',
          'Hands-on planting of 1,000 saplings with participants',
          'Sign-language-friendly educational activities and social support',
          'Narrative video documentation archival',
        ],
      },
      outputs: {
        id: [
          '1.000 bibit mangrove tertanam di area konservasi',
          'Video dokumentasi dan arsip foto publikasi',
          'Rekapitulasi transparansi pelaksanaan kegiatan',
        ],
        en: [
          '1,000 mangrove saplings planted in conservation zone',
          'Video documentation and photography archive',
          'Transparent collaborative activity recap',
        ],
      },
      lessonsLearned: {
        id: [
          'Dukungan dokumentasi dan aksesibilitas yang tulus memperkuat transparansi inisiatif komunitas tanpa mengambil alih panggung penggerak utama.',
        ],
        en: [
          'Genuine documentation and accessibility support elevate grassroots credibility without overshadowing community initiators.',
        ],
      },
    },
  },
];

export const PHILOSOPHY_CONTENT = {
  sectionLabel: '04 / CARA KAMI BERKOLABORASI',
  sectionLabelEn: '04 / OUR COLLABORATION APPROACH',
  headline: {
    id: 'Tidak harus datang dengan semua jawaban. Cukup mulai dengan pertanyaan yang tepat.',
    en: 'You don’t have to arrive with all the answers. Just start with the right question.',
  },
  supportingCopy: {
    id: 'Setiap kolaborasi dimulai dengan memahami kebutuhan, mendengar perspektif, dan mencari kemungkinan yang bisa dikerjakan bersama.',
    en: 'Every collaboration begins with understanding real needs, listening to perspectives, and discovering what can be achieved together.',
  },
};

export const PROCESS_CONTENT = {
  sectionLabel: '05 / PROSES',
  sectionLabelEn: '05 / HOW WE WORK',
  headline: {
    id: 'Dari mendengar hingga bergerak.',
    en: 'From listening to moving forward.',
  },
  stages: [
    {
      number: '01',
      name: { id: 'Listen', en: 'Listen' },
      description: {
        id: 'Memahami kebutuhan, konteks, dan perspektif pihak yang terlibat.',
        en: 'Understanding the genuine needs, context, and perspectives of everyone involved.',
      },
    },
    {
      number: '02',
      name: { id: 'Co-create', en: 'Co-create' },
      description: {
        id: 'Menyusun gagasan dan merancang program bersama, bukan sepihak.',
        en: 'Shaping ideas and co-designing programs collaboratively, never unilaterally.',
      },
    },
    {
      number: '03',
      name: { id: 'Activate', en: 'Activate' },
      description: {
        id: 'Mengubah rencana menjadi kegiatan, pengalaman, atau inisiatif nyata.',
        en: 'Translating plans into tangible activities, experiences, and actionable initiatives.',
      },
    },
    {
      number: '04',
      name: { id: 'Learn & Improve', en: 'Learn & Improve' },
      description: {
        id: 'Merefleksikan proses, mengevaluasi pelaksanaan, dan mengembangkan langkah berikutnya.',
        en: 'Reflecting on the journey, evaluating execution, and evolving next steps.',
      },
    },
  ] as ProcessStage[],
};

export const IMPACT_CONTENT = {
  sectionLabel: '06 / DAMPAK',
  sectionLabelEn: '06 / WHAT MATTERS',
  headline: {
    id: 'Dampak bukan sekadar angka.',
    en: 'Impact is more than just numbers.',
  },
  bodyCopy: {
    id: 'Dampak juga terlihat dari akses yang terbuka, keterampilan yang berkembang, perspektif yang bertemu, dan kesempatan untuk terlibat yang semakin luas.',
    en: 'Impact is reflected in opened access, expanding skills, intersecting perspectives, and broadened opportunities for participation.',
  },
  areas: [
    {
      title: { id: 'Access & Inclusion', en: 'Access & Inclusion' },
      description: {
        id: 'Mendorong ruang yang lebih terbuka dan kesempatan untuk berpartisipasi.',
        en: 'Fostering more welcoming spaces and equitable opportunities to participate.',
      },
    },
    {
      title: { id: 'Learning & Capability', en: 'Learning & Capability' },
      description: {
        id: 'Mengembangkan pengetahuan, keterampilan, dan kapasitas individu maupun komunitas.',
        en: 'Developing knowledge, skills, and capacities of individuals and grassroots communities.',
      },
    },
    {
      title: { id: 'Collaboration & Participation', en: 'Collaboration & Participation' },
      description: {
        id: 'Menghubungkan pihak-pihak yang dapat bekerja bersama untuk mencapai tujuan yang relevan.',
        en: 'Connecting diverse stakeholders to work together toward relevant, shared goals.',
      },
    },
  ] as ImpactArea[],
};

export const FINAL_CTA_CONTENT = {
  sectionLabel: '07 / MULAI PERCAKAPAN',
  sectionLabelEn: '07 / START A CONVERSATION',
  headline: {
    id: 'Ada sesuatu yang bisa kita kerjakan bersama.',
    en: 'There is something we can create together.',
  },
  supportingCopy: {
    id: 'Punya gagasan, kebutuhan, atau peluang kolaborasi? Mari mulai dari percakapan.',
    en: 'Have an idea, community need, or collaborative opportunity? Let’s begin with a conversation.',
  },
  primaryCta: {
    id: 'Mulai Kolaborasi ↗',
    en: "Let's Collaborate ↗",
  },
  secondaryCta: {
    id: 'Lihat Portofolio ↗',
    en: 'Explore Portfolio ↗',
  },
};

export const FOOTER_CONTENT = {
  brandDescription: {
    id: 'Platform kolaborasi lintas sektor yang berakar pada komunitas dan bekerja profesional untuk mewujudkan gagasan menjadi dampak nyata.',
    en: 'A cross-sector collaboration platform rooted in communities and working professionally to transform ideas into tangible impact.',
  },
  tagline: {
    id: 'Bukan Siapa, Tetapi Apa.',
    en: 'Not Who, But What.',
  },
  navTitle: {
    id: 'Navigasi',
    en: 'Navigation',
  },
  socialTitle: {
    id: 'Kanal Kolaborasi',
    en: 'Connect',
  },
  videoAttribution: {
    id: 'Video latar panggung berlisensi Creative Commons (CC BY) — “Wanna Work Together?”.',
    en: 'Hero background video licensed under Creative Commons (CC BY) — “Wanna Work Together?”.',
  },
  videoAttributionUrl: 'https://creativecommons.org/about/videos/wanna-work-together/',
};
