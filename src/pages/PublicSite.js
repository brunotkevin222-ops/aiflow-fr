import React, { useState } from 'react';
import './PublicSite.css';

const STATS = [
  { value: '+220%', label: 'Taux de réponse cold email' },
  { value: '73h', label: 'Économisées / semaine / client' },
  { value: '8 jours', label: 'Délai de mise en production' },
  { value: '€0', label: 'Frais cachés' },
];

const PROBLEMS = [
  'Relances manuelles qui tombent dans les spams',
  'Support client lent = clients perdus',
  'Prospection non-scalable = croissance limitée',
  'CRM jamais à jour = décisions aveugles',
];

const SOLUTIONS = [
  'Prospection automatique, personnalisée, à grande échelle',
  'Support H24 avec réponse en < 30 secondes',
  'RDV qualifiés directement dans votre agenda',
  'CRM enrichi en temps réel, décisions basées sur la data',
];

const AGENTS = [
  { emoji: '📧', name: 'Agent Prospection', desc: 'Cold email ultra-personnalisé + LinkedIn automation. Leads qualifiés 24/7.' },
  { emoji: '💬', name: 'Agent Support', desc: 'Répond à 90% des tickets en < 30 sec. Multilingue, disponible H24.' },
  { emoji: '📅', name: 'Agent RDV', desc: 'Qualifie et schedule les rendez-vous commerciaux automatiquement.' },
  { emoji: '🔄', name: 'Agent Relance', desc: 'Séquences intelligentes adaptées au comportement de chaque prospect.' },
  { emoji: '📊', name: 'Agent Reporting', desc: 'Rapports hebdomadaires et KPIs en temps réel, sans intervention humaine.' },
  { emoji: '🛒', name: 'Agent E-commerce', desc: 'Récupère les paniers abandonnés et booste les conversions.' },
  { emoji: '📱', name: 'Agent Social', desc: 'Crée et planifie du contenu LinkedIn/Instagram pour votre audience.' },
  { emoji: '🤝', name: 'Agent CRM', desc: 'Enrichit, qualifie et segmente votre base de données en continu.' },
  { emoji: '📞', name: 'Agent Téléphonie', desc: 'Gère les appels entrants, filtre et route vers le bon interlocuteur.' },
  { emoji: '⚡', name: 'Agent Onboarding', desc: 'Accueille et guide automatiquement vos nouveaux clients/utilisateurs.' },
];

const STEPS = [
  { num: '01', title: 'Audit Gratuit', desc: "On analyse vos process actuels, identifie les opportunités d'automatisation et vous propose une roadmap IA sur-mesure. Sans engagement." },
  { num: '02', title: 'Configuration', desc: "Nos ingénieurs configurent et testent vos agents IA. Intégration avec vos outils existants garantie. Tests intensifs avant déploiement." },
  { num: '03', title: 'Mise en Production', desc: "Déploiement, formation de votre équipe, monitoring en temps réel. Vous êtes opérationnel et nous restons disponibles en continu." },
];

const OFFERS = [
  {
    name: 'Starter',
    subtitle: 'Parfait pour commencer',
    price: '890€',
    period: '/mois',
    features: ['1 agent IA sur-mesure', 'Setup en 5 jours', 'Intégration CRM', 'Support email 48h', 'Dashboard basique'],
    cta: 'Commencer →',
    popular: false,
  },
  {
    name: 'Growth',
    subtitle: 'Notre offre la plus populaire',
    price: '1 490€',
    period: '/mois',
    features: ['3 agents IA sur-mesure', 'n8n/Make inclus', 'Dashboard analytics avancé', 'Support prioritaire 24h', 'Formation équipe incluse'],
    cta: 'Démarrer →',
    popular: true,
  },
  {
    name: 'Scale',
    subtitle: 'Agence IA complète',
    price: '2 990€',
    period: '/mois',
    features: ['10 agents illimités', 'Équipe dédiée', 'Stratégie croissance IA', 'SLA garanti 99.9%', 'Accès API + webhooks'],
    cta: 'Nous contacter →',
    popular: false,
  },
];

const FAQS = [
  { q: 'Combien de temps pour mettre en place un agent IA ?', a: 'Entre 5 et 8 jours ouvrés selon la complexité.' },
  { q: 'Est-ce que ça fonctionne avec mon CRM actuel ?', a: "Oui, nous intégrons avec tous les CRM majeurs via API ou webhooks." },
  { q: "Que se passe-t-il si l'agent fait une erreur ?", a: "Chaque agent est supervisé. En cas d'anomalie, nous intervenons immédiatement." },
  { q: "Y a-t-il un engagement minimum ?", a: 'Non, nos offres sont sans engagement long terme.' },
  { q: "Est-ce que vous formez mon équipe ?", a: 'Oui, la formation est incluse dans les offres Growth et Scale.' },
];

