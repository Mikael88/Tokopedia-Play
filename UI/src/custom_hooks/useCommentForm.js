import { useState } from "react";
import axios from "axios";

const useCommentForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (videoId) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE}/api/comments/video/${videoId}`,
        {
          videoID: videoId,
          username: formData.username,
          comment: formData.comment,
        }
      );
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
      return null;
    }
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
  };
};

export default useCommentForm;
