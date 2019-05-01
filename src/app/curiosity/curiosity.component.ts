import { Component, OnInit } from '@angular/core';
import { RoversService } from '../rovers.service';

@Component({
  selector: 'app-curiosity',
  templateUrl: './curiosity.component.html',
  styleUrls: ['./curiosity.component.css']
})
export class CuriosityComponent implements OnInit {
  curiosity: any;
  curiosityP: any;

  constructor(private rovers: RoversService) { }

  getCuriosity() {
    this.rovers.getCuriosity().subscribe(
      data => {
        let dataRover: any = data;
        this.curiosity = dataRover.rover;
        //console.log(data);
      }
    )
  }

  ngOnInit() {
    this.getCuriosity();
  }

  onSubmit(solNum: number): void {
    //console.log(solNum)
    this.rovers.getCuriosityPhotos(solNum).subscribe(
      data => {
        let dataPhotos: any = data;
        this.curiosityP = dataPhotos.photos;
        //console.log(this.curiosityP);
      }
    )
  }

}
