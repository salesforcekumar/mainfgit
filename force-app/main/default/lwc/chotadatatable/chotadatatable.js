import { LightningElement ,wire} from 'lwc';
import getchota from '@salesforce/apex/chotacontroller.getchota';

const columns = [
    { label: 'chota Name', fieldName: 'Name' },
    { label: 'section', fieldName: 'section__c' },
   
];

export default class Chotadatatable extends LightningElement {
    columns=columns;
@wire (getchota) chotas;
}