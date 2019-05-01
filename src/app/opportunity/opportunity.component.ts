import { Component, OnInit } from '@angular/core';
import { RoversService } from '../rovers.service';



//let url = `https://mars-photos.herokuapp.com/api/v1/rovers/opportunity/photos?earth_date=${this.state.date}`;


@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css']
})


export class OpportunityComponent implements OnInit {

  opportunity: any;
  opportunityP: any;

  constructor(private rovers: RoversService) { }

  getRover() {
    this.rovers.getOpportunity()
      .subscribe(
        data => {
          let dataRover: any = data;
          this.opportunity = dataRover.rover;
          //console.log(data);
          //console.log(this.opportunity)
        })
  }

  ngOnInit() {
      this.getRover();
  }

  onSubmit(solNum: number): void{
    //console.log(solNum);
    this.rovers.getOpportunityPhotos(solNum).subscribe(
      data => {
        let dataPhotos:any = data;
        this.opportunityP = dataPhotos.photos;
        //console.log(data)
        //console.log(this.opportunityP)
      }
    )
  }
}
