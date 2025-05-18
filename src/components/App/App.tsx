import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo.tsx';
import { useState } from 'react';
import VoteOptions from '../VoteOptions/VoteOptions.tsx';
import type { Votes, VoteType } from '../../types/votes.ts';
import VoteStats from '../VoteStats/VoteStats.tsx';
import Notification from '../Notification/Notification.tsx';

const initVotes: Votes = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {
  const [votes, setVotes] = useState<Votes>(initVotes);

  const handleVote = (type: VoteType) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes(initVotes);
  };

  const totalVotes = Object.values(votes).reduce(
    (sum, count) => sum + count,
    0
  );
  const positiveRate = totalVotes > 0 ? (votes.good / totalVotes) * 100 : 0;
  const canReset = totalVotes > 0;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={canReset}
      />
      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
