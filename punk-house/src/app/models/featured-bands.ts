export interface FeaturedBand {
  id: string;
  bandName: string;
  image: string;
  city: string;
  state: string;
  country: string;
  mainGenre: string;
  subGenreOne?: string;
  subGenreTwo?: string;
  featuredSong: string;
}
