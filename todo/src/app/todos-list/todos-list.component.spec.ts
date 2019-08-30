import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosLIstComponent } from './todos-list.component';

describe('TodosLIstComponent', () => {
  let component: TodosLIstComponent;
  let fixture: ComponentFixture<TodosLIstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosLIstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosLIstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
