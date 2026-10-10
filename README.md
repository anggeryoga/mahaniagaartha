# Maha Niaga Artha: Website Profil Perusahaan

Situs profil dan karier **PT Maha Niaga Artha** (distribusi F&B, 14 brand mitra).

- Situs: https://mahaniagaartha.com · preview kerja: https://mnaweb.siin.qzz.io
- Repo: https://github.com/anggeryoga/mahaniagaartha

---

## Untuk siapa dokumen ini

**Baca bagian Design System sebelum mengubah tampilan apa pun.**

Tujuannya satu: apa pun yang ditambahkan nanti harus terlihat seperti bagian dari
situs yang sama. Kesalahan paling mudah terjadi adalah memakai warna, ukuran, atau
jarak yang "kira-kira mirip" alih-alih token yang sudah ada.

Aturan singkat: **jangan pernah menulis nilai warna, ukuran huruf, atau radius
secara langsung. Pakai variabel CSS yang sudah ada.**

---

# DESIGN SYSTEM

## 1. Palet Warna

Palet ditentukan klien. **Tidak ada gradient di mana pun.** Semua bidang warna
solid, tanpa kecuali.

Komposisinya sengaja tidak seimbang, dan itu memang yang membuat situs terlihat
tenang. Ikuti proporsinya:

| Warna | Nilai | Porsi | Peran |
|---|---|---|---|
| Putih & off-white | `#F7F8FC` | **65%** | Latar utama seluruh halaman |
| Deep Indigo | `#252653` | **25%** | Judul, panel gelap, teks utama |
| Royal Purple | `#6554C0` | **8%** | Aksen utama: tombol, tautan, nomor |
| Amber | `#E9A23B` | **2%** | Aksen sangat hemat: tanda aktif, bintang |

> **Aturan 2% Amber.** Amber adalah bumbu, bukan bahan. Kalau satu layar memakai
> amber di lebih dari satu atau dua tempat, berarti sudah kelebihan. Amber
> **tidak pernah** dipakai sebagai latar bidang luas.

### Token warna

Semua di `src/index.css` dalam `:root`. Jangan hafal kodenya, pakai namanya.

```css
/* Deep Indigo */
--indigo:     #252653;  /* dasar gelap, judul */
--indigo-700: #1b1c3e;  /* hover, lebih gelap */
--indigo-500: #3a3b6e;  /* varian terang */
--indigo-100: #e3e4ef;  /* tint muda */
--indigo-50:  #f4f4f9;  /* tint sangat muda */

/* Royal Purple */
--purple:     #6554c0;  /* aksen utama */
--purple-700: #5344a8;  /* hover */
--purple-100: #e6e3f5;  /* tint muda */
--purple-50:  #f2f0fa;  /* tint sangat muda */

/* Amber */
--amber:      #e9a23b;  /* aksen */
--amber-600:  #d18c26;  /* hover */
--amber-100:  #fdf3e0;  /* tint muda */
--amber-text: #7a5410;  /* amber untuk TEKS di latar terang */

/* Netral */
--bg:       #f7f8fc;  /* off-white, latar halaman */
--surface:  #ffffff;  /* kartu di atas latar */
--text:     #23243a;  /* teks isi */
--text-2:   #55566e;  /* teks sekunder */
--border:   #e4e5ee;  /* garis pemisah */
--border-2: #d0d2e0;  /* garis lebih tegas */
```

### Penggunaan warna yang benar

- **Latar section** bergilir: putih → off-white → indigo gelap. Pakai kelas
  `.section--white`, `.section--paper`, `.section--blue`. Jangan membuat latar
  baru dari warna mentah.
- **Tombol utama** selalu Royal Purple (`.btn--primary`). Indigo untuk panel,
  bukan tombol.
- **Teks di atas indigo gelap** wajib putih atau `--indigo-100`. Jangan pakai
  `--text` di sana, tidak terbaca.
- **Amber untuk teks** di latar terang hanya boleh `--amber-text`, bukan
  `--amber`. Amber asli terlalu terang untuk teks dan gagal kontras AA.

---

## 2. Tipografi

Satu jenis huruf saja: **DM Sans**, di-host sendiri dari `public/fonts/`
(`dmsans-latin.woff2` dan `-latin-ext`). **Tidak boleh** memuat font dari CDN
luar seperti Google Fonts. Semua bobot sudah tersedia lewat variabel.

### Skala ukuran

Ukuran memakai `clamp()`, jadi otomatis mengecil di layar kecil. Karena itu
**jangan menulis ukuran piksel sendiri** di komponen.

