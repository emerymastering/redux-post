import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOnePost } from "../store/postPage/actions";
import ReactMarkdown from "react-markdown";
import moment from "moment";
import { selectPostAndComments } from "../store/postPage/selectors";

export default function PostPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    // the id that comes from the useParams :)
    dispatch(fetchOnePost(id));
  }, [dispatch, id]);

  const postAndComments = useSelector(selectPostAndComments);

  console.log("all", postAndComments);

  return (
    <div>
      <h3>
        <Link to="/">Back</Link>
      </h3>
      {!postAndComments.post ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{postAndComments.post.title}</h1>
          <p className="meta">
            By <strong>{postAndComments.post.developer.name}</strong> &bull;{" "}
            {moment(postAndComments.post.createdAt).format("DD-MM-YYYY")} &bull;{" "}
            <span className="tags">
              {postAndComments.post.tags.map((tag) => {
                return (
                  <React.Fragment key={tag.id}>
                    <span className="Tag">{tag.tag}</span>{" "}
                  </React.Fragment>
                );
              })}
            </span>
          </p>
          <ReactMarkdown children={postAndComments.post.content} />

          <h2>Comments</h2>
          {postAndComments.comments.rows.length === 0 ? (
            <p>
              <em>No comments left yet :(</em>
            </p>
          ) : (
            postAndComments.comments.rows.map((comment) => {
              return (
                <div key={comment.id}>
                  <p>{comment.text}</p>
                  <p className="meta">
                    By <strong>{comment.developer.name}</strong> &bull;{" "}
                    {moment(comment.createdAt).format("DD-MM-YYYY")}{" "}
                  </p>
                </div>
              );
            })
          )}
        </>
      )}
    </div>
  );
}
