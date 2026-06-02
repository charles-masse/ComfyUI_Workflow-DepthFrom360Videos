export default {
  base: '/ComfyUI_Workflow-DepthFrom360Videos/',
  resolve: {
    alias: {
      'three-6dof': new URL('../THREE.SixDOF/dist/index.js', import.meta.url).pathname
    }
  }
};