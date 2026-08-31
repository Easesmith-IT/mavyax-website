import React from "react";
import Image from "next/image";
import AIDevelopmentArchitecture from "@/components/AIDevelopmentArchitecture";


export default function DesktopLayout() {
  return (
    <main className="min-h-screen">
{/* 1. Navigation */}
<nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant">
<div className="flex justify-between items-center h-20 px-grid-margin max-w-[1600px] mx-auto">
<div className="font-headline-md text-headline-md tracking-tighter font-bold text-on-surface">MAVYAX</div>
<div className="hidden md:flex gap-component-gap font-body-md text-body-md">
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#contact">Capabilities</a>
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#contact">AI</a>
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#contact">Transformation</a>
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#contact">About</a>
</div>
<button className="bg-primary text-white px-6 py-2 font-label-sm text-label-sm uppercase hover:opacity-90 transition-opacity">
            Start a Conversation
        </button>
</div>
</nav>
{/* 2. Hero */}
<header className="pt-40 pb-section-gap px-grid-margin max-w-[1600px] mx-auto grid-bg relative">
<div className="max-w-6xl pt-8">
<h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-stack-md uppercase">
            AI &amp; TECHNOLOGY TRANSFORMATION
        </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-sm max-w-2xl">
            We engineer the technology that moves businesses forward.
        </p>
<p className="font-body-md text-body-md text-on-surface-variant mb-stack-md max-w-2xl">
            Mavyax helps businesses develop intelligent solutions and transform the technology behind how they operate, compete and grow.
        </p>
</div>
<div className="mt-16 border border-outline-variant p-2 bg-surface-dim">
<Image src="/images/image_0.jpg" alt="Corporate Intelligence Architecture" width={1376} height={768} className="w-full h-auto object-cover opacity-90 rounded-lg" quality={100} priority />
</div>
</header>
{/* 3. Positioning */}
<section className="py-20 px-grid-margin max-w-[1600px] mx-auto border-t border-outline-variant">
<h2 className="font-headline-xl text-headline-xl text-on-surface mb-16 max-w-5xl">
        Technology is no longer just infrastructure. It is how businesses operate, compete and grow.
    </h2>
<div className="border border-outline-variant p-2 bg-surface-dim max-w-2xl mx-auto">
<Image src="/images/image_1.jpg" alt="Visual Flow" width={1376} height={768} className="w-full h-auto object-cover opacity-90 rounded-lg" quality={100} />
</div>
</section>
{/* 4. Business Challenges */}
<section className="py-32 px-grid-margin max-w-[1600px] mx-auto border-t border-outline-variant">
<h2 className="font-headline-xl text-headline-xl text-on-surface mb-16 max-w-5xl">
        Businesses don&apos;t need more technology. They need technology that works together.
    </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-16">
<div className="border border-outline-variant p-8 bg-surface">
<h3 className="font-headline-md text-lg text-on-surface mb-2">Fragmented Systems</h3>
<p className="text-on-surface-variant text-sm">Disconnected tools creating operational drag.</p>
</div>
<div className="border border-outline-variant p-8 bg-surface">
<h3 className="font-headline-md text-lg text-on-surface mb-2">Manual Work</h3>
<p className="text-on-surface-variant text-sm">Human effort wasted on repetitive tasks.</p>
</div>
<div className="border border-outline-variant p-8 bg-surface">
<h3 className="font-headline-md text-lg text-on-surface mb-2">Legacy Complexity</h3>
<p className="text-on-surface-variant text-sm">Outdated infrastructure slowing agility.</p>
</div>
<div className="border border-outline-variant p-8 bg-surface">
<h3 className="font-headline-md text-lg text-on-surface mb-2">AI Without Integration</h3>
<p className="text-on-surface-variant text-sm">Intelligence siloed from actual workflows.</p>
</div>
</div>
<div className="bg-primary text-white text-center py-4 font-label-sm uppercase tracking-widest font-bold">
        THIS IS WHERE MAVYAX COMES IN.
    </div>
</section>
{/* 5. Core Capabilities */}
<section className="py-32 px-grid-margin max-w-[1600px] mx-auto border-t border-outline-variant">
<h2 className="font-headline-xl text-headline-xl text-on-surface mb-16 text-center">
        Two capabilities. One transformation mindset.
    </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
<div className="border border-outline-variant p-12 bg-surface text-center hover:border-primary transition-colors flex flex-col items-center justify-center">
<span className="font-label-sm text-primary border border-primary/20 bg-primary/5 px-3 py-1 rounded-full uppercase tracking-wider mb-4">Pillar 01</span>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">AI DEVELOPMENT</h3>
</div>
<div className="border border-outline-variant p-12 bg-surface text-center hover:border-primary transition-colors flex flex-col items-center justify-center">
<span className="font-label-sm text-primary border border-primary/20 bg-primary/5 px-3 py-1 rounded-full uppercase tracking-wider mb-4">Pillar 02</span>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">BUSINESS IT TRANSFORMATION</h3>
</div>
</div>
</section>
{/* 6. AI Development */}
<section className="py-32 px-grid-margin max-w-[1600px] mx-auto border-t border-outline-variant">
<h2 className="font-headline-xl text-headline-xl text-on-surface mb-16">
        BUILD AI AROUND THE BUSINESS.
    </h2>
<div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16 border-t border-b border-outline-variant py-8">
<div className="text-center text-on-surface-variant font-label-sm uppercase">AI Applications</div>
<div className="text-center text-on-surface-variant font-label-sm uppercase">Generative AI</div>
<div className="text-center text-on-surface-variant font-label-sm uppercase">AI Agents</div>
<div className="text-center text-on-surface-variant font-label-sm uppercase">Intelligent Automation</div>
<div className="text-center text-on-surface-variant font-label-sm uppercase">AI Integration</div>
</div>
<div className="border border-outline-variant p-2 bg-surface-dim">
<AIDevelopmentArchitecture />
</div>
</section>
{/* 7. AI Architecture */}
<section className="py-20 px-grid-margin max-w-[1600px] mx-auto border-t border-outline-variant">
<h2 className="font-headline-xl text-headline-xl text-on-surface mb-16">
        FROM INTELLIGENCE TO OPERATION.
    </h2>
<div className="border border-outline-variant p-2 bg-surface-dim max-w-[1280px] mx-auto w-full">
<Image src="/images/image_1.jpg" alt="6-Layer Stack" width={1376} height={768} className="w-full h-auto object-cover opacity-90 rounded-lg" quality={100} />
</div>
</section>
{/* 8. Business IT Transformation */}
<section className="py-32 px-grid-margin max-w-[1600px] mx-auto border-t border-outline-variant">
<h2 className="font-headline-xl text-headline-xl text-on-surface mb-16">
        TRANSFORM THE TECHNOLOGY BEHIND THE BUSINESS.
    </h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div className="border-l-2 border-primary pl-4">
<h3 className="font-label-sm text-primary uppercase mb-2">MODERNIZE</h3>
<p className="text-on-surface-variant text-sm">Update legacy systems for scale.</p>
</div>
<div className="border-l-2 border-primary pl-4">
<h3 className="font-label-sm text-primary uppercase mb-2">CONNECT</h3>
<p className="text-on-surface-variant text-sm">Integrate disparate platforms.</p>
</div>
<div className="border-l-2 border-primary pl-4">
<h3 className="font-label-sm text-primary uppercase mb-2">SIMPLIFY</h3>
<p className="text-on-surface-variant text-sm">Streamline IT architecture.</p>
</div>
<div className="border-l-2 border-primary pl-4">
<h3 className="font-label-sm text-primary uppercase mb-2">EVOLVE</h3>
<p className="text-on-surface-variant text-sm">Build for future capabilities.</p>
</div>
</div>
</section>
{/* 9. Transformation */}
<section className="py-32 px-grid-margin max-w-[1600px] mx-auto border-t border-outline-variant">
<h2 className="font-headline-xl text-headline-xl text-on-surface mb-16">
        FROM COMPLEXITY TO CLARITY.
    </h2>
<div className="border border-outline-variant p-2 bg-surface-dim">
<Image src="/images/image_3.jpg" alt="Transformation Pipeline" width={1376} height={768} className="w-full h-auto object-cover opacity-90 rounded-lg" quality={100} />
</div>
</section>
{/* 10. AI + Technology Synergy */}
<section className="py-20 px-grid-margin max-w-[1600px] mx-auto border-t border-outline-variant">
<h2 className="font-headline-xl text-headline-xl text-on-surface mb-16">
        AI BECOMES POWERFUL WHEN THE TECHNOLOGY AROUND IT IS READY.
    </h2>
<div className="border border-outline-variant p-2 bg-surface-dim max-w-[1280px] mx-auto w-full">
<Image src="/images/image_1.jpg" alt="Synergy Flow" width={1376} height={768} className="w-full h-auto object-cover opacity-90 rounded-lg" quality={100} />
</div>
</section>
{/* 11. Business Outcomes */}
<section className="py-32 px-grid-margin max-w-[1600px] mx-auto border-t border-outline-variant">
<h2 className="font-headline-xl text-headline-xl text-on-surface mb-16">
        TECHNOLOGY SHOULD CREATE LEVERAGE.
    </h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter text-center">
<div>
<h3 className="font-headline-md text-headline-md text-primary uppercase">AUTOMATE</h3>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-primary uppercase">CONNECT</h3>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-primary uppercase">INTELLIGENCE</h3>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-primary uppercase">SCALE</h3>
</div>
</div>
</section>
{/* 12. How Mavyax Works */}
<section className="py-32 px-grid-margin max-w-[1600px] mx-auto border-t border-outline-variant">
<h2 className="font-headline-xl text-headline-xl text-on-surface mb-16">
        FROM UNDERSTANDING TO ENGINEERING.
    </h2>
<div className="border border-outline-variant p-2 bg-surface-dim">
<Image src="/images/image_4.jpg" alt="Professional Engineering Process Pipeline" width={1376} height={768} className="w-full h-auto object-cover opacity-90 rounded-lg" quality={100} />
</div>
</section>
{/* 13. Philosophy */}
<section className="py-32 px-grid-margin max-w-[1600px] mx-auto border-t border-outline-variant">
<div className="max-w-4xl mb-16">
<h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">
            TECHNOLOGY SHOULD CREATE LEVERAGE.
        </h2>
<p className="text-body-lg text-on-surface-variant">
            The objective isn&apos;t to add more technology to a business. It&apos;s to make the business more capable.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div className="border-l border-outline-variant pl-6">
<h3 className="font-label-sm text-primary mb-2">BUSINESS FIRST</h3>
<p className="text-on-surface-variant text-sm">We engineer for business outcomes, not just technical novelty.</p>
</div>
<div className="border-l border-outline-variant pl-6">
<h3 className="font-label-sm text-primary mb-2">ENGINEERING DISCIPLINE</h3>
<p className="text-on-surface-variant text-sm">Rigorous architecture ensuring scale and reliability.</p>
</div>
<div className="border-l border-outline-variant pl-6">
<h3 className="font-label-sm text-primary mb-2">LONG-TERM THINKING</h3>
<p className="text-on-surface-variant text-sm">Building foundations that support future evolution.</p>
</div>
</div>
</section>
{/* 14. Final CTA */}
<section className="py-32 px-grid-margin max-w-[1600px] mx-auto border-t border-outline-variant">
<div className="border border-primary/30 bg-surface-dim grid-bg p-12 md:p-20 text-center relative overflow-hidden">
<div className="relative z-10">
<h2 className="font-display-lg-mobile md:font-display-lg text-on-surface mb-8">
                BUILD WHAT COMES NEXT.
            </h2>
<p className="font-body-lg text-on-surface-variant max-w-3xl mx-auto mb-12">
                Whether you&apos;re developing AI capabilities or transforming the technology behind your business, Mavyax can help turn technology into business capability.
            </p>
<button className="bg-primary text-white px-10 py-4 font-label-sm text-label-sm uppercase tracking-wider hover:bg-opacity-90 transition-all flex items-center gap-2 mx-auto">
                START A CONVERSATION
                <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</section>
{/* 15. Footer */}
<footer className="bg-surface-dim border-t border-outline-variant w-full py-20 font-body-md text-body-md">
<div className="grid grid-cols-12 gap-gutter px-grid-margin max-w-[1600px] mx-auto">
<div className="col-span-12 md:col-span-4 flex flex-col gap-4">
<div className="font-headline-md text-headline-md font-bold text-on-surface">MAVYAX</div>
<p className="text-on-surface-variant">AI &amp; Technology Transformation</p>
</div>
<div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-on-surface-variant">
<div className="flex flex-col gap-2">
<span className="text-on-surface font-semibold mb-2">Navigation</span>
<a className="hover:text-primary transition-colors" href="#contact">Capabilities</a>
<a className="hover:text-primary transition-colors" href="#contact">AI</a>
<a className="hover:text-primary transition-colors" href="#contact">Transformation</a>
<a className="hover:text-primary transition-colors" href="#contact">About</a>
<a className="hover:text-primary transition-colors" href="#contact">Contact</a>
</div>
<div className="flex flex-col gap-2">
<span className="text-on-surface font-semibold mb-2">Contact</span>
<p>+91 8925687688</p>
<p>info@mavyax.com</p>
</div>
<div className="flex flex-col gap-2">
<span className="text-on-surface font-semibold mb-2">Legal</span>
<p>Mavyax Tech Private Limited</p>
<p>GSTIN: 09AAQCM9052K1ZP</p>
</div>
</div>
<div className="col-span-12 mt-16 pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant text-sm">
<div>© 2026 Mavyax Tech Private Limited. All rights reserved.</div>
<div className="flex gap-4">
<a className="hover:text-primary transition-colors" href="#contact">Privacy Policy</a>
<span className="opacity-30">·</span>
<a className="hover:text-primary transition-colors" href="#contact">Terms of Service</a>
</div>
</div>
</div>
</footer>
    </main>
  );
}
