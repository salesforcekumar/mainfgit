import { LightningElement } from 'lwc';

export default class Conditionalrendering extends LightningElement {
   // showme =false;

    handelcheck(event){
     var checkit = window.alert('Do You Really want to save!!') ;
      
            if (checkit) {
                // write your code here which you want to execute on yes.
             event.target.checked =true;
             checkit=false;
                }
                else {
                    event.target.checked=false;
                }
                
            //window.alert('Do you agree');
      
       
      //  this.showme=event.target.checked
    }
   
}