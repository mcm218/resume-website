import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

import { ContactComponent } from '../contact/contact.component';
import { EducationCardComponent } from '../education-card/education-card.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [HeaderComponent, ContactComponent, EducationCardComponent],
    }).compileComponents();

    
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  xit('should have a title', () => {
    fixture.detectChanges();

    const componentElement: HTMLElement = fixture.nativeElement;
    const sectionElement = componentElement.querySelector ('section')!;
    // expect(sectionElement.textContent).toContain (component.item.company);
  })
  
  xit('should have a subtitle', () => {
    fixture.detectChanges();

    const componentElement: HTMLElement = fixture.nativeElement;
    const sectionElement = componentElement.querySelector ('section')!;
    // expect(sectionElement.textContent).toContain (component.item.company);
  })
  
  xit('should have a contact component', () => {
    fixture.detectChanges();

    const componentElement: HTMLElement = fixture.nativeElement;
    const sectionElement = componentElement.querySelector ('section')!;
    // expect(sectionElement.textContent).toContain (component.item.company);
  })
  
  xit('should have an education card component', () => {
    fixture.detectChanges();

    const componentElement: HTMLElement = fixture.nativeElement;
    const sectionElement = componentElement.querySelector ('section')!;
    // expect(sectionElement.textContent).toContain (component.item.company);
  })
  
  xit('height should adjust with scroll value', () => {
    fixture.detectChanges();

    const componentElement: HTMLElement = fixture.nativeElement;
    const sectionElement = componentElement.querySelector ('section')!;
    // expect(sectionElement.textContent).toContain (component.item.company);
  })
  
  xit('background color should adjust with scroll value', () => {
    fixture.detectChanges();

    const componentElement: HTMLElement = fixture.nativeElement;
    const sectionElement = componentElement.querySelector ('section')!;
    // expect(sectionElement.textContent).toContain (component.item.company);
  })
  
  xit('opacity should adjust with scroll value', () => {
    fixture.detectChanges();

    const componentElement: HTMLElement = fixture.nativeElement;
    const sectionElement = componentElement.querySelector ('section')!;
    // expect(sectionElement.textContent).toContain (component.item.company);
  })
  
  xit('font color should adjust with scroll value', () => {
    fixture.detectChanges();

    const componentElement: HTMLElement = fixture.nativeElement;
    const sectionElement = componentElement.querySelector ('section')!;
    // expect(sectionElement.textContent).toContain (component.item.company);
  })
});
