import React from 'react';
import Hd from './layout/Hd'
import Contents from './layout/Contents'
import Ft from './layout/Ft'

import info from './data/info.json'

function App(props) {
  return (
    <div id="#top">
      <Hd id="hd" info={info}></Hd>
      <Contents id="contents" info={info}></Contents>
      <Ft id="ft" info={info}></Ft>
    </div>
  );
}

export default App;
