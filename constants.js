import dotenv from "dotenv";
dotenv.config();

const constants = {
    'DB_URL' : `mongodb+srv://rounaknaik23:${process.env.DB_PASS}@cluster0.i9ujotw.mongodb.net/webathon?retryWrites=true&w=majority`
}
 export default constants