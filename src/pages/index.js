import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const QUICK_LINKS = [
  {
    title: 'BotC 플레이 어시스턴트',
    description: 'Blood on the Clocktower 오프라인 플레이를 돕는 웹 애플리케이션',
    url: '#',
  },
  {
    title: 'Avalon',
    description: 'The Resistance: Avalon 게임 진행 도우미',
    url: '#',
  },
  {
    title: 'Tichu.be',
    description: '티츄 점수 계산기',
    url: 'https://tichu.be',
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

function QuickLinkCard({title, description, url}) {
  return (
    <div className={clsx('col col--4', styles.cardCol)}>
      <Link to={url} className={styles.cardLink}>
        <div className={clsx('card', styles.customCard)}>
          <div className="card__header">
            <h3>{title}</h3>
          </div>
          <div className="card__body">
            <p>{description}</p>
          </div>
        </div>
      </Link>
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
