export default {
  base: '/ComfyUI_Workflow-DepthFrom360Videos/',
  resolve: {
    alias: {
      'three-6dof': new URL('../THREE.SixDOF/dist/three-6dof.es.js', import.meta.url).pathname
    }
  }
};