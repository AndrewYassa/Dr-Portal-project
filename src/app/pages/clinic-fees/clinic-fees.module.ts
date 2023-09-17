import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicFeesComponent } from './clinic-fees/clinic-fees.component';
import { ClinicFeesRoutingModule } from './clinic-fees-routing.module';
import { AddClinicFeesComponenet, } from './add-clinic-fees/add-clinic-fees.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClinicFeesComponent, AddClinicFeesComponenet
  ],
  imports: [CommonModule, ClinicFeesRoutingModule, ReactiveFormsModule,FormsModule],
})
export class ClinicFeesModule {}
