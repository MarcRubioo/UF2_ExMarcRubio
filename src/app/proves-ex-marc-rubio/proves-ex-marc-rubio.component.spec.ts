import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvesExMarcRubioComponent } from './proves-ex-marc-rubio.component';

describe('ProvesExMarcRubioComponent', () => {
  let component: ProvesExMarcRubioComponent;
  let fixture: ComponentFixture<ProvesExMarcRubioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvesExMarcRubioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvesExMarcRubioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
