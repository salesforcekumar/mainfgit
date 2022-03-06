public class SOQL_Example_5 {
    public List<selectOption> options  {set;get;}
    public List<String> selected {set;get;}
    public List<Account> accounts {set;get;}
    public string query           {set;get;}
    
    public SOQL_Example_5(){
        selected=new List<String>();
        options=new List<selectOption>();
        List<String> fields=new List<String>{'name','phone','industry','rating','ownership'};
        for(String s: fields){
            selectOption op=new selectOption(s,s);
			 options.add(op);                
        }
                
    }
    
    public void search(){
         query='select id';
        if(selected.size()>0){
            for(String s: selected)
            query=query+','+s;
        } 
        query=query+ 'from Account';
        accounts=Database.query(query);
    }    

}