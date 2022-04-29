import { LightningElement,track,wire } from 'lwc';
import getContacts from '@salesforce/apex/contactcontroller.getContacts';

export default class Contactdatatable extends LightningElement {
    @track data;
    @track columns=[
    
        {lable:'name',fieldName:'Name',type:'text'},
        {lable:'Phone',fieldName:'Phone',type:'Phone'},
        {lable:'Email',fieldName:'Email',type:'Email'}
    ];


    @wire(getContacts) getcontactrecords({error,data}){

        if(data){
            this.data=data;
        }
        else if(error){
            this.data=undefined;
        }
    }
}