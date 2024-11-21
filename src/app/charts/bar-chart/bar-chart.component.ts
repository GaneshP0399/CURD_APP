import { Component, Input, SimpleChanges } from '@angular/core';
export interface Product {
  name?: string;
  price?: number;
  category?: string;
}
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {
  @Input() product!: Product[]
  // options
  view: any = [700, 400];
  single!: any[];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Products';
  showYAxisLabel = true;
  yAxisLabel = 'Price';

  constructor(){
    
  }

  ngOnChanges() {
   const data = this.product 
    this.single = data.flatMap((product:any) => [
      { name: product.name, value: product.price }
    ]);
  }

}
