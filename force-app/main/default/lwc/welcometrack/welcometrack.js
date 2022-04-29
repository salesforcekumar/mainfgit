import { LightningElement,track } from 'lwc';

export default class Welcometrack extends LightningElement {
    @track greetings;
    
    handelchange(event){
        this.greetings=event.target.value;
    }
}