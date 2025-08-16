import React, { useCallback, useState } from "react";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const debounce = (func, delay) => {
    let timer;

    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };
  const fetchResults = async (searchTerm) => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      const filteredUsers = data.filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.username.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filteredUsers);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  const debouncedFetch = useCallback(debounce(fetchResults, 700), []);

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    debouncedFetch(val);
  };

  return (
    <div>
      <h1>SearchBox</h1>
      <input type="text" value={query} onChange={handleChange} />
      {loading ? (
        <p>Loding</p>
      ) : (
        <>
          {results.map((user) => {
            return (
              <div key={user.id}>
                <p>{user.name}</p>
                <p>{user.username}</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default SearchBox;
