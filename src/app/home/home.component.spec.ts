import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealhomeComponent } from './realhome.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<RealhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
