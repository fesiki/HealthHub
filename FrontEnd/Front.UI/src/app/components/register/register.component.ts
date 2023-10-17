import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserForRegistrationDto } from 'src/app/_interfaces/userReg.module';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit{
  registerForm!: FormGroup;
  passwordsMatchError = false;
  showPassword = true;
  showPassword2 = true;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirm: new FormControl('',[Validators.required])
    });
  }
  
  handleButtonClick() {
    this.showPassword = !this.showPassword;
  }
  
  handleButtonClick2() {
    this.showPassword2 = !this.showPassword2;
  }

  hasError = (controlName: string, errorName: string) => {
    const control = this.registerForm.get(controlName);
    return control ? control.hasError(errorName) : false;
  }

  validateControl = (controlName: string) => {
    const control = this.registerForm.get(controlName);
    return control ? control.invalid && control.touched : false;
  }

  public registerUser = (registerFormValue: any) => {
    const formValues = { ...registerFormValue };

    
    const password = formValues.password;
    const passwordConfirmed = formValues.confirm;
    if (password !== passwordConfirmed) {
      this.passwordsMatchError = true; 
      return; 
    } else {
      this.passwordsMatchError = false; 
    }

    const user: UserForRegistrationDto = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      passwordConfirmed: formValues.confirm
    };

    this.authService.registerUser(user)
    .subscribe({
      next: (_) => console.log("Successful registration"),
      error: (err: HttpErrorResponse) => console.log(err.error.errors)
    })
  }
}