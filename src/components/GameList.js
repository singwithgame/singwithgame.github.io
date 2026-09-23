import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import GameCard from '@site/src/components/GameCard';

export default function GameList() {
  const { siteConfig } = useDocusaurusContext();
  const games = siteConfig.customFields.games || [];
  
  return (
    <div className="container" style={{ paddingBottom: '5rem' }}>
      <div className="row">
        {games.map((game, idx) => (
          <GameCard 
            key={idx} 
            title={game.title} 
            url={game.url} 
            guideUrl={game.guideUrl} 
            logUrl={game.logUrl} 
          />
        ))}
      </div>
    </div>
  );
}
