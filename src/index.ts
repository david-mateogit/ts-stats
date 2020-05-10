import { MatchResult } from "./MatchResult";
import { MatchReader } from "./MatchReader";

const reader = new MatchReader("./football.csv");
reader.read();

const manUnitedWins = reader.data.filter(
  (match) =>
    (match[1] === "Man United" && match[5] === MatchResult.HomeWin) ||
    (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
);



console.log(`Man United won ${manUnitedWins.length} games`);
