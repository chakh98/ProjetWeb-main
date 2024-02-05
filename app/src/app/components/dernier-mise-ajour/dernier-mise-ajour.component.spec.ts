import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DernierMiseAJourComponent } from './dernier-mise-ajour.component';

describe('DernierMiseAJourComponent', () => {
  let component: DernierMiseAJourComponent;
  let fixture: ComponentFixture<DernierMiseAJourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DernierMiseAJourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DernierMiseAJourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
