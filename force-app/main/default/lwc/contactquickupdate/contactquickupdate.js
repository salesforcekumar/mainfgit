import { LightningElement,api } from 'lwc';
import CONTACT_NAME from '@salesforce/schema/Contact.LastName';
import CONTACT_PHONE from '@salesforce/schema/Contact.Phone';
import CONTACT_TITLE from '@salesforce/schema/Contact.Title';
import CONTACT_REPORTSTOID from '@salesforce/schema/Contact.ReportsToId';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class Contactquickupdate extends NavigationMixin(LightningElement) {
    @api recordId;
    @api objectApiName;
    fieldslist=[CONTACT_NAME,CONTACT_PHONE,CONTACT_TITLE,CONTACT_REPORTSTOID];

    
    handelcontactupdate(event) {
        const evt=new ShowToastEvent({
            title:"QUICK UPDATE",
            message:"RECOED UPDATED:" + event.detail.fields.LastName.value,
            variant:"success",

        });
        this.dispatchEvent(evt);

        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId: event.detail.id,
                objectApiName: 'Contact',
                actionName: 'view',
            }
        });

    }
    

}