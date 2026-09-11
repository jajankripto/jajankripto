'use strict';

// Presentation only. Orders, payments, market data, and wallet addresses stay in Telegram.
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  if (toggle && nav) {
    toggle.hidden = false;
    nav.classList.add('is-enhanced');
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
    });
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggle.focus();
      }
    });
    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target) && !toggle.contains(event.target)) closeMenu();
    });
    const mobileViewport = window.matchMedia('(max-width: 960px)');
    mobileViewport.addEventListener('change', closeMenu);
  }

  const panel = document.querySelector('#bot-preview');
  const menu = document.querySelector('.bot-menu');
  if (!panel || !menu) return;

  // Only fixed, locally authored markup is inserted; never remote or user-supplied HTML.
  const previews = Object.freeze({
    buy: panel.innerHTML,
    prices: `
      <p class="message-sender">Jajan Kripto</p>
      <h2>Cek harga</h2>
      <p class="message-step">Referensi pasar · perintah /harga</p>
      <p>Di bot, lihat harga rupiah dan perubahan 24 jam untuk BTC, ETH, BNB, SOL, serta GRAM. USDT ditampilkan sebagai kurs rupiah.</p>
      <div class="demo-info"><strong>Update harga harian</strong><span><code>/harga_on</code> untuk berlangganan</span><span><code>/harga_off</code> untuk berhenti</span></div>
      <p class="message-note">Harga terkini tersedia di Telegram. Jadwal update mengikuti pengaturan bot; total transaksi ditampilkan saat QRIS dibuat.</p>`,
    terms: `
      <p class="message-sender">Jajan Kripto</p>
      <h2>Ketentuan</h2>
      <p class="message-step">Sebelum membeli · perintah /terms</p>
      <ul class="demo-terms"><li>Periksa alamat dompet dan jaringan tujuan.</li><li>Isi memo atau tag jika layanan tujuan membutuhkannya.</li><li>Periksa total final sebelum membayar.</li><li>Tidak ada pengembalian dana setelah koin terkirim.</li></ul>
      <p class="message-note">Baca ketentuan lengkap dan kontak bantuan melalui bot Telegram.</p>`,
  });

  menu.hidden = false;
  menu.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-preview]');
    if (!button || !menu.contains(button)) return;
    const view = button.dataset.preview;
    if (!Object.prototype.hasOwnProperty.call(previews, view)) return;
    panel.innerHTML = previews[view];
    menu.querySelectorAll('button[data-preview]').forEach((item) => {
      item.setAttribute('aria-pressed', String(item === button));
    });
  });
})();
