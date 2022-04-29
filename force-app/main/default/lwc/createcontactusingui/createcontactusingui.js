import { LightningElement } from 'lwc';
import CONTACT_OBJ from'@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import { createRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {NavigationMixin} from 'lightning/navigation';


export default class Createcontactusingui extends NavigationMixin(LightningElement){
    name='';
    email='';
    contactId;

    handelchange(event){
        if(event.target.label=='Name'){
            this.name=event.target.value;
        }
        if(event.target.label=='Email'){
            this.email=event.target.value;
        }
    }

    createcontact(){
        console.log('entered to createcontact method');
        const fields={};
        fields[NAME_FIELD.fieldApiName]=this.name;
        fields[EMAIL_FIELD.fieldApiName]=this.email;
        const recordInput = { apiName: CONTACT_OBJ.objectApiName, fields};

        createRecord(recordInput)
            .then(contact => {
                this.contactId = contact.id;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'CONTACT created',
                        variant: 'success',
                    }),
                );
                this[NavigationMixin.Navigate]({
                    type:'standard__recordPage',
                    attributes:{
                        recordId: this.contactId,
                        objectApiName: 'Contact',
                        actionName: 'view',
                    }
                });
                           
            })

           .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
            });
        


    }

}