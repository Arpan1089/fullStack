

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';



@Component({
    selector: 'configurationPatrol',
    templateUrl: './configurationPatrol.component.html'
})
export class ConfigurationPatrolComponent {
    isPopup:boolean;
    p: number = 1;
    flag:number =0;
    searchStr:String =null;
    filterPatrol: any;
    edit ={};
    // filterPatrol: {name:String ,mode:String}[];
    products: any =
        [
            { "name": "Patrol2", "mode": "Inp rogress" },
            { "name": "Patrol1", "mode": "Inp rogress" },
            { "name": "Patrol3", "mode": "Inp rogress" },
            { "name": "Patrol4", "mode": "Inp rogress" },
            { "name": "Patrol5", "mode": "Inp rogress" },
            { "name": "Patrol6", "mode": "Inp rogress" },
            { "name": "Patrol7", "mode": "Inp rogress" },
            { "name": "Patrol8", "mode": "Inp rogress" },
            { "name": "Patrol9", "mode": "Inp rogress" },
            { "name": "Patrol10", "mode": "Inp rogress" },
            { "name": "Patrol11", "mode": "Inp rogress" }]



constructor(private http:Http){
//https://jsonplaceholder.typicode.com/posts
   
}

ngoninit(){
    this.http.get('./assets/data.json')
    .subscribe(response =>{
        this.products=response.json();
    });

}

    filter1(query: String) {
        this.flag=1;
        this.filterPatrol = (query) ?
            this.products.filter(p => {
                if (p.name === query) {                
                    return p;
                }
                
            }) :
            this.products;   
    }

    clr(query: String){
        this.searchStr ='';       
    }

    editing(pro){
        this.isPopup =true;
        console.log("Produst every::::"+pro);
    }
}

