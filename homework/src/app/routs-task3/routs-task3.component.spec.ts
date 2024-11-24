import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutsTask3Component } from './routs-task3.component';

describe('RoutsTask3Component', () => {
  let component: RoutsTask3Component;
  let fixture: ComponentFixture<RoutsTask3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutsTask3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutsTask3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
