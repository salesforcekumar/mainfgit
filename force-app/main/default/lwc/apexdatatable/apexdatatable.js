import { LightningElement,wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController1.getContactList';

const columns = [
    { label: 'First Name', fieldName: 'FirstName' },
    { label: 'Last Name', fieldName: 'LastName' },
    { label: 'Title', fieldName: 'Title' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Email', fieldName: 'Email', type: 'email' },
];

export default class Apexdatatable extends LightningElement {
 error;   
 columns = columns;


    @wire (getContactList) contacts;
      
}