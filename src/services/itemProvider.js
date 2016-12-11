'use strict';
//var items = [
//    {'name': 'Django Unchained', 'item_id': 0},
//    {'name': 'Forrest Gump', 'item_id': 1}
//];
var added =  {'name': 'dridi aflem', 'item_id': 3} ;
app.service('itemProvider', function($firebase) {
   	var ref = new Firebase("https://newbase-d9ec2.firebaseio.com/items");
   	var sync = $firebase(ref);
   	var items = sync.$asArray();
    this.getItems = function() {
        return items ;
    }
    this.removeItem = function (item) {
        var items = sync.$remove(item);
    }
    this.createItem = function () {
       items.$add(added);
    }

});