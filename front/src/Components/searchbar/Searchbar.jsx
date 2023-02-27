import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./searchbar.css";
import "./style.css";

const options = ["Destinations"];
const defaultOption = options[1];
const options2 = ["Catégories"];
const defaultOption2 = options[1];
const options3 = ["Profils"];
const defaultOption3 = options[1];

function Searchbar() {
  return (
    <div className="search-bar">
      <Dropdown
        className="search-bar1"
        options={options}
        value={defaultOption}
        placeholder="Destination"
      />
      <hr className="line-search-bar"/>
      <Dropdown
        className="search-bar2"
        options={options2}
        value={defaultOption2}
        placeholder="Catégorie"
      />
      <hr className="line-search-bar"/>
      <Dropdown
        className="search-bar3"
        options={options3}
        value={defaultOption3}
        placeholder="Profil"
      />
    </div>
  );
}

export default Searchbar;
