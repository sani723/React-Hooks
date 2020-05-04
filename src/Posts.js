import React, { useState, useEffect } from "react";

const Posts = ({ id, title, body }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  useEffect(() => {
    setPosts([]);
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url =
      user === 0
        ? `https://jsonplaceholder.typicode.com/posts`
        : `https://jsonplaceholder.typicode.com/posts?userId=${user}`;
    fetch(proxyurl + url)
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, [user]);

  return (
    <div className="search-params">
      <h1>Ticket Reseller</h1>
      <div className="filter">
        <label htmlFor="users">
          Select user
          <select
            id="users"
            onChange={(event) => setUser(event.target.value)}
            onBlur={(event) => setUser(event.target.value)}
          >
            <option value="0">All</option>
            {users.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="results">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Posts;
