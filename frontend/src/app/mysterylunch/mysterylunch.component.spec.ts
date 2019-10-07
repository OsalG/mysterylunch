import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysterylunchComponent } from './mysterylunch.component';

describe('MysterylunchComponent', () => {
  let component: MysterylunchComponent;
  let fixture: ComponentFixture<MysterylunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysterylunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysterylunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
