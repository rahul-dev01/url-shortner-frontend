import { IoStatsChart } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { FaCopy } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

import FilledButton from "./FilledButton";
import OutlinedButton from "./OutlinedButton";

import './LinkCard.css'

const LinkCard = (props) => {
  const { redirectURL, originalURL, clickedCount, createDate } = props;

 
  const handleCopy = () => {
    navigator.clipboard.writeText(redirectURL)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  };

 
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Check this out!",
        url: redirectURL,
      })
      .catch((error) => {
        console.error("Error sharing:", error);
      });
    } else {
      alert("Share not supported on this browser. Copy the link instead.");
    }
  };

  return (
    <div className="link-card">
      <div className="link-details">
        <div>
          <a href={redirectURL} target="_blank" rel="noopener noreferrer">
            {redirectURL.split("://")[1]}
          </a>
        </div>
        <div>
          <p>{originalURL}</p>
        </div>
        <div className="link-stats">
          <div><IoStatsChart /> {clickedCount} impressions</div>
          <div><MdDateRange /> {createDate}</div>
        </div>
      </div>

      <div className="cta-groups">
        <div><FilledButton onClick={handleCopy}><FaCopy /> Copy</FilledButton></div>
        <div><OutlinedButton color="secondary" onClick={handleShare}><FaShareAlt /> Share</OutlinedButton></div>
        <div><OutlinedButton color="danger"><MdEdit /> Edit</OutlinedButton></div>
      </div>
    </div>
  );
};

export default LinkCard;
