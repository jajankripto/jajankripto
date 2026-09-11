# Jajan Kripto — Landing Page

Website statis Jajan Kripto yang diselaraskan dengan sumber bot **JajanKripto V2.5.2 Modular** dalam arsip yang diberikan.

## Menjalankan dan memasang

Ekstrak ZIP, lalu buka `index.html` di browser untuk meninjau halaman. Tidak diperlukan instalasi dependency atau proses build. JavaScript hanya mengatur navigasi seluler dan pratinjau menu; tautan utama, informasi aset, serta FAQ tetap bisa digunakan tanpa JavaScript.

Untuk memasang ke hosting yang sudah ada, unggah isi folder `jajankripto-main` ke direktori publik website. Jika menggunakan GitHub Pages, salin isinya ke lokasi sumber Pages yang sekarang digunakan. Sertakan folder `assets`, jangan hanya mengganti `index.html`.

`CNAME` tetap menggunakan `jajankripto.com`. Domain, DNS, dan deployment tidak diubah dalam revisi ini. Google Fonts bersifat pelengkap; tersedia fallback font sistem jika jaringan tidak dapat memuatnya.

## Berkas yang berubah

| Berkas | Perubahan |
| --- | --- |
| `index.html` | Isi dan tata letak landing page; cara beli, jaringan, fitur, FAQ, edukasi, metadata, serta tautan bot. |
| `assets/landing.css` | Tema putih–oranye, tata letak responsif, fokus keyboard, serta preferensi reduced motion. |
| `assets/landing.js` | Menu seluler dan tiga pratinjau: Beli Kripto, Cek Harga, Ketentuan. |
| `404.html` | Tautan bot disamakan dengan halaman utama. |
| `sitemap.xml` | Waktu pembaruan halaman utama. |
| `README.md` | Panduan pemasangan dan dasar penyesuaian. |

Tiga artikel edukasi, favicon, gambar dokumen PSE, `robots.txt`, dan `CNAME` dipertahankan dari arsip awal. Isi artikel lama belum diaudit ulang dalam revisi landing page ini.

## Dasar penyesuaian terhadap bot

| Informasi di landing page | Sumber pada arsip bot |
| --- | --- |
| BTC, ETH, BNB, SOL, GRAM, USDT dan jaringan masing-masing | `jajankripto/config.py`: `SUPPORTED_COINS`, `NETWORK_OPTIONS` |
| Menu Beli Kripto, Cek Harga, Ketentuan | `jajankripto/telegram/common.py`: `get_main_keyboard` |
| Pilih koin/jaringan, input nominal, alamat, memo, ringkasan QRIS | `jajankripto/telegram/order_handlers.py` |
| Minimum berubah sesuai jaringan, harga, dan biaya | `handle_network`, `handle_amount`, `process_payment` |
| Estimasi dan rate final saat QRIS dibuat | `order_handlers.py`, `jajankripto/services/pricing.py` |
| Referensi harga dan pengaturan langganan harian | `jajankripto/telegram/price_handlers.py` |
| Pembaruan pengiriman, bukti, dan tautan explorer | `jajankripto/services/fulfillment.py` |
| Ketentuan transaksi serta pembatalan alur input | `show_terms`, `jajankripto/telegram/common.py`: `cancel` |
| Memo GRAM/TON opsional, mengikuti kebutuhan tujuan | `jajankripto/core/helpers.py`, `jajankripto/core/validation.py`, README bot |

Pilihan jaringan sesuai kode sumber: BTC → BTC/BSC; ETH → ETH/BSC/BASE; BNB → BSC/OPBNB; SOL → SOL/BSC; GRAM → TON; USDT → TRX/BSC/ETH/SOL. Ketersediaan aktual tetap diperiksa oleh bot saat pembelian.

## Keputusan isi dan integrasi

Website mengarahkan transaksi ke `https://t.me/JajanKriptoOfficial_bot`, mempertahankan username dari website awal. Pengguna diminta menekan **Start**, lalu **Beli Kripto**. Parameter lama `?start=buy` dihapus karena handler `/start` dalam arsip tidak memproses argumen tersebut untuk langsung menjalankan `/buy`.

Pratinjau diberi label ilustrasi dan tidak membuat pesanan, menampilkan QR pembayaran, mengambil alamat dompet, atau mengirim pesan ke Telegram. Harga, kurs, saldo stok, status online, biaya, dan minimum pembelian tidak dipalsukan. Arsip backend yang diperiksa menyediakan endpoint health dan webhook, bukan API publik harga atau checkout untuk website.

Jadwal harga harian, waktu kedaluwarsa QR, kontak admin, dan konfigurasi operasional tidak dipatok dari nilai default karena konfigurasi produksi tidak tersedia. Untuk bantuan, pengguna diarahkan ke kontak yang tampil di menu awal bot.

Klaim lama “Zero KYC”, “otomatisasi penuh 24/7”, serta jaminan aman atau instan diganti dengan uraian fitur yang dapat ditelusuri ke kode. Dokumen PSE bawaan tetap dapat dibuka dari footer; landing page tidak menambahkan klaim verifikasi status pendaftaran terkini.

## Batas pemeriksaan

Pemeriksaan dilakukan pada sumber HTML/CSS/JavaScript, referensi lokal, anchor, pemetaan aset/jaringan, serta kesesuaian perintah dengan handler bot. Belum dilakukan pengujian visual di browser, pengujian bot produksi, pembayaran QRIS, atau pengiriman kripto. Tidak ada perubahan pada kode bot dan tidak ada deployment yang dijalankan.
