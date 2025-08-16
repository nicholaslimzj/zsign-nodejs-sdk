# Zoho Sign Node.js SDK - Fixed Version

This is a fixed version of the official `@zohosign/nodejs-sdk-1.0` package that resolves critical packaging issues preventing proper usage with modern bundlers and deployment platforms like Vercel.

## Issues Fixed

### 1. ✅ Broken `main` field in package.json
- **Original**: `"main": "ZOHOSIGN_NODEJS/src/ZohoSign"` (path doesn't exist)
- **Fixed**: `"main": "src/ZohoSign.js"` (correct path)

### 2. ✅ Added proper `exports` field
- Allows proper module resolution for bundlers
- Supports both default and deep imports

### 3. ✅ Added `files` field
- Ensures all necessary files are included when installed

## Installation

### From GitHub (recommended)
```bash
npm install github:nicholaslimzj/zsign-nodejs-sdk
# or
yarn add github:nicholaslimzj/zsign-nodejs-sdk
# or
pnpm add github:nicholaslimzj/zsign-nodejs-sdk
```

### From npm (if published)
```bash
npm install @nicholaslimzj/zsign-nodejs-sdk
```

## Usage

The API is identical to the original SDK:

```javascript
// CommonJS
const { OAuth } = require('@nicholaslimzj/zsign-nodejs-sdk/src/Oauth.js');
const { ZohoSign } = require('@nicholaslimzj/zsign-nodejs-sdk/src/ZohoSign.js');

// ES Modules with createRequire (for mixed environments)
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { OAuth } = require('@nicholaslimzj/zsign-nodejs-sdk/src/Oauth.js');
const { ZohoSign } = require('@nicholaslimzj/zsign-nodejs-sdk/src/ZohoSign.js');
```

## Why This Fork?

The original `@zohosign/nodejs-sdk-1.0` package has a critical bug where the `main` field points to a non-existent path. This causes:
- ❌ Module resolution failures in bundlers (Webpack, Rollup, Vite)
- ❌ Deployment failures on platforms like Vercel, Netlify, AWS Lambda
- ❌ Cannot be properly analyzed by build tools

This fixed version ensures the package works correctly with:
- ✅ Vercel deployments
- ✅ Next.js / Nuxt.js applications
- ✅ Modern bundlers
- ✅ Serverless environments

## Credits

Original SDK by Zoho Sign team. This is simply a packaging fix to make their SDK usable in modern Node.js environments.

## License

MIT (same as original)