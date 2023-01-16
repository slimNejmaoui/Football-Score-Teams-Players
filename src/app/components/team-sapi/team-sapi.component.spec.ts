import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSapiComponent } from './team-sapi.component';

describe('TeamSapiComponent', () => {
  let component: TeamSapiComponent;
  let fixture: ComponentFixture<TeamSapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamSapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamSapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
