import type { NextConfig } from "next";

/* Static site for GitHub Pages. The deploy workflow sets NEXT_PUBLIC_BASE_PATH
   (for example "/garvit-geetanjali-invitation"); local dev leaves it empty. */
const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  images: { unoptimized: true },
  allowedDevOrigins: ["192.168.1.27:3000", "localhost:3000"],
};

export default nextConfig;
