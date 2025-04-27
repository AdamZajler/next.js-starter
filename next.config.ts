import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NODE_ENV === "production" ? "/rock-paper-scissors-lizard-spock" : "",
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
