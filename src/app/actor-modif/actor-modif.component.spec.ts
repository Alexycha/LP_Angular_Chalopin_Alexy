import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorModifComponent } from './actor-modif.component';

describe('ActorModifComponent', () => {
  let component: ActorModifComponent;
  let fixture: ComponentFixture<ActorModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActorModifComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
