import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <Title>Victory Vault - Fair Odds. Real Prizes. No Greed.</title>
      </Head>
      <header className="flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-semibold">VictoryVault</h1>
        <span className="uk-badge">UK 18+</span>
      </header>

      <section className="text-center py-12 bg-gray-50">
        <h2 className="text-3xl font-medium mb-4">Fair Odds. Real Prizes. No Greed.</h2>
        <p className="mb-6">Skill-based competitions. Limited entries. Guaranteed winners.</p>
        <Link href="/competitions" className="btn-primary">View Live Competitions</Link>
      </section>

      <section className="max-w-5xl mx-auto p-6">
        <h3 className="text-xl font-medium mb-4">Live Competitions</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <CompCard
            img="https://i.imgur.com/8vL3cUF.jpg"
            title="iPhone 15 Pro · 256 GB"
            price="£2.50"
            sold={13}
            cap={1000}
          />
          <CompCard
            img="https://i.imgur.com/0KFBHTB.jpg"
            title="£1,000 Cash Prize"
            price="£1.99"
            sold={212}
            cap={1500}
          />
        </div>
      </section>

      <footer className="text-center text-xs text-gray-500 p-6 border-t">
        18+ UK only · Skill-based competitions · T&Cs apply
      </footer>
    </>
  )
}

function CompCard({ img, title, price, sold, cap }) {
  const pct = Math.round((sold / cap) * 100)
  return (
    <div className="card border rounded-lg p-4 text-center">
      <img src={img} alt={title} className="w-full max-w-sm mx-auto rounded mb-3" />
      <h4 className="font-medium mb-2">{title}</h4>
      <p className="text-sm text-gray-600 mb-2">{price} per entry · {sold} / {cap} sold</p>
      <div className="w-full bg-gray-200 rounded h-2 mb-3"><div className="bg-primary h-2 rounded" style={{ width: `${pct}%` }} /></div>
      <Link href={`/competition/1`} className="btn-primary">Enter</Link>
    </div>
  )
}
