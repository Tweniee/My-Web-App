import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { GoogleLoginProvider, SocialAuthService } from "angularx-social-login";
import { RegistrationService } from "../service/registration.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  registerForm: UntypedFormGroup;
  submitted : boolean = false;
  nameFocus: boolean = false;
  checkbox: boolean = false;
  emailFocus: boolean = false;
  passwordFocus: boolean = false;
  genderFocus: boolean = false;
  constructor(private formBuilder: UntypedFormBuilder,private service: RegistrationService,
              private authService: SocialAuthService) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name : ['',Validators.required],
      gender : ['',Validators.required],
      email : ['',Validators.required],
      password: ['',[Validators.required,Validators.minLength(6)]]
    })
  }

  //Google SignIn
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
    //Social media logout
  signOut(): void {
    this.authService.signOut();
  }

  // signInWithFB(): void {
  //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  // }

  get f() { return this.registerForm.controls; }
  
  onSubmit() {
    this.submitted = true
    // stop here if form is invalid
    if (this.registerForm.invalid && !this.checkbox) {
        return;
    }
    this.service.userRegister(this.registerForm.value).subscribe(data=>{
      this.submitted = false;
      this.registerForm.reset();
    })
}
}

