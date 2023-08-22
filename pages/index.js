import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <iframe   id="inlineFrameExample"
        title="Inline Frame Example"
        width="800"
        height="600"
        src="https://certif.upago.cl/uai/registro-pago-automatico?ar=MzE4"></iframe>
      </main>

      <Footer />
    </div>
  )
}
