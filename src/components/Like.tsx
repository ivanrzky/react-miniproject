
import useLikeButton from "../hooks/useLikeButton";

const Like = () => {
    const {liked, toggleLike} = useLikeButton();
    return (
        <div>
            <button onClick={toggleLike}>{liked ? "Unlike" : "Like"}</button>
        </div>
    )
};
export default Like;