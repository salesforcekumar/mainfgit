import { LightningElement } from 'lwc';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_TYPE from '@salesforce/schema/Account.Type';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class Basiclightingrecordform extends NavigationMixin(LightningElement){
    objectapiname='Account';
    fieldlist=[ACCOUNT_NAME,ACCOUNT_TYPE,ACCOUNT_INDUSTRY];

   
    handelaccountcreate(event){
       const evt=new ShowToastEvent({
            title:"ACCOUNT CREATE",
            message:"RECOED ID:" + event.detail.id,
            variant:"success",

        });
        this.dispatchEvent(evt);
        
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId: event.detail.id,
                objectApiName: 'Account',
                actionName: 'view',
            }
        });
       
       /* this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                // CustomTabs from managed packages are identified by their
                // namespace prefix followed by two underscores followed by the
                // developer name. E.g. 'namespace__TabName'
                apiName: 'testlwcapp'
            }
        });
        */

    }
    
    
}