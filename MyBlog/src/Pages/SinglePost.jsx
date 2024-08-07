import React, { useEffect, useState } from 'react'
import { usePost } from '../Contexts/PostContext'
import { useParams } from 'react-router-dom'

function SinglePost() {
    const {getPost, getFilePreview} = usePost()
    const {id} = useParams()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [file, setFile] = useState()

    const fetchPost = async () => {
        const postResponse = await getPost(id)
        const fileResponse = await getFilePreview(postResponse.fileId)
        setTitle(postResponse.title)
        setDescription(postResponse.description)
        setFile(fileResponse)
    }


    // console.log(user.$id)
    // console.log(postId)

    useEffect(() => {
        fetchPost()
    },[getPost, id])


    return (
        <section>
            <div className="container flex justify-between h-full min-w-screen pl-16 ">
                <div className='texts px-8 flex-start flex-col my-8 w-1/2 '>
                    <div className="title mb-4 font-bold text-2xl">
                        {title}
                    </div>
                    <p className="description overflow-hidden">
                        {description}
                    </p>
                </div>
                <div className='image px-8 my-8'>
                    <img src={file}
                        className='h-[20rem] w-[25rem] rounded-xl '
                        alt="photo"
                    />
                </div>
            </div>
        </section>
    )
}

export default SinglePost