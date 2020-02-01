import { Component, OnInit } from "@angular/core";
import { STATES } from "src/app/consts/states";
import { GENRES } from "src/app/consts/genres";

@Component({
  selector: "app-browse",
  templateUrl: "./browse.component.html",
  styleUrls: ["./browse.component.scss"]
})
export class BrowseComponent implements OnInit {
  states: string[] = [];
  genres: string[] = [];
  constructor() {}

  ngOnInit() {
    this.states = STATES;
    this.genres = GENRES;
  }
}
