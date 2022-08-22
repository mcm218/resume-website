import { Component } from '@angular/core';
import JsonData from '../assets/me.json';
import { Role } from './models/role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Resume';
  experienceList: Array <Role> = JsonData.experience;
}
