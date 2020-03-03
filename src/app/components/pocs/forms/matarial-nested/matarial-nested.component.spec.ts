import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatarialNestedComponent } from './matarial-nested.component';

describe('MatarialNestedComponent', () => {
  let component: MatarialNestedComponent;
  let fixture: ComponentFixture<MatarialNestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatarialNestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatarialNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
