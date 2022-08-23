import { Component, Input } from '@angular/core';
import { ExperienceItem } from '../models/experience-item';
import { ExperienceCardComponent } from '../experience-card/experience-card.component';
import { Role } from '../models/role';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent {
  @Input () role: Role = new Role ();
  
  constructor() { }
}
