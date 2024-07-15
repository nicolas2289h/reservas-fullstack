## Food reservation management

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li>
      <a href="#built-with">Built With</a>
      <ul>
        <li><a href="#technologies">Technologies</a></li>
      </ul>
    </li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#backend-api">Backend API</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#links">Links</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

This is a web application for booking meal reservations at a restaurant. It is built with a React frontend and an Express backend.

[![Image 0](https://res.cloudinary.com/dd8pefa3c/image/upload/v1720749220/reservas1_uzdlj6.png)](https://res.cloudinary.com/dd8pefa3c/image/upload/v1720749220/reservas1_uzdlj6.png)

[![Image 1](https://res.cloudinary.com/dd8pefa3c/image/upload/v1720749220/reservas2_vchtcc.png)](https://res.cloudinary.com/dd8pefa3c/image/upload/v1720749220/reservas2_vchtcc.png)

[![Image 2](https://res.cloudinary.com/dd8pefa3c/image/upload/v1720749220/reservas3_mjxuow.png)](https://res.cloudinary.com/dd8pefa3c/image/upload/v1720749220/reservas3_mjxuow.png)

[![Image 3](https://res.cloudinary.com/dd8pefa3c/image/upload/v1720749220/reservas4_aaz5j7.png)](https://res.cloudinary.com/dd8pefa3c/image/upload/v1720749220/reservas4_aaz5j7.png)

[![Image 4](https://res.cloudinary.com/dd8pefa3c/image/upload/v1720749221/reservas5_myglco.png)](https://res.cloudinary.com/dd8pefa3c/image/upload/v1720749221/reservas5_myglco.png)

### Built With 

#### Technologies

- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Bootstrap](https://getbootstrap.com/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

![Javascript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)&nbsp;
![Reactjs](https://img.shields.io/badge/-React-20232A?style=flat&logo=react&logoColor=61DAFB)&nbsp;
![Bootstrap](https://img.shields.io/badge/-Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white)&nbsp;
![Expressjs](https://img.shields.io/badge/-Express-000000?style=flat&logo=express&logoColor=white)&nbsp;
![MySQL](https://img.shields.io/badge/-MySQL-4479A1?style=flat&logo=mysql&logoColor=white)&nbsp;

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/nicolas2289h/reservas-fullstack
   ```
2. Install NPM packages for both backend and frontend
   ```sh
   cd backend
   npm install
   cd ../frontend
   npm install
   ```
3. Create a .env file in the root of the backend directory and add your database configuration:
   ```sh
   DB_HOST=your-database-host
   DB_USER=your-database-user
   DB_PASSWORD=your-database-password
   DB_NAME=your-database-name
   DB_PORT=your-database-port
   ```


<!-- USAGE EXAMPLES -->
## Backend API

The backend API provides the following endpoints:

* Login user
```sh
POST: /login
```

* Register a new user
```sh
POST: /register
```

* Get user by username
```sh
GET: /user/username
```

* Get user by ID
```sh
GET: /reserva/id
```

* Get all reservations
```sh
GET: /reserva/listar
```

* Save a new reservation
```sh
POST: /reserva/guardar
```

* Get all reservations from the logged user
```sh
GET: /reserva/cliente
```

* Delete a reservation by ID
```sh
DELETE: /reserva/eliminar/
```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LINKS -->
## Links

Project Link: [https://nh-gestion-reservas.vercel.app](https://nh-gestion-reservas.vercel.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



