const express = require("express");
const cors = require("cors");
const corsOptions ={ origin:'*', credentials:true, }
const app = express();
const PORT = process.env.PORT || 8000 ;
var path = require('path');

app.use(cors(corsOptions))

  app.get('/dicm/*', function(req,res){
    var origin = req.params;
    res.download(`D:/My Games/my-app-backend/projectdata1/${origin[0]}`);
  })

app.listen(PORT, ()=> console.log(`server is ${PORT}`));