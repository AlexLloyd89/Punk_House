import { Component, OnInit } from "@angular/core";
import { STATES } from "src/app/consts/states";
import { GENRES } from "src/app/consts/genres";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-browse",
  templateUrl: "./browse.component.html",
  styleUrls: ["./browse.component.scss"]
})
export class BrowseComponent implements OnInit {
  browseForm: FormGroup;
  states: string[] = [];
  genres: string[] = [];
  constructor() {}

  ngOnInit() {
    this.states = STATES;
    this.genres = GENRES;
    this.generateBrowseForm();
  }

  generateBrowseForm(): void {
    this.browseForm = new FormGroup({
      keywords: new FormControl(""),
      city: new FormControl(""),
      state: new FormControl("", [Validators.required]),
      distance: new FormControl(""),
      mainGenre: new FormControl("", [Validators.required]),
      subGenreOne: new FormControl(""),
      subGenreTwo: new FormControl("")
    });
  }

  submitBrowserForm(formData): void {
    console.log(formData.value);
  }
}