```css
--fs-body:    16.5px   /* teks isi */
--fs-lead:    clamp(16px, 1.2vw, 18px)    /* paragraf pembuka */
--fs-sm:      14.5px   /* teks kecil, label */
--fs-xs:      12.5px   /* keterangan */
--fs-h1:      clamp(32px, 4.2vw, 56px)    /* judul utama */
--fs-h2:      clamp(26px, 3vw, 40px)      /* judul bagian */
--fs-h3:      clamp(20px, 1.8vw, 26px)
--fs-h4:      clamp(17px, 1.35vw, 20px)
--fs-num:     clamp(25px, 2.3vw, 33px)    /* angka statistik */
--fs-display: clamp(30px, 4.6vw, 62px)    /* judul penuh layar */
```

### Aturan bobot huruf

Bobot ditentukan konteks, bukan selera:

| Bobot | Nilai | Dipakai untuk |
|---|---|---|
| `--fw-normal` | 400 | Teks isi, paragraf |
| `--fw-medium` | 500 | Label, teks tombol, navigasi |
| `--fw-semi` | **600** | **Semua judul. Ini standarnya.** |
| `--fw-bold` | 700 | Hanya hero dan penekanan kuat |

> **Judul default adalah 600.** Memakai 700 di judul biasa membuat halaman
> terasa berteriak. Kalau ragu, pakai 600.

Tinggi baris: `--lh-tight` (1.12) untuk judul besar, `--lh-body` (1.5) untuk
teks isi, `--lh-quiet` (1.65) untuk paragraf panjang seperti deskripsi lowongan.

---

## 3. Spasi, Lebar, dan Radius

### Spasi: sistem kelipatan 8px

```css
--sp-1: 8px    --sp-2: 16px   --sp-3: 24px   --sp-4: 32px
--sp-5: 40px   --sp-6: 48px   --sp-8: 64px
```

Jangan pakai 13px, 22px, 30px. Kalau butuh nilai di antaranya, pilih kelipatan
terdekat. Jarak yang konsisten adalah yang membuat situs terasa rapi meskipun
tidak ada yang menyadarinya.

### Lebar dan jarak section

```css
--wrap:        1320px  /* lebar maksimum konten, pakai kelas .wrap */
--wrap-narrow:  900px  /* untuk teks panjang, pakai .wrap-narrow */
--pad-x:       clamp(20px, 2.6vw, 36px)   /* jarak tepi kiri-kanan */
--sec-y:       clamp(40px, 4vw, 68px)     /* jarak atas-bawah section */
--gap:         clamp(18px, 1.6vw, 24px)   /* jarak antar kartu dalam grid */
--nav-h:       64px    /* tinggi navbar, dipakai scroll-margin */
```

### Radius: sesuai peran, bukan ukuran elemen

```css
--r-sm:   10px  /* elemen kecil: kotak nomor, input */
--r-md:   12px  /* tombol */
--r-lg:   16px  /* kartu besar */
--r-xl:   22px  /* foto, peta, panel */
--r-pill: 999px /* lencana, pil */
```

---

## 4. Kelas Siap Pakai

Sudah ada di `src/index.css`. Pakai ini dulu sebelum menulis gaya baru.

### Tata letak

| Kelas | Fungsi |
|---|---|
| `.wrap` | Wadah konten, lebar maksimum 1320px, sudah ada padding tepi |
| `.wrap-narrow` | Sama tapi 900px, untuk teks panjang yang mudah dibaca |
| `.section--white` | Latar section putih |
| `.section--paper` | Latar section off-white |
| `.section--blue` | Latar section indigo gelap (teks otomatis terang) |

Section bergilir: putih → off-white → indigo. Jangan dua section gelap berurutan.

### Judul bagian

| Kelas | Fungsi |
|---|---|
| `.eyebrow` | Label kecil di atas judul, huruf besar, ada garis pendek di kiri |
| `.eyebrow--plain` | Sama tanpa garis |
| `.eyebrow--light` | Versi terang, untuk di atas indigo gelap |
| `.sec-head` | Blok judul + subjudul, sudah diatur jaraknya |
| `.sec-head--rule` | Judul dengan garis panjang di atasnya |
| `.sec-head--split` | Judul kiri, subjudul kanan (di layar lebar) |

### Kartu dan tombol

| Kelas | Fungsi |
|---|---|
| `.card` | Kartu dasar di atas latar |
| `.card--hover` | Kartu dengan reaksi saat disorot (bayangan naik, ikon berubah warna) |
| `.btn` | Tombol dasar, wajib jadi kelas pertama |
| `.btn--primary` | Tombol utama, Royal Purple |
| `.btn--outline` | Tombol garis, untuk aksi kedua |
| `.btn--gold` | Tombol amber, pakai hemat |
| `.btn--on-dark` | Tombol di atas latar indigo gelap |
| `.btn--ghost-light` | Tombol tanpa latar untuk latar gelap |
| `.btn--block` | Tombol selebar penuh (untuk ponsel) |
| `.btn--lg` | Ukuran tombol lebih besar |

