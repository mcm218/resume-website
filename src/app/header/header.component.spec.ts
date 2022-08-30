import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

import { ContactComponent } from '../contact/contact.component';
import { EducationCardComponent } from '../education-card/education-card.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { ContactMe } from '../models/contact-me';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [HeaderComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    component.title = 'Test Title';
    fixture.detectChanges();

    const componentElement: HTMLElement = fixture.nativeElement;
    const h1Element = componentElement.querySelector('h1')!;
    expect(h1Element.textContent).toContain(component.title);
  });

  it('should have a subtitle', () => {
    component.subtitle = 'Test Subtitle';
    fixture.detectChanges();

    const componentElement: HTMLElement = fixture.nativeElement;
    const h2Element = componentElement.querySelector('h2')!;
    expect(h2Element.textContent).toContain(component.subtitle);
  });

  xit('height should adjust with scroll value', () => {
    fixture.detectChanges();

    const componentElement: HTMLElement = fixture.nativeElement;
    const sectionElement = componentElement.querySelector('section')!;
    // expect(sectionElement.textContent).toContain (component.item.company);
  });

  xit('background color should adjust with scroll value', () => {
    fixture.detectChanges();

    const componentElement: HTMLElement = fixture.nativeElement;
    const sectionElement = componentElement.querySelector('section')!;
    // expect(sectionElement.textContent).toContain (component.item.company);
  });

  xit('opacity should adjust with scroll value', () => {
    fixture.detectChanges();

    const componentElement: HTMLElement = fixture.nativeElement;
    const sectionElement = componentElement.querySelector('section')!;
    // expect(sectionElement.textContent).toContain (component.item.company);
  });

  xit('font color should adjust with scroll value', () => {
    fixture.detectChanges();

    const componentElement: HTMLElement = fixture.nativeElement;
    const sectionElement = componentElement.querySelector('section')!;
    // expect(sectionElement.textContent).toContain (component.item.company);
  });
});
