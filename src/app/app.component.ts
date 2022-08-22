import { Component } from '@angular/core';
import JsonData from '../assets/me.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Resume';
  experienceList: Array <any> = JsonData.experience;
}
