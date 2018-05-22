import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class AdministrateService {

  constructor(private http:HttpClient){
  }
  consultar<T>(url:string): Observable<T[]> {
		return this.http.get<T[]>(url).pipe(
			map((collection: T[]) => {
        return collection;
			})
    );
  }
  //Agrega Project, Employee
  insertar(url:string,data) {
    this.http.put(url, data).subscribe(
      console.log
      );
  }
  //Borrar informacion de Project, Employee
  deteleData(url:string,id:string){
    let urlCon = url + "/" + id;
    this.http.delete(urlCon);
  }
}
