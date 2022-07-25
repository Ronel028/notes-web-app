
const db = require('../schema');


class Notes{
	// insert function
	insert(title, description, content){
		return new Promise(function(resolve, reject){
			db.create({
				title: title,
				description: description,
				content: content
			}, function(error, result){
				if(error){
					reject(error)
				}else{
					resolve(result)
				}
			})
		})
	}

	// display operation
	view(){
		return new Promise(function(resolve, reject){
			db.find({}, function(error, result){
				if(error){
					reject(error)
				}else{
					resolve(result)
				}
			})
		})
	}
	// delete operation
	deleteNotes(id){
		return new Promise(function(resolve, reject){
			db.deleteOne({ _id : id}, function(error, result){
				if(error){
					reject(error)
				}else{
					resolve(result)
				}
			})
		})
	}
	// update operation
	updateNotes(id, title, description, content){
		return new Promise(function(resolve, reject){
			db.updateOne({ _id: id },{
				title: title,
				description: description,
				content: content
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