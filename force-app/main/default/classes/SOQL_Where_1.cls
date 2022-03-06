public class SOQL_Where_1 {
    public List<selectOption> options {set;get;}
    public List<Account> accounts {set;get;}
    public String selected {set;get;}
   public SOQL_Where_1(){
        options=new List<selectOption>();
       selectOption n=new selectOption('none','NONE');
         options.add(n);
        List<String> industries= new List<String>{'Banking','Education','Housing','Energy'};
            for(String s: industries){   
            selectOption op=new selectOption(s,s);
            options.add(op);
          
           
            }  
        
    }
    public void Show(){
        if(selected!='none'){
        accounts=[select id,name,phone,industry,rating from Account where industry=:selected];
        }
    }
    public void call(){
        
        String query='select id,name,phone,industry,rating from Account';
        if(selected!='none'){
            
            query=query+' where industry=\''+selected+'\'';
        }
        accounts=Database.query(query);
    }
    

}