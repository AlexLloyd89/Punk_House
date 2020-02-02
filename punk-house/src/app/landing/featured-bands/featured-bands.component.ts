import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FeaturedBandsService } from "../featured-bands.service";
import { FeaturedBand } from "src/app/models/featured-bands";

@Component({
  selector: "app-featured-bands",
  templateUrl: "./featured-bands.component.html",
  styleUrls: ["./featured-bands.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturedBandsComponent implements OnInit {
  featuredBands: FeaturedBand[] = [];
  constructor(private fbService: FeaturedBandsService) {}

  ngOnInit() {
    this.featuredBands = this.fbService.dummyData;
  }
}
