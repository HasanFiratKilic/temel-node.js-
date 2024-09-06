import axios from "axios";


const getData = async (Number) =>{
    const  {data:userData} = await axios("https://jsonplaceholder.typicode.com/users/"+Number);   
    const  {data:postData} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+Number);  
    const user = userData.data; 
    const post = postData.data;
    return {
        user:userData,
        post:postData

    }

}

export default getData;

