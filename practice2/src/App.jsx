import React, { useState } from "react";
import Search from "./components/Search";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img
            src="./hero.png"
            alt="A cheerful person sitting on a couch holding popcorn and a remote, smiling while watching a movie in a cozy living room. The background features soft lighting and a relaxed atmosphere. Text in the image reads: Find Movies You'll Enjoy Without the Hassle."
          />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </main>
  );
};

export default App;
