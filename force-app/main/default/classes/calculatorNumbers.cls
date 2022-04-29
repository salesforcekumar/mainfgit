public with sharing class calculatorNumbers {
    public calculatorNumbers() {

    }
    @AuraEnabled(cacheable=true)
    public static Integer calculate2Numbers(integer firstNumber,integer secondNumber){
     
        return (firstNumber+secondNumber);
    }
}