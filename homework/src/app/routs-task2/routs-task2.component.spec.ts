import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutsTask2Component } from './routs-task2.component';

describe('RoutsTask2Component', () => {
  let component: RoutsTask2Component;
  let fixture: ComponentFixture<RoutsTask2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutsTask2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutsTask2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
