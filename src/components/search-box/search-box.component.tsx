import { ChangeEventHandler } from "react";
import "./search-box.styles.css";

interface ISearchBoxProps extends IChangeHandlerProps {
  className: string;
  placeholder?: string;
}

interface IChangeHandlerProps {
  onChangeHandler: ChangeEventHandler<HTMLInputElement>,
}

const SearchBox = ({ className, placeholder, onChangeHandler } : ISearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={(e) => onChangeHandler(e)}
  />
);

export default SearchBox;
