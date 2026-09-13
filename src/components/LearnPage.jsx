import React from 'react';
import {
  ArrowLeft,
  BatteryWarning,
  ClipboardCheck,
  FileCheck2,
  Flame,
  HardHat,
  Laptop,
  MailCheck,
  MonitorX,
  PackageCheck,
  Recycle,
  RefreshCw,
  Route,
  ScanLine,
  ShieldAlert,
  ShieldCheck,
  TriangleAlert,
  Wrench,
} from 'lucide-react';

const principles = [
  {
    icon: Wrench,
    title: 'Refurbish',
    text: 'Repair and refresh useful electronics so they can perform well for longer instead of becoming waste.',
    action: 'Restore value',
  },
  {
    icon: RefreshCw,
    title: 'Rebuild',
    text: 'Replace worn parts, improve what can be improved, and rebuild devices for a reliable second chapter.',
    action: 'Make it better',
  },
  {
    icon: RefreshCw,
    title: 'Reuse',
    text: 'Pass on working devices, repurpose components, and keep valuable materials in circulation.',
    action: 'Keep it moving',
  },
];

const safetyHazards = [
  {
    icon: BatteryWarning,
    accent: Flame,
    number: '01',
    title: 'Battery heat and leakage',
    text: 'Piercing, bending or mixing loose batteries can lead to swelling, heat, smoke and chemical leaks.',
    safe: 'BinZ separates battery-bearing devices during pickup so they are handled with extra care.',
  },
  {
    icon: MonitorX,
    accent: TriangleAlert,
    number: '02',
    title: 'CRT and display risk',
    text: 'Older screens and display parts can contain heavy glass, coatings and sharp fragments that need careful handling.',
    safe: 'Ticketed handling keeps fragile displays visible before they reach the recycling facility.',
  },
  {
    icon: Laptop,
    accent: ScanLine,
    number: '03',
    title: 'Device traceability loss',
    text: 'Phones and laptops mixed with regular scrap can lose their ticket trail, data-care step and facility visibility.',
    safe: 'Every request gets a tracking ID, status checkpoints and report-ready proof.',
  },
  {
    icon: ShieldAlert,
    accent: HardHat,
    number: '04',
    title: 'Unsafe dismantling',
    text: 'Opening appliances without tools, PPE or sorting checks can expose wires, dust, sharp edges and fragile parts.',
    safe: 'BinZ guides the item from doorstep pickup to facility processing instead of casual dismantling.',
  },
  {
    icon: Flame,
    accent: BatteryWarning,
    number: '05',
    title: 'Short-circuit sparks',
    text: 'Wet cables, mixed chargers and damaged boards can spark when they are packed or crushed together.',
    safe: 'Separated routing reduces mixed-load risk before material recovery starts.',
  },
  {
    icon: HardHat,
    accent: ClipboardCheck,
    number: '06',
    title: 'No protective handling',
    text: 'Collectors need gloves, careful lifting and separated bins before heavy or fragile e-waste is moved.',
    safe: 'Service support, FAQ guidance and checkpoints keep the process guided and accountable.',
  },
];

const binzSafetyFlow = [
  { icon: PackageCheck, label: 'Separate pickup', text: 'Doorstep booking keeps sensitive items out of mixed scrap.' },
  { icon: MailCheck, label: 'E-waste ticket', text: 'Phones, laptops and batteries get a generated tracking ID.' },
  { icon: Route, label: 'Facility route', text: 'Tracker checkpoints show pickup, processing and recovery status.' },
  { icon: FileCheck2, label: 'Report ready', text: 'The recycling report button is prepared for backend PDF download.' },
];

function SafetyGuidance() {
  return (
    <section className="safety-guidance" aria-labelledby="safety-guidance-title">
      <div className="safety-guidance-head">
        <p className="eyebrow">Safety guidance</p>
        <h2 id="safety-guidance-title">Know the hazard before it becomes a problem.</h2>
        <p>
          E-waste needs more than a regular scrap pickup. BinZ combines doorstep collection, generated tickets,
          tracker checkpoints, FAQ support and recycling reports so risky items move through a safer, visible flow.
        </p>
      </div>

      <div className="safety-story" aria-label="Common e-waste hazards and BinZ safety guidance">
        {safetyHazards.map(({ icon: Icon, accent: AccentIcon, number, title, text, safe }, index) => (
          <article className={`safety-story-step ${index % 2 ? 'is-reverse' : ''}`} key={title}>
            <div className="hazard-scene" aria-hidden="true">
              <span className="hazard-warning"><TriangleAlert size={20} /></span>
              <span className="hazard-scene-main"><Icon size={54} /></span>
              <span className="hazard-scene-accent"><AccentIcon size={24} /></span>
            </div>
            <span className="safety-step-pin">{number}</span>
            <div className="safety-step-copy">
              <p className="eyebrow">What can go wrong</p>
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="safety-step-safe">
                <ShieldCheck size={19} aria-hidden="true" />
                <span>{safe}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <aside className="binz-safety-card" aria-label="How BinZ supports safer e-waste handling">
        <div className="binz-safety-card-head">
          <span className="binz-safety-icon"><Recycle size={34} aria-hidden="true" /></span>
          <div>
            <p className="eyebrow">BinZ safe flow</p>
            <h3>Built to keep the process guided, visible and accountable.</h3>
          </div>
        </div>
        <div className="safety-flow-list">
          {binzSafetyFlow.map(({ icon: Icon, label, text }) => (
            <div className="safety-flow-item" key={label}>
              <span><Icon size={19} aria-hidden="true" /></span>
              <div>
                <strong>{label}</strong>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}

export default function LearnPage() {
  return (
    <main className="learn-page">
      <a className="auth-back-link" href="#home">
        <ArrowLeft size={16} /> Back to BinZ
      </a>
      <section className="learn-hero" aria-labelledby="learn-title">
        <p className="eyebrow">A smaller footprint starts here</p>
        <h1 id="learn-title">Refurbish. Rebuild. Reuse.</h1>
        <p>
          Three practical habits can keep valuable electronics in use, reduce waste, and help build a cleaner future.
        </p>
      </section>

      <section className="principles-grid" aria-label="The three circular technology principles">
        {principles.map(({ icon: Icon, title, text, action }) => (
          <article className="principle-card" key={title}>
            <span className="principle-icon"><Icon size={28} /></span>
            <p className="eyebrow">01 / 0{principles.findIndex((item) => item.title === title) + 1}</p>
            <h2>{title}</h2>
            <p>{text}</p>
            <strong>{action}</strong>
          </article>
        ))}
      </section>
      <section className="learn-next-step">
        <div>
          <p className="eyebrow">Make it a habit</p>
          <h2>Small choices add up.</h2>
        </div>
        <a className="button primary" href="#scrap">Find a better next step</a>
      </section>
      <SafetyGuidance />
    </main>
  );
}
