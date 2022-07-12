import {Component, OnInit, ViewChild} from '@angular/core';
import {Post} from "../../interfaces/interfaces";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

let POSTS: Post[] = [
  {id: 1, title:'First post', urlPict: '', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto, blanditiis cupiditate et maxime numquam odio voluptas! Accusantium amet autem consequuntur, dicta, doloribus dolorum eos et facere fuga, id mollitia nisi sequi suscipit! Dolorem ducimus eveniet excepturi nobis suscipit. Delectus dolorum expedita magni. Architecto doloremque laudantium nam quae quaerat quod?',author: 'S.Y.Moskalenko',date:new Date},
  {id: 2, title:'Second post', urlPict: '', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto, blanditiis cupiditate et maxime numquam odio voluptas! Accusantium amet autem consequuntur, dicta, doloribus dolorum eos et facere fuga, id mollitia nisi sequi suscipit! Dolorem ducimus eveniet excepturi nobis suscipit. Delectus dolorum expedita magni. Architecto doloremque laudantium nam quae quaerat quod?',author: 'S.Y.Moskalenko',date:new Date},
  {id: 3, title:'Thr post',urlPict: '', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto, blanditiis cupiditate et maxime numquam odio voluptas! Accusantium amet autem consequuntur, dicta, doloribus dolorum eos et facere fuga, id mollitia nisi sequi suscipit! Dolorem ducimus eveniet excepturi nobis suscipit. Delectus dolorum expedita magni. Architecto doloremque laudantium nam quae quaerat quod?',author: 'S.Y.Moskalenko',date:new Date},
  {id: 4, title:'Fours post',urlPict: '', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto, blanditiis cupiditate et maxime numquam odio voluptas! Accusantium amet autem consequuntur, dicta, doloribus dolorum eos et facere fuga, id mollitia nisi sequi suscipit! Dolorem ducimus eveniet excepturi nobis suscipit. Delectus dolorum expedita magni. Architecto doloremque laudantium nam quae quaerat quod?',author: 'S.Y.Moskalenko',date:new Date},
  {id: 5, title:'Fiw post',urlPict: '', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto, blanditiis cupiditate et maxime numquam odio voluptas! Accusantium amet autem consequuntur, dicta, doloribus dolorum eos et facere fuga, id mollitia nisi sequi suscipit! Dolorem ducimus eveniet excepturi nobis suscipit. Delectus dolorum expedita magni. Architecto doloremque laudantium nam quae quaerat quod?',author: 'S.Y.Moskalenko',date:new Date},
  {id: 6, title:'Post6',urlPict: '', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto, blanditiis cupiditate et maxime numquam odio voluptas! Accusantium amet autem consequuntur, dicta, doloribus dolorum eos et facere fuga, id mollitia nisi sequi suscipit! Dolorem ducimus eveniet excepturi nobis suscipit. Delectus dolorum expedita magni. Architecto doloremque laudantium nam quae quaerat quod?',author: 'S.Y.Moskalenko',date:new Date},
  {id: 7, title:'Post7',urlPict: '', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto, blanditiis cupiditate et maxime numquam odio voluptas! Accusantium amet autem consequuntur, dicta, doloribus dolorum eos et facere fuga, id mollitia nisi sequi suscipit! Dolorem ducimus eveniet excepturi nobis suscipit. Delectus dolorum expedita magni. Architecto doloremque laudantium nam quae quaerat quod?',author: 'S.Y.Moskalenko',date:new Date},
  {id: 8, title:'Post8',urlPict: '', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto, blanditiis cupiditate et maxime numquam odio voluptas! Accusantium amet autem consequuntur, dicta, doloribus dolorum eos et facere fuga, id mollitia nisi sequi suscipit! Dolorem ducimus eveniet excepturi nobis suscipit. Delectus dolorum expedita magni. Architecto doloremque laudantium nam quae quaerat quod?',author: 'S.Y.Moskalenko',date:new Date},
  {id: 9, title:'Post9',urlPict: '', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto, blanditiis cupiditate et maxime numquam odio voluptas! Accusantium amet autem consequuntur, dicta, doloribus dolorum eos et facere fuga, id mollitia nisi sequi suscipit! Dolorem ducimus eveniet excepturi nobis suscipit. Delectus dolorum expedita magni. Architecto doloremque laudantium nam quae quaerat quod?',author: 'S.Y.Moskalenko',date:new Date},
  {id: 10, title:'Post10',urlPict: '', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto, blanditiis cupiditate et maxime numquam odio voluptas! Accusantium amet autem consequuntur, dicta, doloribus dolorum eos et facere fuga, id mollitia nisi sequi suscipit! Dolorem ducimus eveniet excepturi nobis suscipit. Delectus dolorum expedita magni. Architecto doloremque laudantium nam quae quaerat quod?',author: 'S.Y.Moskalenko',date:new Date},
  {id: 11, title:'post11',urlPict: '', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto, blanditiis cupiditate et maxime numquam odio voluptas! Accusantium amet autem consequuntur, dicta, doloribus dolorum eos et facere fuga, id mollitia nisi sequi suscipit! Dolorem ducimus eveniet excepturi nobis suscipit. Delectus dolorum expedita magni. Architecto doloremque laudantium nam quae quaerat quod?',author: 'S.Y.Moskalenko',date:new Date},
  {id: 12, title:'post12',urlPict: '', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto, blanditiis cupiditate et maxime numquam odio voluptas! Accusantium amet autem consequuntur, dicta, doloribus dolorum eos et facere fuga, id mollitia nisi sequi suscipit! Dolorem ducimus eveniet excepturi nobis suscipit. Delectus dolorum expedita magni. Architecto doloremque laudantium nam quae quaerat quod?',author: 'S.Y.Moskalenko',date:new Date},
  {id: 13, title:'post13',urlPict: '', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto, blanditiis cupiditate et maxime numquam odio voluptas! Accusantium amet autem consequuntur, dicta, doloribus dolorum eos et facere fuga, id mollitia nisi sequi suscipit! Dolorem ducimus eveniet excepturi nobis suscipit. Delectus dolorum expedita magni. Architecto doloremque laudantium nam quae quaerat quod?',author: 'S.Y.Moskalenko',date:new Date},
  {id: 14, title:'post14',urlPict: '', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto, blanditiis cupiditate et maxime numquam odio voluptas! Accusantium amet autem consequuntur, dicta, doloribus dolorum eos et facere fuga, id mollitia nisi sequi suscipit! Dolorem ducimus eveniet excepturi nobis suscipit. Delectus dolorum expedita magni. Architecto doloremque laudantium nam quae quaerat quod?',author: 'S.Y.Moskalenko',date:new Date},
  {id: 15, title:'post15',urlPict: '', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto, blanditiis cupiditate et maxime numquam odio voluptas! Accusantium amet autem consequuntur, dicta, doloribus dolorum eos et facere fuga, id mollitia nisi sequi suscipit! Dolorem ducimus eveniet excepturi nobis suscipit. Delectus dolorum expedita magni. Architecto doloremque laudantium nam quae quaerat quod?',author: 'S.Y.Moskalenko',date:new Date},
  {id: 16, title:'post16',urlPict: '', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto, blanditiis cupiditate et maxime numquam odio voluptas! Accusantium amet autem consequuntur, dicta, doloribus dolorum eos et facere fuga, id mollitia nisi sequi suscipit! Dolorem ducimus eveniet excepturi nobis suscipit. Delectus dolorum expedita magni. Architecto doloremque laudantium nam quae quaerat quod?',author: 'S.Y.Moskalenko',date:new Date},
  {id: 17, title:'post17',urlPict: '', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto, blanditiis cupiditate et maxime numquam odio voluptas! Accusantium amet autem consequuntur, dicta, doloribus dolorum eos et facere fuga, id mollitia nisi sequi suscipit! Dolorem ducimus eveniet excepturi nobis suscipit. Delectus dolorum expedita magni. Architecto doloremque laudantium nam quae quaerat quod?',author: 'S.Y.Moskalenko',date:new Date},
  {id: 18, title:'post18',urlPict: '', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto, blanditiis cupiditate et maxime numquam odio voluptas! Accusantium amet autem consequuntur, dicta, doloribus dolorum eos et facere fuga, id mollitia nisi sequi suscipit! Dolorem ducimus eveniet excepturi nobis suscipit. Delectus dolorum expedita magni. Architecto doloremque laudantium nam quae quaerat quod?',author: 'S.Y.Moskalenko',date:new Date},
  {id: 19, title:'post19',urlPict: '', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto, blanditiis cupiditate et maxime numquam odio voluptas! Accusantium amet autem consequuntur, dicta, doloribus dolorum eos et facere fuga, id mollitia nisi sequi suscipit! Dolorem ducimus eveniet excepturi nobis suscipit. Delectus dolorum expedita magni. Architecto doloremque laudantium nam quae quaerat quod?',author: 'S.Y.Moskalenko',date:new Date},
  {id: 20, title:'post20',urlPict: '', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto, blanditiis cupiditate et maxime numquam odio voluptas! Accusantium amet autem consequuntur, dicta, doloribus dolorum eos et facere fuga, id mollitia nisi sequi suscipit! Dolorem ducimus eveniet excepturi nobis suscipit. Delectus dolorum expedita magni. Architecto doloremque laudantium nam quae quaerat quod?',author: 'S.Y.Moskalenko',date:new Date},
  {id: 21, title:'post21',urlPict: '', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto, blanditiis cupiditate et maxime numquam odio voluptas! Accusantium amet autem consequuntur, dicta, doloribus dolorum eos et facere fuga, id mollitia nisi sequi suscipit! Dolorem ducimus eveniet excepturi nobis suscipit. Delectus dolorum expedita magni. Architecto doloremque laudantium nam quae quaerat quod?',author: 'S.Y.Moskalenko',date:new Date},
  {id: 22, title:'First',urlPict: '', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto, blanditiis cupiditate et maxime numquam odio voluptas! Accusantium amet autem consequuntur, dicta, doloribus dolorum eos et facere fuga, id mollitia nisi sequi suscipit! Dolorem ducimus eveniet excepturi nobis suscipit. Delectus dolorum expedita magni. Architecto doloremque laudantium nam quae quaerat quod?',author: 'S.Y.Moskalenko',date:new Date},
  {id: 23, title:'post23', urlPict: '',body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto, blanditiis cupiditate et maxime numquam odio voluptas! Accusantium amet autem consequuntur, dicta, doloribus dolorum eos et facere fuga, id mollitia nisi sequi suscipit! Dolorem ducimus eveniet excepturi nobis suscipit. Delectus dolorum expedita magni. Architecto doloremque laudantium nam quae quaerat quod?',author: 'S.Y.Moskalenko',date:new Date},
]

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns : string[] = ['id','title','body','author','date'];
  dataSource = new MatTableDataSource(POSTS);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value;
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;

  }

}



