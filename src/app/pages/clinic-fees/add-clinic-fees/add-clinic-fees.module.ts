import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddClinicFeesComponenet, } from './add-clinic-fees.component';
import { FormsModule } from '@angular/forms';
import { ClinicFeesModule } from '../clinic-fees.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
    FormsModule
  ]
})
export class AddClinicFeesModule { }
