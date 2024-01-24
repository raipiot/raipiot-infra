import { BootstrapAnimation } from '@raipiot-infra/bootstrap-animation'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), BootstrapAnimation()]
})
