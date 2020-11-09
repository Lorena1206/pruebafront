import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpHeaders = new HttpHeaders({
  'Access-Control-Allow-Origin': '*'
});


@Injectable({
  providedIn: 'root'
})
export class PeticionService {

  constructor(
    private http: HttpClient

  ) { }

  getUser(usuario, contrasena) {
    return new Promise(async (resolve, reject) => {
      try {
        let data = await this.http.get(`http://3.15.92.223:5050/api/Login?userName=${usuario}&password=${contrasena}`, { headers: httpHeaders }).toPromise();
        console.log(data);
        if(data){
          resolve(data);
        }else{
          reject();
        }
      } catch (error) {
        console.log("usuario o contraseña inválidos, por favor intente de nuevo");
        reject();
      }

    })
  }

}
