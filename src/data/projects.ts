import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "absensi-geotagging",
    title: "Sistem Absensi Karyawan Berbasis Geotagging",
    description:
      "Aplikasi web komprehensif yang dirancang untuk mengelola kehadiran karyawan secara digital. Sistem ini memvalidasi lokasi absensi secara real-time menggunakan teknologi geotagging, serta memfasilitasi proses pengajuan cuti dan otomatisasi pembuatan laporan administrasi karyawan.",
    image: "/projects/absensi-karwawan-geo/thumb.png",
    screenshots: [
      "/projects/absensi-karwawan-geo/hero.png",
      "/projects/absensi-karwawan-geo/detail_01.png",
      "/projects/absensi-karwawan-geo/detail_02.png",
      "/projects/absensi-karwawan-geo/detail_03.png",
    ],
    stack: [
      "Laravel 12",
      "Vue 3",
      "Alpine.js",
      "Tailwind CSS",
      "MySQL",
      "DomPDF",
    ],
    githubUrl: "https://github.com/yogipranata-id/sistem-absensi-karyawan-geotagging-laravel",
    role: "Full-Stack Web Developer",
    featured: true,
    status: "completed",
    objective:
      "Mendigitalisasi dan menyederhanakan proses HR terkait absensi, mencegah kecurangan absensi dengan memvalidasi lokasi fisik karyawan, serta memberikan kemudahan bagi admin dalam memonitor kehadiran, memproses persetujuan cuti, dan menghasilkan laporan administrasi yang akurat secara otomatis.",
    features: [
      "Geotagging-Based Attendance: Clock-In dan Clock-Out tervalidasi dengan batas radius GPS dari titik kantor",
      "Role-Based Access Control (RBAC): Pemisahan hak akses antara Admin (manajemen divisi/area) dan Karyawan (absensi/cuti)",
      "Automated Time Tracking: Deteksi anomali keterlambatan dan kepulangan awal secara otomatis berdasarkan jadwal",
      "Leave Management System: Modul pengajuan cuti digital dengan approval langsung oleh admin",
      "Comprehensive Reporting: Export laporan kehadiran bulanan dan harian ke format PDF secara dinamis",
    ],
    challenges: [
      "Memastikan akurasi lokasi agar tidak dapat dimanipulasi (Fake GPS) dan sistem bisa mengkalkulasi jarak lokasi secara presisi.",
      "Mengelola kalkulasi waktu absensi untuk mendeteksi keterlambatan secara dinamis antara server dan waktu lokal.",
      "Merancang antarmuka absensi yang harus sangat intuitif, cepat, dan responsif (Mobile-First) bagi pengguna smartphone.",
    ],
    solutions: [
      "Mengimplementasikan algoritma Haversine di sisi backend untuk mengkalkulasi jarak koordinat GPS secara matematis terhadap radius absensi.",
      "Menggunakan library Carbon bawaan Laravel untuk menangani dan menstandarisasi perhitungan waktu absensi.",
      "Mengombinasikan Tailwind CSS dan Alpine.js untuk interaksi UI sisi klien tanpa full-page reload, memberikan pengalaman layaknya native-app.",
    ],
  },
  {
    slug: "absensi-siswa-qr",
    title: "Sistem Absensi Siswa Berbasis QR/Barcode",
    description:
      "Aplikasi web berbasis Laravel untuk membantu sekolah mencatat, memantau, dan merekap kehadiran siswa secara digital melalui sistem scan QR/Barcode, dilengkapi pengelolaan data akademik dan dashboard monitoring untuk Admin, Guru, dan Kepala Sekolah.",
    image: "/projects/absensi-siswa-qr/thumb.png",
    screenshots: [
      "/projects/absensi-siswa-qr/hero.png",
      "/projects/absensi-siswa-qr/detail_01.png",
      "/projects/absensi-siswa-qr/detail_02.png",
      "/projects/absensi-siswa-qr/detail_03.png",
      "/projects/absensi-siswa-qr/detail_04.png",
      "/projects/absensi-siswa-qr/detail_05.png",
      "/projects/absensi-siswa-qr/detail_06.png",
      "/projects/absensi-siswa-qr/detail_07.png",
    ],
    stack: [
      "Laravel 12",
      "MySQL",
      "Tailwind CSS",
      "Alpine.js",
      "Simple QR Code",
      "Excel & PDF Export"
    ],
    githubUrl: "https://github.com/yogipranata-id/student-attendance-qr-barcode-laravel-individual",
    role: "Full Stack Developer",
    featured: true,
    status: "code-only",
    objective:
      "Membantu pihak sekolah mencatat, memantau, dan merekap kehadiran siswa secara digital dan terpusat, menggantikan pencatatan manual dengan sistem scan QR/Barcode yang terintegrasi langsung dengan pengelolaan akademik.",
    features: [
      "Neobrutalism UI: Antarmuka responsif dengan desain tegas, kontras tinggi, dan tipografi tebal (Tailwind CSS)",
      "Absensi via Scan QR/Barcode: Proses absensi per sesi pelajaran yang super cepat dan efisien bagi guru",
      "Role-based Access Dashboard: Akses spesifik untuk Admin, Guru, Wali Kelas, dan Kepala Sekolah",
      "Manajemen Data Akademik Lengkap: Pengelolaan siswa, guru, kelas, tahun ajaran, dan jadwal pelajaran",
      "Generate & Cetak Kartu QR: Pembuatan ID Card ber-QR secara otomatis",
      "Sistem Pelaporan Komprehensif: Filter laporan absensi kelas yang bisa di-export ke PDF dan Excel",
      "Audit Trail & Import Data: Monitoring log aktivitas dan fitur import data siswa masal (CSV)",
    ],
    challenges: [
      "Merancang sistem pencatatan kehadiran yang sangat cepat agar tidak memakan jam pelajaran (ratusan siswa per hari).",
      "Mengelola relasi database yang kompleks antara guru, mata pelajaran, jadwal, siswa, dan sesi harian.",
      "Menyajikan laporan yang detail namun mudah disaring dan diexport secara akurat ke PDF/Excel.",
      "Menciptakan antarmuka visual yang tidak membosankan namun tetap mengutamakan *scannability* data.",
    ],
    solutions: [
      "Memanfaatkan package `Simple QR Code` pada backend yang dapat dipindai seketika menggunakan modul scanner guru.",
      "Menerapkan Eloquent ORM Laravel secara efisien untuk arsitektur relasional tersentralisasi.",
      "Integrasi `DomPDF` dan `Maatwebsite Excel` untuk rekapitulasi 1-klik.",
      "Mengadopsi gaya Neobrutalism UI (border tebal & shadow solid) untuk memperjelas hierarki aksi bagi user awam.",
    ],
  },
  {
    slug: "booking-klinik-laravel",
    title: "Aplikasi Booking Klinik (Klinik Sehat Selalu)",
    description:
      "Aplikasi web responsif yang dirancang untuk menjembatani komunikasi antara klinik dan pasien. Platform ini memungkinkan pasien untuk melihat jadwal praktik dokter dan memesan janji temu secara online, sekaligus memberikan kemudahan bagi admin klinik dalam mengelola operasional penjadwalan.",
    image: "/projects/booking-klinik-laravel/thumb.png",
    screenshots: [
      "/projects/booking-klinik-laravel/hero.png",
      "/projects/booking-klinik-laravel/detail_01.png",
      "/projects/booking-klinik-laravel/detail_02.png",
      "/projects/booking-klinik-laravel/detail_03.png",
    ],
    stack: [
      "Laravel 12",
      "SQLite",
      "Tailwind CSS",
      "Alpine.js",
      "Pest & PHPUnit",
    ],
    githubUrl: "https://github.com/yogipranata-id/aplikasi-booking-klinik-laravel-final-exam",
    role: "Full-Stack Web Developer",
    featured: true,
    status: "completed",
    objective:
      "Mendigitalisasi proses pemesanan janji temu klinik untuk mengurangi antrean fisik, memberikan transparansi jadwal dokter, serta menyediakan dashboard terpusat bagi pihak klinik untuk mengelola reservasi.",
    features: [
      "Public & Patient Portal: Halaman jadwal praktik dokter yang dapat langsung dipesan oleh pasien terdaftar",
      "Dynamic Booking System: Alur pemesanan dengan pemilihan dokter, tanggal, dan pengisian keluhan medis",
      "Admin Dashboard & Management: Panel manajemen dokter (CRUD dengan foto) dan verifikasi pesanan",
      "Status Tracking: Alur perubahan status reservasi dari Pending ke Confirmed atau Cancelled",
      "Role-Based Authentication: Sistem otentikasi yang terisolasi antara Pasien dan Admin (Laravel Breeze)",
    ],
    challenges: [
      "Manajemen status booking dan relasinya dengan ketersediaan Dokter dan Pengguna.",
      "Merancang layout dashboard yang sepenuhnya terisolasi antara Admin dan Pasien untuk menghindari kebingungan.",
      "Memastikan aplikasi sangat mudah di-deploy (plug-and-play) untuk keperluan testing akademis tanpa setup database server yang ribet.",
    ],
    solutions: [
      "Mengoptimalkan Eloquent ORM untuk melacak status pemesanan secara aman.",
      "Memanfaatkan Reusable Blade Components dan Tailwind CSS agar proses pembuatan layout sidebar dan form dinamis berjalan rapi.",
      "Memakai SQLite sebagai database engine bawaan untuk portabilitas, serta menulis automated testing dengan framework Pest agar arsitektur terjamin.",
    ],
  },
  {
    slug: "klinik-booking-native",
    title: "Klinik Booking (Sistem Reservasi Jadwal Dokter)",
    description:
      "Aplikasi web yang dirancang untuk mengelola proses pemesanan janji temu antara pasien dan dokter di sebuah klinik. Proyek ini dibangun sepenuhnya menggunakan PHP Native (Core PHP) tanpa framework backend, dirancang untuk mendemonstrasikan pemahaman fundamental mengenai routing manual, manajemen session, dan arsitektur MVC konvensional.",
    image: "/projects/klinik-booking-native/thumb.png",
    screenshots: [
      "/projects/klinik-booking-native/hero.png",
      "/projects/klinik-booking-native/detail_01.png",
      "/projects/klinik-booking-native/detail_02.png",
      "/projects/klinik-booking-native/detail_03.png",
      "/projects/klinik-booking-native/detail_04.png",
      "/projects/klinik-booking-native/detail_05.png",
      "/projects/klinik-booking-native/detail_06.png",
    ],
    stack: [
      "PHP Native",
      "MySQL (PDO)",
      "Bootstrap",
      "jQuery",
      "AJAX",
    ],
    githubUrl: "https://github.com/yogipranata-id/klinik-booking-native-php-backend-assignment",
    role: "Backend / Full-Stack Web Developer",
    featured: true,
    status: "completed",
    objective:
      "Menguasai konsep-konsep dasar pengembangan web seperti pembuatan routing manual, pengamanan otentikasi & otorisasi dari nol, dan integrasi antarmuka dengan database murni tanpa bergantung pada 'keajaiban' framework modern.",
    features: [
      "Multi-Role Dashboards: Hak akses terpisah untuk Admin, Dokter, dan Pasien dengan menu masing-masing",
      "Dynamic Slot & Queue System: Dokter mengatur durasi slot, dan pasien mendapatkan nomor antrean otomatis secara runut",
      "Custom Auth & Session Management: Sistem login dan proteksi halaman dibangun secara manual menggunakan PHP Session",
      "AJAX Integration: Pengecekan ketersediaan slot jadwal secara real-time di halaman booking pasien menggunakan jQuery AJAX",
    ],
    challenges: [
      "Menjaga struktur kode (folder, routing, helper) tetap modular dan maintainable tanpa panduan arsitektur bawaan framework.",
      "Membangun benteng pertahanan manual terhadap celah SQL Injection dan XSS dari nol.",
      "Memastikan manajemen *state* (session) terkunci rapat agar pengguna tidak bisa melakukan eskalasi hak akses antar role.",
    ],
    solutions: [
      "Menerapkan PDO (PHP Data Objects) secara konsisten di seluruh koneksi dan menggunakan prepared statements.",
      "Memecah komponen UI statis ke dalam folder `includes/` (seperti header/footer) untuk mengurangi duplikasi kode.",
      "Membuat validasi session tersentralisasi di `config/session.php` yang dipanggil di baris paling atas pada semua file halaman yang dilindungi.",
    ],
  },
];