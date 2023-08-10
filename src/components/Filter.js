import React,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
function Filter({ setContinents }) {
  const [select, setSelect] = useState("Filter by Region");
  const [isMenuShowing, setShowing] = useState(false);
  const [state, setState] = useState(true);
  const ShowMenu = () => {
    setShowing(!isMenuShowing);
    setState(!state);

  };
  const HideMenu = () => {
    setState(!state);
    setShowing(!isMenuShowing);
    setContinents(null)
    setSelect("Filter by Region")
  };
  const ChangeSelect = (e) => {
    setSelect(e.target.value);
    setContinents(e.target.value);
  };
  return (
    <div className="my-8 px-3.5 relative">
      <div className="select-menu w-60">
        <div className="select-btn flex items-center justify-between rounded-md px-8 py-5 font-semibold ">
          <span className="sBtn-text text-md font-semibold">{select}</span>
          {state ? (
            <FontAwesomeIcon
              icon={faChevronDown}
              className="icon text-sm cursor-pointer"
              onClick={ShowMenu}
            />
          ) : (
            <FontAwesomeIcon
              icon={faChevronUp}
              className="icon text-sm cursor-pointer"
              onClick={HideMenu}
            />
          )}
        </div>
        {isMenuShowing && (
          <ul className="options mt-2 rounded-md px-8 py-4 absolute w-60">
            <option
              className="option font-semibold mt-1 mb-2 cursor-pointer"
              value="Africa"
              onClick={ChangeSelect}
            >
              Africa
            </option>
            <option
              className="option font-semibold mt-1 mb-2 cursor-pointer"
              value="North America"
              onClick={ChangeSelect}
            >
              North America
            </option>
            <option
              className="option font-semibold mt-1 mb-2 cursor-pointer"
              value="South America"
              onClick={ChangeSelect}
            >
              South America
            </option>
            <option
              className="option font-semibold mt-1 mb-2 cursor-pointer"
              value="Asia"
              onClick={ChangeSelect}
            >
              Asia
            </option>
            <option
              className="option font-semibold mt-1 mb-2 cursor-pointer"
              value="Europe"
              onClick={ChangeSelect}
            >
              Europe
            </option>
            <option
              className="option font-semibold mt-1 mb-2 cursor-pointer"
              value="Oceania"
              onClick={ChangeSelect}
            >
              Oceania
            </option>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Filter