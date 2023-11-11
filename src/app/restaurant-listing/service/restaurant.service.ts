import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {API_URL_RESTAURANT} from "../../constants/url";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private apiUrl = API_URL_RESTAURANT + '/restaurant/fetchAllRestaurants'
  constructor(private httpClient: HttpClient) { }

  getAllRestaurant(): Observable<any>{
    return this.httpClient.get<any>(`${this.apiUrl}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error.message || error);
  }
}
