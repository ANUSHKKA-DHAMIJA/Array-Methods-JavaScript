import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice';
  name = 'Anushkka';
  result='';
  newname='';
  answer:any;
  array4=[''];
  array3=["john", "JACOB", "jinGleHeimer", "schmidt"];
  array2=[];
  array1 = [
    {name: 'a',
    list: [1,2,3],
    },
    {name: 'b',
    list: [4,5,6],
    },
    {name: 'c',
    list: [7, 8, 9],
    },
    ]
    togglereduce=false;
    onclickreduce(){
      this.array2 = this.array1.reduce(function (array2, item: any) {
        let result = array2.concat(item.list);
        return result;
      },[]);
      this.togglereduce=!this.togglereduce;
    }

    toggleslice=false;
    onclickslice(){
      this.toggleslice=!this.toggleslice;
     this.newname=this.name.slice(0,3);
     this.result= this.newname.concat("pama");
    }
    togglemap=false;
    onclickmap(){
      this.togglemap=!this.togglemap;
      this.array4=this.array3.map(ele => ele.toUpperCase());
    }     
}
