import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  otpCode: string;
  showOtpInput: boolean;
  otpMessage: string;

  constructor() {
    this.otpCode = "";
    this.showOtpInput = false;
    this.otpMessage = "";
  }

  generateOTP(): void {
    this.showOtpInput = true;
    this.otpCode = '123456';
  }

  validateOTP(): void {
    this.otpMessage = "Código OTP válido!"
  }

}
