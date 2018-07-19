import { Component, OnInit } from '@angular/core';
import { CisSettingsService } from '../cis-settings.service';
import { DataClientService } from '../data-client.service';
import { PersistenceService, StorageType } from "angular-persistence";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cis',
  templateUrl: './cis.component.html',
  styleUrls: ['./cis.component.scss']
})
export class CisComponent implements OnInit {

  standardPlan: CISPlan;
  premiumPlan: CISPlan;
  customPlan: CISPlan;

  loginName: string = '840420840';
  password: string = 'UGFzc3dvcmQ=';

  constructor(
    private cisss: CisSettingsService,
    private persistenceService: PersistenceService,
    private dataClientService: DataClientService,
    private router: Router
  ) { }

  ngOnInit() {

    let accessToken = this.persistenceService.get('accessToken', StorageType.SESSION);
    if (accessToken) {
      this.router.navigate(['home']);
    }


    let x = this.cisss.getConfig();
    this.standardPlan = {
      name: 'Standard',
      price: '5.99$',
      benefits: [
        {
          name: 'GB',
          value: '10',
          isAvailable: true
        },
        {
          name: 'Minutes',
          value: '1000',
          isAvailable: true
        },
        {
          name: 'SMS',
          value: '100',
          isAvailable: true
        },
        {
          name: 'Roaming',
          value: '',
          isAvailable: false
        },
        {
          name: 'Music',
          value: '',
          isAvailable: false
        },
        {
          name: 'Video',
          value: '',
          isAvailable: false
        }
      ]
    };
    this.premiumPlan = {
      name: 'Premium',
      price: '10.99$',
      benefits: [
        {
          name: 'GB',
          value: 'Unlimited',
          isAvailable: true
        },
        {
          name: 'Minutes',
          value: 'Unlimited',
          isAvailable: true
        },
        {
          name: 'SMS',
          value: 'Unlimited',
          isAvailable: true
        },
        {
          name: 'Roaming',
          value: '',
          isAvailable: true
        },
        {
          name: 'Music',
          value: '',
          isAvailable: true
        },
        {
          name: 'Video',
          value: '',
          isAvailable: true
        }
      ]
    };
    this.customPlan = {
      name: 'Custom',
      price: '5.99$',
      benefits: [
        {
          name: 'GB',
          value: '10',
          isAvailable: true
        },
        {
          name: 'Minutes',
          value: '1000',
          isAvailable: true
        },
        {
          name: 'SMS',
          value: '100',
          isAvailable: true
        },
        {
          name: 'Roaming',
          value: '',
          isAvailable: false
        },
        {
          name: 'Music',
          value: '',
          isAvailable: false
        },
        {
          name: 'Video',
          value: '',
          isAvailable: false
        }
      ]
    }
  }

  doLogin(): void {
    this.dataClientService.get('user', ['login'], {
      username: this.loginName,
      password: this.password
    }).subscribe(this.onLoginSuccess.bind(this));
  }

  onLoginSuccess(res: any): void {
    this.persistenceService.set('accessToken', res.access_token, {
      type: StorageType.SESSION
    });
    this.router.navigate(['home']);
  }

}

export interface CISPlan {
  name: string;
  price: string;
  benefits: Array<PlanBenefit>
}

export interface PlanBenefit {
  name: string,
  value: string,
  isAvailable: boolean
}
