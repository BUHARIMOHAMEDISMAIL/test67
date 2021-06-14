import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.css']
})
export class AddPlanComponent implements OnInit {

  submitted: boolean = false; // for validation
  addPlanForm: FormGroup;
  successMessage: string;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.submitted = true;
    this.addPlanForm = this.fb.group({
      planValue: ['', Validators.required],
      data: ['', Validators.required],
      unLimitedCalls: ['', Validators.required],
      addOns: ['', Validators.required],
      planType: ['', Validators.required],
    })

    const JSONObj = { "bookname ":"VB BLACK BOOK", "price":500 };
    console.log(JSONObj);
  }
  get formControls() { return this.addPlanForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log('onsubmit');
    console.log(this.addPlanForm.value);
    this.successMessage = 'Plan is creadted with Plan Id 1011';
  }

}
