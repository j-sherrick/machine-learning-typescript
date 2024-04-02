import { promises as fs } from 'node:fs';
import { parse } from 'csv-parse/sync';

const content: Buffer | string = await fs.readFile('./Data.csv');

const records: Array<Array<string>> = parse(content, {columns: false, skip_empty_lines: false});

const x = records.map(row => row.slice(1, -1));
const y = records.map(row => row[row.length - 1]);

console.log(records, x, y);

class SimpleImputerClone {

   headers: Array<string>;
   data: Array<Array<number>>;
   mode: string;
   fills: Array<number>;

   constructor(data: Array<Array<string>>, mode: string) {
      this.headers = data[0];
      this.data = data.slice(1).map(row => row.map(el => parseFloat(el)));
      this.mode = mode;
      this.fills = [];
   }

   fit(): void {
      if(this.mode === 'mean') {
         const cols = this.data[0].length;
         const rows = this.data.length;
         for (let i = 0; i < cols; ++i) {

         }
      }
   }

   transform(): void {

   }

   private countMissing(acc: Array<number>, curr:  number, i: number): void {
      const count = this.data.reduce((row) => {
         if (!row[i]) val++;
      })
   }
}