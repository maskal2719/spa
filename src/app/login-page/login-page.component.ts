import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {User} from "../interfaces/interfaces";
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  form !: FormGroup;
  user! : User;
  currentUser! :any;

  constructor(private formBuilder: FormBuilder, private http : HttpClient, private router: Router,private loginService : LoginService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null,[Validators.email, Validators.required]],
      password: [null,[Validators.required,Validators.minLength(6)]]
    })
  }

  submit(){
    this.loginService.login()
      .subscribe((res: any[]) => {
        this.user = res.find((a: any) => {
          return a.email === this.form.value.email && a.password === this.form.value.password;
        });
        if(this.user) {
          alert('Login Success');
          this.form.reset();
          this.router.navigate(['posts']);
          localStorage.setItem('currentUser',JSON.stringify(this.user.email));
          this.currentUser =  localStorage.getItem('currentUser')
        }else {
          alert('User not found or incorrect data');
        }
      },(error: any) => {
        alert(error)
      })
  }

}
