import { LightningElement,track,wire } from 'lwc';  
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class Datatablecmp extends LightningElement {
    @track data;
    @track columns = [
    {lable:'Lable',fieldName:'Name',type:'text'},
    {lable:'Phone',fieldName:'Phone',type:'Phone'},
    {lable:'Industry',fieldName:'Industry',type:'text'}
    ];
    @wire(getAccounts) getAccountRecords({error,data}){
        if(data){
            this.data=data;
        }
        else if(error){
            this.data=undefined;
        }
    }
}