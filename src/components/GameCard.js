import React from 'react';
import Link from '@docusaurus/Link';

export default function GameCard({ title, url, guideUrl, logUrl }) {
  return (
    <div className="col col--3" style={{ marginBottom: '20px' }}>
      <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '20px' }}>
        <div className="card__header text--center" style={{ padding: '0 0 16px 0', minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h3 style={{ fontSize: '1.6rem', margin: 0, fontWeight: '700', wordBreak: 'keep-all', lineHeight: '1.3' }}>{title}</h3>
        </div>
        <div className="card__body" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '0 0 16px 0' }}>
          {url && (
            <Link to={url} className="button button--secondary button--block play-btn" style={{ fontSize: '1.2rem', padding: '12px', borderWidth: '1px' }}>
              🎮 Play
            </Link>
          )}
        </div>
        {(guideUrl || logUrl) && (
          <div className="card__footer" style={{ borderTop: '1px solid var(--ifm-color-emphasis-200)', flexGrow: 1, paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'flex-end' }}>
            {guideUrl && (
              <Link to={guideUrl} className="button button--secondary button--sm sublink-btn" style={{ fontSize: '0.9rem', borderWidth: '1px' }}>
                📖 가이드
              </Link>
            )}
            {logUrl && (
              <Link to={logUrl} className="button button--secondary button--sm sublink-btn" style={{ fontSize: '0.9rem', borderWidth: '1px' }}>
                📜 플레이 기록
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
