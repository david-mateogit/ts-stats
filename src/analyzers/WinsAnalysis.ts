import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) { }

  run(matches: MatchData[]): string {
    const teamWins = matches.filter(
      (match) =>
      (match[1] === this.team && match[5] === MatchResult.HomeWin) ||
      (match[2] === this.team && match[5] === MatchResult.AwayWin)
      );

    return `Team ${this.team} won ${teamWins.length} games`;
  }
}
