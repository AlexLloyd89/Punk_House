import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { SignInDialogComponent } from "../../shared/components/sign-in-dialog/sign-in-dialog.component";

@Component({
  selector: "app-hero-image",
  templateUrl: "./hero-image.component.html",
  styleUrls: ["./hero-image.component.scss"]
})
export class HeroImageComponent implements OnInit {
  signInDialogRef: MatDialogRef<SignInDialogComponent>;
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  handleDialog() {
    this.signInDialogRef = this.dialog.open(SignInDialogComponent);
  }
}
