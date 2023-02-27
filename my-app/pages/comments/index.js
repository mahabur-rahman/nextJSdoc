import { useState } from "react";

function CommentPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  //   get comments
  const fetchComments = async () => {
    const res = await fetch(`/api/comments`);
    const data = await res.json();

    setComments(data);
  };

  console.log(comment);

  //   post comment
  const submitComment = async () => {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment,
      }),
    });

    const data = await response.json();

    console.log(`Comment: ${data}`);
  };

  // delete comment
  const deletedComment = async (id) => {
    const response = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();

    console.log(data);

    fetchComments();
  };

  return (
    <>
      <h1>Comment page</h1>

      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button onClick={submitComment}>Submit comment</button>

      <button onClick={fetchComments}>Load Comments</button>

      {comments.map((comment) => {
        return (
          <>
            <h3>
              {comment.id} | {comment.text}
            </h3>
            <button onClick={(e) => deletedComment(comment.id)}>
              Delete Comment
            </button>
          </>
        );
      })}
    </>
  );
}

export default CommentPage;
