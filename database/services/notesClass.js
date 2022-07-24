
const db = require('../schema');

class Notes{
	constructor(title, description, content){
		this.title = title,
		this.description = description,
		this.content = content
	}

	// insert function
	insert(){
		return new Promise(function(resolve, reject){
			db.create({
				title: this.title,
				description: this.description,
				content: this.content
			}, function(error, result){
				if(error){
					reject(error)
				}else{
					resolve(result)
				}
			})
		})
	}
}


module.exports = Notes;