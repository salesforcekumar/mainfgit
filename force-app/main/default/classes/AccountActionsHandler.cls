public class AccountActionsHandler {
   public static void createContacts(List<Account> accontlist){
       List<contact> conlist=new List<Contact>();
       for(Account act:accontlist){
           Contact con=new contact();
           con.AccountId=act.Id;
           con.Phone=act.phone;
           con.LastName=act.Name;
           conlist.add(con);
       }
       if(!conlist.isEmpty()){
           insert conlist;
       }
        
    }
    public static void createOpporrtunies(Map<id,Account> newAccountMap,Map<id,Account> oldAccountMap){
        List<Opportunity> optlist=new List<Opportunity>();
        for(Account act : newAccountMap.values()){
            if(newAccountMap.get(act.Id).Rating!=oldAccountMap.get(act.Id).Rating&& newAccountMap.get(act.Id).Rating=='Warm'){
                
            Opportunity opt=new Opportunity();
            opt.AccountId=act.Id;
            opt.Name=act.Name;
            opt.StageName='Prospecting';
            opt.CloseDate=System.today();
            optlist.add(opt);
            }
            
        }
        if(!optlist.isEmpty()){
            insert optlist;
        }
        
    }

}