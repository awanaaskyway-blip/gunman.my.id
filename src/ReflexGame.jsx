import { useEffect, useRef, useState } from 'react'

const TOTAL_ROUNDS = 10

function randomDelay() {
  return 1000 + Math.random() * 2000
}

export default function ReflexGame() {
  const [phase, setPhase] = useState('idle')
  const [round, setRound] = useState(1)
  const [results, setResults] = useState([])
  const [message, setMessage] = useState('Tekan Mulai, lalu tunggu kotaknya berubah warna.')
  const timeoutRef = useRef(null)
  const startRef = useRef(0)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  function schedule(targetRound) {
    setPhase('waiting')
    setRound(targetRound)
    setMessage(`Ronde ${targetRound} dari ${TOTAL_ROUNDS}: tunggu sampai kotaknya berubah warna…`)
    timeoutRef.current = setTimeout(() => {
      startRef.current = performance.now()
      setPhase('ready')
      setMessage('Klik sekarang!')
    }, randomDelay())
  }

  function startGame() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setResults([])
    schedule(1)
  }

  function handleArenaClick() {
    if (phase === 'waiting') {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      setPhase('tooSoon')
      setMessage('Terlalu cepat! Tunggu sampai kotaknya berubah warna, lalu coba ronde ini lagi.')
      return
    }

    if (phase !== 'ready') return

    const elapsed = Math.round(performance.now() - startRef.current)
    const nextResults = [...results, elapsed]
    setResults(nextResults)

    if (nextResults.length >= TOTAL_ROUNDS) {
      setPhase('done')
      setMessage('Selesai! Ini hasil 10 rondemu.')
    } else {
      schedule(nextResults.length + 1)
    }
  }

  function retryRound() {
    schedule(round)
  }

  const average =
    results.length > 0 ? Math.round(results.reduce((sum, value) => sum + value, 0) / results.length) : null
  const best = results.length > 0 ? Math.min(...results) : null

  const arenaClass =
    phase === 'ready'
      ? 'bg-emerald-400 text-slate-950'
      : phase === 'waiting'
        ? 'bg-rose-500 text-white'
        : 'bg-slate-800 text-slate-100'

  return (
    <div>
      <button
        type="button"
        onClick={handleArenaClick}
        className={`flex min-h-44 w-full cursor-pointer flex-col items-center justify-center rounded-2xl px-6 py-8 text-center text-lg font-semibold transition-colors ${arenaClass}`}
        aria-live="polite"
      >
        <span>{phase === 'idle' ? 'Tes Refleks' : message}</span>
        <span className="mt-2 text-sm font-normal opacity-80">
          {phase === 'ready'
            ? 'Klik kotak ini secepat mungkin.'
            : phase === 'waiting'
              ? 'Jangan klik dulu…'
              : 'Klik kotak ini untuk mulai atau melanjutkan.'}
        </span>
      </button>

      <div className="mt-4 flex flex-wrap gap-3">
        {phase === 'idle' || phase === 'done' ? (
          <button
            type="button"
            onClick={startGame}
            className="rounded-full bg-emerald-400 px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-emerald-300"
          >
            {phase === 'done' ? 'Main lagi' : 'Mulai'}
          </button>
        ) : null}
        {phase === 'tooSoon' ? (
          <button
            type="button"
            onClick={retryRound}
            className="rounded-full bg-amber-400 px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Coba ronde ini lagi
          </button>
        ) : null}
        <p className="self-center text-sm text-slate-400">
          Ronde: {results.length} / {TOTAL_ROUNDS}
          {average !== null ? ` · Rata-rata: ${average} ms` : ''}
          {best !== null ? ` · Tercepat: ${best} ms` : ''}
        </p>
      </div>

      {results.length > 0 ? (
        <ol className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-5">
          {results.map((value, index) => (
            <li key={index} className="rounded-xl bg-slate-800/70 px-3 py-2 text-center text-sm">
              Ronde {index + 1}: <span className="font-semibold text-emerald-300">{value} ms</span>
            </li>
          ))}
        </ol>
      ) : null}
    </div>
  )
}
