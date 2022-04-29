import { LightningElement,wire } from 'lwc';
import getAccount from '@salesforce/apex/AccountController.getAccounts';
const columns = [
    { label: 'Name', fieldName: 'Name' ,type: 'text' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Industry', fieldName: 'Industry', type: 'text' },
];
export default class DisplayDatausingWire extends LightningElement {
    fields=columns;
@wire (getAccount) accounts;
  

}