# Catatan pengujian

Tanggal: 28 Oktober 2026.

## Pemeriksaan yang dijalankan

- Pemeriksaan sintaks `app.js` dan server pratinjau dengan Node.js: lulus.
- Browser pratinjau: seluruh 15 layar diperiksa pada 1280×720 dan 1366×768. Tidak ada materi utama yang melampaui area layar presentasi atau luapan horizontal pada skenario standar yang diuji. Pratinjau prompt lengkap memiliki area gulir tersendiri agar teks panjang tetap dapat diperiksa.
- Tampilan 390×844: penyusun prompt dan menu materi dapat digunakan; tidak ada luapan horizontal pada layar yang diperiksa. Pada layar kecil halaman dapat digulir vertikal.
- Lima pilihan mapel memperbarui isi prompt. Kelas, topik, tujuan, dan batasan dapat diedit. Teks menyerupai HTML ditampilkan sebagai teks biasa.
- Empat jalur media dan empat contoh cadangan ditampilkan. Jalur aplikasi yang semula terlalu panjang telah diringkas; prompt lengkap tetap tersedia melalui Salin.
- Catatan dapat dibuka/ditutup. Daftar materi dapat digunakan untuk melompat ke layar. Lima unsur rumus dan contoh perbandingan dapat dibuka. Navigasi Home dan panah berfungsi. Panah pada kolom input tidak memindahkan materi.
- Penyalinan otomatis berhasil pada pratinjau lokal. Jalur salin manual diperiksa dalam pengujian logika terisolasi dengan clipboard tidak tersedia.
- Kuis cadangan memberikan umpan balik untuk jawaban benar dan salah. Empat aspek checklist dapat ditandai.
- Timer diuji melalui antarmuka: mulai, berjalan lintas layar, jeda, dan atur ulang. Pengujian logika dengan waktu simulasi memeriksa lanjutkan, ketepatan perhitungan lintas layar, pilihan durasi yang tetap, berakhir pada nol, mulai ulang, dan tidak berpindah layar otomatis.
- Tombol masuk dan keluar layar penuh berhasil digunakan pada browser pengujian.
- Log browser pada akhir pengujian tidak mencatat kesalahan atau peringatan aplikasi.

## Batas pemeriksaan

Pengujian browser dilakukan melalui server lokal opsional. Aplikasi dirancang agar dapat dibuka langsung melalui `index.html`, tanpa impor modul, permintaan file melalui fetch, atau aset daring. Perilaku clipboard dan layar penuh pada browser lain tetap bergantung pada izin serta dukungan browser; tersedia penyalinan manual dan petunjuk penggunaan layar penuh browser.

Tidak ada pengujian pembuatan gambar, audio, video, atau aplikasi di layanan AI pihak ketiga. Web hanya membimbing dan menyusun prompt. Waktu penyelesaian dan bentuk keluaran bergantung pada layanan AI yang digunakan peserta.
