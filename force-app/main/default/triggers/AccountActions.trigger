trigger AccountActions on Account (after insert,after update) {
    if(trigger.isInsert && trigger.isafter){
        AccountActionsHandler.createContacts(trigger.new);
    }
      if(trigger.isUpdate && trigger.isAfter){
        AccountActionsHandler.createOpporrtunies(trigger.newMap,trigger.oldMap);
    }

}