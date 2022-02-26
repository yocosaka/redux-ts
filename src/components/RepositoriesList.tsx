import React from 'react';
import { useState } from 'react';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchReporistories } = useActions();
  const { data, error, loading } = useTypeSelector(
    (state) => state.repositories,
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // validate
    if (term.trim()) {
      // dispatch
      searchReporistories(term.trim().toLowerCase());
      // => dispatch(actionCreators.searchReporistories(term.trim().toLowerCase()));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
