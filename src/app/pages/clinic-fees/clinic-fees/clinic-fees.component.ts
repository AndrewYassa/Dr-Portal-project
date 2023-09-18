import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericResponse } from '@interfaces/Generic/i-response';
import { IClinic } from '@interfaces/clinic/clinic';
import { AddClinicFeesService } from '@services/add-clinic-fees/add-clinic-fees.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'clinic-fees',
  templateUrl: './clinic-fees.component.html',
  styleUrls: ['./clinic-fees.component.scss']
})
export class ClinicFeesComponent implements OnInit {
  
  addClinicFees:any[];
  AppointmentFees: number;
  FollowUpFees: number;
  DiscountPercentage: number;
  
  success: string;
  showFees: boolean = false;
 
  loading = false;
  clinicFees:any[];

  constructor(
    private route: ActivatedRoute, private router: Router,
    
    private addClinicFeesService : AddClinicFeesService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getClinicFees();
  }

  getClinicFees() {
    this.loading = true;
    this.spinner.show();
    this.addClinicFeesService.getAllClinicFees()
    
    .subscribe(
      (response) => {
       
        
      },
      (error) => {
        console.log(error);
        
      }
    );
    }
  }