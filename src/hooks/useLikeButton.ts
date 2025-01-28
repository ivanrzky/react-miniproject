import { useState } from "react";


const useLikeButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };
  return { liked, toggleLike };
};
export default useLikeButton;