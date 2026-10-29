import ReflexGame from './ReflexGame.jsx'

const dragonCityPoints = [
  {
    title: 'Bangun Kota Naga',
    text: 'Membangun kota di pulau-pulau terapung, lengkap dengan habitat, pertanian, dan bangunan untuk para naga.',
  },
  {
    title: 'Kumpulkan dan Biakkan Naga',
    text: 'Mengumpulkan banyak jenis naga dan mengembangbiakkannya untuk mendapatkan kombinasi naga yang baru.',
  },
  {
    title: 'Latih dan Bertarung',
    text: 'Melatih naga, menaikkan levelnya, lalu menggunakannya dalam pertarungan melawan naga lain.',
  },
]

const reasons = [
  {
    title: 'Ada strategi',
    text: 'Tidak asal main: ada pilihan naga, kombinasi, dan cara mengurus kota yang bikin penasaran.',
  },
  {
    title: 'Ada koleksi',
    text: 'Rasanya seru saat berhasil mendapatkan naga baru dan melihat koleksinya makin lengkap.',
  },
  {
    title: 'Buat santai',
    text: 'Cocok dimainkan santai di sela waktu luang, sebentar-sebentar tapi tetap seru.',
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#atas" className="text-lg font-bold tracking-tight">
            Fake<span className="text-emerald-400">.</span>
          </a>
          <nav className="flex gap-4 text-sm text-slate-300 sm:gap-6">
            <a className="hover:text-white" href="#tentang">Tentang</a>
            <a className="hover:text-white" href="#dragon-city">Dragon City</a>
            <a className="hover:text-white" href="#tes-refleks">Tes Refleks</a>
          </nav>
        </div>
      </header>

      <main id="atas" className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <section className="py-14 sm:py-20">
          <p className="text-sm font-semibold tracking-widest text-emerald-400 uppercase">Halo, saya Fake</p>
          <h1 className="mt-3 text-4xl leading-tight font-bold sm:text-6xl">
            Saya suka main game, terutama <span className="text-emerald-400">Dragon City</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Ini halaman profil sederhana saya. Di sini saya cerita sedikit tentang game yang paling sering saya
            mainkan, dan ada permainan kecil untuk mengetes refleks.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#dragon-city"
              className="rounded-full bg-emerald-400 px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Lihat Dragon City
            </a>
            <a
              href="#tes-refleks"
              className="rounded-full border border-white/20 px-5 py-2.5 font-semibold transition hover:border-white/40"
            >
              Coba tes refleks
            </a>
          </div>
        </section>

        <section id="tentang" className="scroll-mt-24 border-t border-white/10 py-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Tentang Saya</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
            Nama saya Fake. Saya suka main game di waktu luang. Game yang paling saya mainkan saat ini adalah
            Dragon City, game dari Socialpoint tentang membangun kota naga, mengumpulkan naga, dan melatihnya.
            Halaman ini dibuat dengan React, Vite, dan Tailwind CSS.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-slate-800 px-3 py-1 text-sm">Dragon City</span>
            <span className="rounded-full bg-slate-800 px-3 py-1 text-sm">React</span>
            <span className="rounded-full bg-slate-800 px-3 py-1 text-sm">Vite</span>
            <span className="rounded-full bg-slate-800 px-3 py-1 text-sm">Tailwind CSS</span>
            <span className="rounded-full bg-slate-800 px-3 py-1 text-sm">gunman.my.id</span>
          </div>
        </section>

        <section id="dragon-city" className="scroll-mt-24 border-t border-white/10 py-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Dragon City, Game Utama Saya</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
            Dragon City adalah game Socialpoint. Pemain membangun kota di pulau terapung, mengumpulkan dan
            mengembangbiakkan naga, lalu melatihnya untuk bertarung. Itu alasan kenapa game ini betah saya
            mainkan: ada kota yang diurus, ada naga yang dikumpulkan, dan ada pertarungan yang ditunggu.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {dragonCityPoints.map((point) => (
              <article key={point.title} className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                <h3 className="font-semibold">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{point.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 py-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Kenapa Saya Suka Main Game</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {reasons.map((reason) => (
              <article key={reason.title} className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                <h3 className="font-semibold">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{reason.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="tes-refleks" className="scroll-mt-24 border-t border-white/10 py-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Tes Refleks: 10 Ronde</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
            Klik kotaknya secepat mungkin begitu warnanya berubah. Hasil tiap ronde dicatat di bawah, dan
            permainan selesai setelah 10 ronde.
          </p>
          <div className="mt-6">
            <ReflexGame />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>Dibuat dengan React, Vite, dan Tailwind CSS.</p>
          <p>
            <a className="underline hover:text-white" href="https://github.com/awanaaskyway-blip/gunman.my.id">
              github.com/awanaaskyway-blip/gunman.my.id
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
