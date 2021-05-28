import { Component } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
export interface TripsElement {
  id: number;
  placa: string;
  dni: number;
  trips: number;
  product_id: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestLocationWorld';
  fileContent: string = "";
  DataChart:any = []
  displayedColumns: string[] = ['id','placa','dni','trips','product_id'];
  dataSource: TripsElement[];

  public pieChart: GoogleChartInterface = {
    chartType: 'ColumnChart',
    dataTable: this.DataChart,
    options: {title: 'Viajes'}
  };

  public onChange(fileList: FileList): void {
    let file = fileList[0];
    let fileReader = new FileReader();
    let data_chart = [['Placa', 'Viajes']]

    let aux_arr = []

    fileReader.onloadend = function(x) {
      var lines = fileReader.result.toString().split('\n');
      for(var line = 1; line < lines.length; line++){
        
        let item = lines[line].split('|')
        
        aux_arr.push(
          {
            id: parseInt(item[0]),
            placa: item[1],
            dni: parseInt(item[2]),
            trips: parseInt(item[3]),
            product_id: parseInt(item[4])
          }
        )
      }
      
      aux_arr.sort(function (a, b){ return a.id - b.id})
      aux_arr.forEach(item => {
        data_chart.push([item.placa, item.trips ])

      })
    }
    fileReader.readAsText(file);
    
    this.dataSource = aux_arr
    // this.DataChart = data_chart
    this.pieChart.dataTable = data_chart

  }
  

}


