/* --- path: tsconfig.json --- */
{
    "include": ["src/**/*"]
}

/* --- path: src/foo.ts --- */
export const bar = 42;

/* --- path: src/index.ts --- */
import { bar } from "./foo";
//       ^ defined: 7

/* --- path: test/index.ts --- */
