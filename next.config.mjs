/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  redirects:async () => {
    return[
       {
      source:'/user',
      destination:"/",
      permanent:false
    },
     {
      source:'/user/:userid',
      destination:"/",
      permanent:false
    },
     {
      source:'/admin',
      destination:"/",
      permanent:false
    }
  ]
  }
};

export default nextConfig;
