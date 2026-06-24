// import type { NextConfig } from "next";

// module.exports = {
//   allowedDevOrigins: ["local-origin.dev", "*", "*.local-origin.dev"],
// };

// const nextConfig: NextConfig = {
//   /* config options here */
//   output: "export",
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", //uncomment for folder base out after build

  // Placed at the root level as required by Next.js
  allowedDevOrigins: ["local-origin.dev", "*", "*.local-origin.dev"],
  images: { unoptimized: true },
};

export default nextConfig;
