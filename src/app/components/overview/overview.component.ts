import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  imports: [],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  title = 'SocialMedia Users Statistics';
  description = "In the recent years the usage of digital devices have drastically"+
"increased by various factors including covid which brought transition to online "
+"platforms. This transition has greatly influenced the growth of social media platforms,"+
" as more people turned to them for connectivity and information. The following charts "
+"illustrate the significant rise in the number of users across various social media "
+"platforms, specifically showcasing the user growth by year.";
}
