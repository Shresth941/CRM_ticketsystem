import React from 'react';
import PropTypes from 'prop-types';
import "./messagehistory.css"

const Messagehistory = ({ msg }) => {
  if (!msg) return null;

  return (
    <>
      {msg.map((row, i) => (
        <div key={i} className="message-history mt-3">
          <div className="send font-weight-bold text-secondary">
            <div className="sender ">{row.messageBy}</div>
            <div className="date">{row.date}</div>
          </div>
          <div className="message">{row.message}</div>
        </div>
      ))}
    </>
  );
};

Messagehistory.propTypes = {
  msg: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Messagehistory;
