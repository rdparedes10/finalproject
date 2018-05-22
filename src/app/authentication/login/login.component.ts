import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName ;
  pass;
  constructor(private router:Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }
  login(){
    this.router.navigateByUrl("authentication/home/"+this.userName+" "+this.pass);
  }

  getUserName(userName){
    this.userName = userName;
  }
  getPass(pass){
    this.pass = pass;
  }
}

