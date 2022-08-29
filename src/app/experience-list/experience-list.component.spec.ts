import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceListComponent } from './experience-list.component';

describe('ExperienceListComponent', () => {
  let component: ExperienceListComponent;
  let fixture: ComponentFixture<ExperienceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceListComponent);
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
  
  xit('should have a list of experience cards', () => {
    fixture.detectChanges();

    const componentElement: HTMLElement = fixture.nativeElement;
    const sectionElement = componentElement.querySelector ('section')!;
    // expect(sectionElement.textContent).toContain (component.item.company);
  })
});
