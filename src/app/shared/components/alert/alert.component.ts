import { AlertService } from './alert.service';
import { Component, Input } from '@angular/core';
import { Alert, AlertType } from './alert';

@Component({
  selector: 'ap-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent {

  @Input() timeout = 3000;
  alerts: Alert[] = [];

  constructor(private alertService: AlertService) {
    this.alertService
      .getAlert()
      .subscribe(alert => {
        if (!alert) {
          this.alerts = [];
          return;
        }
        this.alerts.push(alert);
        setTimeout(() => this.removerAlert(alert), this.timeout);
      });
  }

  removerAlert(alertToRemove: Alert) {
    this.alerts = this.alerts.filter(alert => alert !== alertToRemove);
  }

  getAlertClass(alert: Alert) {
    if (!alert) {
      return;
    }

    switch (alert.alertType) {
      case AlertType.SUCCESS:
        return 'alert alert-success';

      case AlertType.DANGER:
        return 'alert alert-danger';

      case AlertType.WARNING:
        return 'alert alert-warning';

      case AlertType.INFO:
        return 'alert alert-info';

    }
  }
}

