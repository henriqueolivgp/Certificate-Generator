import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesBase } from './pages-base';

describe('PagesBase', () => {
  let component: PagesBase;
  let fixture: ComponentFixture<PagesBase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesBase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesBase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
