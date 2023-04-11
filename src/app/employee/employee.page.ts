import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ToastController } from '@ionic/angular';
import { Observable, catchError, map, of } from 'rxjs';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage implements OnInit {
empForm:FormGroup
cities=[]
_emailId
  
  constructor(private empService:EmployeeService,private formBuilder:FormBuilder,private toastController: ToastController) { }

  ngOnInit() {
    this.empForm=this.formBuilder.group({
      FName:['',[Validators.required]],
      MName:['',[Validators.required]],
      LName:['',[Validators.required]],
      EmailId:['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      PhoneNo:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      Address:['',[Validators.required]],
      Gender:['',[Validators.required]],
      City:['',[Validators.required]],
      Position:['',[Validators.required]],
      Department:['',[Validators.required]],
      DateOfBirth:['',[Validators.required]],
      Technology:['',[Validators.required]],
      IsActive:[false,[Validators.requiredTrue]]
    })

    this.getCity();
    this.addValidator();
  }

  addValidator(){
    this.empForm.controls['EmailId'].setAsyncValidators([ this.uniqueEmailValidator()]);
  }

  onSubmit(){
    this.addEmployee()
    this.empForm.reset();
  }

  addEmployee(){
      this.empService.addEmp(this.empForm.value).subscribe((res)=>(console.log(res)),(error)=>(console.log(error)) )
  }
  get value() {
    return this.empForm.controls;
  }

  getCity(){
    this.empService.getCity().subscribe((res:any)=>{this.cities=res; console.log(res)},(error)=>(console.log(error)))
  }

  async presentToast(position: 'top' | 'middle' | 'bottom' ) {
    const toast = await this.toastController.create({
      message: 'Record Inserted',
      duration: 1500,
      position: position,
      cssClass: 'custom-toast'
    });
    await toast.present();
  }
  uniqueEmailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.empService.checkEmail(control.value).pipe(
        map((exists) => (exists ? { emailExists: true } : null)),
        catchError((err) => null)
      );
    };
  }

}
