public class SOQL_Example_4 {
    public String name    {set;get;}
    public String industry {set;get;}
    public List<Account> accounts {set;get;}
    public string query {set;get;}
    public void search(){
        
        query='select id,name,phone,industry,rating from Account';
        if(name!=''&&industry!=''){
            query=query+' where name=\''+name+'\' and industry=\''+industry+'\'';
            
        }else{
            if(name!=''){
                query=query+' where name=\''+name+'\'';
            }else{
            if(industry!=''){
                query=query+' where industry=\''+industry+'\'';
            }
        }
    }
        accounts=Database.query(query);

}
}