import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegistrationService } from "../service/registration.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted : boolean = false;
  nameFocus: boolean = false;
  checkbox: boolean = false;
  emailFocus: boolean = false;
  passwordFocus: boolean = false;
  genderFocus: boolean = false;
  constructor(private formBuilder: FormBuilder,private service: RegistrationService) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name : ['',Validators.required],
      gender : ['',Validators.required],
      email : ['',Validators.required],
      password: ['',[Validators.required,Validators.minLength(6)]]
    })
  }
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

