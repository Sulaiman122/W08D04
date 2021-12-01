# W08D04 (Social Media)

## About The Project

Project "Social Media" where user can create post/read posts/update posts/delete posts and Login/Sign up with authentication and authorization using hash password and token where only verified user can create/update/delete/seeUsers/seePosts/deleteUser

Here's why:
* Your time should be focused on creating something amazing. A project that solves a problem and helps others for login in and singning up with encrypted password



### Built With

* [node.js](https://nodejs.org/)
* [bcrypt package](https://www.npmjs.com/package/bcrypt/)
* [json web token package](https://www.npmjs.com/package/jsonwebtoken/)
* [mongoose]

### Installation

Below is an example of how you can installing and setting up your app.


1. Clone the repo
   ```sh
   git clone https://github.com/Sulaiman122/W08D04.git
   ```
2. npm i "to install all packages for this project"

3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your env variables at `.env`
   ```js
   DB = 'ENTER YOUR DB from mongoDB'
   SALT = 'Number of rounds of salt the hash'
   PORT = 'port which you want to use it'
   SECRET_KEY = 'any word key to make token'
   ```


<p align="right">(<a href="#top">back to top</a>)</p>
