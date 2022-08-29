import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { WipAlertComponent } from './wip-alert.component';

describe('WipAlertComponent', () => {
  let component: WipAlertComponent;
  let fixture: ComponentFixture<WipAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WipAlertComponent ],
      imports: [ FontAwesomeModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WipAlertComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
