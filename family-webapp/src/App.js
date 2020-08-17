import React from 'react';
import { Tree, treeUtil } from 'react-d3-tree';
import { useState, useEffect } from 'react';

function App(props) {

  const jsonSource = 'file:///Users/sweekruthi/development/family/family-webapp/src/data.json';
  const [info, setInfo] = useState({});

  useEffect(() => {
    treeUtil.parseJSON(jsonSource)
            .then((data) => {
              const wrapper = { data };
              setInfo(wrapper);
            })
            .catch((err) => console.error(err));
  });

  return (
    <div id="treeWrapper" style={{width: '50em', height: '20em'}}>
      <Tree data={info} />
    </div>
  );
}

export default App;