@istest
public with sharing class AccountActionsTest {
    public AccountActionsTest() {

    }
    @istest
    public static void testcreateContact(){
        Account act=new Account();
        act.Name='atest1';
        act.Industry='Banking';
        act.Type='Other';
        insert act;
        Contact conlist=[select id,name from Contact WHERE AccountId=:act.Id ];
        System.assert(conlist.id != null);

    }

    @istest
    public static void testcreateOpporrtunies(){

        Account act=new Account();
        act.Name='atest1';
        act.Industry='Banking';
        act.Type='Other';
        act.Rating='cool';

        insert act;
         act.Rating='Warm';
         update act;
         Opportunity optlist=[select id from Opportunity WHERE accountId=:act.Id];
         System.assert(optlist.Id!=null);
        
    }
}
