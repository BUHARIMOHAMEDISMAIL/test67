import { Component, OnInit } from '@angular/core';
import { GetPlanDetailsService } from '../get-plan-details.service';

@Component({
  selector: 'app-view-plan',
  templateUrl: './view-plan.component.html',
  styleUrls: ['./view-plan.component.css']
})
export class ViewPlanComponent implements OnInit {

  public plans: any = [];
  public plantemp: any = [];
  planData = {
    planValue: "100",
    data: '500',
    unLimitedCalls: 'true',
    addOns: "djhjncdfkn vdijkvdf",
    planType: "Prepaid",
    planId: 'ABCD123'
  }
  planDetails: any = '';

  constructor(private getplan: GetPlanDetailsService) { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log('do check');
    console.log(this.plantemp.length);
    if(this.plantemp.length === 0) {
      this.getplan.getUsers().subscribe((res) => {
        console.log(res);
        // this.plantemp = res;
        this.plantemp.push(res);
        console.log(this.plantemp);
      })
    }
    this.plans = [
      1001,
      1002,
      1003,
      1004
    ]
    console.log(this.plans);
  }

  onOptionsSelected(val) {
    console.log(val);
    this.planDetails = this.planData;
  }

  deletePlan(id) {
    console.log(id);
  }

}
