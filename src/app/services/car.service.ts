import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../domain/car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) {
    this.getCarsSmall().subscribe(data => {
      console.log(data);
  });
  }

  getCarsSmall(): Observable<any> {
    return this.http.get<Car>('http://localhost:3000/data');
}
}
