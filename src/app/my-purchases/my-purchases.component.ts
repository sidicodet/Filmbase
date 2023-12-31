import { Component, OnInit } from '@angular/core';
import { MovieListType, MyPurchasesType, NowPlayingType, ShowtimesType, TheatresNearYouType, TheatresType } from '../services/movie-app-data-model';
import { MovieAppDataService } from '../services/movie-app-data.service';

@Component({
  selector: 'app-my-purchases',
  templateUrl: './my-purchases.component.html',
  styleUrls: ['./my-purchases.component.scss']
})
export class MyPurchasesComponent implements OnInit {
  public movieAppDataMyPurchases!: MyPurchasesType[];

  constructor(
    private movieAppDataService: MovieAppDataService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.movieAppDataService.getMyPurchases().subscribe(data => this.movieAppDataMyPurchases = data);
  }
}
