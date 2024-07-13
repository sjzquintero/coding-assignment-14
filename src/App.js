import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Portfolio Site</h1>
        <BasicInformation />
        <Work />
        <TechList />
        <Resources />
        <DeveloperSetup />
      </header>
    </div>
  );
}

function BasicInformation() {
  return (
    <section>
      <h2>Basic Information</h2>
      <p>Santiago Jimenez</p>
      <p>Winnipeg, Canada</p>
    </section>
  );
}

function Work() {
  return (
    <section>
      <h2>Work</h2>
      <div>
        <h3>Full stack web developer</h3>
        <p>I am a full stack web developer that studied in the RRC</p>
        <img  src="/images/golden.passion.png" alt="Work" className="resource-image" />
        <a href="https://github.com/sjzquintero">Link</a>
      </div>
    </section>
  );
}

function TechList() {
  return (
    <section>
      <h2>Skills</h2>
      <p>I dominate different skils, languages and frameworks</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>PHP</li>
        <li>React</li>
        <li>SQL</li>
      </ul>
    </section>
  );
}

function Resources() {
  return (
    <section>
      <h2>Resources</h2>
      <div>
        <h3>Title</h3>
        <img src="/images/red-river-logo.png" alt="Resource" className="resource-image"/>
        <p>Summary</p>
        <a href="https://www.rrc.ca/explore/program/full-stack-web-development/">Link</a>
      </div>
    </section>
  );
}

function DeveloperSetup() {
  return (
    <section>
      <h2>Developer Setup</h2>
      <h3>VSCode Setup</h3>
      <p>Recommended settings and extensions for VSCode.</p>
      <h3>Terminal Setup</h3>
      <p>Preferred terminal configuration and tools.</p>
      <h3>Preferred Editor Font</h3>
      <p> preferred editor font.</p>
    </section>
  );
}

export default App;
