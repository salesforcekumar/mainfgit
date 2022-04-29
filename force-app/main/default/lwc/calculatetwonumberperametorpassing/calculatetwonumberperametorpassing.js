import { LightningElement,track } from 'lwc';
import calculate2Numbers from '@salesforce/apex/calculatorNumbers.calculate2Numbers';

export default class Calculatetwonumberperametorpassing extends LightningElement {
firstNumber;
secondNumber;

@track resultsum;

handledChange(event){
    console.log('valuses assigned');

    if(event.target.name=='fstNumber'){
        this.fNumber=event.target.value;
    }
    else if(event.target.name=='scdNumber'){
        this.sNumber=event.target.value;
    }

}
handleClick(){
    console.log('before calculation');
    calculate2Numbers({firstNumber:this.fNumber,secondNumber:this.sNumber})
    .then(result =>{
        this.resultsum=result;
    })
    .catch(error=>{
        this.error=undefined;
    });

}

}