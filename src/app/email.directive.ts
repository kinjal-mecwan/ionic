import { Directive } from '@angular/core';
import { EmployeeService } from './employee.service';
import { AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, map } from 'rxjs';

@Directive({
  selector: '[appEmail]',
  providers: [
    {
      provide:  NG_ASYNC_VALIDATORS,
      useExisting: EmailDirective,
      multi: true,
    },
  ],
})
export class EmailDirective {

  constructor(private empService:EmployeeService) { }
  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    debugger
    return this.empService.checkEmail(control.value).pipe(
       map(users=>{
         return users ? { Email: { value: control.value } } : null;
     })
     );
   }  

}
