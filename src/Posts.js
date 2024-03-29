import React, { useState, useEffect } from "react";
// import User from "./User.js";
import "./Posts.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ReplyIcon from "@mui/icons-material/Reply";
import SendIcon from "@mui/icons-material/Send";
import EditIcon from "@mui/icons-material/Edit";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const Posts = () => {
  const Posts = [
    {
      userName: "Arpita",
      content: "All is well ha ha ha ha ha aha ",
      like: [],
      comment: [],
      share: 0,
    },
    {
      userName: "Puneet",
      content: "Hi there ha haha ha ha ha ha ha ",
      like: [],
      comment: [],
      share: 0,
    },
  ];
  const User = [
    {
      userName: "Arpita",
      posts: [],
    },
    {
      userName: "Puneet",
      posts: [],
    },
  ];

  const [value, setValue] = useState("");
  const [AllPost, setAllPost] = useState(Posts);
  const [LoggedInuser, setLoggedInUser] = useState(User[0]);
  //   const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [FirstTimeUserLike, setFirstTimeUserLike] = useState(true);
  const [isOpen, setIsOpen] = useState({ index: null });
  const [comment, setComment] = useState("");
  const [editComment, setEditComment] = useState("");
  const [isEdit, setIsEdit] = useState({ postIndex: null, commentIndex: null });

  const handlePost = () => {
    // const temp = Posts.map((val, index) => {
    //   return {
    //     ...val,
    //     username: LoggedInuser.userName,
    //     content: value,
    //     like: [],
    //     comment: [],
    //     share: 0,
    //   };
    // });
    //console.log(temp);
    setAllPost([
      ...AllPost,
      {
        userName: LoggedInuser.userName,
        content: value,
        like: [],
        comment: [],
        share: 0,
      },
    ]);
    console.log(AllPost);
    setValue("");
  };

  const handleLike = (index) => {
    const temp = AllPost.map((post, i) => {
      if (index === i) {
        if (post.like.includes(LoggedInuser.userName)) {
          //   const idx = post.like.indexOf(LoggedInuser.userName);
          const temp1 = post.like.filter((val, i) => {
            return LoggedInuser.userName !== val;
          });
          return { ...post, like: temp1 };
        } else {
          console.log(post);
          return { ...post, like: [...post.like, LoggedInuser.userName] };
        }
      } else {
        return post;
      }
    });
    // setLikeCount(AllPost[index].like.length);
    // if (!FirstTimeUserLike) {
    //   console.log(FirstTimeUserLike);
    //   const temp = AllPost.map((post, i) => {
    //     setLiked(!liked);
    //     if (index === i) {
    //       return {
    //         ...post,
    //         like: post.like.map((liked, id) => {
    //           console.log(liked.userName === LoggedInuser.userName);
    //           if (liked.userName == LoggedInuser.userName) {
    //             setFirstTimeUserLike(false);
    //             return { ...liked, isLiked: !liked };
    //           } else return liked;
    //         }),
    //       };
    //     }

    //     return post;
    //   });
    //   setAllPost(temp);
    // } else {
    //   console.log("else");
    //   setFirstTimeUserLike(false);
    //   const temp = AllPost.map((post, i) => {
    //     return {
    //       ...post,
    //       like: [
    //         ...post.like,
    //         {
    //           userName: LoggedInuser.userName,
    //           isLiked: true,
    //         },
    //       ],
    //     };
    //   });
    //   setAllPost(temp);
    // }

    //     return {
    //       ...post,
    //       like: [
    //         ...post.like,
    //         {
    //           userName: LoggedInuser.userName,
    //           isLiked: !liked,
    //         },
    //       ],
    //     };
    //   } else return { ...post };
    // });

    setAllPost(temp);
    console.log(AllPost);
    // if (AllPost[index].like[0].isLiked) {
    //   setLikeCount(likeCount + 1);
    // } else setLikeCount(likeCount - 1);
  };

  const handleComment = (index) => {
    setIsOpen({ ...isOpen, index: index });
    // const temp = isOpen.map((open, id) => {
    //   console.log(index);
    //   if (id === index) return true;
    //   else return false;
    // });
    // console.log(temp);
    //     const temp = AllPost.map((post, i) => {
    //       if (index === i)
    //         return {
    //           ...post,
    //           comment: [...post.comment, { userName: LoggedInuser, isOpen: true }],
    //         };
    //       else return { ...post };
    //     });
    //     console.log(temp);
    //     setAllPost([...temp]);
    //     console.log(AllPost);
    //   };
  };

  const handleCommentPost = (index) => {
    setIsOpen({ ...isOpen, index: null });
    const temp = AllPost.map((post, i) => {
      if (index === i)
        return {
          ...post,
          comment: [
            ...post.comment,
            { userName: LoggedInuser.userName, content: comment },
          ],
        };
      else return post;
    });
    console.log(temp);
    setAllPost(temp);
    setComment("");
  };

  const handleDeleteComment = (index, id) => {
    const temp = AllPost.map((post, i) => {
      if (index === i)
        return {
          ...post,
          comment: post.comment.filter((com, ix) => {
            return ix !== id;
          }),
        };
      return post;
    });
    setAllPost(temp);
  };

  const handleEditComment = (postindex, commentIndex) => {
    setEditComment(AllPost[postindex].comment[commentIndex].content);
    setIsEdit({ ...isEdit, postIndex: postindex, commentIndex: commentIndex });
  };

  const handleUpdatedComment = (index, id) => {
    setIsEdit({ ...isEdit, commentIndex: null, postIndex: null });

    const temp = AllPost.map((post, i) => {
      if (index === i)
        return {
          ...post,
          comment: post.comment.map((com, idx) => {
            if (id === idx) {
              console.log(post.comment[idx].content);

              return {
                ...com,

                content: editComment,
              };
            } else return com;
          }),
        };
      return post;
    });
    console.log(temp);
    setAllPost(temp);
  };
  return (
    <div className="container">
      <div className="card">
        <div className="post">
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            className="input__post"
            placeholder="whats on your mind ?"
          />

          <button
            type="button"
            placeholder="Post"
            onClick={handlePost}
            className="button__post"
          >
            Post
          </button>
        </div>
        <p style={{ color: "#212121" }}>Discover Posts</p>
        {User.length !== 0 && (
          <div>
            {AllPost.map((value, i) => {
              return (
                <div className="all__posts">
                  <h5>{value.userName}</h5>
                  <span>{value.content}</span>
                  {value.like.length + 10 === 0 ? null : (
                    <div className="total_likes">
                      {value.like.length + 10}{" "}
                      <FavoriteIcon
                        style={{
                          color: "red",
                          fontSize: "1rem",
                          paddingTop: "5px",
                        }}
                      />{" "}
                    </div>
                  )}
                  <hr></hr>
                  <span className="LikeShareComment">
                    {value.like[0] === LoggedInuser.userName ? (
                      <FavoriteIcon
                        style={{ color: "red" }}
                        onClick={() => handleLike(i)}
                      />
                    ) : (
                      <FavoriteBorderIcon onClick={() => handleLike(i)} />
                    )}
                    {/* <button onClick={() => handleLike(i)}>}
                      {value.like.length}Like
                    </button> */}
                    <ChatBubbleOutlineIcon onClick={() => handleComment(i)} />
                    <ReplyIcon />
                    {/* <button onClick={() => handleComment(i)}>Comment</button>
                    <button>Share</button> */}
                  </span>
                  {isOpen.index === i ? (
                    <>
                      <div className="comment__post">
                        <input
                          type="text"
                          placeholder="Comment..."
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          className="comment__input"
                        ></input>
                        <SendIcon onClick={() => handleCommentPost(i)} />
                        {/* <button onClick={() => handleCommentPost(i)}>
                          {">"}
                        </button> */}
                      </div>
                    </>
                  ) : null}

                  {value.comment.map((com, id) => {
                    return (
                      <div className="all_comment">
                        <h6> {com.userName} </h6>
                        {isEdit.commentIndex === id &&
                        isEdit.postIndex === i ? (
                          <>
                            <input
                              value={editComment}
                              onChange={(e) => setEditComment(e.target.value)}
                              className="comment__input"
                            ></input>
                            <SendIcon
                              onClick={() => handleUpdatedComment(i, id)}
                            />
                            {/* <button onClick={() => handleUpdatedComment(i, id)}>
                              {">"}
                            </button> */}
                          </>
                        ) : (
                          <>
                            <span className="comment__content">
                              {" "}
                              {com.content}
                              <div className="commentFooter">
                                <EditIcon
                                  onClick={() => handleEditComment(i, id)}
                                />
                                {/* <button onClick={() => handleEditComment(i, id)}>
                                Edit
                              </button> */}
                                <DeleteOutlineIcon
                                  onClick={() => handleDeleteComment(i, id)}
                                />
                                {/* <button
                                onClick={() => handleDeleteComment(i, id)}
                              >
                                Del
                              </button> */}
                              </div>
                            </span>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default Posts;
