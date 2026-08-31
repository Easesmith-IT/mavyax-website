import React from "react";
import Image from "next/image";
import AIDevelopmentArchitecture from "@/components/AIDevelopmentArchitecture";

export default function MobileLayout() {
  return (
    <>
{/* 1. MOBILE NAVIGATION */}
<header className="fixed top-0 w-full z-50 bg-surface/90 dark:bg-surface/90 border-b border-outline-variant flex justify-between items-center px-4 md:px-grid-margin h-16 max-w-full backdrop-blur-md">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-2xl" >terminal</span>
<span className="font-display-lg-mobile text-[24px] font-extrabold tracking-tighter text-primary">MAVYAX</span>
</div>
<div className="flex items-center gap-4">
<button className="bg-primary-container text-white px-3 py-1.5 text-xs rounded font-label-sm uppercase tracking-wider hover:bg-primary transition-colors">
            Start
        </button>
<button className="text-primary md:hidden">
<span className="material-symbols-outlined text-2xl">menu</span>
</button>
</div>
</header>
<main className="pt-24 px-4 md:px-8 max-w-7xl mx-auto flex flex-col gap-16 md:gap-section-gap overflow-hidden w-full">
{/* 2. HERO */}
<section className="relative pt-8 pb-8 flex flex-col gap-6 grid-line-horizontal w-full">
<div className="inline-flex items-center gap-2 border border-outline-variant px-3 py-1 w-max rounded-sm">
<span className="blueprint-node relative top-0 left-0 w-2 h-2"></span>
<span className="font-label-sm text-primary uppercase">AI &amp; TECHNOLOGY TRANSFORMATION</span>
</div>
<h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-white">
        AI &amp; TECHNOLOGY <br/> TRANSFORMATION
    </h1>
<p className="font-body-lg text-on-surface-variant max-w-2xl border-l-2 border-primary pl-4">
        We engineer the technology that moves businesses forward. Mavyax helps businesses develop intelligent solutions, modernize critical infrastructure, and deploy AI strategically.
    </p>
<div className="flex flex-col gap-4 mt-4 w-full">
<button className="bg-primary-container text-white px-6 py-4 rounded-sm font-label-sm uppercase tracking-wider hover:bg-primary transition-colors flex justify-between items-center w-full">
            Start a Transformation
            <span className="material-symbols-outlined">arrow_forward</span>
</button>
<button className="border border-outline-variant text-white px-6 py-4 rounded-sm font-label-sm uppercase tracking-wider hover:bg-surface-container transition-colors w-full">
            Explore Capabilities
        </button>
</div>
{/* Removed Missing Placeholder N */}
</section>
{/* 3. POSITIONING */}
<section className="flex flex-col gap-8 grid-line-horizontal pb-16 w-full">
<h2 className="font-headline-md text-headline-md-mobile md:text-headline-md max-w-3xl leading-tight">
        Technology is no longer just infrastructure; it is the core execution engine of the modern enterprise.
    </h2>
<div className="w-full border border-outline-variant bg-surface-container-lowest p-2 overflow-hidden">
<Image src="/images/image_1.jpg" alt="Vertical Strategy Flow" width={1376} height={768} className="w-full h-auto object-cover opacity-90 rounded-lg" quality={100} />
</div>
</section>
{/* 4. BUSINESS CHALLENGES */}
<section className="flex flex-col gap-6 w-full">
<h3 className="font-label-sm text-primary uppercase tracking-widest flex items-center gap-2"><span className="w-8 h-px bg-primary"></span> The Challenge</h3>
<div className="flex flex-col gap-4 w-full">
<div className="border border-outline-variant bg-surface-container-lowest p-6 flex flex-col gap-2">
<h4 className="font-headline-md text-xl text-white">Fragmented Data</h4>
<p className="font-body-md text-on-surface-variant">Silos preventing true organizational intelligence.</p>
</div>
<div className="border border-outline-variant bg-surface-container-lowest p-6 flex flex-col gap-2">
<h4 className="font-headline-md text-xl text-white">Manual Processes</h4>
<p className="font-body-md text-on-surface-variant">Scaling constrained by human bottlenecks.</p>
</div>
<div className="border border-outline-variant bg-surface-container-lowest p-6 flex flex-col gap-2">
<h4 className="font-headline-md text-xl text-white">Legacy Debt</h4>
<p className="font-body-md text-on-surface-variant">Outdated systems blocking agility.</p>
</div>
<div className="border border-outline-variant bg-surface-container-lowest p-6 flex flex-col gap-2">
<h4 className="font-headline-md text-xl text-white">AI Without Integration</h4>
<p className="font-body-md text-on-surface-variant">Tools that don&apos;t connect to core business logic.</p>
</div>
</div>
<div className="bg-primary-container text-white p-6 mt-4 border-l-4 border-white w-full">
<h4 className="font-headline-md text-xl uppercase tracking-wider">THIS IS WHERE MAVYAX COMES IN.</h4>
</div>
</section>
{/* 5. CORE CAPABILITIES */}
<section className="flex flex-col gap-8 w-full">
<h3 className="font-label-sm text-primary uppercase tracking-widest flex items-center gap-2"><span className="w-8 h-px bg-primary"></span> Core Capabilities</h3>
<p className="font-body-lg text-white">Two capabilities. One transformation mindset.</p>
<div className="grid grid-cols-1 gap-4 w-full">
<div className="border border-outline-variant bg-surface-container-lowest p-6 flex flex-col gap-6">
<div className="flex justify-between items-start">
<span className="font-headline-xl text-outline-variant font-mono opacity-50">01</span>
<span className="material-symbols-outlined text-primary text-3xl">memory</span>
</div>
<h4 className="font-headline-md text-white">AI Development</h4>
</div>
<div className="border border-outline-variant bg-surface-container-lowest p-6 flex flex-col gap-6">
<div className="flex justify-between items-start">
<span className="font-headline-xl text-outline-variant font-mono opacity-50">02</span>
<span className="material-symbols-outlined text-primary text-3xl">architecture</span>
</div>
<h4 className="font-headline-md text-white">Business IT Transformation</h4>
</div>
</div>
</section>
{/* 6. AI DEVELOPMENT PILLAR */}
<section className="flex flex-col gap-8 w-full">
<div className="flex items-center gap-4 border-b border-outline-variant pb-4">
<span className="material-symbols-outlined text-primary text-4xl">memory</span>
<h2 className="font-headline-md text-white">AI Development</h2>
</div>
<p className="font-body-md text-on-surface-variant">Building intelligent systems that understand context, automate complexity, and scale decision-making.</p>
<div className="flex flex-col gap-3 w-full">
<div className="border border-outline-variant p-4 text-on-surface"><span className="text-primary mr-2">■</span> AI Applications</div>
<div className="border border-outline-variant p-4 text-on-surface"><span className="text-primary mr-2">■</span> Generative AI</div>
<div className="border border-outline-variant p-4 text-on-surface"><span className="text-primary mr-2">■</span> AI Agents</div>
<div className="border border-outline-variant p-4 text-on-surface"><span className="text-primary mr-2">■</span> Intelligent Automation</div>
<div className="border border-outline-variant p-4 text-on-surface"><span className="text-primary mr-2">■</span> AI Integration</div>
</div>
<div className="w-full border border-outline-variant bg-surface-container-lowest p-2 overflow-hidden">
<div className="px-4"><AIDevelopmentArchitecture /></div>
</div>
</section>
{/* 7. AI SYSTEM ARCHITECTURE */}
<section className="flex flex-col gap-8 w-full">
<h3 className="font-label-sm text-primary uppercase tracking-widest flex items-center gap-2"><span className="w-8 h-px bg-primary"></span> Architecture</h3>
<h2 className="font-headline-md text-white">FROM INTELLIGENCE TO OPERATION</h2>
{/* Removed Missing Placeholder N */}
</section>
{/* 8. BUSINESS IT TRANSFORMATION PILLAR */}
<section className="flex flex-col gap-8 w-full">
<div className="flex items-center gap-4 border-b border-outline-variant pb-4">
<span className="material-symbols-outlined text-primary text-4xl">architecture</span>
<h2 className="font-headline-md text-white">Business IT Transformation</h2>
</div>
<p className="font-body-md text-on-surface-variant">Modernizing core infrastructure to support agility, scale, and advanced capabilities.</p>
<div className="grid grid-cols-1 gap-4 w-full">
<div className="border border-outline-variant p-4 flex flex-col gap-2">
<span className="material-symbols-outlined text-primary">update</span>
<h4 className="text-white font-bold">Tech Modernization</h4>
</div>
<div className="border border-outline-variant p-4 flex flex-col gap-2">
<span className="material-symbols-outlined text-primary">cloud_sync</span>
<h4 className="text-white font-bold">Legacy Transformation</h4>
</div>
<div className="border border-outline-variant p-4 flex flex-col gap-2">
<span className="material-symbols-outlined text-primary">dns</span>
<h4 className="text-white font-bold">Business Systems</h4>
</div>
<div className="border border-outline-variant p-4 flex flex-col gap-2">
<span className="material-symbols-outlined text-primary">hub</span>
<h4 className="text-white font-bold">Tech Integration</h4>
</div>
</div>
<div className="w-full border border-outline-variant bg-surface-container-lowest p-2 overflow-hidden">
<Image src="/images/image_1.jpg" alt="Transformation Flow" width={1376} height={768} className="w-full h-auto object-cover opacity-90 rounded-lg" quality={100} />
</div>
</section>
{/* 9. TRANSFORMATION PIPELINE */}
<section className="flex flex-col gap-8 w-full">
<h3 className="font-label-sm text-primary uppercase tracking-widest flex items-center gap-2"><span className="w-8 h-px bg-primary"></span> Pipeline</h3>
<h2 className="font-headline-md text-white">FROM COMPLEXITY TO CLARITY</h2>
<div className="w-full border border-outline-variant bg-surface-container-lowest p-2 overflow-hidden">
<Image src="/images/image_3.jpg" alt="Transformation Pipeline" width={1376} height={768} className="w-full h-auto object-cover opacity-90 rounded-lg" quality={100} />
</div>
</section>
{/* 10. AI + TECHNOLOGY SYNERGY */}
<section className="flex flex-col gap-8 w-full">
<h3 className="font-label-sm text-primary uppercase tracking-widest flex items-center gap-2"><span className="w-8 h-px bg-primary"></span> Synergy</h3>
<h2 className="font-headline-md text-white">AI BECOMES POWERFUL WHEN SYSTEMS ARE CONNECTED.</h2>
<div className="w-full border border-outline-variant bg-surface-container-lowest p-2 overflow-hidden">
<Image src="/images/image_1.jpg" alt="Synergy Flow" width={1376} height={768} className="w-full h-auto object-cover opacity-90 rounded-lg" quality={100} />
</div>
</section>
{/* 11. BUSINESS OUTCOMES */}
<section className="flex flex-col gap-8 w-full py-8 border-y border-outline-variant">
<h2 className="font-display-lg-mobile text-[48px] text-white opacity-80 leading-none">AUTOMATE.</h2>
<h2 className="font-display-lg-mobile text-[48px] text-white opacity-80 leading-none pl-4">CONNECT.</h2>
<h2 className="font-display-lg-mobile text-[48px] text-white opacity-80 leading-none pl-8">INTELLIGENCE.</h2>
<h2 className="font-display-lg-mobile text-[48px] text-white opacity-80 leading-none pl-12">SCALE.</h2>
</section>
{/* 12. HOW MAVYAX WORKS */}
<section className="flex flex-col gap-8 w-full">
<h3 className="font-label-sm text-primary uppercase tracking-widest flex items-center gap-2"><span className="w-8 h-px bg-primary"></span> Process</h3>
<h2 className="font-headline-md text-white">FROM UNDERSTANDING TO ENGINEERING</h2>
{/* Removed Missing Placeholder N */}
</section>
{/* 13. PHILOSOPHY */}
<section className="flex flex-col gap-8 w-full pb-16">
<h3 className="font-label-sm text-primary uppercase tracking-widest flex items-center gap-2"><span className="w-8 h-px bg-primary"></span> Philosophy</h3>
<h2 className="font-headline-md text-white">TECHNOLOGY SHOULD CREATE LEVERAGE</h2>
<p className="font-body-md text-on-surface-variant border-l-2 border-primary pl-4">We believe in building systems that compound in value over time.</p>
<div className="flex flex-col gap-4 w-full">
<div className="border border-outline-variant p-6 bg-surface-container-lowest">
<h4 className="font-bold text-white mb-2">Business First</h4>
<p className="text-sm text-on-surface-variant">Technology serves the business objective.</p>
</div>
<div className="border border-outline-variant p-6 bg-surface-container-lowest">
<h4 className="font-bold text-white mb-2">Engineering Discipline</h4>
<p className="text-sm text-on-surface-variant">Rigorous architecture and clean code.</p>
</div>
<div className="border border-outline-variant p-6 bg-surface-container-lowest">
<h4 className="font-bold text-white mb-2">Long-term Thinking</h4>
<p className="text-sm text-on-surface-variant">Building for tomorrow&apos;s scale.</p>
</div>
</div>
</section>
{/* 14. FINAL CTA */}
<section className="py-16 px-6 flex flex-col items-center justify-center gap-8 text-center border border-outline-variant bg-surface-container relative overflow-hidden w-full">
<div className="absolute inset-0 opacity-10" ></div>
<h2 className="font-display-lg-mobile text-[32px] text-white relative z-10 w-full">BUILD WHAT COMES NEXT.</h2>
<button className="bg-primary-container text-white px-8 py-4 rounded-sm font-label-sm uppercase tracking-wider hover:bg-primary transition-colors relative z-10 w-full">
        Start a Conversation
    </button>
</section>
</main>
{/* 15. MOBILE FOOTER */}
<footer className="mt-16 bg-surface-container-lowest border-t border-outline-variant pt-12 pb-24 px-6 w-full flex flex-col gap-10">
<div className="flex flex-col gap-4">
<span className="font-headline-md text-headline-md font-bold text-white tracking-tighter">MAVYAX</span>
<p className="font-body-md text-on-surface-variant">Engineering Excellence for the Modern Enterprise.</p>
</div>
<div className="flex flex-col gap-4">
<a className="text-on-surface-variant font-label-sm uppercase tracking-wider hover:text-primary transition-colors" href="#contact">Solutions</a>
<a className="text-on-surface-variant font-label-sm uppercase tracking-wider hover:text-primary transition-colors" href="#contact">Systems</a>
<a className="text-on-surface-variant font-label-sm uppercase tracking-wider hover:text-primary transition-colors" href="#contact">Expertise</a>
</div>
<div className="flex flex-col gap-2 font-label-sm text-on-surface-variant">
<p>Mavyax Tech Private Limited</p>
<p>Contact: hello@mavyax.com</p>
</div>
<div className="flex flex-col border-t border-outline-variant pt-6 font-label-sm text-on-surface-variant gap-4">
<div className="flex gap-4">
<a className="hover:text-primary transition-colors" href="#contact">Privacy Policy</a>
<a className="hover:text-primary transition-colors" href="#contact">Terms of Service</a>
</div>
<p>© 2026 Mavyax Tech Private Limited. All rights reserved.</p>
</div>
</footer>
    </>
  );
}
