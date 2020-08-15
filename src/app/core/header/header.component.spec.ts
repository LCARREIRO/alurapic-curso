import { AlertModule } from './../../shared/components/alert/alert.module';
import { MenuModule } from './../../shared/components/menu/menu.module';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from './../user/user.service';
import { HeaderComponent } from './header.component';
import { TestBed, async } from '@angular/core/testing';
import { of } from 'rxjs';

fdescribe('header component', () => {
  let component: HeaderComponent;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [UserService],
      imports: [
        RouterTestingModule,
        MenuModule,
        AlertModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {

    userService = TestBed.get(UserService);

    spyOn(userService, 'getUser').and.returnValue(of({
      name: 'luciano',
      email: 'luciano@gmail.com'
    }));

    const fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser instanciado', () => {
    expect(component).toBeTruthy();
  });

  it('deve realizar o logout', () => {
    const spy = spyOn(userService, 'logout').and.returnValue(null);
  });
});
