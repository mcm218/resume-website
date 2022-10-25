import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  addDoc,
  collectionData,
  doc,
  docData,
  Firestore,
} from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import {
  faAngular,
  faCss3,
  faHtml5,
  faJs,
  faNode,
  faReact,
  faSalesforce,
  faThinkPeaks,
  faUnity,
} from '@fortawesome/free-brands-svg-icons';
import { Observable } from 'rxjs';
import JsonData from '../assets/me.json';
import { FilterIconPair, FilterService } from './filter.service';
import { ContactMe } from './models/contact-me';
import { Education } from './models/education';
import { FilterItem } from './models/filter-item';
import { Role } from './models/role';
import { SkillBlock } from './models/skill-block';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'Resume';

  item$: Observable<any>;

  experienceList: Array<Role> = JsonData.experience;
  skillsLists: Array<SkillBlock> = JsonData.skills;
  contact: ContactMe = JsonData.contact;
  education: Education = JsonData.education;

  filterObjects: Array<FilterIconPair> = new Array<FilterIconPair>();

  @ViewChild('app_container') appContainerElement!: ElementRef;
  @ViewChild('mobile_underlay') mobileUnderlayElement!: ElementRef;

  constructor(firestore: Firestore) {
    const docRef = doc(firestore, 'resumes/krtYPHqlrLLVzPVV9R69'); //collection(firestore, 'resumes');
    this.item$ = docData(docRef);
    this.item$.subscribe((value) => {
      this.experienceList = value.experience;
      this.skillsLists = value.skills;
      this.contact = value.contact;
      this.education = value.education;
      console.log(value);
    });

    // Add all the filters
    this.filterObjects.push(
      new FilterIconPair(
        FilterItem.CSharp,
        'C#',
        FilterService.NoIcon,
        false,
        'csharp'
      )
    );
    this.filterObjects.push(
      new FilterIconPair(FilterItem.Unity, 'Unity', faUnity)
    );
    this.filterObjects.push(
      new FilterIconPair(
        FilterItem.Xamarin,
        'Xamarin',
        FilterService.NoIcon,
        false,
        'xamarin'
      )
    );
    this.filterObjects.push(
      new FilterIconPair(FilterItem.Salesforce, 'Salesforce', faSalesforce)
    );
    this.filterObjects.push(
      new FilterIconPair(FilterItem.Angular, 'Angular', faAngular)
    );
    this.filterObjects.push(
      new FilterIconPair(FilterItem.HTML, 'HTML', faHtml5)
    );
    this.filterObjects.push(new FilterIconPair(FilterItem.CSS, 'CSS', faCss3));
    this.filterObjects.push(
      new FilterIconPair(FilterItem.JavaScript, 'JavaScript', faJs)
    );
    this.filterObjects.push(
      new FilterIconPair(
        FilterItem.TypeScript,
        'TypeScript',
        FilterService.NoIcon,
        false,
        'typescript'
      )
    );
    this.filterObjects.push(
      new FilterIconPair(FilterItem.NodeJS, 'NodeJS', faNode)
    );
    this.filterObjects.push(
      new FilterIconPair(FilterItem.React, 'React', faReact)
    );
    this.filterObjects.push(
      new FilterIconPair(
        FilterItem.Flutter,
        'Flutter',
        FilterService.NoIcon,
        false,
        'flutter'
      )
    );
    this.filterObjects.push(
      new FilterIconPair(
        FilterItem.CPlusPlus,
        'C/C++',
        FilterService.NoIcon,
        false,
        'cplusplus'
      )
    );
  }

  ngAfterViewInit() {
    // Are we on a mobile device?
    if (window.innerWidth < 600) {
      this.mobileUnderlayElement.nativeElement.style.height =
        window.screen.availHeight + 'px';
      this.appContainerElement.nativeElement.style.backgroundSize =
        'auto ' + window.screen.availHeight + 'px';
    }
  }

  ToggleFilterItem(filtereableItem: FilterIconPair) {
    FilterService.ToggleFilterItem(filtereableItem);
  }

  CheckFlag(item: FilterIconPair): boolean {
    return (FilterService.CurrentFilters & item.value) != 0;
  }
}
