import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const QUICK_LINKS = [
  {
    title: 'Blood on the Clocktower',
    url: 'https://singwithgame.github.io/botc',
    sublinks: [
      { label: '📖 가이드', url: '/docs/botc/intro' },
      { label: '📜 플레이 기록', url: '/botc-logs' }
    ]
  },
  {
    title: 'Avalon',
    url: 'https://singwithgame.github.io/avalon_new',
    sublinks: [
      { label: '📖 가이드', url: '/docs/avalon' },
      { label: '📜 플레이 기록', url: '/avalon-logs' }
    ]
  },
  {
    title: 'Dalmuti',
    url: 'https://singwithgame.github.io/dalmuti',
    sublinks: []
  },
  {
    title: 'Tichu',
    url: 'http://tichu.be',
    sublinks: []
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
      </div>
    </header>
  );
}

function QuickLinkCard({title, url, sublinks}) {
  return (
    <div className={clsx('col col--3', styles.cardCol)} style={{ marginBottom: '20px' }}>
      <div className={clsx('card', styles.customCard)} style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '20px' }}>
        <div className="card__header text--center" style={{ padding: '0 0 16px 0', minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h3 style={{ fontSize: '1.6rem', margin: 0, fontWeight: '700', wordBreak: 'keep-all', lineHeight: '1.3' }}>{title}</h3>
        </div>
        <div className="card__body" style={{ display: 'flex', flexGrow: 1, alignItems: 'flex-start', justifyContent: 'center', padding: '0 0 16px 0' }}>
          <Link to={url} className="button button--secondary button--block play-btn" style={{ fontSize: '1.2rem', padding: '12px', borderWidth: '1px' }}>
            🎮 Play
          </Link>
        </div>
        {sublinks && sublinks.length > 0 && (
          <div className="card__footer" style={{ borderTop: '1px solid var(--ifm-color-emphasis-200)', marginTop: 'auto', paddingTop: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {sublinks.map((sub, i) => (
              <Link key={i} to={sub.url} className="button button--secondary button--sm sublink-btn" style={{ flexGrow: 1, minWidth: '40%', fontSize: '0.9rem', borderWidth: '1px' }}>
                {sub.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="보드게임 모임 포털 - 규칙서 및 세션 기록">
      <HomepageHeader />
      <main>
        <section className={styles.quickLinksSection} style={{ padding: '3rem 0 5rem 0' }}>
          <div className="container">
            <div className="row">
              {QUICK_LINKS.map((props, idx) => (
                <QuickLinkCard key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Floating Action Button for writing logs */}
      <a 
        href="https://github.com/singwithgame/singwithgame.github.io/issues/new/choose" 
        target="_blank" 
        rel="noopener noreferrer"
        className="button button--primary"
        style={{
          position: 'fixed',
          bottom: '30px',
          left: '30px',
          borderRadius: '50px',
          padding: '12px 24px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '1rem',
          fontWeight: 'bold',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
        새 글 작성
      </a>
    </Layout>
  );
}
