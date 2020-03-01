import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexfieldComponent } from './flexfield.component';

describe('FlexfieldComponent', () => {
  let component: FlexfieldComponent;
  let fixture: ComponentFixture<FlexfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
