import { NextConfig } from "next";

// Inicializa o ambiente de desenvolvimento para a Cloudflare
import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());

const nextConfig: NextConfig = {
  output: 'standalone', // Garante que o Next.js gera o formato correto para o OpenNext
};

export default nextConfig;