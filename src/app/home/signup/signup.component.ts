import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PlatformDetectorService } from './../../core/platform-detector/platform-detector.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { lowerCaseValidator } from 'src/app/shared/validators/lower.case.validator';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { userNamePassword } from './username-password-validator';

@Component({
  templateUrl: './signup.component.html',
  providers: [UserNotTakenValidatorService]
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;
  @ViewChild('inputEmail') inputEmail: ElementRef<HTMLElement>;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private signupService: SignUpService,
    private platformDetectorService: PlatformDetectorService,
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
    },{
      validators: userNamePassword
    });

    this.platformDetectorService.isPlatformBrowser() &&
            this.inputEmail.nativeElement.focus();
  }

  signup() {
    if(this.signupForm.valid && !this.signupForm.pending) {
      const newUser = this.signupForm.getRawValue() as NewUser;
      this.signupService
        .signup(newUser)
        .subscribe(() => this.router.navigate(['']),
          error => {
            console.log(error);
          });
    }
  }
}
