import React, { useEffect, useState } from "react";
import Post from "../components/post";
import axios from "axios";
import { PostType } from '../interfaces/post-interface'
import { formatDate } from '../utils/dateFormater'
import { Link } from "react-router-dom";

export default function Home() {
   const [data, setData] = useState<PostType[]>([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      axios
         .get("http://localhost:3000/posts")
         .then((res) => {
           
            setData(res.data);
            setLoading(false);
         })
         .catch((err) => {
            console.error("Error fetching posts:", err);
            setLoading(false);
         });
   }, []);

   return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
         {loading ? (
            <div className="flex flex-col items-center">
               <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
               <p className="mt-3 text-green-600 text-lg font-semibold">Loading posts...</p>
            </div>
         ) : data.length > 0 ? (
            data.map((post) => (
               <Link key={post._id}
                  to={`/details/${post._id}`}
                  className="block w-full">
                  <Post
                     key={post._id}
                     title={post.title}
                     auther={post.author}
                     content={post.content}
                     createdAt={formatDate(post.createdAt)} />
               </Link>
            ))
         ) : (
            <p className="text-gray-600 text-lg">No posts found.</p>
         )}
      </div>
   );
}
