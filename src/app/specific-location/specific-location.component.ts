import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-specific-location',
  templateUrl: './specific-location.component.html',
  styleUrls: ['./specific-location.component.scss']
})
export class SpecificLocationComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  
  
  v = 'v=20180323';
  client_id = 'client_id=F2RPZRORI153NZRIJ0YDEQEGIAKW0WDTPXP0AGDDDEXPN4HX';
  client_secret = 'client_secret=05P3UNFOLXF2UMK04ZFKNNUEDN40VV55DJU1VZQFIL0NVHOH';
  longlat = 'll=40.7243,-74.0018';
  venue_id = '4bad93d7f964a520b05c3be3'; //Mele uyithole from the other link when they search for a location or something
  url = "https://api.foursquare.com/v2/venues/"+this.venue_id+"/photos/?"+this.v+"&"+this.client_id+"&"+this.client_secret;
 size = "300x500";
results= [];

  ngOnInit() 
  {
    this.httpClient.get(this.url).subscribe((data:any[])=>{
      this.results = data;
   })
  }

}
