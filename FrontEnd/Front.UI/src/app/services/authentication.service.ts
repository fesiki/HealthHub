import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RegisterResponseDto } from 'src/app/_interfaces/RegisterResponse.module';
import { AuthResponseDto } from 'src/app/_interfaces/response.module';
import { UserForAuthenticationDto } from 'src/app/_interfaces/user.module';
import { UserForRegistrationDto } from 'src/app/_interfaces/userReg.module';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private authChangeSub = new Subject<boolean>()
  public authChanged = this.authChangeSub.asObservable();
  
  constructor(private http: HttpClient) { }

  public loginUser = (body: UserForAuthenticationDto) => {
    return this.http.post<AuthResponseDto>("https://localhost:7001/api/account/Login", body);
  }

  public registerUser = (body: UserForRegistrationDto) => {
    return this.http.post<RegisterResponseDto>("https://localhost:7001/api/account/Register", body);
  }

  

  public sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
    this.authChangeSub.next(isAuthenticated);
  }
}
