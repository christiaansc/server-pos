const express = require("express");
const db = require("../config/dbConnect");
const cors = require("cors");

const allroutes = require('../routes/index.routes')

class Server {
  constructor() {
    this.app = express(db);
    this.port = process.env.PORT || 3000;

    //Middlewares
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json({ limit: "50mb" }));
    this.app.use(cors());
    this.routes();
  }

  // Running server
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server in port ${this.port}`);
    });
  }
  routes(){
    this.app.use('/api',allroutes);
  }
}

module.exports = Server;
