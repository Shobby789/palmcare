"use client";
import { db } from "@/app/firebaseConfig";
import ThemeContext from "@/context/ThemeContext";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "framer";
import React, { useContext, useEffect, useState } from "react";

const BlogsList = () => {
  const { theme } = useContext(ThemeContext);
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(false);

  const fetchBlogsFromDb = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "blogs"));

      const blogs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return blogs;
    } catch (error) {
      console.error("Error fetching blogs:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchBlogsFromDb()
      .then((blogs) => {
        console.log("Fetched blogs:", blogs);
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
          <div className="w-full flex flex-col items-start gap-y-10">
            {blogs?.map((blog, index) => {
              return (
                <div className="w-full flex items-start gap-5" key={index}>
                  <img src={blog?.blogImage} alt="" className="w-[30%]" />
                  <div className="w-full flex flex-col items-start">
                    <h3 className="font-bold text-xl mb-2 mt-4">
                      {blog?.blogTitle}
                    </h3>
                    <p className="text-[14px]">
                      {blog?.blogParagraph.slice(0, 450)}
                    </p>
                    <a
                      href={`/blogs/${blog?.id}`}
                      className={`text-[15px] 2xl:text-lg px-6 py-3 text-white font-medium bg-primary mt-3 block`}
                    >
                      <span>Read More</span>
                    </a>
                  </div>
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
