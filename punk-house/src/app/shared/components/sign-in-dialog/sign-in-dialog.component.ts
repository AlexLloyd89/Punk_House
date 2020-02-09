import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-sign-in-dialog",
  templateUrl: "./sign-in-dialog.component.html",
  styleUrls: ["./sign-in-dialog.component.scss"]
})
export class SignInDialogComponent implements OnInit {
  signInForm: FormGroup;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.generateSignInForm();
  }

  generateSignInForm(): void {
    this.signInForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    });
  }

  submitSignInForm(formData) {
    console.log(formData.value);
    this.authService.signUp(formData.value.email, formData.value.password);
  }

  googleLogIn() {
    this.authService.doGoogleLogin();
  }
}
