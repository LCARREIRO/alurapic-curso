import { ServerLogService } from './server-log.service';
import { UserService } from './../../core/user/user.service';
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { ErrorHandler, Inject, Injectable, Injector } from "@angular/core";
import * as StackTrace from 'stacktrace-js';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector, private userService: UserService) { }

  handleError(error: any): void {
    console.log('passei pelo handler:');

    const location = this.injector.get(LocationStrategy);
    const userService = this.injector.get(UserService);
    const serverLogService = this.injector.get(ServerLogService);
    const router = this.injector.get(Router);

    const message = error.message ? error.message : error.toString();
    const url = location instanceof PathLocationStrategy ? location.path() : '';

    router.navigate(['/error']);
    StackTrace
      .fromError(error)
      .then(stackFrames => {
        const stackAsString = stackFrames
          .map(sf => sf.toString())
          .join('\n');
        // console.log(stackAsString);
        // console.log(message);
        console.log('enviar para o servidor:');
        console.log({ message: message, url, userName: this.userService.getUserName(), stack: stackAsString })
        serverLogService.log({
          message,
          url,
          userName: this.userService.getUserName(),
          stack: stackAsString
        }).subscribe(
          () => console.log('Error logged on server'),
          err => {
            console.log(err);
            console.log('Fail to send error log to server');
          }

        )
      })
    throw error;
  }

}
