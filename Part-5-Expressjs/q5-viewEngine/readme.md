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

                 STATIC FILES - setup is done to add external css and js files in public folder

9.  create public folder
10. create 3 folders inside it - images, stylesheets, javascripts
11. configure the express static in script.js file
12. understand the path

                EXPRESS GENERATOR

13. use to generate all files and folder structure
14. npm i express-generator -g -command to generate express globally
15. express appname --view=ejs OR
16. express . --view=ejs - to install in same directory
17. npm install
18. console.log(" Server is running at http://localhost:3000 "); - write line in bin/www file - for convinence
19. nodemon - to run the server

                        MONGO-DB

20. mongodb - is a database 2. 2 types of database - Relational and non-Realational 3. Diagarm
21. CODE SIDE---------------------------MONGO DB SIDE
22. DB setup----------------------------DB Formation
23. MODELS(code)-------------------------------Collection(db)
24. schema(code)------------------------------Documents(db)


                       SESSIONS 
    25.  npm i express-session



