import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
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
export class AppComponent implements AfterViewInit {
  title = 'Resume';
  experienceList: Array <Role> = JsonData.experience;
  skillsLists: Array <SkillBlock> = JsonData.skills;
  contact: ContactMe = JsonData.contact;
  education: Education = JsonData.education;

  @ViewChild ('app_container') appContainerElement!: ElementRef;

  ngAfterViewInit () {
    // Are we on a mobile device?
    if (window.screen.width < 600) {
      let appContainerCSS = getComputedStyle (this.appContainerElement.nativeElement);
      console.log(appContainerCSS.backgroundSize);
      this.appContainerElement.nativeElement.style.backgroundSize = "auto " + window.screen.height + "px";
      console.log(appContainerCSS.backgroundSize);
    }
  }
}
