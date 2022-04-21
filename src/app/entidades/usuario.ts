import { Router } from "@angular/router";
//import { NgbAlert } from "@ng-bootstrap/ng-bootstrap";
import { NgModule } from '@angular/core';
import { HAMMER_LOADER } from "@angular/platform-browser";
import { EMPTY } from "rxjs";
import { ActivatedRoute, Params } from '@angular/router';



export class Usuario {

    nombre: string = 'testUser';
    clave: string = 'palanca';
    title: string = 'JAJA';
    resultado=0;

    constructor() {
        
        sessionStorage.setItem("usuario", this.nombre);
        sessionStorage.setItem("claveHash", 'mbibkd^Z'); //palanca
    }


    private setClave(value: string): void {
        this.clave = this.codificar(value);
    }

    public login() {
        let nombreCache = sessionStorage.getItem("usuario");
        let claveHashCache = sessionStorage.getItem("claveHash");

       // if (nombreCache === (this.nombre) && claveHashCache === this.codificar(this.clave) ? 'Éxito' : 'Falló')
       if (nombreCache === (this.nombre) && claveHashCache === this.codificar(this.clave))
        {
          //  this.router.navigateByUrl('/home')
          this.resultado=1;
            alert('hola');
        }
        else
      
     {
     //   this.router.navigateByUrl('/login')
     this.resultado=2;
                 return  alert (nombreCache === (this.nombre) && claveHashCache === this.codificar(this.clave) ? 'Éxito' : 'Falló');
     }
  //return  console.log (nombreCache === (this.nombre) && claveHashCache === this.codificar(this.clave) ? 'Éxito' : 'Falló');
    }

    private codificar(palabra: string): string {
        let caracteres = Array.from(palabra)
        let sumaCaracteres = 0;
        for (let i = 0; i < caracteres.length; i++) {
            if (!this.validateAsciiCode(caracteres[i]))
                return '';
            const caracterAsciiCode = caracteres[i].charCodeAt(0);
            if (i % 2 == 0)
                caracteres[i] = String.fromCharCode(caracterAsciiCode - 3)
            else
                caracteres[i] = String.fromCharCode(caracterAsciiCode + 1)
            sumaCaracteres += caracterAsciiCode;
        }
        let ultimoCaracter = String.fromCharCode(sumaCaracteres % caracteres.length);
        this.validateAsciiCode(ultimoCaracter) ? caracteres.push(ultimoCaracter) : caracteres.push(String.fromCharCode(90));
        return Usuario.arrayCharToString(caracteres);
    }

    private validateAsciiCode(char: string): boolean {
        let isValidChar = false;

        if (char.length == 1) {
            let charCode = char.charCodeAt(0);
            isValidChar = charCode >= 32 && charCode <= 125;
        }

        return isValidChar;
    }

    private static arrayCharToString(arrayChar: Array<string>): string {
        let resultado = '';
        arrayChar.forEach(char => {
            resultado += char;
        });
        return resultado;
    }


}
