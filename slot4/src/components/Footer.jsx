import React from 'react';

function Footer({ id, name, email, githubLink }) {
  return (
    <footer className="text-center mt-5 mb-3">
      <p>ID: {id}</p>

      <p>Name: {name}</p>

      <p>Email: {email}</p>

      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Profile
      </a>
    </footer>
  );
}

export default Footer;