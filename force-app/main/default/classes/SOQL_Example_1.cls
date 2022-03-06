public class SOQL_Example_1 {
    public List<Account> accounts  {set;get;}
    public SOQL_Example_1(){ 
        accounts = [ select Id,Name,Phone,Industry from Account];
    }

}