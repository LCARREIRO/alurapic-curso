import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Alert, AlertType } from './alert';

@Injectable({ providedIn: 'root' })
export class AlertService {

  alertSubject: Subject<Alert> = new Subject<Alert>();

  success(message: string) {
    this.alert(AlertType.SECCESS, message);
  }
  warning(message: string) {
    this.alert(AlertType.WARNING, message);
  }
  danger(message: string) {
    this.alert(AlertType.DANGER, message);
  }
  info(message: string) {
    this.alert(AlertType.INFO, message);
  }

  private alert(alertType: AlertType, message: string) {
    this.alertSubject.next(new Alert(alertType, message));
  }

  getAlert() {
    return this.alertSubject.asObservable();
  }
}
