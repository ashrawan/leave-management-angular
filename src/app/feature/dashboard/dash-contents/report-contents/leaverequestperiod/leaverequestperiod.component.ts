import { ChartDataModel } from './../../../model/chartData';
import { adata } from './../../../../../shared/data';
import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-leaverequestperiod',
  templateUrl: './leaverequestperiod.component.html',
  styleUrls: ['./leaverequestperiod.component.css']
})
export class LeaverequestperiodComponent {

  adata: any[];

  ngxData: ChartDataModel = {
    data: [
      {
        name: 'leaveTypeName',
        series: []
      }
    ]
  };

  view: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Leave Type';
  showYAxisLabel = true;
  yAxisLabel = 'Leave Request';
  legendTitle = 'Month';

  colorScheme = {
     domain: [
      '#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963', '#8796c0', '#7ed3ed', '#50abcc', '#ad6886'
    ]
  };
  constructor() {
    Object.assign(this, { adata });
  }

  onSelect(event) {
    console.log(event);
  }
}
