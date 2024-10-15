import React, { useState } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <h1>Product Search</h1>
      <SearchForm onSearch={handleSearch} />
      {searchTerm && <SearchResults searchTerm={searchTerm} />}
    </div>
  );
};

export default ProductSearch;
