public class Map_Example_1 {
    public Map<String,List<String>> cityMap {set;get;}
    public List<SelectOption> cities        {set;get;}
    public List<SelectOption> places        {set;get;}
    public String citySelected               {set;get;}
    
    public Map_Example_1(){
        cities=new List<selectOption>();
        places=new List<selectOption>();
        selectOption n=new selectOption('none','NONE');
        cities.add(n);
        places.add(n);
        
        cityMap=new Map<String,List<String>>();
        List<String> hplaces=new List<String>{'SRNagar','LBNagar'};
        List<String> bplaces=new List<String>{'ECity','Marthali'};
        List<String> cplaces=new List<String>{'Thambaram','Chromepet'};     
        
        cityMap.put('Hyd',hplaces);
        cityMap.put('Ban',bplaces);
        cityMap.put('Che',cplaces);
        
        Set<String> keys=cityMap.keySet();
        for(String s: keys){
            
            selectOption op=new SelectOption(s,s);
            cities.add(op);
        }
            
            
    }
    public void search(){
        places.clear();
       selectOption n=new selectOption('none','NONE');
       places.add(n);
        if(citySelected!='none'){
        List<String> myPlaces=cityMap.get(citySelected);
        for(String s: myPlaces){
           selectOption op=new SelectOption(s,s);
            places.add(op);
        }
        
    }
    }
    
    
}