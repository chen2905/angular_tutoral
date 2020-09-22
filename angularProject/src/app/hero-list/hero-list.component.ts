import { Component, OnInit } from '@angular/core';
import { HeroListService } from '../hero-list.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

public heros = [];
public errorMsg;
  constructor(private _heroService : HeroListService) { }

  ngOnInit(): void {

   this._heroService.getHeroList()
        .subscribe(data=>this.heros=data,
                  error=>this.errorMsg=error
          );
  }

}
