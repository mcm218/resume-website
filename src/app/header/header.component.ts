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
  initH1Size = 0;
  finalH1Size = 30;
  finalHeaderHeight = 100;
  finalMobileHeaderHeight = 50;
  finalScrollDistance = 350;

  @Input() title: string = '';
  @Input() subtitle: string = '';

  @Input() education: Education = new Education();

  @Input() contact: ContactMe = new ContactMe();

  @ViewChild('titleElement') titleElement!: ElementRef;
  @ViewChild('header') headerElement!: ElementRef;
  @ViewChild('header_offset') offsetElement!: ElementRef;
  @ViewChildren('hideOnScroll') hideOnScrollElements!: QueryList<ElementRef>;
  @ViewChildren('hideOnScrollPhone')
  hideOnScrollPhoneElements!: QueryList<ElementRef>;

  constructor() {}

  ngAfterViewInit() {
    // Were the header and offset elements found?
    if (this.headerElement && this.offsetElement) {
      // Get the native element
      let headerNativeElement = this.headerElement.nativeElement;
      let titleNativeElement = this.titleElement.nativeElement;

      // Grab the css values
      const titleCSS = getComputedStyle(titleNativeElement);
      const headerCSS = getComputedStyle(headerNativeElement);

      // Get the padding and border values
      const paddingY =
        parseFloat(headerCSS.paddingTop) + parseFloat(headerCSS.paddingBottom);
      const borderY =
        parseFloat(headerCSS.borderTopWidth) +
        parseFloat(headerCSS.borderBottomWidth);

      // Store the initial header height
      this.initHeaderHeight =
        headerNativeElement.offsetHeight - paddingY - borderY;

      this.initH1Size = parseInt(titleCSS.fontSize.slice(0, -2));

      // Set the offset element's height
      this.offsetElement.nativeElement.style.height =
        headerNativeElement.offsetHeight.toString() + 'px';

      // Initialize font colors

      // Update font colors

      // Get the distance the user has scrolled so far
      let scrollDistance = window.pageYOffset;

      // Calculate the percent towards the final scroll distance
      let scrollPercent = scrollDistance / this.finalScrollDistance;
      // Cap scroll percent at 1
      scrollPercent = scrollPercent > 1 ? 1 : scrollPercent;

      let colorValue = 255 * scrollPercent;
      this.headerElement.nativeElement.style.color = `rgba(${colorValue},${colorValue},${colorValue},1)`;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    // Get the distance the user has scrolled so far
    let scrollDistance = window.pageYOffset;

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

    // Update font colors
    let colorValue = 255 * scrollPercent;
    this.headerElement.nativeElement.style.color = `rgba(${colorValue},${colorValue},${colorValue},1)`;

    // Update transparency of any hideOnScroll elements
    this.hideOnScrollElements.forEach((element) => {
      element.nativeElement.style.opacity = 1 - 2 * scrollPercent;
    });

    // Is the device width < 600
    if (screen.width < 600) {
      // If so, update transparency of any hideOnScrollPhone elements
      this.hideOnScrollPhoneElements.forEach((element) => {
        element.nativeElement.style.opacity = 1 - 2 * scrollPercent;
      });

      let newTitleSize = this.initH1Size;

      if (scrollDistance != 0) {
        // Calculate the new sizes with the ratio for initial sizes shrinking
        // and the ratio of the final size increasing as the user scrolls
        newHeaderHeight =
          (1 - scrollPercent) * this.initHeaderHeight +
          scrollPercent * this.finalMobileHeaderHeight;

        newTitleSize =
          (1 - scrollPercent) * this.initH1Size +
          scrollPercent * this.finalH1Size;
      }

      // Update the title and header sizes
      this.titleElement.nativeElement.style.fontSize = newTitleSize + 'px';
      this.headerElement.nativeElement.style.height = newHeaderHeight + 'px';
    }

    // Update the background of the header element
    this.headerElement.nativeElement.style.background = `rgba(0,0,0,${
      2 * scrollPercent
    })`;
  }
}
