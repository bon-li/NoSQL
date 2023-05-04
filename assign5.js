db.Department.insertOne({_id:1, deptId:231, deptName:"Sales",
                        Employees:[{empId:023, empName:"Harrietta Jesse"},
                            {empId:024, empName:"Millard Minta"}
                        ]
                        });

db.Department.insertOne({_id:2, deptId:344, deptName:"Marketing"});
db.Employees.insertOne({empId:025, empName:"Nat Alan",
                        Department:[{deptId:344}]
                        });

         
db.Room1.updateOne({RoomNumber:"301"},
                { $set: {Building:"F"}}
                );
                
db.Room1.updateMany({Type:"Class Room"},
                {$set: {"Capacity": "45"}}
                );
                
db.Room1.deleteMany({Type: "Class Room"});

db.Room1.deleteMany({_id: {$gt: 2}});

db.Building.insertOne({_id:1, name:"Monte Building", height:"5m",
                        Campus:[{_id:1, name:"Clementine Campus"}]});
db.Rooms.insertMany([{roomId:323, Building:{name:"Clementine Campus"}},
                     {roomId:231, Building:{name:"Clementine Campus"}}, 
                     {roomId:110, Building:{name:"Clementine Campus"}}  
                    ]);
