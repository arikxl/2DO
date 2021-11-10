import axios from "axios";

export default axios.create({
    baseURL: (process.env.NODE_ENV === 'production') ? "/" : "http://localhost:3030/",
    
});



// const BASE_URL = (process.env.NODE_ENV === 'production') ? '/api/toy' : '/localhost:3030/api/toy';


// export default axios.create({
//     baseURL: "http://localhost:3030"
// });