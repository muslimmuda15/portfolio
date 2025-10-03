# Kebijakan Privasi untuk AMB - Smart AutoClicker

**Terakhir Diperbarui**: 3 Oktober 2025

## Pendahuluan

AMB - Smart AutoClicker (sebelumnya dikenal sebagai Smart AutoClicker) adalah aplikasi Android sumber terbuka yang dikembangkan untuk mengotomatiskan tugas-tugas berulang melalui deteksi gambar dan fungsi klik otomatis. Kebijakan Privasi ini menjelaskan bagaimana kami menangani informasi saat Anda menggunakan aplikasi kami.

## Informasi Pengembang

Aplikasi ini adalah versi modifikasi berdasarkan proyek Smart AutoClicker asli oleh Nain57, tersedia di https://github.com/Nain57/Smart-AutoClicker. Proyek asli dilisensikan di bawah GNU General Public License v3.0 (GPL-3.0).

## Informasi yang Kami Kumpulkan

### Informasi yang TIDAK Kami Kumpulkan

AMB - Smart AutoClicker dirancang dengan privasi sebagai prioritas. Kami ingin memperjelas apa yang **TIDAK** kami kumpulkan:

- **Tidak Ada Informasi Pribadi**: Kami tidak mengumpulkan, menyimpan, atau mengirimkan informasi pribadi apa pun seperti nama, alamat email, nomor telepon, atau informasi identitas pribadi lainnya.
- **Tidak Ada Analitik Penggunaan**: Kami tidak melacak bagaimana Anda menggunakan aplikasi, fitur apa yang Anda akses, atau seberapa sering Anda menggunakan aplikasi.
- **Tidak Ada Data Lokasi**: Kami tidak mengakses, mengumpulkan, atau menyimpan informasi lokasi perangkat Anda.
- **Tidak Ada Informasi Perangkat**: Kami tidak mengumpulkan informasi tentang perangkat Anda, termasuk model perangkat, versi sistem operasi, atau pengenal perangkat unik.
- **Tidak Ada Konten Layar**: Meskipun aplikasi menggunakan tangkapan layar untuk tujuan deteksi gambar, semua pemrosesan dilakukan secara lokal di perangkat Anda. Tidak ada tangkapan layar atau konten layar yang dikirimkan atau disimpan di luar perangkat Anda.
- **Tidak Ada Komunikasi Jaringan**: Aplikasi tidak mengirim data apa pun ke server eksternal atau pihak ketiga, kecuali saat Anda secara eksplisit menggunakan fitur API untuk memuat tindakan dari endpoint API yang Anda tentukan sendiri.

### Informasi yang Disimpan Secara Lokal

Informasi berikut disimpan **hanya di perangkat Anda** dan tidak pernah dikirimkan ke tempat lain:

- **Skenario Otomasi**: Skenario otomasi yang Anda buat, termasuk konfigurasi klik, geser, dan deteksi gambar.
- **Tangkapan Layar untuk Deteksi**: Gambar yang ditangkap untuk tujuan deteksi gambar disimpan secara lokal dan hanya digunakan untuk pencocokan otomasi.
- **Pengaturan Aplikasi**: Preferensi dan pengaturan konfigurasi Anda untuk aplikasi.

## Izin yang Diperlukan

AMB - Smart AutoClicker memerlukan izin tertentu untuk berfungsi dengan baik:

### Layanan Aksesibilitas
- **Tujuan**: Diperlukan untuk melakukan klik otomatis, geser, dan tindakan lainnya atas nama Anda.
- **Penggunaan**: Izin ini memungkinkan aplikasi berinteraksi dengan aplikasi lain untuk menjalankan skenario otomasi Anda.
- **Akses Data**: Meskipun izin ini secara teknis memungkinkan akses ke konten layar, kami hanya menggunakannya untuk tugas otomasi spesifik yang Anda konfigurasi. Tidak ada data yang dikumpulkan, disimpan secara permanen, atau dikirimkan.

### Tangkapan Layar/Overlay
- **Tujuan**: Diperlukan untuk deteksi gambar dan menampilkan kontrol mengambang.
- **Penggunaan**: Memungkinkan aplikasi menangkap tangkapan layar untuk pencocokan gambar dan menampilkan tombol overlay.
- **Akses Data**: Tangkapan layar diproses secara real-time dan hanya disimpan jika Anda secara eksplisit menyimpannya sebagai bagian dari skenario otomasi Anda.

### Akses Penyimpanan
- **Tujuan**: Untuk menyimpan dan memuat skenario otomasi Anda.
- **Penggunaan**: Memungkinkan aplikasi membaca dan menulis file skenario di perangkat Anda.

