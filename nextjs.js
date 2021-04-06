// create-next-app --examples typescript project requires code below to run @react-three/drei componets (i.e. OrbitControls)
const withTM = require("next-transpile-modules")(["@react-three/drei", "three"]);
module.exports = withTM();

// nextjs typescript tsconfig for path aliasing
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
        "@/components/*": ["components/*"],
        "@/styles/*": ["styles/*"]
    },
    "allowJs": true,
    "alwaysStrict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "lib": ["dom", "es2017"],
    "module": "esnext",
    "moduleResolution": "node",
    "noEmit": true,
    "noFallthroughCasesInSwitch": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "strict": true,
    "target": "esnext"
  },
  "exclude": ["node_modules"],
  "include": ["**/*.ts", "**/*.tsx"]
}
