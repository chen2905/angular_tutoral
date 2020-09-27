import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/ipropertybase';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm; /*this is the way to view form values before submitting the form */
  @ViewChild('formTabs') formTabs: TabsetComponent;

// Will come from masters

propertyTypes: Array <string> =['House', 'Apartment', 'Duplex'];
furnishTypes: Array <string>  = ['Fully', 'Semi', 'Unfurnished'];
mainEntrances: Array <string>  = ['East', 'West', 'South', 'North'];
propertyView: IPropertyBase ={
  Id: null,
  Name: '',
  Price: null,
  SellRent: null,
  PType: null,
  FType: null,
  BHK : null,
  BuiltArea: null,
  City: null,
  RTM: null
}

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    //console.log('form.name?', Form);
  }
  // onBack(){
  //   this.router.navigate(['/']);
  // }
}
