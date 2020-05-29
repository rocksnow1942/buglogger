const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            'mongodb://hui:kanghui@pi.hole/test',
            {
                userNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true
            }
        )
        
        console.log('*** Mongodb connected.')

    } catch (err) {
        console.log(err)
        process.exit(1)
    }

}

module.exports = connectDB