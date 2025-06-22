import MainLayout from "../layouts/MainLayout"

export default function Home() {
  return (
    <MainLayout title="Roots & Richness | Pure & Natural Oils">
      <section className="bg-yellow-50 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Embrace the Power of Pure Oils 🌿
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          100% Wood Pressed, Chemical-Free, and Packed with Tradition.
        </p>
        <a
          href="/products/oils"
          className="inline-block mt-8 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
        >
          Shop Now
        </a>
      </section>

      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">Our Mission</h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600">
          At Roots & Richness, we are committed to bringing ancient oil extraction techniques
          into modern households — preserving purity, quality, and wellness.
        </p>
      </section>

      <section className="py-16 bg-gray-50 px-6 text-center">
        <h2 className="text-3xl font-bold">Explore Product Categories</h2>
        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
          {/* Replace with real categories later */}
          {["Mustard Oil", "Coconut Oil", "Groundnut Oil"].map((category) => (
            <div key={category} className="bg-white p-6 rounded shadow hover:shadow-md">
              <h3 className="text-xl font-semibold">{category}</h3>
              <p className="mt-2 text-gray-600">Wood pressed, cold processed goodness.</p>
              <a href="/products/oils" className="text-green-700 font-medium mt-4 block">
                View Products →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
        <ul className="mt-6 space-y-4 max-w-xl mx-auto text-gray-700 text-left list-disc pl-6">
          <li>✅ 100% Natural, No Preservatives</li>
          <li>✅ Traditional Wood-Pressed Method</li>
          <li>✅ Lab-Tested for Purity</li>
          <li>✅ Sustainable Sourcing & Ethical Practices</li>
        </ul>
      </section>

      <section className="py-16 bg-gray-100 px-6 text-center">
        <h2 className="text-3xl font-bold">Customer Love 💚</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 italic">
          “Roots & Richness oils remind me of my grandmother’s kitchen. Pure, fragrant, and
          trustworthy!” — Priya K.
        </p>
      </section>

      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">From Our Blog</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Replace with dynamic blog posts later */}
          {["Benefits of Mustard Oil", "Why Cold Pressed Matters"].map((title) => (
            <div key={title} className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-gray-600">
                Learn more about natural oil benefits and conscious living.
              </p>
              <a href="/blog" className="text-green-700 mt-4 inline-block">
                Read More →
              </a>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  )
}
