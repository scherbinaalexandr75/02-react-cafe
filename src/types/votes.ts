export interface Votes{
    good: number;
    neutral: number;
    bad: number;
}

export interface VoteStatsProps {
  votes: Votes; 
  totalVotes: number;
  positiveRate: number;
}

export type VoteType = 'good' | 'neutral' | 'bad';