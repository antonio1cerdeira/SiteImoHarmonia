/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
};

// Inicializa o ambiente de desenvolvimento para a Cloudflare
import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());

export default nextConfig;