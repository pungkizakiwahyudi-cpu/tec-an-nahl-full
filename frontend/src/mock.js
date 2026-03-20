// Mock data untuk TEC AN-NAHL website

export const mockPrograms = [
  {
    id: '1',
    title: 'Program Anak-Anak',
    description: 'Program pembelajaran Al-Qur\'an dengan metode Tilawati untuk anak usia 5-12 tahun. Fokus pada pengenalan huruf hijaiyah, tajwid dasar, dan hafalan surat-surat pendek.',
    ageGroup: '5-12 tahun',
    schedule: 'Senin - Jumat: 15.00 - 17.00 WIB',
    duration: '2 jam per pertemuan'
  },
  {
    id: '2',
    title: 'Program Akhwat',
    description: 'Program khusus untuk santri perempuan dengan pengajar ustadzah bersertifikat Tilawati. Fokus pada penyempurnaan bacaan tartil dan penguasaan tajwid.',
    ageGroup: '18+',
    schedule: 'Senin - Jumat: 17.00 - 19.00 WIB',
    duration: '2 jam per pertemuan'
  },
  {
    id: '3',
    title: 'Program Akhi',
    description: 'Program khusus untuk santri laki-laki dengan pengajar ustadz bersertifikat Tilawati. Jadwal fleksibel dengan metode pembelajaran yang disesuaikan.',
    ageGroup: '18+',
    schedule: 'Sabtu - Minggu: 08.00 - 10.00 WIB',
    duration: '2 jam per pertemuan'
  }
];

export const mockTestimonials = [
  {
    id: '1',
    name: 'Ibu Siti Aminah',
    role: 'Orang Tua Santri',
    text: 'Alhamdulillah, anak saya sangat senang belajar di TEC AN-NAHL. Bacaan Al-Qur\'annya semakin baik dan akhlaknya juga terbina dengan baik.',
    rating: 5
  },
  {
    id: '2',
    name: 'Ahmad Fauzi',
    role: 'Santri Program Akhi',
    text: 'Metode Tilawati sangat membantu saya dalam memperbaiki bacaan. Ustadz dan ustadzahnya sangat sabar dan profesional.',
    rating: 5
  },
  {
    id: '3',
    name: 'Bapak Hendra',
    role: 'Orang Tua Santri',
    text: 'Sebagai orang tua, saya merasa sangat terbantu dengan metode pembelajaran di sini. Anak saya menjadi lebih semangat mengaji.',
    rating: 5
  },
  {
    id: '4',
    name: 'Ibu Fatimah',
    role: 'Orang Tua Santri',
    text: 'Program di TEC AN-NAHL sangat terstruktur dan jelas. Anak saya tidak hanya belajar membaca Al-Qur\'an tetapi juga nilai-nilai Islam.',
    rating: 5
  }
];

export const mockGallery = [
  {
    id: '1',
    url: require('./assets/gallery/Bukber.jpg'),
    title: 'Buka Bersama',
    description: 'Kegiatan buka puasa bersama seluruh santri dan pengajar TEC AN-NAHL. Mempererat ukhuwah dan kebersamaan di bulan Ramadhan.',
    category: 'event'
  },
  {
    id: '2',
    url: require('./assets/gallery/kelas belajar.jpg'),
    title: 'Kelas Belajar',
    description: 'Suasana kegiatan belajar mengaji di dalam kelas bersama ustadz dan ustadzah yang berpengalaman menggunakan metode Tilawati.',
    category: 'classroom'
  },
  {
    id: '3',
    url: require('./assets/gallery/kopdar.jpg'),
    title: 'Kopdar Santri',
    description: 'Kegiatan kopi darat (kopdar) santri TEC AN-NAHL sebagai ajang silaturahmi dan saling berbagi pengalaman belajar Al-Qur\'an.',
    category: 'activity'
  },
  {
    id: '4',
    url: require('./assets/gallery/rihlah.jpg'),
    title: 'Rihlah / Outing',
    description: 'Kegiatan rihlah (perjalanan) bersama santri dan pengajar sebagai sarana refreshing sekaligus mempererat hubungan antar santri.',
    category: 'activity'
  },
  {
    id: '5',
    url: require('./assets/gallery/sholat barjamaah.jpg'),
    title: 'Sholat Berjamaah',
    description: 'Kegiatan sholat berjamaah bersama seluruh santri TEC AN-NAHL. Pembiasaan sholat berjamaah sebagai bagian dari pembinaan karakter Islami.',
    category: 'ibadah'
  },
  {
    id: '6',
    url: require('./assets/gallery/tasyakuran naik jilid.jpg'),
    title: 'Tasyakuran Naik Jilid',
    description: 'Acara tasyakuran dan perayaan kenaikan jilid santri TEC AN-NAHL. Momen kebanggaan bagi santri yang berhasil menyelesaikan satu jilid Tilawati.',
    category: 'event'
  },
  {
    id: '7',
    url: require('./assets/gallery/uring25.jpg'),
    title: 'Ukhuwah Touring #25',
    description: 'Kegiatan Ukhuwah Touring (URING) #25 TEC AN-NAHL ke Lembah Pinus Bogor, Jawa Barat. Perjalanan mempererat ukhuwah antar santri dan pengajar pada 5-6 Juli 2025.',
    category: 'activity'
  },
];

export const mockAchievements = [
  {
    id: '1',
    number: '500',
    label: 'Santri Aktif'
  },
  {
    id: '2',
    number: '15',
    label: 'Tahun Pengalaman'
  },
  {
    id: '3',
    number: '20',
    label: 'Ustadz & Ustadzah'
  },
  {
    id: '4',
    number: '1000',
    label: 'Alumni'
  }
];
