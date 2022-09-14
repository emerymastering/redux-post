import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOnePost } from "../store/postPage/actions";
import ReactMarkdown from "react-markdown";
import { selectPostAndComments } from "../store/postPage/selectors";

export default function Postpage() {

const dispatch = useDispatch();
const { id } = useParams();

useEffect(() => {
    // the id that comes from the useParams :)
    dispatch(fetchOnePost(id));
  }, [dispatch, id]);

const postAndComments = useSelector(selectPostAndComments)

return (
    <div>
      {!postAndComments.post ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{postAndComments.post.title}</h1>
          <p className="meta">TODO</p>

          <ReactMarkdown children={postAndComments.post.content} />

          <h2>Comments</h2>
          <p>TODO</p>
        </>
      )}
    </div>
  );
}