function PublicSite() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="site">
      <nav className="nav">
        <div className="nav__logo">
          <span className="nav__logo-icon">A</span>
          <span className="nav__logo-text">AIFlow.fr</span>
        </div>
        <div className="nav__links">
          <a href="#agents" className="nav__link">Agents IA</a>
          <a href="#offres" className="nav__link">Offres</a>
          <a href="#faq" className="nav__link">FAQ</a>
          <a href="/playbook" className="nav__link">Playbook ↗</a>
        </div>
        <a href="#contact" className="btn btn--primary">Réserver un appel</a>
      </nav>

      <section className="hero">
        <div className="hero__badge">● AGENCE IA · FRANCE · 2026</div>
        <h1 className="hero__title">
          <span className="hero__title-white">Automatisez.</span>
          <br />
          <span className="hero__title-blue">Dominez.</span>
        </h1>
        <p className="hero__sub">
          Agents IA sur-mesure pour PME françaises. Prospection, support, RDV,
          relance — automatisés. <strong>Vos concurrents courent encore. Vous, vous avez déjà gagné.</strong>
        </p>
        <div className="hero__ctas">
          <a href="#contact" className="btn btn--primary btn--lg">Audit IA Gratuit →</a>
          <a href="/playbook" className="btn btn--outline btn--lg">Voir le Playbook</a>
        </div>
        <p className="hero__trust">Déploiement en 8 jours · Zéro frais cachés · ROI mesurable dès le 1er mois</p>
      </section>

      <section className="stats">
        {STATS.map((s) => (
          <div key={s.value} className="stat">
            <div className="stat__value">{s.value}</div>
            <div className="stat__label">{s.label}</div>
          </div>
        ))}
      </section>

      <section className="ps">
        <div className="ps__col ps__col--problem">
          <div className="ps__badge ps__badge--red">LE PROBLÈME</div>
          <h2 className="ps__title">Votre équipe perd des heures sur des tâches répétitives.</h2>
          <ul className="ps__list">
            {PROBLEMS.map((p) => (
              <li key={p} className="ps__item ps__item--bad">✗ {p}</li>
            ))}
          </ul>
        </div>
        <div className="ps__col ps__col--solution">
          <div className="ps__badge ps__badge--blue">LA SOLUTION AIFLOW</div>
          <h2 className="ps__title">Des agents IA qui travaillent pendant que vous dormez.</h2>
          <ul className="ps__list">
            {SOLUTIONS.map((s) => (
              <li key={s} className="ps__item ps__item--good">✓ {s}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="agents" className="agents">
        <div className="section-header">
          <div className="section-tag">CATALOGUE</div>
          <h2 className="section-title">10 Agents IA Prêts à Déployer</h2>
          <p className="section-sub">Chaque agent est configuré sur-mesure pour votre secteur et vos outils existants.</p>
        </div>
        <div className="agents__grid">
          {AGENTS.map((a) => (
            <div key={a.name} className="agent-card">
              <div className="agent-card__emoji">{a.emoji}</div>
              <h3 className="agent-card__name">{a.name}</h3>
              <p className="agent-card__desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="how">
        <div className="section-header">
          <div className="section-tag">COMMENT ÇA MARCHE</div>
          <h2 className="section-title">Opérationnel en 8 jours</h2>
        </div>
        <div className="how__steps">
          {STEPS.map((s) => (
            <div key={s.num} className="how-step">
              <div className="how-step__num">{s.num}</div>
              <h3 className="how-step__title">{s.title}</h3>
              <p className="how-step__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="offres" className="offers">
        <div className="section-header">
          <div className="section-tag">TARIFS</div>
          <h2 className="section-title">Choisissez votre niveau</h2>
          <p className="section-sub">Sans engagement long terme. ROI garanti ou remboursé.</p>
        </div>
        <div className="offers__grid">
          {OFFERS.map((o) => (
            <div key={o.name} className={`offer-card${o.popular ? ' offer-card--popular' : ''}`}>
              {o.popular && <div className="offer-card__badge">POPULAIRE</div>}
              <h3 className="offer-card__name">{o.name}</h3>
              <p className="offer-card__subtitle">{o.subtitle}</p>
              <div className="offer-card__price">
                <span className="offer-card__amount">{o.price}</span>
                <span className="offer-card__period">{o.period}</span>
              </div>
              <ul className="offer-card__features">
                {o.features.map((f) => (
                  <li key={f} className="offer-card__feature">✓ {f}</li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${o.popular ? 'btn--primary' : 'btn--outline'} btn--full`}>{o.cta}</a>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="faq">
        <div className="section-header">
          <div className="section-tag">FAQ</div>
          <h2 className="section-title">Questions fréquentes</h2>
        </div>
        <div className="faq__list">
          {FAQS.map((f, i) => (
            <div key={i} className={`faq-item${openFaq === i ? ' faq-item--open' : ''}`}>
              <button className="faq-item__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {f.q}
                <span className="faq-item__icon">{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && <div className="faq-item__a">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="cta-section">
        <div className="section-tag">PASSEZ À L'ACTION</div>
        <h2 className="cta-section__title">Prêt à automatiser votre croissance ?</h2>
        <p className="cta-section__sub">Réservez votre audit IA gratuit. 30 minutes. Zéro engagement. Résultats concrets.</p>
        <a href="mailto:contact@aiflow.fr" className="btn btn--primary btn--lg">Réserver mon Audit Gratuit →</a>
      </section>

      <footer className="footer">
        <div className="footer__logo">
          <span className="nav__logo-icon">A</span>
          <span className="nav__logo-text">AIFlow.fr</span>
        </div>
        <p className="footer__copy">© 2026 AIFlow.fr — Agence IA France. Automatisation des PME françaises.</p>
        <div className="footer__links">
          <a href="#agents">Agents</a>
          <a href="#offres">Offres</a>
          <a href="#faq">FAQ</a>
        </div>
      </footer>
    </div>
  );
}

export default PublicSite;
