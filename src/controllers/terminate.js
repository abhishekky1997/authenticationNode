let deleteSessionCollection=async (action, sessionId)=>{
	var MongoClient = require('mongodb').MongoClient;
	const client = new MongoClient(process.env.MONGO_LOCAL_CONN_URL, { useUnifiedTopology: true }); // useUnifiedTopology removes a warning

		// Connect
		client
		.connect()
		.then(client =>
			client
			.db("myFirstDatabase")
			.listCollections()
				.toArray() // Returns a promise that will resolve to the list of databases
		)
		.then(dbs => {
			dbs.forEach(element => {console.log(element.name)})
		}
)};


exports.terminatesession= async (req,res)=>{
	req.session.destroy();
	res.send("Session deleted")
}

exports.terminateall= async (req,res) =>{
	deleteSessionCollection(1,req.session.user.sessionId)
	console.log(collsession)
	
}