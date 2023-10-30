import { Component, Input, OnInit } from '@angular/core';
import { ExperienceItem } from '../models/experience-item';
import { ExperienceCardComponent } from '../experience-card/experience-card.component';
import { Role } from '../models/role';
import moment from 'moment';

@Component({
    selector: 'app-experience-list',
    templateUrl: './experience-list.component.html',
    styleUrls: ['./experience-list.component.scss'],
})
export class ExperienceListComponent implements OnInit {
    @Input() role: Role = new Role();

    constructor() {}

  ngOnInit(): void {
    console.error("Sentry?");
        if (this.role.experience) {
            this.role.experience.sort((a, b) =>
                moment(a.startDate).isBefore(b.startDate) ? 1 : -1
            );
        }
  }
}
