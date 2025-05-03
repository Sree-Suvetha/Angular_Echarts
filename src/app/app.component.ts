import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VisualsComponent } from './components/visuals/visuals.component';
import { OverviewComponent } from './components/overview/overview.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,VisualsComponent,OverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
