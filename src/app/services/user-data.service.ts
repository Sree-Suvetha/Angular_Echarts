import { Injectable } from '@angular/core';
import { UserData } from '../models/user-data';
import { Comparison } from '../models/comparison';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  instagram:UserData[]=
  [
    {year:"2016",users:500e6},
    {year:"2017",users:700e6},
    {year:"2018",users:1e9},
    {year:"2019",users:1.1e9},
    {year:"2020",users:1.3e9},
    {year:"2021",users:2e9},
    {year:"2022",users:2.3e9},
    {year:"2023",users:2.4e9},
    {year:"2024",users:2e9}
  ]

  getInstagramData()
  {
    return this.instagram;
  }

  youtube:UserData[]=
  [
    {year:"2016",users:1.5e9},
    {year:"2017",users:1.6e9},
    {year:"2018",users:1.8e9},
    {year:"2019",users:2e9},
    {year:"2020",users:2.3e9},
    {year:"2021",users:2.5e9},
    {year:"2022",users:2.68e9},
    {year:"2023",users:2.7e9},
    {year:"2024",users:2.5e9}
  ]

  getYoutubeData()
  {
    return this.youtube;
  }

  comparedata:Comparison[]=
  [
    { year: '2018', instagram: 800e6, youtube: 1.2e9 },
    { year: '2019', instagram: 1e9, youtube: 1.5e9 },
    { year: '2020', instagram: 1.2e9, youtube: 1.8e9 },
    { year: '2021', instagram: 1.5e9, youtube: 2e9 },
    { year: '2022', instagram: 1.8e9, youtube: 2.3e9 }
  ]

  getComparisonData()
  {
    return this.comparedata;
  }
}
