import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema({
    generalCount:{
        type:Number,
    },
    generalTotal:{
        type:Number,
    },
    totalAmount:{
        type:Number
    },
    bookingDate:{
        type: String
    },
    name:{
        type:String,
    },
    mobileNumber:{
        type: String
    },
    email:{
        type: String
    },
    bookingStatus:{
        type: String,
        enum: ["pending", "confirmed", "completed", "cancelled"],
        default: "confirmed"
    },
    bookingId:{
        type: String
    },
    bookingType:{
        type:String
    },
    bookingTitle:{
        type: String
    },
    prefrence:{
        type: String
    },
},{timestamps: true})


const Booking = mongoose.model('booking', bookingSchema)
export default Booking