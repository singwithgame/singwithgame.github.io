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
    <div className={clsx('col col--3', styles.cardCol)}>
      <div className={clsx('card', styles.customCard)} style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: 'var(--ifm-spacing-md)' }}>
        <div className="card__header text--center" style={{ padding: '0 0 var(--ifm-spacing-md) 0' }}>
          <h3 style={{ fontSize: '1.6rem', margin: 0, fontWeight: '700', wordBreak: 'keep-all' }}>{title}</h3>
        </div>
        <div className="card__body" style={{ display: 'flex', flexGrow: 1, alignItems: 'center', justifyContent: 'center', padding: '0 0 var(--ifm-spacing-md) 0' }}>
          <Link to={url} className="button button--secondary button--block" style={{ fontSize: '1.2rem', padding: 'var(--ifm-spacing-sm)', borderWidth: '2px', borderColor: 'var(--ifm-color-emphasis-300)' }}>
            🎮 Play
          </Link>
        </div>
        {sublinks && sublinks.length > 0 && (
          <div className="card__footer" style={{ borderTop: '1px solid var(--ifm-color-emphasis-200)', marginTop: 'auto', paddingTop: 'var(--ifm-spacing-md)', display: 'flex', gap: 'var(--ifm-spacing-sm)', flexWrap: 'wrap', justifyContent: 'center' }}>
            {sublinks.map((sub, i) => (
              <Link key={i} to={sub.url} className="button button--secondary button--sm" style={{ flexGrow: 1, minWidth: '40%', fontSize: '0.9rem', backgroundColor: 'transparent', border: '1px solid var(--ifm-color-emphasis-200)' }}>
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
    </Layout>
  );
}
