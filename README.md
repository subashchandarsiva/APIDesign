# API Design Exercises

Use Node.js 22 or newer. Each directory has its own manifest and lockfile.
Run `npm ci` inside the selected directory, then start its server:

| Directory | Start command |
| --- | --- |
| `Route` | `node server/server.js` |
| `nodeJS_API/project1` | `node app.js` |
| `nodeJS_API/Project2` | `node server/server.js` |
| `nodeJS_API/Project3` | `node server/server.js` |

All examples use port 3000, so run one at a time. Project1 serves a greeting at
`/`; the other examples expose `/lions` and a static client. Installed
node_modules directories are excluded from Git and recreated with npm ci.
The original npm test commands are unimplemented placeholders.

See [MAINTENANCE.md](MAINTENANCE.md) for dependency checks and update policy.
