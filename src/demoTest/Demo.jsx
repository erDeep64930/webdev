import './demo.css'

const Demo = () => {
  return (
    <div>
        {/* Navbar Logo */}
<div className="leading-tight">
  <span className="block font-serif font-bold text-xl tracking-tight">
    <span className="text-[var(--text-dark)]">Medi </span>
    <span className="text-[var(--color-primary)]">Tour +</span>
  </span>
  <span className="block text-[11px] font-medium text-[var(--text-muted)]">
    Global Healthcare & Travel
  </span>
</div>

{/* Hero Title & Slogan */}
<h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-none">
  <span className="text-[var(--text-dark)]">Medi </span>
  <span className="text-[var(--color-primary)]">Tour +</span>
</h1>

<div className="space-y-1 pt-1">
  <p className="text-xl sm:text-2xl text-[var(--text-muted)] font-normal">
    World-Class Healthcare
  </p>
  <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)] tracking-tight">
    Wherever You Travel
  </h2>
</div>
    </div>
  )
}

export default Demo