`<button>` penuh ditulis `class="btn btn--primary"`. Kelas `btn` menyediakan
tinggi minimum 44px, dan itu **tidak boleh dikurangi** karena jari butuh sasaran
sentuh sebesar itu.

### Foto

| Kelas | Fungsi |
|---|---|
| `.photo` | Bingkai foto, radius 22px, **tanpa garis tepi** |
| `.photo--rounded` | Radius lebih kecil |
| `.photo--circle` | Bulat penuh, untuk foto orang |

Foto tim **wajib tetap memakai foto asli klien** di `public/dm/`. Jangan diganti
dengan stok foto.

---

## 5. Mobile-First

Lebih dari separuh pengunjung memakai ponsel. Perlakukan tampilan ponsel sebagai
acuan utama, bukan versi kecil dari desktop.

### Aturan wajib

- **Sasaran sentuh minimal 44×44px.** Berlaku tombol, tautan, dan tutup drawer.
- **Ukuran huruf input minimal 16px.** Kalau kurang, Safari di iPhone otomatis
  memperbesar layar saat kolom ditekan.
- **Tidak boleh ada gulir mendatar.** Uji di lebar 360px dan 390px.
- **Teks ponsel cenderung terlalu besar, bukan terlalu kecil.** Ini permintaan
  klien yang berulang. Kalau ragu, kecilkan sedikit.
- **Navbar tinggi 58px di ponsel**, 64px di desktop.

### Titik henti (breakpoint) yang dipakai

```css
@media (max-width: 899px)  /* tata letak berubah jadi satu kolom */
@media (max-width: 760px)  /* penyesuaian tablet kecil */
@media (max-width: 620px)  /* penyesuaian ponsel */
@media (max-width: 380px)  /* ponsel sangat kecil */
```

Jangan menambah titik henti baru tanpa alasan kuat. Empat ini sudah cukup.

### Ukuran ponsel yang sudah disetel

```css
--pad-x: 16px
--fs-h1: clamp(25px, 7.4vw, 30px)   /* judul utama ponsel */
--fs-body: 15.5px
--fs-xs: 11.5px
/* tombol */ font-size: 14.5px; padding: 12px 18px;
```

---

## 6. Gaya Penulisan Teks

Ini bagian yang paling sering salah, karena terlihat sepele.

- **Bahasa Indonesia** seluruhnya. Tidak boleh ada kalimat Inggris yang
  tercampur, kecuali nama brand.
- **Huruf besar hanya di awal kalimat dan nama diri.** Jangan menulis Setiap
  Kata Dengan Huruf Besar di judul, kecuali memang gaya yang diminta.
- **Tanpa em dash, en dash, atau elipsis.** Pakai koma, titik, atau tanda
  hubung biasa.
- **Jangan mengubah teks yang sudah disetujui klien.** Nama brand, jumlah mitra,
  angka statistik, dan isi ulasan adalah data, bukan bahan suntingan. Validasi
  ejaan boleh, mengubah makna tidak.
- **Nada bicara: tenang dan langsung.** Hindari kata berlebihan seperti
  "solusi terbaik nomor satu di Indonesia". Klien menjual distribusi, bukan
  slogan.

---

## 7. Isi yang Tidak Boleh Diubah Sembarangan

| Bagian | Aturan |
|---|---|
| 14 brand mitra | Nama brand adalah data klien. Logo di `public/logos/`, semua 697×314 |
| Foto tim | Foto asli klien di `public/dm/`. Jangan diganti stok |
| Ulasan mitra | Isi dari klien. Nama orang saat ini masih contoh, menunggu nama asli |
| Lamaran kerja | **Hanya lewat email** `cvmahaniagaartha.hrd@gmail.com`. Tidak ada WhatsApp atau formulir lamaran |
| Halaman `/produk` | Sudah dihapus. Jangan dibuat ulang tanpa diminta |
| Menu Login | Sengaja tidak ada di navigasi. `/admin-hrd` hanya lewat URL langsung |

---

# PANDUAN TEKNIS

## Menjalankan

```bash
npm install
npm run dev      # dev server di port 8090
npm run build    # hasil ke dist/
```

Port dev **8090** dan `strictPort: true` diatur di `vite.config.ts`. Ini penting
karena ada terowongan Cloudflare yang mengarah ke port itu. Jangan diubah.

