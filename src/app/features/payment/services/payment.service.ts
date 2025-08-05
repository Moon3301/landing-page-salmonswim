import { Injectable } from "@angular/core";
import { firstValueFrom, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Country, Region } from "../../../core/models/contact-payment.model";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient){}


  getRegions(): Promise<Country> {
    return firstValueFrom(this.http.get<Country>('public/mocks/regions_chile.json'));
  }



}