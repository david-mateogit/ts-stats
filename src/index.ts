import { MatchResult } from "./MatchResult";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";

const csvFileReader = new CsvFileReader("./football.csv"); \

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const manUnitedWins = matchReader.matches.filter(
  (match) =>
    (match[1] === "Man United" && match[5] === MatchResult.HomeWin) ||
    (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
);



console.log(`Man United won ${manUnitedWins.length} games`);
