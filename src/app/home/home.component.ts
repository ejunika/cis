import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PersistenceService, StorageType } from 'angular-persistence';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('chartCanvas')
  canvasRef: ElementRef;
  chart: any;

  addOns: Array<any>;
  selectedAddOn: any;

  isDataPlanboxSelected: boolean;
  isMinutesPlanboxSelected: boolean;
  isSmsPlanboxSelected: boolean;

  constructor(
    private persistenceService: PersistenceService,
    private router: Router
  ) { }

  ngOnInit() {
    let accessToken = this.persistenceService.get('accessToken', StorageType.SESSION);
    if (!accessToken) {
      this.router.navigate(['cis']);
    }

    this.initChart();
    this.initAddOns();
  }

  makePlanboxActive(planboxType: string): void {
    if (planboxType == 'DATA') {
      this.isDataPlanboxSelected = true;
      this.isMinutesPlanboxSelected = false;
      this.isSmsPlanboxSelected = false;
    } else if (planboxType == 'MINUTES') {
      this.isDataPlanboxSelected = false;
      this.isMinutesPlanboxSelected = true;
      this.isSmsPlanboxSelected = false;
    } else if (planboxType == 'SMS') {
      this.isDataPlanboxSelected = false;
      this.isMinutesPlanboxSelected = false;
      this.isSmsPlanboxSelected = true;
    }
  }

  initAddOns(): void {
    this.addOns = [
      {id: 'addon1', details: '10GB Expiring in 30 Days', isSelected: true},
      {id: 'addon2', details: 'Roaming Data 10 GB', isSelected: false},
      {id: 'addon3', details: 'Roaming Data10 GB + 1000 mins +1000 SMS', isSelected: false},
      {id: 'addon4', details: 'Roaming Data10 GB + 1000 mins +1000 SMS', isSelected: false}
    ];
    this.selectedAddOn = this.addOns[0];
  }

  selectAddOn(addOne: any): void {
    addOne.isSelected = true;
    this.selectedAddOn.isSelected = false;
    this.selectedAddOn = addOne;
  }

  initChart(): void {

    this.chart = new Chart(this.canvasRef.nativeElement, {
      type: 'line',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        legend: {
          display: false
        }
      }
    });
  }

}
