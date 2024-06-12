import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
 
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/api';
 

@Injectable({
  providedIn: 'root'
})
export class GlobalAlertService {
  private messageService=inject (MessageService);
 
  constructor(

 
    private router: Router,
  ) { }

  async presentNoConnectionAlert() {

    this.messageService.add({
      severity: 'error',
      summary: 'No Connection',
      detail: 'No Web3 wallet was detected. To continue please install Metamask or another Web3 compatible wallet.'
    });

  }

  async showConnectAlert() {
    this.messageService.add({
      severity: 'error',
      summary: 'Connect!',
      detail: 'Please connect your wallet to proceed.'
    });

  }

  async showMessageAlert(title: string, message: string, severity: string = 'success') {
    this.messageService.add({
      severity: severity,
      summary: title,
      detail: message
    });
    console.log("sade ce de");

  }

  async showErrorAlert(error: Error) {
    const anyError = (error as any)
    this.messageService.add({
      severity: 'error',
      summary: 'An Error Occured',
      detail: (anyError.data && anyError.data.message) ? anyError.data.message : anyError.message,
    });


  }
 



  async showToast(message: string) {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: message,
    });


  }

 

}
