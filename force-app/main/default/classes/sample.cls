public class sample {
    
    public String name;
    public string phone;
 
    public sample(){
    Account a1=new Account();
a1.name='wipro';
a1.phone='040-1234';
Account a2=new Account(name='TCS',phone='040-2345');
Account a3=new Account();
a3.put('name','dell');
a3.put('phone','040-2356');
Account[] acc=new Account[4];
acc[0]=a1;
acc[1]=a2;
acc[2]=a3;
        acc[3]=new Account(name='raki',phone='040-3456');
System.debug(acc[0]); 
System.debug(acc[1]); 
System.debug(acc[2]); 
        System.debug(acc[3]);
    }

}