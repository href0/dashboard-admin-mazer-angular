import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {

  private sharedDataSubject = new BehaviorSubject<string>(''); // Ganti tipe data sesuai kebutuhan
  sharedData$ = this.sharedDataSubject.asObservable();

  setSharedTitle(data: string): void {
    this.sharedDataSubject.next(data);
  }
}
