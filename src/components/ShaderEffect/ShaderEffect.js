import React from 'react';
import { shaderHtml } from '../shader';
// const shh = require('../shader.html');
function ShaderEffect() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  return (
    mounted && <div dangerouslySetInnerHTML={{ __html: shaderHtml }}></div>
  );
}

export default ShaderEffect;
