import { Component, OnInit } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { UserDataService } from '../../services/user-data.service';
import { iterator } from 'rxjs/internal/symbol/iterator';

@Component({
  selector: 'app-visuals',
  imports: [NgxEchartsModule],
  templateUrl: './visuals.component.html',
  styleUrl: './visuals.component.css'
})
export class VisualsComponent implements OnInit{

  i_option! : EChartsOption;// the ! tells the TS that this will definitely be initialized.
  y_option! : EChartsOption;
  comparison_option! : EChartsOption;
  selectedChartType: string = 'bar'; // Default chart type for comparison


  constructor(private uds:UserDataService){}
  ngOnInit(): void {

      const instagramdata=this.uds.getInstagramData();//get data from service
      const years=instagramdata.map(item=>item.year);//get the chart data
      const users=instagramdata.map(item=>item.users);//same as above
      this.i_option={
        title:
        {
          text:"Instagram Users Over the Years",
          left:'center'
        },
        tooltip:
        {
          trigger:'item',formatter:'{b} : {c}'
        },
        xAxis:
        {
          type:'category',name:'Years', data:years
        },
        yAxis:
        {
          type:'value', name:'Users', 
          axisLabel: {
            formatter: (value) => {
              if (value >= 1e9) {
                return (value / 1e9).toFixed(1) + 'B';  // Format as billion
              } else if (value >= 1e6) {
                return (value / 1e6).toFixed(1) + 'M';  // Format as million
              }
              return value.toString();
            }}
          },
        series:
        [
          {
            data:users,
            type:'bar',
            name:'Instagram users',
            itemStyle:
            {
              color: 
              {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: 
                [
                  { offset: 0, color: '#feda75' },   // yellow
                  { offset: 0.5, color: '#d62976' }, // pink
                  { offset: 1, color: '#4f5bd5' }    // blue-purple
                ]
              }
            }
          }
        ]
        
      }

      const youtubedata=this.uds.getYoutubeData();//get data from service
      const yyears=youtubedata.map(item=>item.year);//get the chart data
      const yusers=youtubedata.map(item=>item.users);//same as above
      this.y_option={
        title:
        {
          text:"Youtube Users Over the Years",
          left:'center'
        },
        tooltip:
        {
          trigger:'item',formatter:'{b} : {c}'
        },
        xAxis:
        {
          type:'category',name:'Years', data:years
        },
        yAxis:
        {
          type:'value', name:'Users', 
          axisLabel: {
            formatter: (value) => {
              if (value >= 1e9) {
                return (value / 1e9).toFixed(1) + 'B';  // Format as billion
              } else if (value >= 1e6) {
                return (value / 1e6).toFixed(1) + 'M';  // Format as million
              }
              return value.toString();
            }}
          },
        series:
        [
          {
            data:yusers,
            type:'bar',
            name:'Instagram users',
            itemStyle:
            {
              color: 'red'
            }
          }
        ]
        
      }

      
  const compData = this.uds.getComparisonData();
  const avgInsta = this.calculateAverageIncrease(compData, 'instagram');
  const avgYT = this.calculateAverageIncrease(compData, 'youtube');

  // Comparison chart configuration
  this.comparison_option = {
    title: {
      text: 'Avg Yearly Increase of Users',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c}'
    },
    xAxis: {
      type: 'category',
      name: 'Platform',
      data: ['Instagram', 'YouTube']
    },
    yAxis: {
      type: 'value',
      name: 'Avg Yearly Increase',
      axisLabel: {
        formatter: (value) => {
          if (value >= 1e9) return (value / 1e9).toFixed(1) + 'B';
          if (value >= 1e6) return (value / 1e6).toFixed(1) + 'M';
          return value.toString();
        }
      }
    },
    series: [
      {
        data: [avgInsta, avgYT],
        type: this.selectedChartType as 'bar'|'line'|'pie', // Dynamically set chart type
        itemStyle: {
          color: (params: any) => params.dataIndex === 0 ? '#feda75' : '#FF0000'
        }
      }
    ]
  };

  };

  calculateAverageIncrease(data: any[], platform: 'instagram' | 'youtube'): number {
    let totalIncrease = 0;
    for (let i = 1; i < data.length; i++) {
      const increase = data[i][platform] - data[i - 1][platform];
      totalIncrease += increase;
    }
    return totalIncrease / (data.length - 1);
  }

  onChartTypeChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedChartType = selectElement.value;
    this.ngOnInit(); // Reinitialize chart with the updated chart type
  }

};


  
  


