import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // isUserLoggedIn: boolean = false;

  constructor(private hardcodedAuthService: HardcodedAuthService) { }

  ngOnInit() {
    // this.isUserLoggedIn = this.hardcodedAuthService.isUserLoggedIn();
  }

}
