import React from "react";
import "./App.scss";

import Hg, { Header, Main, Footer, Aside, Navigation } from "./Hg";

const App: React.FC = () => {
  return (
    <div className="App">
      <Hg>
        <Header data-testid="hg-header">
          <h1>tis but a scratch</h1>
        </Header>
        <Navigation data-testid="hg-navigation">
          <a href="/">King Arthur</a>
          <a href="/about">Black Knight</a>
        </Navigation>
        <Aside data-testid="hg-aside">Just a flesh wound</Aside>
        <Main data-testid="hg-main">
          <div>
            <p>
              <strong>King Arthur:</strong>
              The Lady of the Lake, her arm clad in the purest shimmering samite
              held aloft Excalibur from the bosom of the water, signifying by
              divine providence that I, Arthur, was to carry Excalibur. THAT is
              why I am your king.
            </p>

            <p>
              <strong>Dennis:</strong> Listen, strange women lyin' in ponds
              distributin' swords is no basis for a system of government.
              Supreme executive power derives from a mandate from the masses,
              not from some farcical aquatic ceremony.
            </p>
          </div>
        </Main>
        <Footer data-testid="hg-footer">
          <span role="img" aria-label="swordman">
            🤺
          </span>{" "}
          Oh dear... is he all right?
        </Footer>
      </Hg>
    </div>
  );
};

export default App;
