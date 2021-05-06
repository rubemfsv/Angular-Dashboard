import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatasService {
  readonly datas = [
    ['Janeiro', 33],
    ['Fevereiro', 68],
    ['Março', 49],
    ['Abril', 15],
    ['Maio', 80],
    ['Junho', 27],
  ];

  constructor() {}

  /**
   * Returns an observable containing tha datas to be
   * showed in the graph
   *
   * @return Observable<any>
   */
  obtainsData(): Observable<any> {
    return new Observable((observable) => {
      observable.next(this.datas);
      observable.complete();
    });
  }
}
