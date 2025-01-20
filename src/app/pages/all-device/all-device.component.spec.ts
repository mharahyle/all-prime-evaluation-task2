import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDeviceComponent } from './all-device.component';

describe('AllDeviceComponent', () => {
  let component: AllDeviceComponent;
  let fixture: ComponentFixture<AllDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllDeviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
