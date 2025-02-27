import { model, models, Schema } from "mongoose";


export interface User extends Document{
    clerkId: string,
    email:string,
    username: string,
    photo: string,
    firstName:string,
    lastName:string,
    planId:string,
    creditBalance:string
}

const UserSchema = new Schema({
    clerkId: {type: String, required: true},
    email: {type: String, required: true},
    username: {type: String, required: true},
    photo: {type: String},
    firstName:{type: String},
    lastName:{type: String},
    planId:{type: String},
    creditBalance:{type :Number}
})

const User = models?.User || model("User", UserSchema)

export default UserSchema;