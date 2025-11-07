/// <reference types="next" />
/// <reference types="next/image-types/global" />

// CSS imports are treated as side-effect imports in Next.js
declare module "*.css" {
  const content: string;
  export default content;
}

declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
