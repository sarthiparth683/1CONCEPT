                    MONGO-DB

1.  Database - Collection of Data 2 types
2.  SQL - Tabular form, eg.MySQL, MS SQL, PostgreSQL, OracleSQL
3.  NoSQL - Collection, eg.MongoDB, Cassandra, Redis
4.  mongodb - is a database, 2 types of database - Relational and non-Realational
    Diagarm
5.  CODE SIDE---------------------------MONGO DB SIDE
6.  DB setup----------------------------DB Formation (main documents)
7.  MODELS(code)-------------------------------Collection(db)(inside dbs) like file
8.  schema(code)------------------------------Documents(db)(like objects)

9.                                   MONGO-DB - INSTALLATION
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
22. db.collectionname.updateOne({ filter }, { update }, { options } ) - to update document
23. db.collectionname.updateMany({ filter }, { update }, { options } ) - to update document
24. db.collectionname.countDocuments({}) - to count the number of documents
25. db.collectionname.countDocuments({ key: 'value' }) - to count the specific data
26. db.collectionname.find() - to see all data in collections
27. db.collectionname.find({key:"value"}) - to find specific data
28. db.collectionname.find({key:"value"}).limit(1) - to set limit.
29. db.collectionname.find().sort({key: 1}) - assending order.
30. db.collectionname.find().sort({key: -1}) - descending order.
31. db.collectionname.findOne({org:"name"}) - to find one specific data
32. db.collectionname.find({key: 'value' }) - to find all the data specefied data
33. db.collectionname.find({ date_joined: { $gt: "2022-01-15" } }) - to find data after this date
34. db.collectionname.find({ last_name: { $regex: '^L', $options: 'i' } }) - to find starting letter data
35. db.collectionname.updateOne({filerKey: value}, {$set: {updateKey: value}}) - to update any collection data
36. db.collectionname.updateMany({filerKey: value}, {$set: {updateKey: value}})- to update many documents inside collection
37. db.collectionname.renameCollection("student") - to rename collection in database
38. db.collectionname.deleteOne({key: value}) - to delete document data
39. db.collectionname.deleteMany({key: value}) - to delete selected document data
40. db.collectionname.drop() - to delete any collection
41. db.dropDatabase() - to delete database
    RELATIONS in MongoDB
42. < - $lt
43. <\_ - $lte
44. > - $gt    eg. db.collectionname.find({health: {$gt: 40}})
45. > \_ - $gte
46. == - $eq
47. === - no concept in MongoDB for this
48. ! - $ne
49. && - $and  - db.heroes.find({$and: [{health: {$gte:40}}, {health: {$lte:80}}]})
50. || - $or

51. db.help() - to check all the commands of db
52. db.collectionname.help() - collection help

                            MongoDB AGGARATION

53. db.collectionName.aggregate([{$match: {key: "value"}}]) - it will filter the matched data
54. db.collectionName.aggregate([{$match: {key: "value"}}, {}, {}, {}, {}, {} ]) - multiple query can be used to get one result
55. db.collectionName.aggregate([{$group: { _id: "$key", totlaspent: {$sum: "$key"}}}]) - to get group criteria with sum 
