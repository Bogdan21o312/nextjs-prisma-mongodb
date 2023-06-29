'use client'
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import axios from 'axios';

async function getUsers() {
  const API_URL = 'http://localhost:3000/api/users/';
  const response = await axios.get(API_URL);
  return response.data;
}

async function createUser(email, name) {
  const API_URL = 'http://localhost:3000/api/users/';
  const response = await axios.post(API_URL, { email, name });
  return response.data;
}

export default function Home() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    getUsers().then(data => setUsers(data));
  }, []);

  const handleCreateUser = async e => {
    e.preventDefault();

    if (!email || !name) {
      return;
    }

    const newUser = await createUser(email, name);
    setUsers(prevUsers => [...prevUsers, newUser]);
    setEmail('');
    setName('');
  };

  return (
      <main className={styles.main}>
        <form onSubmit={handleCreateUser}>
          <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
          />
          <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
          />
          <button type="submit">Створити користувача</button>
        </form>

        {users.map(user => (
            <div key={user.id}>
              <div>{user.email}</div>
              <div>{user.name}</div>
              <div>{user.createdAt}</div>
              <div>{user.updatedAt}</div>
              <br />
            </div>
        ))}
      </main>
  );
}
