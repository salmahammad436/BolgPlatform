import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { PostType } from "../interfaces/post-interface";
import { formatDate } from "../utils/dateFormater";

export default function PostDetails() {
   const [post, setPost] = useState<PostType | null>(null);
   const [loading, setLoading] = useState(true);
   const { id } = useParams();
   useEffect(() => {
      axios
         .get(`http://localhost:3000/posts/${id}`)
         .then((res) => {
            setPost(res.data);
            setLoading(false);
         })
         .catch((err) => {
            console.error("Error fetching post:", err);
            setLoading(false);
         });
   }, [id]);

   if (loading) {
      return (
         <div className="flex justify-center items-center min-h-screen">
            <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="ml-3 text-lg text-green-600">Loading post details...</p>
         </div>
      );
   }

   if (!post) {
      return (
         <div className="flex justify-center items-center min-h-screen">
            <p className="text-red-500 text-lg font-semibold">Post not found.</p>
         </div>
      );
   }
   return (
      <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden p-6">

         <div className="flex items-center gap-3 mb-4">
            <img
               src="/pp.png" 
               alt="Author Profile"
               className="w-12 h-12 rounded-full border border-gray-300"
            />
            <div>
               <h3 className="text-lg font-semibold text-gray-800">{post.author}</h3>
               <p className="text-gray-500 text-sm">{formatDate(post.createdAt)}</p>
            </div>
         </div>
         <h2 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h2>
         <p className="text-gray-700 leading-relaxed">{post.content}</p>
         <div className="mt-6">
            <button
               onClick={() => window.history.back()}
               className="px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition duration-300">
               ← Back to Posts
            </button>
         </div>
      </div>
   );
}
