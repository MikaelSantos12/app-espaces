import { useState } from "react";

export const useLikePost = () => {
  const [isLiked, setIsLiked] = useState(false);
  return {
    isLiked,
    setIsLiked,
  };
};
