// Require express and body-parser
const express = require("express")
const bodyParser = require("body-parser")


// Initialize express and define a port
const app = express()
const PORT = 8080

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());




app.post("/hook", (req, res) => {

  var name = req.query.name;
  var email = req.query.email;
  var message = req.query.message;
  var id = req.query.id;

console.log('name:',name,'email:',email,'message:',message,'id:',id);

//console.log(JSON.stringify(req.body))
//console.log(JSON.parse(req.body))


  res.status(200).end() // Responding is important
})




// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))

