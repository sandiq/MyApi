const fs = require('fs')

global.creator = 'NdyZz'// yourname
global.MONGO_DB_URI = "mongodb+srv://deskus:SssiEP9qwh9XXKS2@api.maedrqs.mongodb.net/?retryWrites=true&w=majority&appName=api" //database mongodb 
global.ACTIVATION_TOKEN_SECRET = "-@Pqnap+@(/1jAPPnew/@10" //isi apa aja bebas
global.your_email = "sandikurniawan12042004@gmail.com" //email
global.email_password = "plgeklttdfciejjw" //application password email //plge kltt dfci ejjw
global.limitCount = 20
global.YUOR_PORT = 8000
global.loghandler = {
	noapikey:{
		status: 403,
        message: 'Input parameter apikey',
        creator: `${creator}`,
        result: "error"
    },
    error: {
        status: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        creator: `${creator}`
    },
    apikey: {
    	status: 403,
    	message: 'Forbiden, Invalid apikey',
    	creator: `${creator}`
    },
    noturl: {
    	status: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	creator: `${creator}`,
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
