import { Component, Input, OnInit } from '@angular/core';
import { ExperienceItem } from '../models/experience-item';
import { ExperienceCardComponent } from '../experience-card/experience-card.component';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent implements OnInit {
  
  @Input () role: string = 'Role';
  @Input () company: string = 'Company';
  @Input ('location') locationName: string = 'Charlotte, NC';
  @Input ('start-date') startDate: string = 'January 2019';
  @Input ('end-date') endDate: string = 'December 2022';
  @Input ('experience-items') experienceItems:  Array <ExperienceItem> = new Array <ExperienceItem> ();

  constructor() { }

  ngOnInit() {
    this.experienceItems = new Array <ExperienceItem> ();
    for (let index = 0; index < 5; index++) {
      this.experienceItems.push (new ExperienceItem (`Item ${index}`));
    }
  }

}
