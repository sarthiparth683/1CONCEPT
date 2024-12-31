                    MONGO-DB

1.  Database - Collection of Data 2 types
2.  SQL - Tabular form, eg.MySQL, MS SQL, PostgreSQL, OracleSQL
3.  NoSQL - Collection, eg.MongoDB, Cassandra, Redis
4.  mongodb - is a database, 2 types of database - Relational and non-Realational
    Diagarm
5.  CODE SIDE---------------------------MONGO DB SIDE
6.  DB setup----------------------------DB Formation (main documents)
7.  MODELS(code)-------------------------------Collection(db)(inside dbs)
8.  schema(code)------------------------------Documents(db)(objects)
9.                        MONGO-DB - INSTALLATION
10. Mongodb Community server - in website - products - MongoDB Community Server setup Download
11. MongoDB Shell (mongosh) - products - MongoDB Community Server Download - tools - Mongodb Shell - msi version - install in c/drive directly
12. Environment Variables - Under System Variables - check Path is defined for mongo db or not
13. npm install mongodb -g - to connect with expressjs in vs code terminal

                    MongoDB - Commands

14. mongosh - to check mongodb is installed and to use mongoDB
15. show dbs - to see all database name
16. use dataBaseName - to create database or to move into database
17. db.createCollection("collectionName") - to create collection name and / insted of Arrays and object in mongoDB - collection and documents(objects) are used.

18. show collections - to show collections in database
19. db - to check current data base
20. db.collectionname.insertOne({data}) - to insert data inside collection
21. db.collectionname.insertMany([{},{}]) - to insert multiple data inside collection
22. db.collectionname.find() - to see all data in collections
23. db.collectionname.find({key:"value"}) - to find specific data
24. db.collectionname.find({key:"value"}).limit(1) - to set limit.
25. db.collectionname.find().sort({key: 1}) - assending order.
26. db.collectionname.find().sort({key: -1}) - descending order.
27. db.collectionname.findOne({org:"name"}) - to find one specific data
28. db.collectionname.updateOne({filerKey: value}, {$set: {updateKey: value}}) - to update any collection data
29. db.collectionname.updateMany({filerKey: value}, {$set: {updateKey: value}})- to update many documents inside collection
30. db.collectionname.renameCollection("student") - to rename collection in database
31. db.collectionname.deleteOne({key: value}) - to delete document data
32. db.collectionname.deleteMany({key: value}) - to delete selected document data
33. db.collectionname.drop() - to delete any collection
34. db.dropDatabase() - to delete database
    RELATIONS in MongoDB
35. < - $lt
36. <\_ - $lte
37. > - $gt    eg. db.collectionname.find({health: {$gt: 40}})
38. > \_ - $gte
39. == - $eq
40. === - no concept in MongoDB for this
41. ! - $ne
42. && - $and  - db.heroes.find({$and: [{health: {$gte:40}}, {health: {$lte:80}}]})
43. || - $or

44. db.help() - to check all the commands of db
45. db.collectionname.help() - collection help
