public with sharing class chotacontroller {
    public chotacontroller() {

    }
    @AuraEnabled(cacheable=true)
    public static list<chota__c> getchota(){
        return [select id,Name,section__c from chota__c];
    }
}