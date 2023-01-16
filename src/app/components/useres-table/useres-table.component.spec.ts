import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseresTableComponent } from './useres-table.component';

describe('UseresTableComponent', () => {
  let component: UseresTableComponent;
  let fixture: ComponentFixture<UseresTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseresTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseresTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
