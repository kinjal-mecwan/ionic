import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
url="https://localhost:7255/api/employee"
cityUrl="https://localhost:7255/api/employee/city"
emailUrl="https://localhost:7255/api/checkEmail/"
url_id="https://localhost:7255/api/sms/"
isLogged=true
  constructor(private http:HttpClient) { }

  addEmp(emp:Employee)
  {
    return this.http.post(this.url,emp)
  }

  getCity(){
    return this.http.get(this.cityUrl)
  }
  checkEmail(email:string)
  {
    debugger
      return this.http.get("https://localhost:7255/api/checkEmail/"+email);
  }
  getEmpData(){
    return this.http.get(this.url)
  }
  getId(id:number){
    return this.http.get(this.url_id+id)
  }
  isAuthenticated(){
    return this.isLogged;
  }
}
