import {
  Component,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { ContactMe } from '../models/contact-me';
import { Education } from '../models/education';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  initHeaderHeight = 0;
  finalHeaderHeight = 100;
  finalScrollDistance = 350;

  @Input() title: string = '';
  @Input() subtitle: string = '';

  @Input() education: Education = new Education();

  @Input() contact: ContactMe = new ContactMe();

  @ViewChild('header') headerElement!: ElementRef;
  @ViewChild('header_offset') offsetElement!: ElementRef;
  @ViewChildren('hideOnScroll') hideOnScrollElements!: QueryList<ElementRef>;

  constructor() {}

  ngAfterViewInit() {
    // Were the header and offset elements found?
    if (this.headerElement && this.offsetElement) {
      // Store the initial header height
      this.initHeaderHeight = this.headerElement.nativeElement.offsetHeight;

      // Set the offset element's height
      this.offsetElement.nativeElement.style.height =
        this.initHeaderHeight.toString() + 'px';
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    // Get the distance the user has scrolled so far
    let scrollDistance = event.path[1].pageYOffset;

    // Calculate the percent towards the final scroll distance
    let scrollPercent = scrollDistance / this.finalScrollDistance;
    // Cap scroll percent at 1
    scrollPercent = scrollPercent > 1 ? 1 : scrollPercent;

    let newHeaderHeight = this.initHeaderHeight;
    // If scroll distance isn't 0, calculate the new header height
    if (scrollDistance != 0) {
      // Calculate the new header height with the ratio for initial header height shrinking
      // and the ratio of the final header height increasing as the user scrolls
      newHeaderHeight =
        (1 - scrollPercent) * this.initHeaderHeight +
        scrollPercent * this.finalHeaderHeight;
    }

    // Update the header height
    this.headerElement.nativeElement.style.height = newHeaderHeight + 'px';

    // Update transparency of any hideOnScroll elements
    this.hideOnScrollElements.forEach((element) => {
      element.nativeElement.style.opacity = 1 - 2 * scrollPercent;
    });

    // Update the background of the header element
    this.headerElement.nativeElement.style.background = `rgba(0,0,0,${2 * scrollPercent})`;

  }
}
