import { LightningElement,track } from 'lwc';

export default class CalcTest extends LightningElement {
    firstnNumber=0;
    secondNumber=0;
    @track result1=0;


    handlechanges(event){
       
        if(event.target.name==='fnumber'){
            
            this.firstnNumber=event.target.value;
        }
        if(event.target.name==='snumber'){
            
            this.secondNumber=event.target.value;
        }
 
        this.result1 = parseInt(this.firstnNumber) + parseInt(this.secondNumber);

    }
}