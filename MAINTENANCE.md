# Dependency Maintenance

## Update Policy

Dependabot checks every npm package directory weekly on Monday. Minor and patch
updates are grouped; major upgrades remain separate PRs. Each directory allows
up to five version-update PRs. The schedule takes effect after the configuration
is merged into the default branch. Automatic merging is not configured; review
updates and run the relevant checks before merging.

## September 8, 2026 Update

Refreshed all four lockfiles and stopped tracking project1's node_modules directory. Dependencies are installed from the lockfiles.

Validation: Clean installations and live route checks passed for all four examples with Node 22. The three JSON API examples also passed create/read checks.

The npm audit result for the updated lockfile is **0 critical, 0 high, 2 moderate in each of the four package directories**.
These counts include npm dependency propagation and are not directly comparable
to GitHub Dependabot advisory counts. Re-run npm audit for current results.

Each directory retains two moderate findings in the Express/qs dependency chain. The original npm test scripts are placeholders.
