# Project Setup
# Clone
``` bash
    $ git clone  git@github.com:shivgarg5676/upgrad.git
    $ cd upgrad
```
# Project screen shorts
goto screenshots folder

# Frontend setup
 Goto ember folder
```sh
    $ cd frontend
```
 Install npm packages
```sh
   $ npm install
   $ npm install -g ember
```
 Start Ember server
```sh
   $  ember s --proxy http://localhost:3000
```

# Setting up Rails
Goto backend

```sh
    $ cd backend
```
Install gem dependencies
```sh
   $ bundle install
```
database setup
` change username and password in backend/config/databse.yml`
```sh
    $ rake db:create db:migrate db:seed
```
run rails server
```sh
    $ rails s -b 0.0.0.0
```

#Running and using app
    - Goto your browser and open http://localhost:4200
