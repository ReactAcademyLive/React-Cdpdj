import React, { useState } from 'react';
import Cat from '../Cat';

export default function ParentRoot() {
  return <MouseProvider />;
}

function MouseProvider() {
  const [mouseState, setMouseState] = useState({ x: 0, y: 0 });

  function handleMouseMove(evt) {
    setMouseState({ x: evt.clientX, y: evt.clientY });
  }

  return (
    <div style={{ height: '500px' }} onMouseMove={handleMouseMove}>
      <DisplayMouse mouse={mouseState} />
      <Cat mouse={mouseState} />
    </div>
  );
}

function DisplayMouse({ mouse }) {
  return (
    <h1>
      The mouse position is: ({mouse.x}, {mouse.y})
    </h1>
  );
}

//We split in two components. A provider (for the state) and a child.
//Problem: This is strong coupling.
//If we must use another child component, we need to
//reprogram the provider.
//This is far from perfect.

//We want this kind of root, which would make weak coupling (good):
//<MouseProvider>
//  <DisplayMouse mouse={mouseState} />
//</MouseProvider>

//See the next steps.
