import Link from 'next/link'
import BreadcrumbSchema from '../../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Fibreglass Pool Fading and Discolouration: Causes and Fixes | Expert Guide',
  description: 'A fibreglass pool specialist explains why pools fade and discolour, the difference between UV damage, chemical damage, and osmosis staining, and what can actually be fixed vs what needs resurfacing.',
  alternates: {
    canonical: '/blog/fibreglass-pool-fading-discolouration',
  },
  openGraph: {
    title: 'Fibreglass Pool Fading and Discolouration: Causes and Fixes',
    description: 'Why fibreglass pools fade and discolour, and what can actually be fixed vs what needs a full resurface.',
    type: 'article',
    url: 'https://fibreglasspoolcheck.com.au/blog/fibreglass-pool-fading-discolouration',
  },
}

function ArticleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Fibreglass Pool Fading and Discolouration: Causes and Fixes",
    "author": {
      "@type": "Person",
      "name": "Brady Smith",
      "jobTitle": "Fibreglass Pool Specialist",
      "url": "https://fibreglasspoolcheck.com.au/About"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Fibreglass Pool Check",
      "url": "https://fibreglasspoolcheck.com.au"
    },
    "datePublished": "2026-03-23",
    "description": "Why fibreglass pools fade and discolour, the difference between UV damage, chemical damage, and osmosis staining, and what can be fixed.",
    "mainEntityOfPage": "https://fibreglasspoolcheck.com.au/blog/fibreglass-pool-fading-discolouration"
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function FibreglassPoolFadingDiscolouration() {
  return (
    <>
      <ArticleSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Articles', url: '/blog' },
        { name: 'Fibreglass Pool Fading and Discolouration', url: '/blog/fibreglass-pool-fading-discolouration' }
      ]} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-10">
          <Link href="/blog" className="text-slate-400 text-sm hover:text-slate-600 mb-4 inline-block">&larr; All articles</Link>
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Fibreglass pool fading and discolouration: causes and fixes
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <span>By Brady Smith</span>
            <span>&middot;</span>
            <time dateTime="2026-03-23">23 March 2026</time>
            <span>&middot;</span>
            <span>8 min read</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed">
            Your fibreglass pool used to be a deep, vibrant blue. Now it looks washed out, patchy, or just... off. Maybe there's a yellowish tinge, or a chalky haze, or dark spots that won't clean away. It's one of the most common things pool owners ask me about  -  and the answer depends entirely on what's causing it.
          </p>

          <p className="text-slate-600 leading-relaxed mt-4">
            Some fading is purely cosmetic and easy to address. Some is a sign of gelcoat breakdown that will need resurfacing. And some discolouration patterns point to underlying problems like osmosis or chemical damage that shouldn't be ignored.
          </p>

          <p className="text-slate-600 leading-relaxed mt-4">
            Here's how to tell the difference.
          </p>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 my-8">
            <p className="text-sm text-orange-800 font-medium mb-1">Not sure what's causing your pool's colour change?</p>
            <p className="text-sm text-orange-700">
              Get a <Link href="/PoolCheckReport/order" className="underline font-medium">Pool Check Report ($149)</Link>  -  send me photos and I'll identify the cause and tell you whether it's cosmetic, fixable, or something more serious.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">The five main causes of pool fading and discolouration</h2>
          <p className="text-slate-600 leading-relaxed">
            In my experience, fibreglass pool colour changes come down to five causes. Each one looks different and has different implications.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. UV degradation  -  the most common cause</h2>
          <p className="text-slate-600 leading-relaxed">
            UV radiation from the sun is the number one enemy of gelcoat. Over time, UV breaks down the pigments and resins in the gelcoat, causing it to fade, chalk, and lose its gloss. This happens to every fibreglass pool eventually  -  it's just a question of how fast.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What it looks like</h3>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed mt-3 space-y-2">
            <li>General loss of colour intensity  -  the pool looks "washed out" compared to when it was new</li>
            <li>Chalky or powdery surface when you rub your hand along it</li>
            <li>Colour is typically more faded above the waterline and at the waterline than on the deeper sections</li>
            <li>The fading is usually even and gradual across the pool  -  not patchy</li>
            <li>Darker colours (deep blue, charcoal) show UV fading earlier than lighter colours (sky blue, white)</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How serious is it?</h3>
          <p className="text-slate-600 leading-relaxed">
            UV fading is cosmetic in its early stages. The pool still functions fine  -  it just doesn't look as good as it used to. However, as UV degradation progresses, the gelcoat becomes thinner and more brittle, which makes it more susceptible to cracking, blistering, and water ingress. So while fading itself isn't urgent, it's a sign that the clock is ticking on the gelcoat's useful life.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Can it be fixed?</h3>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed mt-3 space-y-2">
            <li><strong>Mild fading:</strong> A professional gelcoat polish or cutting compound can restore some colour and gloss. Cost: $300 to $800 for a professional polish. This buys you time but doesn't fix the underlying UV damage.</li>
            <li><strong>Moderate to severe fading:</strong> Once the gelcoat is chalking and visibly degraded, polishing won't be enough. The surface needs resurfacing. Cost: $8,000 to $15,000 depending on pool size and condition.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Chemical damage  -  often mistaken for fading</h2>
          <p className="text-slate-600 leading-relaxed">
            Poorly managed water chemistry can cause discolouration that looks like fading but is actually chemical damage to the gelcoat. This is different from UV fading because it's caused by what's in the water, not the sun.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What it looks like</h3>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed mt-3 space-y-2">
            <li><strong>Low pH damage:</strong> Etching and roughness on the gelcoat surface. The colour appears washed out, and the surface feels rough or gritty. Acidic water literally dissolves the gelcoat resin over time.</li>
            <li><strong>High chlorine bleaching:</strong> White patches or general lightening of the pool colour, especially around the return jets where chlorinated water enters the pool. Can also show up as a lighter band at the waterline.</li>
            <li><strong>Calcium scaling:</strong> A white, hazy film on the surface that makes the pool look lighter than it is. Unlike fading, this sits on top of the gelcoat and can sometimes be removed with acid washing.</li>
            <li><strong>Metal staining:</strong> Brown, green, or purple patches caused by dissolved metals (iron, copper, manganese) in the water that deposit onto the gelcoat. Common in areas with bore water or where copper-based algaecides are overused.</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How serious is it?</h3>
          <p className="text-slate-600 leading-relaxed">
            It depends on the type and severity. Calcium scaling is usually surface-level and can be addressed. Metal staining can often be removed with the right chemical treatment. But actual chemical etching  -  where the gelcoat resin has been damaged by acidic or aggressive water  -  is permanent surface damage that can't be polished out.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Can it be fixed?</h3>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed mt-3 space-y-2">
            <li><strong>Calcium scaling:</strong> A controlled acid wash can remove mild to moderate scaling. Cost: $400 to $1,200 professionally. Be cautious  -  acid washing removes a thin layer of gelcoat, so you can only do it a limited number of times.</li>
            <li><strong>Metal staining:</strong> Sequestering agents and specialist stain removal treatments can remove most metal stains. Cost: $200 to $600. Severe staining may need professional treatment.</li>
            <li><strong>Chemical etching:</strong> Once the gelcoat surface is etched, it can't be restored without resurfacing. Mild cases can be improved with polishing, but moderate to severe etching requires a resurface.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Osmosis staining  -  the one to watch</h2>
          <p className="text-slate-600 leading-relaxed">
            Osmotic activity  -  where water migrates through the gelcoat and reacts with the laminate  -  can cause distinctive discolouration patterns on the pool surface. This is more than cosmetic  -  it's a sign that the gelcoat barrier is compromised.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What it looks like</h3>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed mt-3 space-y-2">
            <li>Dark spots or patches below the waterline that don't correspond to external factors (not shadows, not dirt)</li>
            <li>A yellowish or brownish tinge in areas, especially on lighter-coloured pools</li>
            <li>Discolouration around blisters  -  the area around osmotic blisters often looks different from the surrounding surface</li>
            <li>Patches that appear wet or darker than surrounding areas even when dry (if the pool is drained)</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How serious is it?</h3>
          <p className="text-slate-600 leading-relaxed">
            Osmosis staining is serious because it means water has penetrated the gelcoat. The staining itself isn't the problem  -  it's a symptom of the underlying osmotic process. If you're seeing osmosis staining, the pool almost certainly needs professional assessment and, in most cases, will eventually need resurfacing with osmosis repair.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Can it be fixed?</h3>
          <p className="text-slate-600 leading-relaxed">
            The staining can't be cleaned or polished away because it's inside the gelcoat, not on the surface. Fixing it requires addressing the underlying osmosis  -  which means draining the pool, grinding back the affected areas (or the entire surface), allowing the laminate to dry, and resurfacing. Cost: $10,000 to $18,000+ for a full osmosis repair and resurface.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Algae staining  -  usually fixable</h2>
          <p className="text-slate-600 leading-relaxed">
            Persistent algae can leave staining on the pool surface that looks like discolouration. This is most common in pools that have had recurring green-water episodes or pools that sat neglected for extended periods.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What it looks like</h3>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed mt-3 space-y-2">
            <li>Green or dark patches, especially in corners, step areas, and along the floor</li>
            <li>Staining that's more pronounced in areas with less water circulation</li>
            <li>May feel slightly rough or textured compared to clean areas</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Can it be fixed?</h3>
          <p className="text-slate-600 leading-relaxed">
            Usually yes. Algae staining on a healthy gelcoat surface can typically be removed with:
          </p>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed mt-3 space-y-2">
            <li>Superchlorination (shock treatment) and aggressive brushing. Cost: $50 to $100 in chemicals.</li>
            <li>Professional pool cleaning with stain treatment. Cost: $200 to $500.</li>
            <li>If the staining has penetrated damaged or porous gelcoat, it may be permanent and require resurfacing to fully remove.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Manufacturing colour variation  -  not actually a problem</h2>
          <p className="text-slate-600 leading-relaxed">
            This one catches people off guard. Fibreglass pools are manufactured with a gelcoat that's sprayed onto a mould. The application isn't always perfectly even  -  there can be slight colour variations, especially in larger pools, on curved surfaces, and in areas where multiple spray passes overlap.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What it looks like</h3>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed mt-3 space-y-2">
            <li>Subtle colour differences between different areas of the pool  -  often noticed when the pool is drained or in certain light conditions</li>
            <li>Slight patchiness that has been there since the pool was new</li>
            <li>Usually more noticeable in certain colours (particularly metallic or pearlescent finishes)</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How serious is it?</h3>
          <p className="text-slate-600 leading-relaxed">
            Not at all. This is a cosmetic characteristic of the manufacturing process, not a defect or sign of damage. If the colour variation has been there since installation and hasn't changed, it's just how the pool was made. No action needed.
          </p>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 my-8">
            <p className="text-sm text-orange-800 font-medium mb-1">Not sure which type of discolouration you're looking at?</p>
            <p className="text-sm text-orange-700">
              Download the free <Link href="/RedFlagsGuide" className="underline font-medium">Red Flags Guide</Link> for visual references of common pool problems, or send me photos for a <Link href="/PoolCheckReport/order" className="underline font-medium">Pool Check Report ($149)</Link> and I'll identify exactly what's going on.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Quick reference: cause, fix, and cost</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm text-left border border-slate-200 rounded-lg">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">Cause</th>
                  <th className="px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">Fixable without resurfacing?</th>
                  <th className="px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">Typical cost</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-3">UV fading (mild)</td>
                  <td className="px-4 py-3">Yes  -  polish/compound</td>
                  <td className="px-4 py-3">$300 to $800</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-3">UV fading (severe)</td>
                  <td className="px-4 py-3">No  -  resurface needed</td>
                  <td className="px-4 py-3">$8,000 to $15,000</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-3">Calcium scaling</td>
                  <td className="px-4 py-3">Yes  -  acid wash</td>
                  <td className="px-4 py-3">$400 to $1,200</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-3">Metal staining</td>
                  <td className="px-4 py-3">Usually  -  chemical treatment</td>
                  <td className="px-4 py-3">$200 to $600</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-3">Chemical etching</td>
                  <td className="px-4 py-3">No  -  resurface needed</td>
                  <td className="px-4 py-3">$8,000 to $15,000</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-3">Osmosis staining</td>
                  <td className="px-4 py-3">No  -  osmosis repair + resurface</td>
                  <td className="px-4 py-3">$10,000 to $18,000+</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-3">Algae staining</td>
                  <td className="px-4 py-3">Usually  -  shock + clean</td>
                  <td className="px-4 py-3">$50 to $500</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Manufacturing variation</td>
                  <td className="px-4 py-3">N/A  -  not a defect</td>
                  <td className="px-4 py-3">$0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">How to slow down pool fading</h2>
          <p className="text-slate-600 leading-relaxed">
            You can't stop UV degradation entirely, but you can slow it down significantly:
          </p>
          <ol className="list-decimal list-inside text-slate-600 leading-relaxed mt-3 space-y-3">
            <li><strong>Keep your water chemistry balanced.</strong> Balanced pH (7.2 to 7.6), proper alkalinity, and appropriate chlorine levels protect the gelcoat from chemical damage. This is the single most impactful thing you can do.</li>
            <li><strong>Don't over-chlorinate.</strong> Higher chlorine doesn't mean cleaner  -  it means more gelcoat damage. Keep your chlorinator set appropriately for your pool size.</li>
            <li><strong>Use a pool cover.</strong> A cover or blanket reduces UV exposure to the surface when the pool isn't in use. It also reduces evaporation and chemical loss.</li>
            <li><strong>Choose lighter colours.</strong> If you're choosing a pool colour for a new pool or resurface, lighter colours (sky blue, light grey) hold up better against UV than darker colours. Something to think about for next time.</li>
            <li><strong>Clean the waterline regularly.</strong> The waterline area cops the most damage. Regular cleaning with a pool-safe product prevents buildup that accelerates degradation.</li>
            <li><strong>Address staining early.</strong> Don't let metal stains or calcium deposits sit for months. The longer they're on the surface, the harder they are to remove and the more damage they cause.</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What to do next</h2>
          <p className="text-slate-600 leading-relaxed">
            If your pool's colour has changed and you're not sure what's causing it, the best next step is getting it assessed. The <Link href="/PoolCheckReport/order" className="text-orange-600 hover:underline font-medium">Pool Check Report ($149)</Link> lets you send me photos and I'll identify the cause, tell you whether it's fixable without resurfacing, and give you a clear recommendation on what to do next.
          </p>
          <p className="text-slate-600 leading-relaxed mt-3">
            If you want to learn to spot the warning signs yourself, the free <Link href="/RedFlagsGuide" className="text-orange-600 hover:underline font-medium">Red Flags Guide</Link> covers the most common visual indicators of pool problems. And if you're assessing a pool before purchase, the <Link href="/BuyerChecklist" className="text-orange-600 hover:underline font-medium">Buyer Checklist ($29)</Link> gives you a structured inspection framework.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-slate-900 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-xl font-bold text-white mb-3">Pool looking faded? Find out what's really going on.</h3>
          <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
            Send me photos and I'll tell you whether it's cosmetic, fixable, or something you need to act on.
          </p>
          <Link
            href="/PoolCheckReport/order"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Get a Pool Check Report  -  $149
          </Link>
          <p className="text-slate-400 text-xs mt-3 italic">
            Honest assessment. If it's just cosmetic, I'll tell you  -  no unnecessary resurfacing.
          </p>
        </div>

        {/* Author */}
        <div className="border-t border-slate-200 mt-12 pt-8 flex gap-4 items-start">
          <div>
            <p className="font-semibold text-slate-900 text-sm">Brady Smith</p>
            <p className="text-slate-500 text-xs mt-1">
              Fibreglass pool specialist with 10+ years hands-on experience resurfacing, repairing, and assessing fibreglass pools across Queensland. Independent assessments  -  Brady's wife runs BRE Fibreglass, but all assessments are conducted independently.
            </p>
          </div>
        </div>
      </article>
    </>
  )
}
