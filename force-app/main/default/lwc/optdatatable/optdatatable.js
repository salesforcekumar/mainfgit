import { LightningElement,wire } from 'lwc';
import getopportunity from '@salesforce/apex/optcontroller.getopportunity';

const columns=[
    {lable:'Amount', fieldName:'Amount',type:'text'},
    {lable:'Lead Source', fieldName:'LeadSource',type:'text'},
    {lable:'Stage Name', fieldName:'StageName',type:'text'},
];

export default class Optdatatable extends LightningElement {
columns =columns;
@wire (getopportunity) Opportunities;
}