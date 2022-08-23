import { Component, Input } from '@angular/core';
import { ExperienceItem } from '../models/experience-item';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent {

  @Input () item: ExperienceItem = new ExperienceItem ();

  constructor() { }
}
