//import { async } from "@firebase/util";
import { collection, getDocs, addDoc, /*doc*/ } from "firebase/firestore";
import { firestore } from './firebase';

//функция для добавление нового поста в коллекцию
export const addPost = async (data) => {
    //console.log(data)
    const result = addDoc(collection(firestore, 'posts'), data)
}

//функция для загрузки постов и возврата в виде промиса
export const getAllPosts = async () => {
    const response = await getDocs(collection(firestore, 'posts'))
    const arr = response.docs.map(e => e.data())
    //console.log(arr)
    return arr
}

//------------------------------------------------------------------------------
// //функция для добавление нового поста в коллекцию
// export const addMyPost = async (data) => {
//     //console.log(data)
//     const result = addDoc(collection(firestore, 'posts'), data)
// }

// //функция для загрузки постов и возврата в виде промиса
// export const getAllMyPosts = async () => {
//     const response = await getDocs(collection(firestore, 'user'))
//     //console.log(response)
//     const arr = response.docs.map(e => e.data())
//     console.log(arr)
//     return arr
// }
