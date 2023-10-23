import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  step_error = false;
  slide = 0;
  progress = 1;

  fieldValues: { [key: string]: any } = {};

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirm: new FormControl('',[Validators.required]),
      image: new FormControl('',[Validators.required]),
      birth: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required]),
      adress: new FormControl('',[Validators.required]),
      workplace: new FormControl('',[Validators.required]),
      num: new FormControl('',[Validators.required]),
      yon: new FormControl('',[Validators.required]),
      sertificate: new FormControl('',[Validators.required])
    });
  }

  fieldSet()
  {
    this.fieldValues['name'] = this.registerForm.get('name')?.value;
    this.fieldValues['email'] = this.registerForm.get('email')?.value;
    this.fieldValues['password'] = this.registerForm.get('password')?.value;
    this.fieldValues['confirm'] = this.registerForm.get('confirm')?.value;
    this.fieldValues['image'] = this.registerForm.get('image')?.value;
    this.fieldValues['dob'] = this.registerForm.get('dob')?.value;
    this.fieldValues['phone'] = this.registerForm.get('phone')?.value;
    this.fieldValues['adress'] = this.registerForm.get('adress')?.value;
    this.fieldValues['workplace'] = this.registerForm.get('workplace')?.value;
    this.fieldValues['rate'] = this.registerForm.get('rate')?.value;
    this.fieldValues['yon'] = this.registerForm.get('yon')?.value;
    this.fieldValues['sertificate'] = this.registerForm.get('sertificate')?.value;
  }

  fielGet()
  {
    this.registerForm.get('name')?.setValue(this.fieldValues['name']);
    this.registerForm.get('email')?.setValue(this.fieldValues['email']);
    this.registerForm.get('password')?.setValue(this.fieldValues['password']);
    this.registerForm.get('confirm')?.setValue(this.fieldValues['confirm']);
    this.registerForm.get('photo')?.setValue(this.fieldValues['photo']);
    this.registerForm.get('dob')?.setValue(this.fieldValues['dob']);
    this.registerForm.get('phone')?.setValue(this.fieldValues['phone']);
    this.registerForm.get('adress')?.setValue(this.fieldValues['adress']);
    this.registerForm.get('workplace')?.setValue(this.fieldValues['workplace']);
    this.registerForm.get('rate')?.setValue(this.fieldValues['rate']);
    this.registerForm.get('yon')?.setValue(this.fieldValues['yon']);
    this.registerForm.get('sertificate')?.setValue(this.fieldValues['sertificate']);
  }

  step_1_Check():boolean       
  {
    this.fieldValues['name'] = this.registerForm.get('name')?.value;
    this.fieldValues['email'] = this.registerForm.get('email')?.value;
    this.fieldValues['password'] = this.registerForm.get('password')?.value;
    this.fieldValues['confirm'] = this.registerForm.get('confirm')?.value;

    console.log(this.fieldValues['name'], this.fieldValues['email'], this.fieldValues['password'], this.fieldValues['confirm']);
    
    if (
      this.fieldValues['name'] === null ||
      this.fieldValues['name'] === '' ||
      this.fieldValues['name'] === undefined ||
      this.fieldValues['email'] === null ||
      this.fieldValues['email'] === '' ||
      this.fieldValues['email'] === undefined ||
      this.fieldValues['password'] === null ||
      this.fieldValues['password'] === '' ||
      this.fieldValues['password'] === undefined ||
      this.fieldValues['confirm'] === null ||
      this.fieldValues['confirm'] === '' ||
      this.fieldValues['confirm'] === undefined
    ) {
      console.log("false");
      return false;
    } else {
      console.log("true");
      return true;
    }
    
  }

  step_2_Check():boolean       
  {
    this.fieldValues['image'] = this.registerForm.get('image')?.value;
    this.fieldValues['birth'] = this.registerForm.get('birth')?.value;
    this.fieldValues['phone'] = this.registerForm.get('phone')?.value;
    this.fieldValues['adress'] = this.registerForm.get('adress')?.value;
    console.log(this.fieldValues['image'],this.fieldValues['birth'],this.fieldValues['phone'],this.fieldValues['adress']);
    
    if (
      this.fieldValues['image'] === null || 
      this.fieldValues['image'] === undefined || 
      this.fieldValues['image'] === "" || 
      this.fieldValues['birth'] === null || 
      this.fieldValues['birth'] === undefined || 
      this.fieldValues['birth'] === "" ||   
      this.fieldValues['phone'] === null || 
      this.fieldValues['phone'] === undefined || 
      this.fieldValues['phone'] === "" || 
      this.fieldValues['adress'] === null || 
      this.fieldValues['adress'] === undefined || 
      this.fieldValues['adress'] === ""     ) 
      {
      return false; 
    } else {
      return true; 
    }
    
  }

  step_3_Check():boolean       
  {
    this.fieldValues['workplace'] = this.registerForm.get('workplace')?.value;
    this.fieldValues['num'] = this.registerForm.get('num')?.value;
    this.fieldValues['yon'] = this.registerForm.get('yon')?.value;
    this.fieldValues['sertificate'] = this.registerForm.get('serticicate')?.value;
    console.log(this.fieldValues['workplace'],this.fieldValues['num'],this.fieldValues['yon'],this.fieldValues['sertificate']);
       
    if (
      this.fieldValues['workplace'] === null || 
      this.fieldValues['workplace'] === undefined || 
      this.fieldValues['workplace'] === "" ||
      this.fieldValues['num'] === null || 
      this.fieldValues['num'] === undefined || 
      this.fieldValues['num'] === "" ||
      this.fieldValues['yon'] === null || 
      this.fieldValues['yon'] === undefined || 
      this.fieldValues['yon'] === "" ||
      this.fieldValues['sertificate'] === null || 
      this.fieldValues['sertificate'] === undefined || 
      this.fieldValues['sertificate'] === ""
    ) {
      return false;
    } else {
      return true;
    }
    
  }

  next_Step() {
    console.log(this.slide);
    if(this.slide === 0)
    {
      if (this.step_1_Check()) 
      {
        console.log("step 1 passed");
        this.IncNum();
        this.step_error=false;
      }
      else
      {
        this.step_error=true;
        console.log("step not passed", this.slide);
      }
    }
    else if(this.slide === 1)
    {
      if (this.step_2_Check()) 
      {
        console.log("step 2 passed");
        this.IncNum();
        this.step_error=false;
      }
      else
      {
        this.step_error=true;
        console.log("step not passed", this.slide);
      }
    }
    else if(this.slide === 2)
    {
      if (this.step_3_Check()) 
      {
        console.log("step 3 passed");
        this.IncNum();
        this.step_error=false;
      }
      else
      {
        this.step_error=true;
        console.log("step not passed", this.slide);
      }
    }
    else
    {
        console.log("error");
    }
  }
  
  IncNum()
  {
    this.slide++;
    this.progress++;
    this.fieldSet();
  }

  DecNum()
  {
    this.step_error = false;
    this.slide--;
    this.progress--;
    this.fieldSet();
    this.fielGet();
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
      passwordConfirmed: formValues.confirm,
      image: formValues.image,
      birth: formValues.birth,
      phone: formValues.phone,
      adress: formValues.adress,
      workplace: formValues.workplace,
      num: formValues.num,
      yon: formValues.text,
      sertificates: formValues.sertificate
    };

    this.authService.registerUser(user)
    .subscribe({
      next: (_) => console.log("Successful registration"),
      error: (err: HttpErrorResponse) => console.log(err.error.errors)
    })
  }
}