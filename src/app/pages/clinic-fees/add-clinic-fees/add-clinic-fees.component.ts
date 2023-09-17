import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  
} from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { AddClinicFeesService } from '@services/add-clinic-fees/add-clinic-fees.service';
import { showNotification } from '@helpers/show-toast';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'add-clinic-fees',
  templateUrl: './add-clinic-fees.component.html',
  styleUrls: ['./add-clinic-fees.component.scss'],
})
export class  AddClinicFeesComponenet implements OnInit {
  @Input() data: any;
  @Input() type: string;
  addClinicFees:any[];
  feesForm : FormGroup;
  AppointmentFees: number;
  FollowUpFees: number;
  DiscountPercentage: number;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private addClinicFeesService : AddClinicFeesService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    ) {}
  
  

  ngOnInit(): void {
    this.feesForm = new FormGroup({
      appointmentFees: new FormControl('', Validators.required),
      followUpFees: new FormControl('', Validators.required),
      discount: new FormControl('', Validators.required) ,
    });

    // this.addClinicFeesService.getClinicFess().subscribe({
    //   next:addClinicFeesData=>this.addClinicFees=addClinicFeesData
    // })
  }
  


  getClinicFess() {
    this.loading = true;
    this.spinner.show();
    this.addClinicFeesService.getClinicFess().subscribe(
      (response)=> {
        this.loading = false;
          this.spinner.hide();
    
  
  },
  (error) => {
    console.log(error);
    showNotification(
      'danger',
      `Something went wrong , please try again`,
      this.toastr
    );
  }
    );
}



  
  onSubmit() {
    let requestBody = {
      AppointmentFees: this.feesForm.get('appointmentFees').value,
      FollowUpFees: this.feesForm.get('followUpFees').value,
      DiscountPercentage: this.feesForm.get('discount').value
    };

    this.addClinicFeesService.addClinicFees(requestBody).subscribe(
      (response) => {
        console.log('Fees added successfully:', response);
        this.router.navigateByUrl('/');
        showNotification(
          'success',
          `Fees added succesully`,
          this.toastr
        );
      },
      (error) => {
        console.error('Error adding Fees:', error);
        showNotification(
          'danger',
          `Something went wrong , please try again`,
          this.toastr
        );
      }
    );
}
 


get appointmentFees() {
    return this.feesForm.get('appointmentFees');
  }

  get followUpFees() {
    return this.feesForm.get('followUpFees');
  }

  get discount() {
    return this.feesForm.get('discount ');
  }
}
