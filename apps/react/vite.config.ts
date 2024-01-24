import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { BootstrapAnimation } from '@raipiot-infra/bootstrap-animation'

export default defineConfig({
  plugins: [react(), BootstrapAnimation()]
})
