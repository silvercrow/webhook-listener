// Require express and body-parser
const express = require("express")
const bodyParser = require("body-parser")


// Initialize express and define a port
const app = express()
const PORT = 8080

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());




app.post("/hook", (req, res) => {

var data = Object.keys(req.body)[0];

console.log('Key:------->',data);

  var name = data.name;
  var email = data.email;
  var message = data.message;
  var id = data.id;

console.log('name:',name,'email:',email,'message:',message,'id:',id);

//console.log(JSON.stringify(req.body))
//console.log(JSON.parse(req.body))


  res.status(200).end() // Responding is important
})




// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))

