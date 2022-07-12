import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkTasksComponent } from './cdk-tasks.component';

describe('CdkTasksComponent', () => {
  let component: CdkTasksComponent;
  let fixture: ComponentFixture<CdkTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
