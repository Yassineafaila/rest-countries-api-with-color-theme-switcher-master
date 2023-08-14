import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeftLong} from "@fortawesome/free-solid-svg-icons"
function Button({  vueDetails, setVueDetails }) {
  return (
    <div className="button-container my-8 px-3.5">
      <button
        className="btn-back bg-white px-8 py-2 rounded-lg font-semibold"
        onClick={() => setVueDetails({...vueDetails,vue:false})}
      >
        <FontAwesomeIcon icon={faArrowLeftLong} className="me-3" />
        Back
      </button>
    </div>
  );
}

export default Button