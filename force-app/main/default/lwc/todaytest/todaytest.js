import { LightningElement ,track,wire} from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class Todaytest extends LightningElement {

@track data;
@wire(getAccounts) getaccountrecords({error,data}){
        if(data){
            this.data=data;
        }
         else if(error){
            this.data=undefined;
         }

    }
}