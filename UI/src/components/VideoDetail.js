import "../index.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import useCommentForm from "../custom_hooks/useCommentForm";

const VideoDetail = () => {
  let { videoid } = useParams();
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);
  const { formData, handleChange, handleSubmit } = useCommentForm();

  useEffect(() => {
    if (videoid !== undefined) {
      axios
        .get(`${process.env.REACT_APP_BASE}/api/products/video/${videoid}`)
        .then((res) => {
          setProducts(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [videoid]);

  useEffect(() => {
    if (videoid !== undefined) {
      axios
        .get(`${process.env.REACT_APP_BASE}/api/comments/video/${videoid}`)
        .then((res) => {
          setComments(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [videoid]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await handleSubmit(videoid); // Pass videoId to handleSubmit
    if (response) {
      // Handle successful submission (if needed)
      console.log("Comment submitted successfully!");
      // You might want to refresh the comments or show a success message
    } else {
      // Handle error during submission (if needed)
      console.error("Error submitting comment");
      // You might want to show an error message to the user
    }
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-2 h-screen bg-zinc-800">
        <div className="col-span-1 bg-zinc-600 h-full rounded-lg flex flex-col justify-evenly px-3 py-3">
          {products.map((product) => (
            <div
              key={product._id}
              className="card w-full bg-zinc-700 shadow-xl"
            >
              <figure>
                <img src={product.urlImageProduct} alt={product.titleProduct} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.titleProduct}</h2>
                <p>Harga: ${product.priceProduct}</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-2 p-3 bg-zinc-600 h-full rounded-box">
          <div className="aspect-video mt-10">
            <iframe
              width="645"
              height="500"
              src="https://www.youtube.com/embed/5JFSjAs4Qxc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="col-span-1 grid-rows-3 bg-zinc-600 h-full rounded-lg p-2">
          {comments.map((comment) => (
            <div key={comment._id} className="chat chat-start">
              <div className="chat-header">
                {comment.username}
                <time className="text-xs opacity-50 ml-1">
                  {new Date(comment.timestamp).toLocaleString()}
                </time>
              </div>
              <div className="chat-bubble">{comment.comment}</div>
            </div>
          ))}

          <div className="flex items-center justify-center row-span-2 mt-5">
            <div className="mx-auto w-full max-w-[550px]">
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="mb-1 block text-base font-medium text-[#07074D]"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="message"
                    className="mb-1 block text-base font-medium text-[#07074D]"
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    id="message"
                    placeholder="Type your message"
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="hover:shadow-form rounded-md bg-[#6A64F1] py-2 px-6 text-base font-semibold text-white outline-none"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoDetail;
