import { LightningElement,api} from 'lwc';

export default class ChildVideo extends LightningElement {

    @api myName="first value";
    @api mySon="advith"
    @api testChildMethod(){
        
        alert("chaild method"); 
        
        
    
    }
}