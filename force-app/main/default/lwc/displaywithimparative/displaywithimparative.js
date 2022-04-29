import { LightningElement,track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class Displaywithimparative extends LightningElement {
    @track accountrecords;
    @track errors;
    @track fields=[
        { label: 'Name', fieldName: 'Name' ,type: 'text' },
       
        { label: 'Industry', fieldName: 'Industry', type: 'text' }, 
    ];
    connectedCallback(){
        getAccounts()
        .then(result=>{
            this.accountrecords=result;
        })
        .catch(error=>{
            this.errors=error;
        })
    }
}