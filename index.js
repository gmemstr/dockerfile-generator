const DockerGenerator = require('./lib/dockerGenerator')
const JsonGenerator = require('./lib/jsonGenerator')

module.exports.generate = function (input) {
	return new Promise( function (resolve, reject) {
		try {
			resolve(DockerGenerator.generateDockerFile(input))
		}
		catch (error) {
			reject(error)
		}
	})
}

module.exports.convertToJSON = function (dockerFileStream) {
	return JsonGenerator.generateJSON(dockerFileStream)
}

module.exports.generateIgnoreFile = function (ignoredFilesArray) {
	return new Promise( function (resolve, reject) {
		let ignoredFileContent = ''
		for (let ignoredFile of ignoredFilesArray) {
			ignoredFileContent = ignoredFileContent + ignoredFile + '\n'
		}
		return resolve(ignoredFileContent)
	})

}
