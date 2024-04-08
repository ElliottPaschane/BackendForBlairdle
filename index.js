const express = require('express');
const path = require('path');
var fs = require('fs');

const app = express();

const cors = require('cors'); // #2

app.use(express.static('public')); //app.use(express.static(path.join(__dirname, 'public'))); I couldn't get this to work

app.get('/api', (req, res) => {
	res.json(`HTTP GET request received`);
  console.log(req.body);
})

app.use((req, res) => {
	res.status(404);
	res.sendFile(path.join(__dirname, 'public', '404.html')); //This code may not work, it was a suggestion. I would need a 404.html page
	//Here's the suggested code:
	//res.sendFile(`<h1>Error 404: Resource Not Found T-T</h1>`)
})

app.listen(3000, () => {
	console.log("App listening on port 3000");
})

// #2
app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.post('/upload', function(req, res) {
	//Handle form upload
	console.log(req.body);

  res.send('File received successfully');
	//writeData();
});

function writeData(){
	const tableData = ["John", "39, -77"];
			const csv = tableData.join(',') + "\n";
			let output_name = "userData.csv";
			fs.writeFile(output_name, csv, (err) => {
			if (err) throw err;
			});
	
	}

//writeData();

