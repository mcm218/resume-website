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
import { OnScrollValuePair } from '../models/on-scroll-value-pair';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  headerValues: OnScrollValuePair<number> = new OnScrollValuePair(
    0,
    100,
    0,
    50
  );

  titleValues: OnScrollValuePair<number> = new OnScrollValuePair(4, 4, 4, 2);

  colorValues: OnScrollValuePair<[number, number, number]> =
    new OnScrollValuePair(
      [0, 0, 0],
      [255, 255, 255],
      [255, 255, 255],
      [255, 255, 255]
    );

  opacityValues: OnScrollValuePair<number> = new OnScrollValuePair(1, 0, 1, 0);

  backgroundColorValues: OnScrollValuePair<[number, number, number, number]> =
    new OnScrollValuePair(
      [0, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 1]
    );

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

  isInitialized: boolean = false;

  constructor() {}

  ngAfterViewInit() {
    // Were the header and offset elements found?
    if (this.headerElement && this.offsetElement) {
      // Get the native element
      let headerNativeElement = this.headerElement.nativeElement;

      // Grab the css values
      const headerCSS = getComputedStyle(headerNativeElement);

      // Get the padding and border values
      const paddingY =
        parseFloat(headerCSS.paddingTop) + parseFloat(headerCSS.paddingBottom);
      const borderY =
        parseFloat(headerCSS.borderTop) +
        parseFloat(headerCSS.borderBottom);

      // Store the initial header height
      this.headerValues.initialDesktopValue =
        this.headerValues.initialMobileValue =
          headerNativeElement.offsetHeight - paddingY - borderY;

      // Update the height of the offset element
      this.offsetElement.nativeElement.style.height =
        headerNativeElement.offsetHeight.toString() + 'px';

      // Update font colors
      this.UpdatePropertyOnScroll(
        this.headerElement.nativeElement.style,
        PropertyType.color,
        this.colorValues
      );

      // Set the final scroll distance
      this.finalScrollDistance = (screen.availHeight * 1) * 0.75;

      this.isInitialized = true;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (this.isInitialized == false) return;

    this.UpdateScrollValues();
  }

  UpdateScrollValues() {
    // Update height
    this.UpdatePropertyOnScroll(
      this.headerElement.nativeElement.style,
      PropertyType.height,
      this.headerValues
    );

    // Update font colors
    this.UpdatePropertyOnScroll(
      this.headerElement.nativeElement.style,
      PropertyType.color,
      this.colorValues
    );

    // Update transparency of any hideOnScroll elements
    this.hideOnScrollElements.forEach((element) => {
      this.UpdatePropertyOnScroll(
        element.nativeElement.style,
        PropertyType.opacity,
        this.opacityValues,
        2
      );
    });

    // Update font size
    this.UpdatePropertyOnScroll(
      this.titleElement.nativeElement.style,
      PropertyType.fontSize,
      this.titleValues
    );

    // Update background
    this.UpdatePropertyOnScroll(
      this.headerElement.nativeElement.style,
      PropertyType.background,
      this.backgroundColorValues,
      2
    );
  }

  // TODO: Update to be more functional, return CSS string
  // example: this.headerElement.nativeElement.style.height = this.UpdatePropertyOnScroll (height, valuePair);
  UpdatePropertyOnScroll(
    style: any,
    propertyType: PropertyType,
    valuePair: OnScrollValuePair<any>,
    speed: number = 1
  ) {
    // Get the distance the user has scrolled so far
    let scrollDistance = window.pageYOffset;

    // Calculate the percent towards the final scroll distance and cap at 1
    let scrollPercent =
      speed * Math.min(scrollDistance / this.finalScrollDistance, 1);

    // Is this a mobile device?
    let isMobile = screen.width < 600;

    let newValue: any;

    // Calculate the new value

    // Is the property color or background?
    if (
      propertyType == PropertyType.color ||
      propertyType == PropertyType.background
    ) {
      newValue = Array<number>();
      // If so, iterate through the value arrays and calculate the value for the current index
      for (
        let index = 0;
        index < valuePair.initialMobileValue.length;
        index++
      ) {
        if (isMobile) {
          newValue[index] =
            (1 - scrollPercent) * valuePair.initialMobileValue[index] +
            scrollPercent * valuePair.finalMobileValue[index];
        } else {
          newValue[index] =
            (1 - scrollPercent) * valuePair.initialDesktopValue[index] +
            scrollPercent * valuePair.finalDesktopValue[index];
        }
      }
    } else {
      // Otherwise, just calculate the new value
      if (isMobile) {
        newValue =
          (1 - scrollPercent) * valuePair.initialMobileValue +
          scrollPercent * valuePair.finalMobileValue;
      } else {
        newValue =
          (1 - scrollPercent) * valuePair.initialDesktopValue +
          scrollPercent * valuePair.finalDesktopValue;
      }
    }

    // Update the property
    switch (propertyType) {
      case PropertyType.height:
        style.height = newValue.toString() + 'px';
        break;
      case PropertyType.fontSize:
        style.fontSize = newValue.toString() + 'rem';
        break;
      case PropertyType.color:
        style.color = `rgb(${newValue[0]},${newValue[1]},${newValue[2]})`;
        break;
      case PropertyType.opacity:
        style.opacity = newValue.toString();
        break;
      case PropertyType.background:
        style.background = `rgba(${newValue[0]},${newValue[1]},${newValue[2]}, ${newValue[3]})`;
        break;
    }
  }
}

enum PropertyType {
  height,
  fontSize,
  color,
  opacity,
  background,
}
