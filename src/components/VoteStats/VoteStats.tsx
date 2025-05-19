import css from './VoteStats.module.css';
import type { VoteStatsProps } from '../../types/votes.ts'; // Імпортуємо VoteStatsProps

const VoteStats: React.FC<VoteStatsProps> = ({ votes, totalVotes, positiveRate }) => {
  return (
    <div className={css.container}>
      <p className={css.stat}>Good: <strong>{votes.good}</strong></p> {/* Доступ через votes.votes */}
      <p className={css.stat}>Neutral: <strong>{votes.neutral}</strong></p> {/* Доступ через votes.votes */}
      <p className={css.stat}>Bad: <strong>{votes.bad}</strong></p> {/* Доступ через votes.votes */}
      <p className={css.stat}>Total: <strong>{totalVotes}</strong></p>
      <p className={css.stat}>Positive: <strong>{positiveRate}%</strong></p>
    </div>
  );
};

export default VoteStats;