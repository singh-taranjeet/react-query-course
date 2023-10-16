import { Link } from "react-router-dom";
import {
  GoCommentDiscussion,
  GoIssueClosed,
  GoIssueOpened,
} from "react-icons/go";
import { RelativeDate } from "../helpers/relativeDate";

export function IssueItem({
  title,
  number,
  assignee,
  commentCount,
  createdBy,
  createdDate,
  labels,
  status,
}) {
  return (
    <li>
      <div>
        {status === "done" || status === "Cancelled" ? (
          <GoIssueClosed style={{ color: "red" }}></GoIssueClosed>
        ) : (
          <GoIssueOpened style={{ color: "green" }}></GoIssueOpened>
        )}
      </div>
      <div className="issue-content">
        <span>
          <Link to={`/issues/${number}`}>{title}</Link>
          {labels.map((label) => (
            <span key={label} className={`label red`}>
              {label}
            </span>
          ))}
        </span>
        <small>
          #{number} opened {<RelativeDate>{createdDate}</RelativeDate>} by{" "}
          {createdBy}
        </small>
      </div>
      {assignee ? <div>{assignee}</div> : null}
      <span className="comment-count">
        {commentCount > 0 ? (
          <>
            {<GoCommentDiscussion></GoCommentDiscussion>}
            {commentCount}
          </>
        ) : null}
      </span>
    </li>
  );
}
