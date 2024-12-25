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

              ejs setup
8.  npm i ejs - to install ejs
9.  app.set("view engine", "ejs") - to configure ejs
10. views - create folder with this name
11. create ejs file inside views folder
12. replace send with render - while rendering file name should be from inside views folder only* 
 