public class Sobject_Example_1 {
    public Account acc {set;get;}
    public Contact con {set;get;}
    public Sobject_Example_1(){
        acc = new Account();
        acc.Name='wipro';
        acc.Phone='040-1234';
        acc.Industry='Banking';
        string cityname='cct';
        acc.city__c='kkd';
        con=new Contact();
      
     con.Email='sivasalesforce@google.com';
    }
    

}