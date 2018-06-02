import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  id : number;
  weld : number;
  constructor(
    private router :Router,
    private route : ActivatedRoute) { 

  }



  ngOnInit() {

    let params=this.route.snapshot.paramMap;

    this.id= +params.get('id');
    this.weld= +params.get('weld');
  }

viewAll(){

  this.router.navigate(['/']);
}

}