### Akses Internet (Opsional)
- **Tujuan**: Hanya digunakan saat Anda memilih untuk menggunakan fitur API untuk memuat tindakan otomasi.
- **Penggunaan**: Saat Anda mengonfigurasi endpoint API, aplikasi akan membuat permintaan jaringan ke endpoint tersebut untuk mengambil konfigurasi tindakan.
- **Data yang Dikirim**: Hanya data yang diperlukan untuk berkomunikasi dengan endpoint API yang Anda tentukan.

## Layanan Pihak Ketiga

AMB - Smart AutoClicker tidak mengintegrasikan layanan analitik, iklan, atau pelacakan pihak ketiga apa pun. Aplikasi beroperasi sepenuhnya offline, kecuali saat Anda secara eksplisit mengonfigurasi dan menggunakan fitur API.

## Fitur API

Jika Anda memilih untuk menggunakan fitur API untuk memuat tindakan otomasi:

- Anda bertanggung jawab atas endpoint API yang Anda konfigurasi.
- Aplikasi akan mengirim permintaan ke endpoint API yang Anda tentukan untuk mengambil konfigurasi tindakan.
- Kami tidak mengontrol atau memiliki akses ke endpoint API yang Anda konfigurasi.
- Harap tinjau kebijakan privasi dari layanan API pihak ketiga yang Anda pilih untuk digunakan.

## Keamanan Data

Karena semua data disimpan secara lokal di perangkat Anda:

- Keamanan data Anda bergantung pada langkah-langkah keamanan perangkat Anda.
- Kami merekomendasikan menggunakan enkripsi perangkat dan layar kunci yang aman.
- Jika Anda menghapus instalasi aplikasi, semua data yang disimpan secara lokal akan dihapus sesuai dengan penanganan data aplikasi standar Android.

## Privasi Anak-anak

AMB - Smart AutoClicker tidak dengan sengaja mengumpulkan informasi apa pun dari anak-anak di bawah usia 13 tahun. Aplikasi ini tidak ditujukan untuk anak-anak, dan kami tidak dengan sengaja mengumpulkan informasi pribadi dari siapa pun, termasuk anak-anak.

## Sifat Sumber Terbuka

AMB - Smart AutoClicker adalah aplikasi sumber terbuka yang dilisensikan di bawah GNU General Public License v3.0 (GPL-3.0). Anda dapat meninjau kode sumber untuk memverifikasi praktik privasi kami. Kode sumber tersedia dan dapat diaudit oleh siapa saja.

## Perubahan pada Kebijakan Privasi Ini

Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Setiap perubahan akan tercermin dalam tanggal "Terakhir Diperbarui" di bagian atas kebijakan ini. Kami mendorong Anda untuk meninjau Kebijakan Privasi ini secara berkala untuk setiap perubahan.

## Informasi Kontak

Jika Anda memiliki pertanyaan atau kekhawatiran tentang Kebijakan Privasi ini atau praktik privasi aplikasi, Anda dapat:

- Meninjau kode sumber aplikasi
- Membuka issue di repositori proyek
- Menghubungi melalui saluran yang disediakan di platform distribusi aplikasi

## Hak Anda

Sebagai pengguna AMB - Smart AutoClicker, Anda memiliki hak-hak berikut:

- **Hak untuk Mengakses**: Karena semua data disimpan secara lokal di perangkat Anda, Anda memiliki akses lengkap ke semua data yang disimpan aplikasi.
- **Hak untuk Menghapus**: Anda dapat menghapus semua data aplikasi dengan menghapus instalasi aplikasi atau menghapus data aplikasi melalui pengaturan perangkat Anda.
- **Hak Portabilitas Data**: Anda dapat mengekspor skenario otomasi Anda melalui fitur ekspor aplikasi.
- **Hak atas Transparansi**: Sebagai aplikasi sumber terbuka, Anda dapat meninjau kode sumber untuk memahami dengan tepat bagaimana data Anda ditangani.

## Kepatuhan

Aplikasi ini mematuhi:

- Pedoman privasi dan keamanan Android
- Kebijakan Google Play Store (jika didistribusikan melalui Google Play)
- Standar privasi F-Droid (jika didistribusikan melalui F-Droid)
- Prinsip-prinsip General Data Protection Regulation (GDPR)
- Prinsip-prinsip California Consumer Privacy Act (CCPA)

## Penafian

AMB - Smart AutoClicker disediakan "sebagaimana adanya" tanpa jaminan apa pun, sebagaimana ditentukan dalam GNU General Public License v3.0. Meskipun kami berusaha melindungi privasi Anda, kami tidak dapat menjamin keamanan absolut data yang disimpan di perangkat Anda.

## Atribusi

Aplikasi ini didasarkan pada Smart AutoClicker oleh Nain57 (https://github.com/Nain57/Smart-AutoClicker), dilisensikan di bawah GNU General Public License v3.0.

---

**Dengan menggunakan AMB - Smart AutoClicker, Anda mengakui bahwa Anda telah membaca dan memahami Kebijakan Privasi ini.**
