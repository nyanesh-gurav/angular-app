import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRowDialogBoxComponent } from './add-row-dialog-box.component';

describe('AddRowDialogBoxComponent', () => {
  let component: AddRowDialogBoxComponent;
  let fixture: ComponentFixture<AddRowDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRowDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRowDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
