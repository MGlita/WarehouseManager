import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoginService } from './login/login.service';
import { faBoxes, faClipboardList, faHandHolding, faPlus, faHandPointRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  faBoxes = faBoxes
  faReceive = faHandHolding
  faOrder = faClipboardList
  faPlus = faPlus
  faHandPointRight = faHandPointRight

  title = 'Warehouse-management';
  constructor(private loginService: LoginService, private authService: AuthService) {}
  logout(){
    this.loginService.logout();
  }
  isLoggedIn(){
    return true;//this.authService.isAuthenticated();
  }
}
