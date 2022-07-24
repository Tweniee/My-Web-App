import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  //use httpinterceptors
  baseUrl = environment.URL;
  constructor(private http:HttpClient) { }
  
  userRegister(json: any){
    // return new promise (req,res) =>{
    return this.http.post(this.baseUrl + "add",json)
  }

}
