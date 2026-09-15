import React from 'react';
import Link from '@docusaurus/Link';

export default function GameCard({ title, url, guideUrl, logUrl }) {
  return (
    <div className="responsive-col game-card-wrapper">
      <div className="card game-card">
        <div className="card__header text--center game-card__header">
          <h3 className="game-card__title">{title}</h3>
        </div>
        
        <div className="card__body game-card__body">
          {url && (
            <Link to={url} className="button button--secondary button--block play-btn game-card__play-btn">
              <span role="img" aria-label="Play">🎮</span> Play
            </Link>
          )}
        </div>
        
        {(guideUrl || logUrl) && (
          <div className="card__footer game-card__footer">
            {guideUrl && (
              <Link to={guideUrl} className="button button--secondary button--sm sublink-btn game-card__sublink-btn">
                <span role="img" aria-label="Guide">📖</span> 가이드
              </Link>
            )}
            {logUrl && (
              <Link to={logUrl} className="button button--secondary button--sm sublink-btn game-card__sublink-btn">
                <span role="img" aria-label="Log">📜</span> 플레이 기록
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
