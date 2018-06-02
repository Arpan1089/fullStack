import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'dropDown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropDown.component.css']
})
export class DropDown  {

    flag:number;
    valueSelected : String;

    configuration =[
{id:1 ,weld:'Configuration Patrol'},
{id:2 ,weld:'Configuration Part'},
{id:3 ,weld:'Team'},
{id:4 ,weld:'Order'},
    ];
     
constructor(
    private router :Router
){}

optChange(){
    this.flag= 1;
console.log("CHange"+this.valueSelected);
    this.router.navigate(['/patrol']);
}
}

