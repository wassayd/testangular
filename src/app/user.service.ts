import { Injectable } from '@angular/core';
 
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Role } from './role.model';
import { Fonction } from './fonction.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  getUsers(){
    return this._http.get<User[]>("http://127.0.0.1:8000/api/utilisateurs")
  }

  getRoles(){
    return this._http.get<Role[]>("http://127.0.0.1:8000/api/roles")
  }

  getFonction(){
    return this._http.get<Fonction[]>("http://127.0.0.1:8000/api/fonctions")
  }

  updateUtilisateur(id:number,user:User){
    return this._http.put("http://127.0.0.1:8000/api/utilisateurs/" + id, user)
  }

  getAvatar(name:string,size:number=200){

    return this._http.get("https://api.adorable.io/avatars/"+size+"/"+name+".png")
  }


}
