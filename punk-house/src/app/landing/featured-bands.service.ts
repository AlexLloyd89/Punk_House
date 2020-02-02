import { Injectable } from "@angular/core";
import { FeaturedBand } from "../models/featured-bands";

@Injectable({
  providedIn: "root"
})
export class FeaturedBandsService {
  dummyData: FeaturedBand[] = [
    {
      id: "0",
      bandName: "roguelike",
      image: "../../../assets/images/roguelike.jpg",
      city: "raleigh",
      state: "nc",
      country: "usa",
      mainGenre: "post hardcore",
      subGenreOne: "djent",
      subGenreTwo: "prog metal",
      featuredSong:
        "https://soundcloud.com/roguelikenc/fire-keeper-pre-production"
    },
    {
      id: "1",
      bandName: "fever strike",
      image: "../../../assets/images/feverstrike.jpg",
      city: "durham",
      state: "nc",
      country: "usa",
      mainGenre: "hardcore",
      featuredSong: "https://soundcloud.com/feverstrike/false-memory"
    },
    {
      id: "2",
      bandName: "follow your ghost",
      image: "../../../assets/images/fyg.png",
      city: "other",
      state: "south east",
      country: "usa",
      mainGenre: "djent",
      subGenreOne: "melodic",
      featuredSong:
        "https://soundcloud.com/ydroj06/repose-1?in=ydroj06/sets/followyourghost"
    },
    {
      id: "3",
      bandName: "bokeh heights",
      image: "../../../assets/images/bh.jpg",
      city: "other",
      state: "fl",
      country: "usa",
      mainGenre: "metal",
      subGenreOne: "alternative",
      subGenreTwo: "experimental",
      featuredSong: "https://soundcloud.com/bokehn_heights/feed-your-head-demo"
    }
  ];

  constructor() {}
}
