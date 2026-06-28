import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './Playbook.css';

const CHAPTERS = [
  {
    slug: 'introduction',
    title: 'Introduction',
    content: [
      { type: 'heading', text: 'Bienvenue dans le Playbook AIFlow' },
      { type: 'text', text: "Ce playbook est votre guide complet pour comprendre, déployer et maximiser la valeur des agents IA dans votre entreprise. Conçu pour les PME françaises, il couvre tout : de la stratégie à l'implémentation technique." },
      { type: 'callout', text: 'Ce guide est mis à jour régulièrement. Dernière mise à jour : Juin 2026.' },
    ],
  },
  {
    slug: 'pourquoi-ia',
    title: "Pourquoi l'IA en 2026",
    content: [
      { type: 'heading', text: "L'IA n'est plus une option" },
      { type: 'text', text: "En 2026, les entreprises qui n'ont pas intégré l'IA dans leurs processus clés perdent en moyenne 40% de compétitivité. Le coût d'entrée a chuté de 90% en 3 ans." },
      { type: 'list', items: [
        'GPT-4 et ses successeurs : performances surhumaines sur 80% des tâches',
        "Le coût d'un agent IA équivaut à 2% d'un salaire junior",
        'ROI moyen constaté : 340% sur 12 mois',
        'Délai de mise en place : 8 jours en moyenne',
      ]},
    ],
  },
  {
    slug: 'cas-usage',
    title: "Cas d'usage",
    content: [
      { type: 'heading', text: 'Les 5 automatisations à fort ROI' },
      { type: 'text', text: "Voici les cas d'usage qui génèrent le meilleur retour pour les PME françaises, classés par impact." },
      { type: 'list', items: [
        '1. Prospection email automatisée (+220% de taux de réponse)',
        '2. Support client H24 (-73h de travail/semaine)',
        '3. Qualification et prise de RDV automatique',
        '4. Enrichissement CRM en continu',
        '5. Reporting automatique hebdomadaire',
      ]},
    ],
  },
  {
    slug: 'implementation',
    title: 'Implémentation',
    content: [
      { type: 'heading', text: 'Notre méthode en 8 jours' },
      { type: 'text', text: "Notre processus est rodé après 200+ déploiements. Il est conçu pour minimiser les risques et maximiser l'adoption." },
      { type: 'callout', text: "Étape clé : impliquer un champion IA interne dès J+1 double le taux d'adoption." },
      { type: 'list', items: [
        "J1-J2 : Audit des processus et identification des opportunités",
        'J3-J5 : Configuration et tests des agents',
        'J6-J7 : Intégration avec vos outils existants',
        'J8 : Formation équipe et mise en production',
      ]},
    ],
  },
  {
    slug: 'outils',
    title: 'Stack technique',
    content: [
      { type: 'heading', text: 'Les outils que nous utilisons' },
      { type: 'text', text: 'Notre stack est optimisé pour la fiabilité, la scalabilité et la maintenabilité.' },
      { type: 'list', items: [
        'Orchestration : n8n ou Make (selon complexité)',
        'LLM : GPT-4o, Claude 3.5, ou modèles open-source',
        'CRM : HubSpot, Salesforce, Pipedrive',
        'Email : Lemlist, Instantly, ou SMTP custom',
        'Base de données : Airtable, Notion, ou PostgreSQL',
      ]},
    ],
  },
  {
    slug: 'mesurer-roi',
    title: 'Mesurer le ROI',
    content: [
      { type: 'heading', text: 'KPIs à suivre' },
      { type: 'text', text: 'Sans métriques claires, impossible de progresser. Voici les indicateurs à tracker dès le premier jour.' },
      { type: 'list', items: [
        'Taux de réponse email (objectif : +150%)',
        'Temps de réponse support (objectif : < 30 sec)',
        'Taux de conversion lead > RDV (objectif : +80%)',
        'Heures économisées par semaine (objectif : > 20h)',
        'Coût par lead qualifié (objectif : -60%)',
      ]},
    ],
  },
];

function ChapterContent({ chapter }) {
  return (
    <div className="chapter">
      {chapter.content.map((block, i) => {
        if (block.type === 'heading') return <h2 key={i} className="chapter__heading">{block.text}</h2>;
        if (block.type === 'text') return <p key={i} className="chapter__text">{block.text}</p>;
        if (block.type === 'callout') return <div key={i} className="chapter__callout">{block.text}</div>;
        if (block.type === 'list') return (
          <ul key={i} className="chapter__list">
            {block.items.map((item, j) => <li key={j} className="chapter__list-item">{item}</li>)}
          </ul>
        );
        return null;
      })}
    </div>
  );
}

function Playbook() {
  const location = useLocation();
  const currentSlug = location.pathname.split('/').pop() || CHAPTERS[0].slug;
  const currentChapter = CHAPTERS.find(c => c.slug === currentSlug) || CHAPTERS[0];

  return (
    <div className="playbook">
      <nav className="nav">
        <div className="nav__logo">
          <Link to="/" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
            <span className="nav__logo-icon">A</span>
            <span className="nav__logo-text">AIFlow.fr</span>
          </Link>
        </div>
        <Link to="/" className="btn btn--outline">Retour au site</Link>
      </nav>

      <div className="playbook__layout">
        <aside className="playbook__sidebar">
          <div className="playbook__sidebar-title">PLAYBOOK</div>
          <nav className="playbook__nav">
            {CHAPTERS.map((ch) => (
              <Link
                key={ch.slug}
                to={"/playbook/" + ch.slug}
                className={"playbook__nav-link" + (currentSlug === ch.slug ? ' playbook__nav-link--active' : '')}
              >
                {ch.title}
              </Link>
            ))}
          </nav>
          <div className="playbook__cta">
            <p>Prêt à déployer ?</p>
            <Link to="/#contact" className="btn btn--primary btn--full">Réserver un Audit</Link>
          </div>
        </aside>

        <main className="playbook__content">
          <div className="playbook__breadcrumb">
            <Link to="/playbook">Playbook</Link> / {currentChapter.title}
          </div>
          <h1 className="playbook__chapter-title">{currentChapter.title}</h1>
          <ChapterContent chapter={currentChapter} />

          <div className="playbook__nav-bottom">
            {CHAPTERS.indexOf(currentChapter) > 0 && (
              <Link
                to={"/playbook/" + CHAPTERS[CHAPTERS.indexOf(currentChapter) - 1].slug}
                className="btn btn--outline"
              >
                Precedent : {CHAPTERS[CHAPTERS.indexOf(currentChapter) - 1].title}
              </Link>
            )}
            {CHAPTERS.indexOf(currentChapter) < CHAPTERS.length - 1 && (
              <Link
                to={"/playbook/" + CHAPTERS[CHAPTERS.indexOf(currentChapter) + 1].slug}
                className="btn btn--primary"
              >
                Suivant : {CHAPTERS[CHAPTERS.indexOf(currentChapter) + 1].title}
              </Link>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Playbook;
