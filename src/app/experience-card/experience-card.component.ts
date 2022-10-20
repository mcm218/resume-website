import { Component, Input, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faAngular,
  faCss3,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
  faSalesforce,
  faUnity,
} from '@fortawesome/free-brands-svg-icons';
import {
  faDeafness,
  faFill,
  faFillDrip,
} from '@fortawesome/free-solid-svg-icons';
import { ExperienceItem } from '../models/experience-item';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss'],
})
export class ExperienceCardComponent implements OnInit {
  @Input() item: ExperienceItem = new ExperienceItem();

  filterableItems: Array<FilterIconPair> = new Array<FilterIconPair>();

  constructor() {}

  ngOnInit() {
    console.log(this.item.filterableItems.toString(2));
    if ((this.item.filterableItems & 0x1) != 0) {
      this.filterableItems.push(new FilterIconPair('C#', faFill));
    }
    if ((this.item.filterableItems & (0x1 << 1)) != 0) {
      this.filterableItems.push(new FilterIconPair('Unity', faUnity));
    }
    if ((this.item.filterableItems & (0x1 << 2)) != 0) {
      this.filterableItems.push(new FilterIconPair('Xamarin', faFill));
    }
    if ((this.item.filterableItems & (0x1 << 3)) != 0) {
      this.filterableItems.push(new FilterIconPair('Salesforce', faSalesforce));
    }
    if ((this.item.filterableItems & (0x1 << 4)) != 0) {
      this.filterableItems.push(new FilterIconPair('Angular', faAngular));
    }
    if ((this.item.filterableItems & (0x1 << 5)) != 0) {
      this.filterableItems.push(new FilterIconPair('HTML', faHtml5));
    }
    if ((this.item.filterableItems & (0x1 << 6)) != 0) {
      this.filterableItems.push(new FilterIconPair('CSS', faCss3));
    }
    if ((this.item.filterableItems & (0x1 << 7)) != 0) {
      this.filterableItems.push(new FilterIconPair('JavaScript', faJsSquare));
    }
    if ((this.item.filterableItems & (0x1 << 8)) != 0) {
      this.filterableItems.push(new FilterIconPair('TypeScript', faFill));
    }
    if ((this.item.filterableItems & (0x1 << 9)) != 0) {
      this.filterableItems.push(new FilterIconPair('NodeJS', faNodeJs));
    }
    if ((this.item.filterableItems & (0x1 << 10)) != 0) {
      this.filterableItems.push(new FilterIconPair('React', faReact));
    }
    if ((this.item.filterableItems & (0x1 << 11)) != 0) {
      this.filterableItems.push(new FilterIconPair('Flutter', faFill));
    }
    if ((this.item.filterableItems & (0x1 << 12)) != 0) {
      this.filterableItems.push(new FilterIconPair('C/C++', faFill));
    }
    console.log(this.filterableItems);
  }
}

class FilterIconPair {
  filterName: string = '';
  icon: IconProp = faDeafness;

  constructor(a: string, b: IconProp) {
    this.filterName = a;
    this.icon = b;
  }
}
