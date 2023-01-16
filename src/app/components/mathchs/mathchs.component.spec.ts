import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathchsComponent } from './mathchs.component';

describe('MathchsComponent', () => {
  let component: MathchsComponent;
  let fixture: ComponentFixture<MathchsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathchsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
