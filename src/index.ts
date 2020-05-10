import { CsvFileReader } from "./CsvFileReader"
import { MatchResult } from "./MatchResult";


const reader = new CsvFileReader("./football.csv");
reader.read();

console.log(reader.data);

const manUnitedWins = reader.data.filter(
  (match: string[]) =>
    (match[1] === "Man United" && match[5] === MatchResult.HomeWin) ||
    (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
);



console.log(`Man United won ${manUnitedWins.length} games`);