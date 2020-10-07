import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mkbinil';
  featureSelected: string = 'recipe';
  onFeatureSelected(featreSelected: string){
    this.featureSelected = featreSelected;
  }
}
