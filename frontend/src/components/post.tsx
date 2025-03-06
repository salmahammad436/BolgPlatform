import { JSX } from 'react'

export interface PostProps {
    auther: string,
    title: string,
    content: string,
    createdAt: string
    onchange?:(e:object)=>void
}

export default function Post({ auther, title, content, createdAt,onchange }: PostProps): JSX.Element {
    return (
        <>
            <div className='my-3 container w-50 mx-auto border border-gray-300 rounded-md shadow-md p-4'>
                <div className='flex gap-3 items-center'>
                    <img src="pp.png" alt="profile picture" width={40} height={40}  /> 
                <h2 className='text-lg font-blod'> {auther}</h2>
                </div>
                <p className='text-gray-500 text-sm'>{createdAt}</p>
                <h5 className="text-xl font-semibold mt-2">{title}</h5>
                <p className="text-gray-700 mt-1">{content}</p>
            </div>
        </>
    )
}