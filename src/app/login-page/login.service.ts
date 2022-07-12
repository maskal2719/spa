import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(): any {
    return this.http.get('http://localhost:3000/signUpUsers')
  }

  currentUser() : any {
    return localStorage.getItem('currentUser');
  }

  signUp (user : any ){
    return this.http.post('http://localhost:3000/signUpUsers', user);
  }

}
