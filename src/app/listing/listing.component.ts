import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  names = ["Ed", "Edd", "Eddy", "Number 1", "Josh", "Drake", "Thanos", "Gian"];
  
  constructor() { }
  
  onClick = (e) => {
    console.log(e.currentTarget.innerText + " was snapped.  ");
    e.currentTarget.style.display = "none";
    console.log("BEFORE: "+ this.names.length);
    this.names.splice(this.names.indexOf(e.currentTarget.innerText),1);
    console.log("AFTER: "+ this.names.length);
    
  }

  ngOnInit() {
    console.log("Initialized1")
  }

}
