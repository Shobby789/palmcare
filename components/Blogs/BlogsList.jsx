"use client";
import { db } from "@/app/firebaseConfig";
import ThemeContext from "@/context/ThemeContext";
import { collection, getDocs } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";

const BlogsList = () => {
  const { theme } = useContext(ThemeContext);
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(false);
  //   console.log("blogs >>>>>>>>", blogs);
  const fetchBlogsFromDb = async () => {
    try {
      // Fetch the documents from the "blogs" collection
      const querySnapshot = await getDocs(collection(db, "blogs"));

      // Map through the documents to extract the data and include the document ID
      const blogs = querySnapshot.docs.map((doc) => ({
        id: doc.id, // Include the document ID
        ...doc.data(), // Spread the document data
      }));

      // Return the array of blog objects
      return blogs;
    } catch (error) {
      // Log and rethrow the error for further handling
      console.error("Error fetching blogs:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchBlogsFromDb()
      .then((blogs) => {
        // console.log("Fetched blogs:", blogs);
        setBlogs(blogs);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setError(true);
      });
  }, []);
  return (
    <div
      className={`w-full vertical-padding horizontal-padding ${
        theme && "bg-[#000] text-white"
      }`}
    >
      <div className="w-full">
        {blogs && blogs.length > 0 ? (
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-10">
            {blogs?.map((blog, index) => {
              return (
                <div className="w-full" key={index}>
                  <img src={blog?.blogImage} alt="" />
                  <h3 className="font-bold text-xl mb-2 mt-4">
                    {blog?.blogTitle}
                  </h3>
                  <p className="text-[14px]">{blog?.blogParagraph}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No Blogs Found</h2>
          </div>
        )}
      </div>
      {error && <h2>Something went wrong!</h2>}
    </div>
  );
};

export default BlogsList;
