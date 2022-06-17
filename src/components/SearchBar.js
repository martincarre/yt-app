import React, {useState} from "react";

const SearchBar = ({onTermSubmit}) => {
    const [term, setTerm] = useState('');

    const onSubmit = event => {
        event.preventDefault();
        onTermSubmit(term);
    };

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Search for a Video:</label>
                    <input value={term} onChange={e => setTerm(e.target.value)} type="text"/>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;