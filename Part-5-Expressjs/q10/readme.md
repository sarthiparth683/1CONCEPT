1.  Express.js is external module so it need to be installed so
2.  npm init -y - this will install package.json file
3.  npm i express -this will install express
    now, ready to use express.js

                NODEMON

4.  npm i nodemon - install nodemon - to prevent the re running the server
5.  To run file after installing nodemon
6.  in package.json file - in "scripts"
7.  create - "server": "nodemon index.js"
8.  npm run server - in terminal
9.  nodemon - to run the server

10. Implementation of Third-Party Middlewares
11. cors
12. helmet
13. body-parser
14. morgan

                    MONGO-DB

15. Database - Collection of Data 2 types
16. SQL - Tabular form eg.MsExcel
17. NoSQL - Collection, eg.json-formate
18. mongodb - is a database, 2 types of database - Relational and non-Realational
    Diagarm
19. CODE SIDE---------------------------MONGO DB SIDE
20. DB setup----------------------------DB Formation
21. MODELS(code)-------------------------------Collection(db)
22. schema(code)------------------------------Documents(db)
23.                 MONGO-DB - INSTALLATION
24. Mongodb Community server - in website - products - MongoDB Community Server setup Download 
25. MongoDB Shell (mongosh) - products - MongoDB Community Server Download - tools - Mongodb Shell - msi version - install in c/drive directly
26. Environment Variables - Under System Variables - check Path is defined for mongo db or not
27. npm install mongodb -g  - to connect with expressjs in vs code terminal

                    MongoDB - Commands

28. mongosh - to check mongodb is installed and to use mongoDB
29. show dbs - to see all database name
30. use anyname - to create dataBase Name or to move into that database
31. db.createCollection("collectionName") - to create collection name
32. db - to check current data base
33. show collections - to check collections in database
34. db.students.renameCollection("student") - to rename collection in database
35. db.help() - to check all the commands of db
36. db.collectionname.help() - collection help
37. db.name.drop() - to delete any collection
38. db.dropDatabase() - to delete database
