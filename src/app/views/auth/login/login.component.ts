import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { RegistrationService } from "../service/registration.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  loginForm: UntypedFormGroup;
  checkBox: boolean= false;
  isValidation : boolean = false;
  constructor(public service : RegistrationService,private formBuilder: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email : ['',Validators.required],
      password: ['',[Validators.required,Validators.minLength(6)]]
    })
  }
  onSubmit(){
    this.isValidation = true;
    this.service.login(this.loginForm.value).subscribe(data=>{
      this.loginForm.reset();
      localStorage.setItem("authToken",data['token'])
    })
  }
}
