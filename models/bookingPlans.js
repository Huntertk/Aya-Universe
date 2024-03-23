import mongoose from 'mongoose'

const bookingPlanSchema = new mongoose.Schema({
    title:{
        type: String
    },
    desc:{
        type: String
    },
    type:{
        type: String
    },
    image:[String],
    preference: [
        {
            title:String,
            price:{
                general:Number,
                adult:Number,
                child:Number,

            },
            details:[String]
        },
    ],
}, {timestamps: true})

const BookingPlan = mongoose.model('bookingPlan', bookingPlanSchema)
export default BookingPlan