import { Component } from '@angular/core';
import JsonData from '../assets/me.json';
import { ContactMe } from './models/contact-me';
import { Education } from './models/education';
import { Role } from './models/role';
import { SkillBlock } from './models/skill-block';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Resume';
  experienceList: Array <Role> = JsonData.experience;
  skillsLists: Array <SkillBlock> = JsonData.skills;
  contact: ContactMe = JsonData.contact;
  education: Education = JsonData.education;
}
