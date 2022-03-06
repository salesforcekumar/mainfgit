Public class Employee1{
    Public class Employee{
Public String lastname;
Public string firstname;
Public Decimal salary;
Public integer exp;
   
}
    public Employee1(){
        System.debug('starting notice');
    Employee[] emp=new Employee[2];
Employee e1=new Employee();
e1.lastname='M';
e1.firstname='satish';
e1.salary=10000;
e1.exp=3;
emp[0]=e1;
Employee e2=new Employee();
e2.lastname='K';
e2.firstname='praveen';
e2.salary=15000;
e2.exp=4;
emp[1]=e2;
for(Integer i=0;i<emp.size();i++){
System.debug('Lastname:'+emp[i].lastname);
System.debug('Firstname:'+emp[i].firstname);
System.debug('Salary:'+emp[i].salary);
System.debug('Exp:'+emp[i].exp);
    }
        System.debug('ending notice');

    }

}