import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
 
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { UserService} from './user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule,MatSelectModule  } from "@angular/material"
@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule
 
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }


 