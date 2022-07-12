import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {LoginService} from "../login-page/login.service";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  formReg !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router: Router,private loginService: LoginService) { }

  ngOnInit(): void {
    this.formReg = this.formBuilder.group({
      email:[null,[Validators.email,Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    })
  }

  signUp(){
    this.loginService.signUp(this.formReg)
      .subscribe(result => {
        alert('Sign Up successful');
        this.formReg.reset();
        this.router.navigate(['login'])
      },err => {
        alert('Something went wrong')
      })

    if (this.formReg.invalid){
      return;
    }
  }

}
