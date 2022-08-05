import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React from "react";
import blogs from "../data/blogs.json";
import { useState } from "react";
import { useEffect } from "react";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(15)
  const [currentData, setCurrentData] = useState(blogs.posts.slice(0, 15))
  const [startIndex, setStartIndex] = useState(0)
  

  useEffect(() => {
    const endIndex = startIndex + pageSize
    setCurrentData(blogs.posts.slice(startIndex, endIndex))
  }, [currentPage, pageSize])

  const updateRowsPerPage = (event, pageSize) => {
    setPageSize(Number(event))
  };
  const updatePage = (newPage, index) => {
    setStartIndex(index)
    setCurrentPage(newPage)
  };

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSize={pageSize.current}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;