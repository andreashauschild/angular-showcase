import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatarialFormArrayComponent } from './matarial-form-array.component';

describe('MatarialFormArrayComponent', () => {
  let component: MatarialFormArrayComponent;
  let fixture: ComponentFixture<MatarialFormArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatarialFormArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatarialFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
