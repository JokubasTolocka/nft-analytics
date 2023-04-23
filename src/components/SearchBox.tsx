import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const SearchBox = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onKeyDown = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') onSubmit();
  };

  const onSubmit = () => {
    if (searchTerm.length < 3) return;
    setSearchTerm('');
    if (inputRef.current) inputRef.current.blur();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <div className="relative">
      <input
        className="rounded-2xl bg-dark-100 placeholder:text-dark-60 py-3 px-5 border border-dark-40 text-white w-[260px] pr-20"
        placeholder="Search"
        value={searchTerm}
        ref={inputRef}
        onChange={({ target: { value } }) => setSearchTerm(value)}
        onKeyDown={onKeyDown}></input>
      {searchTerm.length >= 3 && (
        <Button
          onClick={onSubmit}
          className="absolute top-0 bottom-0 my-2 text-white rounded-lg right-2 !p-2 text-sm z-10"
          variant="small">
          Search
        </Button>
      )}
    </div>
  );
};

export default SearchBox;
