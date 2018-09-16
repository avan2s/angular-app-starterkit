import {Component} from '@angular/core';
import {Formio} from 'formiojs';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-complex-custom',
  templateUrl: './complex-custom.component.html',
  styleUrls: ['./complex-custom.component.scss']
})
export class ComplexCustomComponent {
  pieChartData: any;

  constructor() {
    this.pieChartData = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ]
        }]
    };
  }
}
