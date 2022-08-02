import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  getToken(){  
    let rv = localStorage.getItem("authToken");  
    return (rv==undefined)
    }  
}
