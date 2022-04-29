import { LightningElement, track} from 'lwc';

export default class ParentVideo extends LightningElement {
    
    @track parentValue="second value";
    handelchange(event){
    
        this.parentValue="thridvalue";
    }
    handelcall(event){
        this.parentValue="button value";
        var childCompVar=this.template.querySelector('c-child-video');
        childCompVar.testChildMethod();
    }
}