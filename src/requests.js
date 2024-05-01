const sha256 = require('js-sha256').sha256;

export const addUser = async (login, password, email) => {
  const res = await fetch('http://localhost:5000/adduser', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({
      id: Date.now() % 1000000,
      login: login,
      password: sha256(password),
      email: email,
    }),
  });

  return await res.json();
};

export const getUser = async (login) => {
  const res = await fetch('http://localhost:5000/getuser', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({
      login: login
    }),
  });

  return await res.json();
};