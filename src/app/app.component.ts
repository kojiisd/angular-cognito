import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { CognitoService } from './cognito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CognitoService]
})
export class AppComponent {
  userName = '';
  password = '';

  constructor(
    private cognitoService: CognitoService,
    private http: Http
  ) { }

  signIn() {
    this.cognitoService.signIn(this.userName, this.password);
  }
}
