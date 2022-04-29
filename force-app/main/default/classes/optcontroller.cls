public with sharing class optcontroller {
    public optcontroller() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getopportunity(){
        return[select id,Amount,LeadSource,StageName from Opportunity LIMIT 10];
    }
}