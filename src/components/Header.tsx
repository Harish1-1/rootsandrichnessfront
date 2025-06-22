import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-700">
          Roots & Richness
        </Link>
        <nav className="space-x-4 text-sm font-medium">
          <Link href="/products/oils" className="hover:text-green-700">Shop</Link>
          <Link href="/about" className="hover:text-green-700">About</Link>
          <Link href="/blog" className="hover:text-green-700">Blog</Link>
          <Link href="/faq" className="hover:text-green-700">FAQ</Link>
          <Link href="/contact" className="hover:text-green-700">Contact</Link>
          <Link href="/cart" className="bg-green-700 text-white px-3 py-1 rounded hover:bg-green-800">Cart</Link>
        </nav>
      </div>
    </header>
  )
}
