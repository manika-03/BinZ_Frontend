import React from 'react';
import {
  ArrowLeft,
  BatteryWarning,
  Cable,
  FileCheck2,
  Flame,
  HardHat,
  Laptop,
  MailCheck,
  MonitorX,
  PackageCheck,
  RefreshCw,
  Route,
  ShieldAlert,
  ShieldCheck,
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
    title: 'Battery heat and leakage',
    text: 'Piercing, bending or mixing loose batteries can lead to swelling, heat, smoke and chemical leaks.',
  },
  {
    icon: MonitorX,
    title: 'CRT and display risk',
    text: 'Older screens and display parts can contain heavy glass, coatings and sharp fragments that need careful handling.',
  },
  {
    icon: Laptop,
    title: 'Device traceability loss',
    text: 'Phones and laptops mixed with regular scrap can lose their ticket trail, data-care step and facility visibility.',
  },
  {
    icon: ShieldAlert,
    title: 'Unsafe dismantling',
    text: 'Opening appliances without tools, PPE or sorting checks can expose wires, dust, sharp edges and fragile parts.',
  },
  {
    icon: Flame,
    title: 'Short-circuit sparks',
    text: 'Wet cables, mixed chargers and damaged boards can spark when they are packed or crushed together.',
  },
  {
    icon: HardHat,
    title: 'No protective handling',
    text: 'Collectors need gloves, careful lifting and separated bins before heavy or fragile e-waste is moved.',
  },
];

const binzSafetyFlow = [
  { icon: PackageCheck, label: 'Separate pickup', text: 'Doorstep booking keeps sensitive items out of mixed scrap.' },
  { icon: MailCheck, label: 'E-waste ticket', text: 'Phones, laptops and batteries get a generated tracking ID.' },
  { icon: Route, label: 'Facility route', text: 'Tracker checkpoints show pickup, processing and recovery status.' },
  { icon: FileCheck2, label: 'Report ready', text: 'The recycling report button is prepared for backend PDF download.' },
];

const safetyHighlights = [
  { icon: BatteryWarning, label: 'Battery isolation' },
  { icon: Cable, label: 'Cable and part sorting' },
  { icon: ShieldCheck, label: 'Guided handoff' },
];

function SafetyGuidance() {
  return (
    <section className="safety-guidance" aria-labelledby="safety-guidance-title">
      <div className="safety-guidance-head">
        <div className="safety-guidance-copy">
          <p className="eyebrow">Safety guidance</p>
          <h2 id="safety-guidance-title">Handle e-waste with the right care from pickup to recovery.</h2>
          <p>
            E-waste becomes risky when batteries, CRT displays, damaged devices and loose parts are handled casually.
            BinZ is designed to guide safer collection with doorstep pickup, e-waste tickets, facility tracking,
            FAQ support, responsible recycling updates and report-ready proof.
          </p>
        </div>
        <aside className="safety-visual-panel" aria-label="BinZ safety preparation highlights">
          <span className="safety-visual-main"><ShieldCheck size={38} aria-hidden="true" /></span>
          <div>
            <p className="eyebrow">Before processing</p>
            <h3>Separate, label and route every sensitive item.</h3>
          </div>
          <div className="safety-visual-list">
            {safetyHighlights.map(({ icon: Icon, label }) => (
              <span className="safety-visual-item" key={label}>
                <Icon size={18} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </aside>
      </div>

      <div className="safety-guidance-layout">
        <div className="hazard-grid" aria-label="Common e-waste safety hazards">
          {safetyHazards.map(({ icon: Icon, title, text }) => (
            <article className="hazard-card" key={title}>
              <span className="hazard-icon"><Icon size={28} aria-hidden="true" /></span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>

        <aside className="binz-safety-card" aria-label="How BinZ supports safer e-waste handling">
          <span className="binz-safety-icon"><ShieldCheck size={34} aria-hidden="true" /></span>
          <p className="eyebrow">BinZ safe flow</p>
          <h3>Built to keep the process guided, visible and accountable.</h3>
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
      </div>
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
