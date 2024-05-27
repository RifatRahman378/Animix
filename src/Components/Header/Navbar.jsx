import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const handleSearchClick = () => {
        console.log('Search value:', searchValue);
        navigate(`/search?query=${searchValue}`);
    };

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost text-xl">daisyUI</Link>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder={searchValue ? '' : 'Search'}
                        className="input input-bordered w-24 md:w-auto"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary" onClick={handleSearchClick}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default Navbar;
