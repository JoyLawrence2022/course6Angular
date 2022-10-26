import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignengineerComponent } from './assignengineer.component';

describe('AssignengineerComponent', () => {
  let component: AssignengineerComponent;
  let fixture: ComponentFixture<AssignengineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignengineerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignengineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
