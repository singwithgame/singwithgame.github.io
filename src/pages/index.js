import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const QUICK_LINKS = [
  {
    title: 'Blood on the Clocktower',
    description: '오프라인 플레이 도우미',
    url: 'https://singwithgame.github.io/botc',
    sublinks: [
      { label: '📖 가이드', url: '/docs/botc/intro' },
      { label: '📜 플레이 기록', url: '/botc-logs' }
    ]
  },
  {
    title: 'Avalon',
    description: 'The Resistance: Avalon 게임 진행 도우미 (New)',
    url: 'https://singwithgame.github.io/avalon_new',
    sublinks: [
      { label: '📖 가이드', url: '/docs/avalon' },
      { label: '📜 플레이 기록', url: '/avalon-logs' }
    ]
  },
  {
    title: 'Dalmuti',
    description: '위대한 달무티 도우미',
    url: 'https://singwithgame.github.io/dalmuti',
    sublinks: []
  },
  {
    title: 'Tichu.be',
    description: '티츄 점수 계산기',
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
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function QuickLinkCard({title, description, url, sublinks}) {
  return (
    <div className={clsx('col col--3', styles.cardCol)}>
      <div className={clsx('card', styles.customCard)} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div className="card__header text--center">
          <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{title}</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)', marginBottom: '0' }}>{description}</p>
        </div>
        <div className="card__body" style={{ display: 'flex', flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Link to={url} className="button button--primary button--lg button--block">
            🎮 앱 실행하기
          </Link>
        </div>
        {sublinks && sublinks.length > 0 && (
          <div className="card__footer" style={{ borderTop: '1px solid var(--ifm-color-emphasis-200)', marginTop: 'auto', paddingTop: '15px', display: 'flex', gap: '10px' }}>
            {sublinks.map((sub, i) => (
              <Link key={i} to={sub.url} className="button button--secondary button--sm" style={{ flex: 1 }}>
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
        <section className={styles.quickLinksSection}>
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
