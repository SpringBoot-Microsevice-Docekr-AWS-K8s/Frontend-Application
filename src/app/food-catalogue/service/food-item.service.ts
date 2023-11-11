import {Injectable} from '@angular/core';
import {API_URL_FOOD_CATALOGUE} from "../../constants/url";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FoodItemService {

  private apiUrl = API_URL_FOOD_CATALOGUE + '/foodCatalogue/fetchRestaurantAndFoodItemsById/';

  constructor(private http: HttpClient) {
  }

  getFoodItemsByRestaurant(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl + id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error.message || error);
  }
}
