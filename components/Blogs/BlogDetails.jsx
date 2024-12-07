"use client";
import { db } from "@/app/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

const BlogDetails = () => {
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  console.log(blog);

  // Fetch a single blog post by ID
  const fetchBlogFromDb = async () => {
    try {
      const docRef = doc(db, "blogs", params?.id); // Reference to the specific blog document by its ID
      const docSnap = await getDoc(docRef); // Fetch the document

      if (docSnap.exists()) {
        return docSnap.data(); // Return the blog data if it exists
      } else {
        throw new Error("Blog not found");
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
      throw error; // Re-throw error for handling in useEffect
    }
  };

  useEffect(() => {
    console.log("useffect called");
    fetchBlogFromDb()
      .then((blogData) => {
        console.log("blogData >>", blogData);
        setBlog(blogData);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading blog</div>;
  return (
    <div className="w-full px-4 md:px-5 lg:px-36 xl:px-56 2xl:px-72 vertical-padding flex flex-col items-start gap-4">
      <div className="w-full">
        <Link
          href={"/blogs"}
          className="text-gray-500 text-[15px] flex items-center gap-1"
        >
          <FiArrowLeft className="text-xl" />
          Back
        </Link>
      </div>
      <div className="w-full flex flex-col items-start gap-4">
        <img
          src={blog?.blogImage}
          alt=""
          className="w-full h-[70vh] object-cover"
        />
        <h2 className="font-bold text-2xl">{blog?.blogTitle}</h2>
        <p className="text-sm leading-6 tracking-wide">{blog?.blogParagraph}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
