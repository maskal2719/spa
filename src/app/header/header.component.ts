import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {LoginService} from "../login-page/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  currentUser !: any;
  isLogin !: boolean;

  constructor(private loginService : LoginService) { }

  ngOnInit(): void {

    this.currentUser = this.loginService.currentUser();

    if(this.currentUser != null){
      this.isLogin = true;
    }

  }

  logOut() {
    localStorage.clear()
    this.isLogin = false;
  }
}
