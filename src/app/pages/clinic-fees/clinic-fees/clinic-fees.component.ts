import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'clinic-fees',
  templateUrl: './clinic-fees.component.html',
  styleUrls: ['./clinic-fees.component.scss']
})
export class ClinicFeesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
  }

}
