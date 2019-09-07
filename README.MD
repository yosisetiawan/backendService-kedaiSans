<H1>Backend KedaiSans</H1>
This repository is a backend service for KedaiSans

[KedaiSans Repository](http://bit.ly/2lIWlLm "Go to this repository")

<H2>Dependencies used</H2>
  
  + Node Js 
  + Express Js
  + Nodemon
  + Sequelize
  + Sequlize-CLI
  + Multer
  + Mysql

<H2>Installation</H2>


```instalations
git clone https://github.com/yosisetiawan/backendService-kedaiSans.git

cd backendService-KedaiSans

npm install or yarn install
```

create a new database on phpmyadmin

and config.json settings in the config folder

```instalations
"development": {
    "username": "username",
    "password": "password",
    "database": "SET YOUR DATABASE NAME", 
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
```
migrate to database

```migrate
npx sequelize-cli db:migrate
```

then save and run server

```Running Server
npm start
```

<H2>List of API Service URL</H2>

You can use Postman if you want to try it with url

http://localhost:3000/URL_API_SERVICE

The API Service URL is below, please see the url list documentation below

+ Category API Service
  
    | Action  | URL | Information |
    | ----- | --- | -------------|
    | GET   | /api/v1/categories  |   Show All Data Categories     |
    | GET | /api/v1/categories/:id  | Find Category by id Category |
    | POST | /api/v1/categorie  | Add New Categorie |
    | PUT | /api/v1/categorie/:id  | Update Categorie|
    | DELETE | /api/v1/categorie/:id  | Delete Categorie             |

+ Menu API Service
  
    | Action  | URL | Information |
    | ----- | --- | -------------|
    | GET   | /api/v1/menus  |   Show All Data menus     |
    | GET | /api/v1/menus/:id  | Find menus by id menus |
    | POST | /api/v1/menu  | Add new menu |
    | PUT | /api/v1/menu/:id  | Update menu|
    | DELETE | /api/v1/menu/:id  | Delete menu             |

+ Order API Service
  
    | Action  | URL | Information |
    | ----- | --- | -------------|
    | GET   | /api/v1/orders  |   Show All Data Orders     |
    | GET | /api/v1/orders/:id  | Find orders by id order |
    | POST | /api/v1/order  | Add new order |
    | PUT | /api/v1/order/:id  | Update order|
    | DELETE | /api/v1/order/:id  | Delete order             |

+ Transaction API Service
  
    | Action  | URL | Information |
    | ----- | --- | -------------|
    | GET   | /api/v1/transactions  |   Show All Data Transactions     |
    | GET | /api/v1/transactions/:id  | Find Transaction by id transaction |
    | POST | /api/v1/transaction  | Add new transaction |
    | PUT | /api/v1/transaction/:id  | Update transaction |
    | DELETE | /api/v1/transaction/:id  | Delete transaction             |

<Hr>

That's all for the KedaiSans REST API documentation

Thank You

Best Regards 

Antonio Yosie Setiawan