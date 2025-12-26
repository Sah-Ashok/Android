const express = require('express')
const app = express()
const cors = require('cors')
const Port = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send("Welcome to the Android Server!");
});

app.get("/register", (req, res) => {
  console.log(req.body);
  res.send("Register endpoint on Android Server");
})

app.listen(Port, () => {
  console.log(`Android Server is running on port http://localhost${Port}`);
})

