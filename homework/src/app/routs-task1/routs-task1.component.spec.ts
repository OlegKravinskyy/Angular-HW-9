import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutsTask1Component } from './routs-task1.component';

describe('RoutsTask1Component', () => {
  let component: RoutsTask1Component;
  let fixture: ComponentFixture<RoutsTask1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutsTask1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutsTask1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
