import { ChartDataModel } from './../../../model/chartData';
import { adata } from './../../../../../shared/data';
import { Component } from '@angular/core';
import { ReportService } from '../../../services/report.service';

@Component({
  selector: 'app-leaverequestperiod',
  templateUrl: './leaverequestperiod.component.html',
  styleUrls: ['./leaverequestperiod.component.css']
})
export class LeaverequestperiodComponent {

  adata: any[];
  leaveData: any[];

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
  legendTitle = 'Status';

  colorScheme = {
    domain: [
      '#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963', '#8796c0', '#7ed3ed', '#50abcc', '#ad6886'
    ]
  };

  constructor(private _reportService: ReportService) {
    Object.assign(this, { adata });
    this.retrieveLeaveReport();
  }


  retrieveLeaveReport() {
    this._reportService.getLeaveReport().subscribe(res => {
      this.leaveData = this.manipulateData(res);
    }, error => {
      // console.log(error);
    });
  }

  manipulateData(data) {

    const leaveTypeKeyHolder = [];
    const finalData = [];

    const helper = {};
    const result = data.reduce(function (r, o) {
      const key = o.leaveType + '-' + o.status;

      if (!helper[key]) {
        helper[key] = Object.assign({}, o); // create a copy of o
        r.push(helper[key]);
      } else {
        helper[key].count += o.count;
      }

      return r;
    }, []);

    result.forEach(function (item) {

      leaveTypeKeyHolder[item.leaveType] = leaveTypeKeyHolder[item.leaveType] || {};

      const newObj = leaveTypeKeyHolder[item.leaveType];

      if (Object.keys(newObj).length === 0) {
        finalData.push(newObj);
      }
      newObj['name'] = item.leaveType;

      newObj.series = newObj.series || [];

      newObj.series.push({ name: item.status, value: item.count });

    });

    return finalData;
  }

  onSelect(event) {
    console.log(event);
  }

}
