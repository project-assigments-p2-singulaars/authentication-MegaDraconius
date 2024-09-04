import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { userData } from '../interfaces/userData';
import { LocalstorageService } from '../services/localstorage.service';

type LoginResponseType = {
  accessToken:string,
  user:userData,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url =environment.apiUrl;
  private localStorageService = inject(LocalstorageService);
  private http=inject(HttpClient);

  constructor() { }

  async login(credentials:userData){
    try{
      const result = await firstValueFrom(this.http.post<LoginResponseType>(this.url.concat('/login'), credentials))

      const {user} = result;
      this.localStorageService.setItem('user',JSON.stringify(user.userName))

    }catch(e){
      throw e;
    }
  }

  isAuth(){
    if(this.localStorageService.getItem('token') !== undefined && this.localStorageService.getItem('token') !== null){
      return true;
    }else{
      return false;

    }
  }
}
