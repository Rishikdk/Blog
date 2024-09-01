import axios from "axios"


const URl = "http://localhost:3000"

export async function getPosts(){
    //get data from mongo
    const response = await axios.get(`${URl}/posts`)

    if(response.status===200){
        return response.data
    }else{
        return
    }

}

export async function getPost(id){
    //"https://localhost:3000/12345"
    const response = await axios.get(`${URl}/posts/${id}`)

    if(response.status === 200){
        return response.data
    }else{
        return
    }


}
export async function createPost(post){
    //"https://localhost:3000/posts"
    const response = await axios.post(`${URl}/posts`,post)
    return response

}

export async function updatePost(id,post){
//"https://localhost:3000/posts"
    const response = await axios.put(`${URl}/posts/${id}`,post)
    return response
}

export async function deletePost(id){
    const response = await axios.delete(`${URl}/posts/${id}`)
    return response
}
