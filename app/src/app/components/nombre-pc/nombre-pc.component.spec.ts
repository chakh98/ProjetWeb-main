import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombrePCComponent } from './nombre-pc.component';

describe('NombrePCComponent', () => {
  let component: NombrePCComponent;
  let fixture: ComponentFixture<NombrePCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NombrePCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NombrePCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
