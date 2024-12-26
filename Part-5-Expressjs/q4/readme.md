Express.js is external module so it need to be installed so

1.  npm init -y - this will install package.json file
2.  npm i express -this will install express
    now, ready to use express.js

                NODEMON

3.  npm i nodemon - install nodemon - to prevent the re running the server
4.  To run file after installing nodemon
5.  in package.json file - in "scripts"
6.  create - "server": "nodemon index.js"
7.  npm run server - in terminal

                STATIC FILES - setup is done to add external css and js files in public folder

8.  create public folder
9.  create 3 folders inside it - images, stylesheets, javascripts
10. configure the express static in script.js file
11. understand the path

                EXPRESS GENERATOR

12. use to generate all files and folder structure
13. npm i express-generator -g -command to generate express globally
14. express appname --view=ejs OR
15. express . --view=ejs - to install in same directory
16. npm install
17. console.log(" Server is running at http://localhost:3000 "); - write line in bin/www file - for convinence
18. nodemon - to run the server
