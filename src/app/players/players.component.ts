import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})

export class PlayersComponent implements OnInit {
  players;

  constructor(private playersService: PlayersService) { }

  ngOnInit(): any {
    this.getPlayers();
    console.log("These are the players" + this.players)
  }

  getPlayers(){
    this.playersService.getPlayers()
      .subscribe(data => this.players = data["teams"]);
  }
}