## Susunan berkas

```
src/
  index.css          ← SELURUH design system. Token dan kelas ada di sini.
  App.tsx            ← rute, RevealOnScroll, SectionScroller
  components/        ← Navbar, HeroSection, ValuesSection, ServicesSection,
                       TeamSection, AboutSection, TestimonialsSection,
                       PartnersSection, CTASection, CareerSection, Footer,
                       JobRow, PageHero
  pages/             ← Index, About, Career, CekStatus
  hooks/
    useSectionNav.ts ← gulir ke section + pulihkan posisi atas saat pindah halaman
  assets/
public/
  fonts/             ← DM Sans, host sendiri
  logos/             ← 14 logo mitra, 697×314
  dm/                ← foto tim asli klien
```

## Catatan penting saat mengubah kode

**1. Kembalikan posisi gulir ke atas saat pindah halaman.**
`useScrollToSectionOnMount` di `useSectionNav.ts` menangani ini. Tanpa itu,
pengunjung yang sudah menggulir jauh di Beranda akan mendarat di tengah halaman
saat membuka halaman karir. Kalau menyentuh navigasi, pastikan perilaku ini utuh.

**2. Animasi muncul saat digulir.**
`RevealOnScroll` di `App.tsx` menambah `.js-reveal` lalu mengamati dengan
`IntersectionObserver`. Ada pengaman `MutationObserver` untuk halaman yang dibuka
lewat navigasi sisi klien, karena elemennya belum ada saat pengamat dipasang.
Tanpa pengaman itu, section bisa tampak kosong. Jangan hapus.

**3. Anchor section memakai `scroll-margin-top`.**
Nilainya `calc(var(--nav-h) + 8px)` supaya judul section tidak tertutup navbar
yang menempel di atas.

**4. Hati-hati menyunting blok CSS besar.**
Pernah dua kali blok lain ikut terhapus karena satu perintah penggantian teks.
Setelah menyunting `index.css`, **selalu periksa dengan `grep`** bahwa blok yang
dituju berubah dan blok lain tidak hilang.

**5. Unggahan aset ke R2 gagal di akun ini.**
Objek terunggah tapi URL publiknya mengembalikan 404. Untuk berbagi berkas,
pakai Cloudflare Pages (`mna-assets.pages.dev`), bukan R2.

## Alur kerja sebelum kirim

```bash
npx tsc --noEmit    # harus tanpa keluaran
npm run build       # harus selesai tanpa ERROR
grep -rn "—\|–\|…" src/    # harus kosong (tanda pisah terlarang, lihat bagian 6)
```

Kemudian periksa di browser pada lebar 360px, 390px, dan 1440px:

- Tidak ada gulir mendatar
- Tidak ada section yang tampak kosong setelah menggulir dari halaman lain
- Sasaran sentuh tidak ada yang di bawah 44px

---

## Riwayat Perubahan

| Commit | Isi |
|---|---|
| `6c52486` | Redesign utama: palet klien, DM Sans host sendiri, mobile-first |
| `c614432` | Perbaikan section tampak kosong setelah gulir ke anchor |
| `015ed54` | Perbaikan tautan `/produk` yang sudah dihapus |
| `9c23145` | Section Solusi dan Kenapa Pilih Kami dibuat berbeda tampilannya |
| `6f127dc` | Halaman karir jadi akordeon per lowongan |
| `25138e4` | Hapus kartu unggulan, 7 ulasan mitra baru |
| `9d8d9f3` | Kembalikan kartu unggulan, ulasan bergaya bergantian |
| `7773f7a` | Ulasan menampilkan nama brand mitra |
| `10bb4a7` | Perbaikan posisi gulir antar-halaman, nomor pada menu ponsel |
| `2e8d14f` | Nomor urut pada kualifikasi dan tanggung jawab |

---

## Yang Belum Selesai

- `mahaniagaartha.com` masih memuat versi lama. Repo GitHub belum tersambung ke
  auto-deploy Cloudflare Pages, jadi push belum otomatis memperbarui situs itu.
- Nama mitra pada ulasan masih contoh, menunggu nama asli dari klien.
- Konten sembilan brand lama dan FAQ lama belum dipindahkan ke halaman baru.
- Ukuran berkas JS 593KB, bisa dipecah dengan code-splitting.
- Belum ada `sitemap.xml`.

## Usulan yang Menunggu Keputusan

- Kalkulator BEP untuk calon mitra
- Galeri mitra beserta dokumen legalitas
- Menggabungkan pemuatan font untuk mengurangi permintaan berkas
