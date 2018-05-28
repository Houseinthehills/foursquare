import { Component, OnInit, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venues } from '../venues';

import { trigger,stagger,transition,animate,keyframes,query,style } from '@angular/animations';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  animations: [
     trigger('listanimation',[
       transition('*=>*',[

        query(':enter', style({opacity:0}),{optional:true}),

        query(':enter', stagger('300ms',[
          animate('1s ease-in', keyframes([
            style({opacity:0, transform: 'translateY(-75px)',offset:0}),
            style({opacity:.5, transform: 'translateY(35px)',offset:0.3}),
            style({opacity:1, transform: 'translateY(0px)',offset:1}),
          ]))
        ]))
          
       ])
     ])
  ]
})
export class LocationComponent implements OnInit {

  name:  string = '';
 
  listofareas =  "Locations around Johannesburg";

  v = 'v=20180323';
	client_id = 'client_id=F2RPZRORI153NZRIJ0YDEQEGIAKW0WDTPXP0AGDDDEXPN4HX';
	client_secret = 'client_secret=05P3UNFOLXF2UMK04ZFKNNUEDN40VV55DJU1VZQFIL0NVHOH';
	longlat = 'll=-26.270760,28.112268';
	query = 'query=Johannesburg'; 
	url = "https://api.foursquare.com/v2/venues/search?"+this.v+"&"+this.client_id+"&"+this.client_secret+"&"+this.longlat+"&"+this.query; 
  
  results = [];
  
  constructor(private httpClient: HttpClient) {} 
  ngOnInit() {
       this.httpClient.get(this.url).subscribe((data:any[])=>{
       this.results = data;   
   });

  }


}
