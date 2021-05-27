import { Component } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestLocationWorld';
  fileContent: string = "";

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  public onChange(fileList: FileList): void {
    let file = fileList[0];
    let fileString:any= "";
    let fileReader = new FileReader();

    fileReader.onloadend = function(x) {
      console.log(fileReader.result)

      var lines = fileReader.result.split('\n');
      
      for(var line = 0; line < lines.length; line++){
          console.log(lines[line]);
      }
      //self.fileContent = fileReader.result;
    }
    fileReader.readAsText(file);
  }

  public pieChart: GoogleChartInterface = {
    chartType: 'ColumnChart',
    dataTable: [
      ['Country', 'Performance', 'Profits'],
      ['Germany', 700, 1200],
      ['USA', 300, 600],
      ['Brazil', 400, 500],
      ['Canada', 500, 1000],
      ['France', 600, 1100],
      ['RU', 800, 1000]
    ],
    options: {title: 'Countries'}
  };
}


