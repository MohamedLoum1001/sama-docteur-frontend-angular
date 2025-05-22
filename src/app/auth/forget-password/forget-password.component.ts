import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router,} from '@angular/router';

@Component({
  selector: 'app-forget-password',
  imports: [CommonModule, FormsModule,],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  showPassword = false;
  showConfirmPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  constructor(private router: Router){}
  loginData(){
    this.router.navigate(['login']);
  }
  resetPassword() {
    // logique de soumission
  }

}
