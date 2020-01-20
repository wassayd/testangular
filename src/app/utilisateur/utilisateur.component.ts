import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Role } from '../role.model';
import { Fonction } from '../fonction.model';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  users: User[] = [];
  roles: Role[] =[];
  fonctions: Fonction[] = [];
  objectKeys = Object.keys;

  avatar;

  constructor(private UserService: UserService) { }


  selectFonction(e, user) {
 
    
    user.fonction = e.target.value
    
    
    if(this.fonctions[e.target.value].nom == "Administrateur"){
      user.roles = ["/api/roles/1","/api/roles/2","/api/roles/3"]
    }else if(this.fonctions[e.target.value].nom == "Operateur"){
      user.roles = ["/api/roles/3"]

    }else if(this.fonctions[e.target.value].nom == "RH"){
      user.roles = ["/api/roles/2","/api/roles/3"]

    }
    this.UserService.updateUtilisateur(user.id,user).subscribe(res => console.log(res))
  }

  deleteRole(role,user){ 
            
      user.roles = user.roles.filter(val=> val!=role)
   
      this.UserService.updateUtilisateur(user.id,user).subscribe(res => console.log(res))
      
  }
  ngOnInit() {
    
    this.UserService.getUsers().subscribe(data => this.users = data['hydra:member'])

    this.UserService.getRoles().subscribe(data => data['hydra:member'].forEach(element => {this.roles[element['@id']] = element}))

    this.UserService.getFonction().subscribe(data => data['hydra:member'].forEach(element => { this.fonctions[element['@id']] = element}))

    
  }


}
