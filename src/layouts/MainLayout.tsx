import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"

type Props = {
  title?: string
  children: React.ReactNode
}

export default function MainLayout({ title = "Roots & Richness", children }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Roots & Richness – Pure, wood-pressed oils delivered to your doorstep." />
      </Head>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
