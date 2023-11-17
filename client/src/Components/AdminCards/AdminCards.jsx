import React from "react";
import { useState, useEffect } from "react";
import "./AdminCards.css";
export default function AdminCards({ title, body, githubid, likes, pending }) {
  const [falsePending, setFalsePending] = useState(pending);
  function approveButton() {
    let temp = falsePending;
    function toggleApproval() {
      //pending = !pending;
      temp = !falsePending;
      setFalsePending(temp);
    }
    if (pending == true || temp == true) {
      return (
        <button
          className="button-opportunity-card"
          onClick={
            //console.log(falsePending);
            toggleApproval
          }
        >
          Approve
        </button>
      );
    } else {
      return (
        <button
          className="button-opportunity-card-bookmarked"
          onClick={() => toggleApproval}
        >
          Remove approval
        </button>
      );
    }
  }

  return (
    <div className="bookmark-card">
      <h2>{title}</h2>
      <p>{body}</p>
      <div>{approveButton()}</div>
    </div>
  );
}
