db.Customer.find({}, {FirstName:1, _id:0});

db.Customer.find({Title:"Sr."});

db.Customer.find({"PickupStore.StoreID":2051,"Phone.Type":"Cell"});

db.Customer.find({},{"Address.City":"Cheektowaga", _id:0});