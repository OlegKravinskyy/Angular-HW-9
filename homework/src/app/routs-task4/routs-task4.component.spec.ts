import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutsTask4Component } from './routs-task4.component';

describe('RoutsTask4Component', () => {
  let component: RoutsTask4Component;
  let fixture: ComponentFixture<RoutsTask4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutsTask4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutsTask4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
