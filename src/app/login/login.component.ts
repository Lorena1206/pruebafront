import { Component, OnInit } from '@angular/core';
import { PeticionService } from '../servicio/peticion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario;
  contrasena;
  exito: boolean = false;
  constructor(
    private peticionservice: PeticionService
  ) { }

  ngOnInit() {
  }

  async autenticar() {
    try {
      await this.peticionservice.getUser(this.usuario, this.contrasena);
      this.exito = true;
    } catch (error) {
      alert("usuario o contraseña inválidos, por favor intente de nuevo");
      this.exito = false;
      this.usuario = "";
      this.contrasena = "";
    }
  }


}
