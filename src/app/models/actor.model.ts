export class Actor {
  id?: string;
  onAir: boolean;
  name: string;
  firstName: string;
  death: string;
  nationality: string;
  bestMovie: string;
  picture: string;
  resume: string;
  affiche: string;


  constructor() {
    this.onAir = false;
    this.name = '';
    this.firstName = '';
    this.death = '';
    this.nationality = '';
    this.bestMovie = '';
    this.picture = '';
    this.resume = '';
    this.affiche = '';
  }
}

