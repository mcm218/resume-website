import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCardComponent } from './skill-card.component';

describe('SkillCardComponent', () => {
  let component: SkillCardComponent;
  let fixture: ComponentFixture<SkillCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillCardComponent);
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

  
  
  xit('should have a skill value between 0 and 10', () => {
    fixture.detectChanges();

    const componentElement: HTMLElement = fixture.nativeElement;
    const sectionElement = componentElement.querySelector ('section')!;
    // expect(sectionElement.textContent).toContain (component.item.company);
  })
});
