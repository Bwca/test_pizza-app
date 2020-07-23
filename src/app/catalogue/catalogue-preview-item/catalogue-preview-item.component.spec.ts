import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CataloguePreviewItemComponent } from './catalogue-preview-item.component';

describe('CataloguePreviewItemComponent', () => {
  let component: CataloguePreviewItemComponent;
  let fixture: ComponentFixture<CataloguePreviewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CataloguePreviewItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CataloguePreviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
