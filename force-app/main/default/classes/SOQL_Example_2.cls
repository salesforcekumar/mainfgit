public class SOQL_Example_2 {
    
    public List<Account> accounts  {set;get;}
   
   /* public SOQL_Example_2(){ 
        accounts = [ select Id,Name,Phone,Industry from Account];
       
    } */
     public void all(){ 
        accounts = [ select Id,Name,Phone,Industry from Account];
       
    }
    public void limit5(){
         accounts = [ select Id,Name,Phone,Industry from Account limit 5];
        
        
    }
  public void limitcount(){
      Integer count=2;
         accounts = [ select Id,Name,Phone,Industry from Account limit:count];
           
    }
    
      public void offset5(){ 
        accounts = [ select Id,Name,Phone,Industry from Account offset 5];
       
    }
      public void offsetcount(){ 
          Integer count=6;
        accounts = [ select Id,Name,Phone,Industry from Account offset:count];
       
    }
      public void offsetlimit(){ 
        accounts = [ select Id,Name,Phone,Industry from Account limit 5 offset 3 ];
        
    }
}