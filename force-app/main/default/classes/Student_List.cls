public class Student_List {
    public Student std {set;get;}
    public Student_List(){
        
       Student__c std=new Student__c();
        std.lastname__c='Myla';
       // std.firstname='satish';
        std.city__c='Hyd';
       // std.phone='040-1234';
       
        insert std;
    }
    
    

}