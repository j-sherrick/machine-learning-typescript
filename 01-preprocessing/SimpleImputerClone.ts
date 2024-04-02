export class SimpleImputerClone {

   private mode: string;
   private imputationValues: Array<string | number>;
   private missingValues: string | number;

   constructor(mode: string = 'mean', missingValues: string | number) {
      this.mode = mode;
      this.missingValues = missingValues;
      this.imputationValues = [];
   }


   fit(data: Array<Array<number>>): void {
      if (this.mode === 'mean') {
         const cols = data[0].length;
         this.imputationValues = Array.from({ length: cols }, (_, colIndex) => {
            let sum = 0;
            let count = 0;
            data.forEach(row => {
                const value = row[colIndex];
                if (!isNaN(value)) {
                    sum += value;
                    count++;
                }
            }); // END forEach()

            return count > 0 ? sum / count : 0;
         }); // END Array.from()

      } // END if
   }

   transform(data: Array<Array<number>>): Array<Array<number>> {
      
   }
}