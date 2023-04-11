import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {
  employees

  constructor(private empService:EmployeeService) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.empService.getEmpData().subscribe((res:any)=>{this.employees=res; console.log(res)},(error)=>{console.log(error)})
  }
  getEmpId(id){
    debugger
    this.empService.getId(id).subscribe((res)=>{console.log(res)},(error)=>{console.log(error)});
  }
}
