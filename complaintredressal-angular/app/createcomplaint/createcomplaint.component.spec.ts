import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecomplaintComponent } from './createcomplaint.component';

describe('CreatecomplaintComponent', () => {
  let component: CreatecomplaintComponent;
  let fixture: ComponentFixture<CreatecomplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecomplaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
