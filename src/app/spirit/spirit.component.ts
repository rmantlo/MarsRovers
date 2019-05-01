import { Component, OnInit } from '@angular/core';
import { RoversService } from '../rovers.service';

@Component({
  selector: 'app-spirit',
  templateUrl: './spirit.component.html',
  styleUrls: ['./spirit.component.css']
})
export class SpiritComponent implements OnInit {
  spirit: any;
  spiritP: any;

  constructor(private rovers: RoversService) { }

  getRover(){
    this.rovers.getSpirit().subscribe(
      data => {
        let dataRover: any = data;
        this.spirit = dataRover.rover;
        //console.log(data);
      }
    )
  }

  ngOnInit() {
    this.getRover();
  }

  onSubmit(solNum: number){
    this.rovers.getSpiritPhotos(solNum).subscribe(
      data => {
        let dataPhotos:any = data;
        this.spiritP = dataPhotos.photos
      }
    )
  }

}
