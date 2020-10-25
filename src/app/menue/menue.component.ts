import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from './../menu-service.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css']
})
export class MenueComponent implements OnInit {

  MenuList: any;
  constructor(private menueService: MenuServiceService) { }

  ngOnInit(): void {
    this.menueService.getJSON().subscribe(

      (data) => {
        this.MenuList = data;
        console.log('data' + JSON.stringify(data));
      }
    ),
    // tslint:disable-next-line: no-unused-expression
    (error: any) => {
      return console.log(error);
    }
    ,
    // tslint:disable-next-line: no-unused-expression
    () => {
      console.log(this.MenuList);
    };



  }

}
