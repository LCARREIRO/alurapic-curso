import { UserService } from './../user/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from './footer.component';
import { TestBed, async } from '@angular/core/testing';
import { of } from 'rxjs';

fdescribe('footer component', () => {
  let component: FooterComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [UserService],
      declarations: [FooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {

    const userService = TestBed.get(UserService);

    spyOn(userService, 'getUser').and.returnValue(of({
      name: 'teste',
      email: 'luciano@gmail.com'
    }));

    const fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser instanciado', () => {
    expect(component).toBeTruthy();
  });

});
