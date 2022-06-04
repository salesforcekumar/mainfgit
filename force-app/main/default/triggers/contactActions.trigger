trigger contactActions on Contact (before Delete,after Update) {


    if(trigger.isUpdate &&trigger.isAfter ){

    }
    if(trigger.isDelete && trigger.isBefore)
}