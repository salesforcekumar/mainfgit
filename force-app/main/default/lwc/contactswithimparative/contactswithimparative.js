import { LightningElement ,track} from 'lwc';
import getContacts from '@salesforce/apex/contactcontroller.getContacts';

export default class Contactswithimparative extends LightningElement {
@track contactrecords;
@track errors;
@track fields=[
    {lable:'name',fieldName:'Name',type:'text'},
    {lable:'Phone',fieldName:'Phone',type:'Phone'},
    {lable:'Email',fieldName:'Email',type:'Email'}
];
 connectedCallback(){
     getContacts()
     .then(result=>{
         this.contactrecords=result;

     })
     .catch(error=>{
         this.errors=error;
     })
 }
}