import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceCardComponent } from './experience-card.component';

describe('ExperienceCardComponent', () => {
  let component: ExperienceCardComponent;
  let fixture: ComponentFixture<ExperienceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  xit('should have a company', () => {
    component.item.company = "Test End Date";
    fixture.detectChanges();

    const componentElement: HTMLElement = fixture.nativeElement;
    const sectionElement = componentElement.querySelector ('section')!;
    expect(sectionElement.textContent).toContain (component.item.company);
  })
  
  xit('shouldn\'t have a company', () => {
    component.item.company = "Test End Date";
    fixture.detectChanges();

    const componentElement: HTMLElement = fixture.nativeElement;
    const sectionElement = componentElement.querySelector ('section')!;
    expect(sectionElement.textContent).toContain (component.item.company);
  })
  
  xit('should have a role', () => {
    component.item.company = "Test End Date";
    fixture.detectChanges();

    const componentElement: HTMLElement = fixture.nativeElement;
    const sectionElement = componentElement.querySelector ('section')!;
    expect(sectionElement.textContent).toContain (component.item.company);
  })
  
  xit('should have a dates', () => {
    component.item.company = "Test End Date";
    fixture.detectChanges();

    const componentElement: HTMLElement = fixture.nativeElement;
    const sectionElement = componentElement.querySelector ('section')!;
    expect(sectionElement.textContent).toContain (component.item.company);
  })
  
  xit('shouldn\'t have a dates', () => {
    component.item.company = "Test End Date";
    fixture.detectChanges();

    const componentElement: HTMLElement = fixture.nativeElement;
    const sectionElement = componentElement.querySelector ('section')!;
    expect(sectionElement.textContent).toContain (component.item.company);
  })
  
  xit('should have a location', () => {
    component.item.company = "Test End Date";
    fixture.detectChanges();

    const componentElement: HTMLElement = fixture.nativeElement;
    const sectionElement = componentElement.querySelector ('section')!;
    expect(sectionElement.textContent).toContain (component.item.company);
  })
  
  xit('should have a list of notes', () => {
    component.item.company = "Test End Date";
    fixture.detectChanges();

    const componentElement: HTMLElement = fixture.nativeElement;
    const sectionElement = componentElement.querySelector ('section')!;
    expect(sectionElement.textContent).toContain (component.item.company);
  })
});
