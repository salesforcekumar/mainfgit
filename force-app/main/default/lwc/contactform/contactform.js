import { LightningElement } from 'lwc';
import CONTACT_NAME from '@salesforce/schema/Contact.LastName';
import CONTACT_PHONE from '@salesforce/schema/Contact.Phone';
import CONTACT_TITLE from '@salesforce/schema/Contact.Title';
import CONTACT_REPORTSTOID from '@salesforce/schema/Contact.ReportsToId';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';


export default class Contactform extends NavigationMixin(LightningElement) {
    objectapiname='Contact';
    fieldslist=[CONTACT_NAME,CONTACT_PHONE,CONTACT_TITLE,CONTACT_REPORTSTOID];
    handelcontactcreation(event){

        const evt=new ShowToastEvent({
            title:"ACCOUNT CREATE",
            message:"RECOED ID:" + event.detail.id,
            variant:"success",

        });
        this.dispatchEvent(evt);
        /*this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                // CustomTabs from managed packages are identified by their
                // namespace prefix followed by two underscores followed by the
                // developer name. E.g. 'namespace__TabName'
                apiName: 'testlwcapp'
            }
        });*/

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