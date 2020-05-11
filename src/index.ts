import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HTMLReport"

const csvFileReader = new CsvFileReader("./football.csv");

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new HtmlReport()
);

summary.buildAndPrintReport(matchReader.matches);

