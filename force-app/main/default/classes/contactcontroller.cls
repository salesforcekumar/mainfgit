public with sharing class contactcontroller {
    public contactcontroller() {

    }
@AuraEnabled(cacheable=true)
    public static list<Contact> getContacts(){
        return[select id,Name,Phone,Email from Contact limit 10];
    }
}