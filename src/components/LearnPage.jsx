import React from 'react';
import {
  ArrowLeft,
  BatteryWarning,
  CheckCircle2,
  Download,
  Factory,
  FileCheck2,
  Flame,
  HardHat,
  Laptop,
  MonitorX,
  PackageCheck,
  RefreshCw,
  ScanLine,
  ShieldCheck,
  Smartphone,
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

const safetySteps = [
  {
    number: '01',
    title: 'Book a protected pickup',
    text: 'Doorstep collection keeps batteries, laptops and loose parts out of regular mixed scrap from the start.',
    proof: 'E-waste ticket created before handoff.',
    visual: 'pickup',
  },
  {
    number: '02',
    title: 'Scan and identify the item',
    text: 'Each device can carry a BinZ ID so the item, category and care notes stay visible through the journey.',
    proof: 'BINZ-26-000347 automatically identified.',
    visual: 'scan',
  },
  {
    number: '03',
    title: 'Separate risky materials',
    text: 'Battery-bearing devices, CRT/display glass and damaged boards are treated as sensitive streams.',
    proof: 'Hazards are labelled before sorting.',
    visual: 'hazards',
  },
  {
    number: '04',
    title: 'Mark the facility checkpoint',
    text: 'Once received, the status can be updated so the customer sees that the item reached a safer handling point.',
    proof: 'Received and processing status confirmed.',
    visual: 'received',
  },
  {
    number: '05',
    title: 'Sort with PPE and care',
    text: 'Collectors and facility staff need gloves, controlled bins and careful lifting before dismantling begins.',
    proof: 'Guided sorting reduces unsafe dismantling.',
    visual: 'sort',
  },
  {
    number: '06',
    title: 'Record material recovery',
    text: 'Recovered materials can be entered only after actual sorting, keeping the report honest and traceable.',
    proof: 'Copper, glass, boards and reusable parts logged.',
    visual: 'recovery',
  },
  {
    number: '07',
    title: 'Download report-ready proof',
    text: 'The tracker closes with a recycling report button prepared for backend PDF download when connected.',
    proof: 'Customer dashboard stays updated.',
    visual: 'report',
  },
];

function SafetyVisual({ type }) {
  if (type === 'pickup') {
    return (
      <div className="safety-picture-frame">
        <img src="/assets/binz-community-recycling.png" alt="Safe recycling pickup preparation" />
        <span className="safety-floating-chip">
          <PackageCheck size={18} aria-hidden="true" /> Pickup booked
        </span>
      </div>
    );
  }

  if (type === 'scan') {
    return (
      <div className="safety-scan-demo">
        <div className="phone-scan-card">
          <Smartphone size={44} aria-hidden="true" />
          <ScanLine size={54} aria-hidden="true" />
          <span>Scanning</span>
        </div>
        <div className="safety-id-card">
          <ScanLine size={28} aria-hidden="true" />
          <div>
            <strong>BINZ-26-000347</strong>
            <span>Device ID attached</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'hazards') {
    return (
      <div className="safety-hazard-demo">
        <div className="hazard-mini-card is-warm">
          <BatteryWarning size={30} aria-hidden="true" />
          <strong>Battery heat</strong>
          <span>Swelling, smoke, leaks</span>
        </div>
        <div className="hazard-mini-card">
          <MonitorX size={30} aria-hidden="true" />
          <strong>CRT/display risk</strong>
          <span>Heavy glass and coatings</span>
        </div>
        <div className="hazard-mini-card">
          <Flame size={30} aria-hidden="true" />
          <strong>Short circuits</strong>
          <span>Wet cables and boards</span>
        </div>
      </div>
    );
  }

  if (type === 'received') {
    return (
      <div className="safety-status-demo">
        <button type="button"><CheckCircle2 size={20} aria-hidden="true" /> Received</button>
        <button type="button"><Factory size={20} aria-hidden="true" /> At facility</button>
        <div className="status-note-card">
          <ShieldCheck size={26} aria-hidden="true" />
          <span>Item arrived safely at BinZ facility.</span>
        </div>
      </div>
    );
  }

  if (type === 'sort') {
    return (
      <div className="safety-picture-frame">
        <img src="/assets/binz-hero-recycling.png" alt="Separated recycling materials prepared for sorting" />
        <span className="safety-floating-chip">
          <HardHat size={18} aria-hidden="true" /> PPE handling
        </span>
      </div>
    );
  }

  if (type === 'recovery') {
    return (
      <div className="material-recovery-demo">
        <div className="material-row">
          <span>Copper</span>
          <strong>82 g</strong>
        </div>
        <div className="material-row">
          <span>Glass</span>
          <strong>Separated</strong>
        </div>
        <div className="material-row">
          <span>Reusable parts</span>
          <strong>Checked</strong>
        </div>
      </div>
    );
  }

  return (
    <div className="safety-report-demo">
      <div className="report-window-top">
        <span>Dashboard</span>
        <FileCheck2 size={18} aria-hidden="true" />
      </div>
      <div className="report-progress">
        <span className="is-done" />
        <span className="is-done" />
        <span className="is-done" />
        <span />
      </div>
      <button type="button"><Download size={18} aria-hidden="true" /> Download recycling report</button>
    </div>
  );
}

function SafetyGuidance() {
  return (
    <section className="safety-guidance" aria-labelledby="safety-guidance-title">
      <div className="safety-guidance-head">
        <span className="safety-side-note">Scan. Track. Recover. Repeat.</span>
        <p className="eyebrow">Safety guidance</p>
        <h2 id="safety-guidance-title">End-to-end safety made simple.</h2>
        <p>
          From doorstep pickup to report-ready proof, BinZ keeps battery, CRT/display and dismantling risks visible
          through tickets, status checkpoints, facility tracking and guided support.
        </p>
        <span className="safety-side-note is-right">Every device gets a safer route.</span>
      </div>

      <div className="safety-story" aria-label="How BinZ supports safer e-waste tracking">
        {safetySteps.map(({ number, title, text, proof, visual }, index) => (
          <article className={`safety-story-step ${index % 2 ? 'is-reverse' : ''}`} key={title}>
            <div className="safety-media-panel">
              <SafetyVisual type={visual} />
            </div>
            <span className="safety-step-pin">{number}</span>
            <div className="safety-step-copy">
              <p className="eyebrow">{index < 3 ? 'Prevent the hazard' : 'Keep it accountable'}</p>
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="safety-step-safe">
                <ShieldCheck size={19} aria-hidden="true" />
                <span>{proof}</span>
              </div>
            </div>
          </article>
        ))}
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
