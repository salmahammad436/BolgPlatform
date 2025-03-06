import React, { useState, FormEvent, ChangeEvent, useEffect } from "react";
import Input from '../components/input';
import axios from "axios";
import { FormData, FormErrors, TouchedFields } from '../interfaces/post-interface'

export default function CreatePostForm() {
  const [formData, setFormData] = useState<FormData>({ author: '', title: '', content: '' });
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({
    author: false,
    title: false,
    content: false,
  });
  useEffect(() => {
    const newErrors: FormErrors = {
      author: !formData.author.trim() ? "Author name is required." : undefined,
      title: !formData.title.trim() ? "Title is required." : undefined,
      content: !formData.content.trim() ? "Content cannot be empty." : undefined,
    };
    setErrors(newErrors);
  }, [formData]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setMessage(null);
    setTouched({
      author: true,
      title: true,
      content: true,
    });

    if (Object.values(errors).some(error => error)) return;
    setLoading(true);
    try {
      await axios.post("http://localhost:3000/posts", formData);
      setMessage("✅ Post created successfully!");
      setFormData({ author: '', title: '', content: '' });
      setErrors({});
      setTouched({ author: false, title: false, content: false });
    } catch (error) {
      setMessage("❌ Failed to create post.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (!touched[name as keyof TouchedFields]) {
      setTouched(prev => ({ ...prev, [name]: true }));
    }
  };
  const isFormValid = (): boolean => {
    return !Object.values(errors).some(error => error);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Create a New Post</h2>

      {message && (
        <p className={`text-center ${message.includes("✅") ? "text-green-600" : "text-red-600"}`}>
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="author"
          placeholder="Author Name"
          value={formData.author}
          onChange={handleChange}
        />
        {touched.author && errors.author && <p className="text-red-500 text-sm">{errors.author}</p>}

        <Input
          name="title"
          placeholder="Post Title"
          value={formData.title}
          onChange={handleChange}
        />
        {touched.title && errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

        <textarea
          name="content"
          placeholder="Post Content"
          value={formData.content}
          onChange={handleChange}
          rows={4}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-200"
        />
        {touched.content && errors.content && <p className="text-red-500 text-sm">{errors.content}</p>}

        <button
          type="submit"
          disabled={loading || !isFormValid()}
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Publish Post"
          )}
        </button>
      </form>
    </div>
  );
}