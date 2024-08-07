import { createContext, useContext, useState, useEffect } from "react";
import { ID, Query } from 'appwrite'
import { databases,storage } from "../AppwriteConfig";
import conf from '../conf/conf'


const PostContext = createContext()

export const PostContextProvider = ({children}) => {
    const [posts, setPosts] = useState([])


    const createPost = async (postInfo) => {

        try {
            // const fileId = null;
            // if(postInfo.file) {
                const photo = await storage.createFile(
                    conf.appwriteBucketId,
                    ID.unique(),
                    postInfo.file,
                );
                const fileId = photo.$id;
            // }


            const response = await databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            ID.unique(),
            { 
                userId: postInfo.userId,
                title: postInfo.title,
                description: postInfo.description,
                fileId: photo.$id,
                // ...postInfo,
                // fileId,
            }
            );
            setPosts((posts) => [response, ...posts].slice(0, 10))
        } catch (error) {
            console.error(error)
        }
    }

    const removePost = async (id) => {
        try {
            await databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                id
            )
            setPosts((posts) => posts.filter((post) => post.$id !== id))
            await getPost()
        } catch (error) {
            console.error(error)
        }
    }

    const getPosts = async () => {
        try {
            const response = await databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [Query.orderDesc("$createdAt"), Query.limit(10)]
            )
            setPosts(response.documents)
        } catch (error) {
            console.error(error)
        }
    }

    const updatePost = async (id, postInfo) => {
        try {
            const response = await databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                id,
                postInfo
            );
            setPosts((posts) => posts.map((post) => (post.$id === id ? response : post)));
        } catch (error) {
            console.error(error);
        }
    };

    const getPost = async (id) => {
        try {
            const SinglePost = await databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                id,
            );
            return SinglePost;
        } catch (error) {
            console.error(error);
        }
    };

    const getFilePreview = async (fileId) => {
        const file = await storage.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        )
        return file;
    }

    useEffect(() => {
        getPosts()
    },[])



    const contextData = {
        posts,
        createPost,
        removePost,
        getPost,
        updatePost,
        getFilePreview,
    }

    return (<PostContext.Provider value={contextData}>{children}</PostContext.Provider>)
}

export const usePost = () => {
    return useContext(PostContext);
}

export default PostContext