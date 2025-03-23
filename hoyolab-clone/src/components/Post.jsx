import React from "react";
import userAvaterIcon from "../assets/userAvater.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import "../styles/Post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-header-left">
          <img src={userAvaterIcon} alt="Avatar Icon" />
          <div className="user-info">
            <h4>Fritzlee Maurer</h4>
            <span>03/04 • Genshin Impact</span>
          </div>
        </div>
        <div className="post-header-right">
          <button>Follow</button>
        </div>
      </div>

      <div className="post-content">
        <p>I havent slept for 3days doing this assignment and I'm still not done</p>
        <div className="post-images">
          <img src={img1} alt="Post Image 1" />
          <img src={img2} alt="Post Image 2" />
          <img src={img3} alt="Post Image 3" />
        </div>
        <div className="post-tags">
          <span>🔥 Furina</span>
          <span># 5.4</span>
          <span># Pulling for character</span>
          <span># 50/50 lost</span>
          <span># pulls</span>
        </div>
      </div>

      <div className="post-footer">
        <span>142k views</span>
        <div className="reactions">
          <span>💬 509</span>
          <span>👍 1,906</span>
          <span>❤️ 509</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
