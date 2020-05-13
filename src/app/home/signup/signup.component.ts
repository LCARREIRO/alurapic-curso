import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { lowerCaseValidator } from 'src/app/shared/validators/lower.case.validator';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';

@Component({
  templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private signupService: SignUpService,
    private userNotTakenValidatorService: UserNotTakenValidatorService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email]
      ],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)]
      ],
      userName: ['',
        [
          // validadores sycronos entram neste array
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30)
        ],
        // validadores async entram aqui
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],

      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14)]
      ]
    });
  }

  signup() {

    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signupService
      .signup(newUser)
      .subscribe(() => this.router.navigate(['']),
        error => {
          console.log(error);
        });

  }

}
