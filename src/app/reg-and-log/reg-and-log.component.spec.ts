import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegAndLogComponent } from './reg-and-log.component';

describe('RegAndLogComponent', () => {
  let component: RegAndLogComponent;
  let fixture: ComponentFixture<RegAndLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegAndLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegAndLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
