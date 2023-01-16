import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMatchComponent } from './item-match.component';

describe('ItemMatchComponent', () => {
  let component: ItemMatchComponent;
  let fixture: ComponentFixture<ItemMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
