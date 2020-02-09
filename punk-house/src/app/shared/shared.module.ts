import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

// Material Imports
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatSelectModule,
  MatToolbarModule,
  MatDialogModule
} from "@angular/material";

// Custom Components
import { SignInDialogComponent } from "./components/sign-in-dialog/sign-in-dialog.component";

@NgModule({
  declarations: [SignInDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatToolbarModule,
    MatDialogModule,
    FormsModule
  ],
  exports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatToolbarModule,
    MatDialogModule
  ],
  entryComponents: [SignInDialogComponent]
})
export class SharedModule {}
