import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialBasicComponent } from './material-basic.component';

describe('MaterialBasicComponent', () => {
  let component: MaterialBasicComponent;
  let fixture: ComponentFixture<MaterialBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
