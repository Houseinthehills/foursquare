import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image-location',
  templateUrl: './image-location.component.html',
  styleUrls: ['./image-location.component.scss']
})
export class ImageLocationComponent implements OnInit {

  title: string = "A page listing images for a location";

  constructor(private httpClient:HttpClient) { }

   v = 'v=20180323';
   client_id = 'client_id=F2RPZRORI153NZRIJ0YDEQEGIAKW0WDTPXP0AGDDDEXPN4HX';
   client_secret = 'client_secret=05P3UNFOLXF2UMK04ZFKNNUEDN40VV55DJU1VZQFIL0NVHOH';
   longlat = 'll=40.7243,-74.0018';
   venue_id = '54cf234f498eb6d4667aa8d1'; //Mele uyithole from the other link when they search for a location or something
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
