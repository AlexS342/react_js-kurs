import { collection, getDocs, setDoc, doc, addDoc } from "firebase/firestore";
import { firestore } from './firebase'

//addPost Из src/pages/chats
export const addChat = async (data) => {
    await setDoc(doc(firestore, `chats/${data}`), { name: data, id: data });
}
//addPost2 Из src/pages/chats
export const initChat = async (data) => {
    await setDoc(doc(firestore, `chats/${data}/message/${data}`), { author: 'robot', text: 'Чат инициализирован.' });
}
//getAllPosts Из src/pages/chats
export const getAllChats = async () => {
    const response = await getDocs(collection(firestore, 'chats'))
    const arr = response.docs.map(e => e.data())
    return arr
}

//addPost Из src/Components/Chats/ChatPage
export const addMessage = async (data, chatID, emailAuth) => {
    const result = addDoc(collection(firestore, `chats/${chatID}/message`), { text: data, author: emailAuth })
};
//getAllPost Из src/Components/Chats/ChatPage
export const getAllMessage = async (way) => {
    const response = await getDocs(collection(firestore, way))
    const arr = response.docs.map(e => e.data())
    return arr
}



//Из src/pages/profile
export const addUser = async (data) => {
    const result = await setDoc(collection(firestore, 'users'), data)
}
//Из src/pages/profile
export const getAllUsera = async () => {
    const response = await getDocs(collection(firestore, 'users'))
    const arr = response.docs.map(e => e.data())
    return arr
}