# Dari Prompt ke Media Pembelajaran

Web presentasi interaktif untuk workshop 60 menit bagi guru SMP lintas mata pelajaran. Dibuat dengan HTML, CSS, dan JavaScript murni, tanpa instalasi, akun, atau dependensi tambahan.

## Membuka aplikasi

Buka `index.html` dengan browser modern (Chrome, Edge, Firefox, atau Safari). Materi dan fitur inti dapat dipakai tanpa internet. Praktik pembuatan media dilakukan di layanan AI pilihan peserta dan membutuhkan akses layanan tersebut.

Jika ingin membuka melalui server lokal dan Node.js tersedia, jalankan `node serve.cjs` dari folder ini, kemudian kunjungi alamat yang tercetak. Hentikan server dengan Ctrl+C. Server hanya menerima koneksi dari komputer ini.

## Kendali presentasi

- Panah kiri/kanan atau Page Up/Page Down: layar sebelumnya/berikutnya.
- Home/End: layar pertama/terakhir.
- Daftar 15 layar: lompat langsung ke materi; tersedia di sidebar.
- Tombol layar penuh: memperbesar tampilan, atau gunakan fitur layar penuh browser.
- Tombol Catatan: panduan fasilitator sesuai layar. **Panel catatan ikut terlihat di proyektor.** Tutup sebelum ditayangkan ke peserta.
- Tombol Salin: menyalin prompt; jika clipboard tidak tersedia, teks ditampilkan untuk disalin manual.

Pada layar kecil sidebar disembunyikan; semua materi tetap bisa dicapai dengan tombol Berikutnya dan Sebelumnya atau menu Materi di bagian atas. Tampilan utama dioptimalkan untuk laptop/proyektor 16:9.

## Alokasi workshop

1. Pembuka, layar 1–2: 5 menit.
2. Perbandingan prompt, layar 3–4: 8 menit.
3. Lima unsur prompt, layar 5–6: 10 menit.
4. Demonstrasi, layar 7–8: 7 menit.
5. Praktik, layar 9–12: 20 menit termasuk penjelasan jalur.
6. Pemeriksaan dan berbagi, layar 13–14: 7 menit.
7. Refleksi, layar 15: 3 menit.

Total 60 menit. Mulai timer pada awal blok praktik, lalu pindah ke contoh bila diperlukan. Timer tetap berjalan saat berpindah layar, menghitung berdasarkan waktu sebenarnya, dan tidak memindahkan layar saat berakhir. Jika blok praktik sudah berjalan beberapa menit, pilih waktu tersisa yang sesuai. Timer kembali ke kondisi awal saat halaman dimuat ulang atau ditutup.

## Materi

- Contoh IPA, Matematika, Bahasa Indonesia, Bahasa Inggris, dan IPS.
- Penyusun prompt: tujuan, konteks, tugas, format, batasan.
- Empat jalur: gambar, audio, video, dan aplikasi kuis.
- Contoh cadangan buatan untuk demonstrasi, bukan hasil AI langsung. Naskah dan storyboard berstatus prototipe; contoh aplikasi terdiri dari satu soal.
- Checklist pemeriksaan serta tiket keluar. Checklist hanya untuk demonstrasi, bukan pengumpulan nilai peserta.

Perubahan contoh mata pelajaran di penyusun prompt mengganti tujuan, kelas, topik, dan batasan; pilihan jenis media dipertahankan. Pada panduan jalur digunakan contoh standar mapel terpilih; sunting prompt Anda lewat penyusun prompt untuk kebutuhan khusus.

## Struktur

- `index.html`: kerangka aplikasi dan dialog.
- `styles.css`: tata letak dan tampilan responsif.
- `app.js`: materi, penyusun prompt, navigasi, timer, dan interaksi.
- `serve.cjs`: server pratinjau opsional menggunakan modul bawaan Node.js.

Tidak ada pengiriman data, analitik, panggilan AI, atau penyimpanan data siswa. Isian dan progres tidak disimpan setelah halaman dimuat ulang; posisi layar mengikuti alamat `#slide-N`. Selalu periksa ketepatan isi sebelum menggunakan media di kelas.
