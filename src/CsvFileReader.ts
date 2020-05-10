import fs from "fs";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map((row: string[]): [Date, string, string, number, number, MatchResult, string] => {

        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          Number.parseInt(row[3], 10),
          Number.parseInt(row[4], 10),
          row[5] as MatchResult,
          row[6]
        ];
      } )
  }
}
