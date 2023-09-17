import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericResponse } from '@interfaces/Generic/i-response';
import { IClinic } from '@interfaces/clinic/clinic';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddClinicFeesService {
  addClinicFeesApi = 'api/Clinic/AddClinicFees';
  getClinicFees = 'api/Clinic/GetClinicFees'

  constructor(private http: HttpClient) { }

  addClinicFees(body: {
    AppointmentFees: number;
    FollowUpFees: number;
    DiscountPercentage: number



  }): Observable<GenericResponse<IClinic>> {
    return this.http.post<GenericResponse<IClinic>>(this.addClinicFeesApi, body);
}

getClinicFess():Observable<GenericResponse<IClinic>>{


return this.http.get<GenericResponse<IClinic>>(this.getClinicFees);

}
}