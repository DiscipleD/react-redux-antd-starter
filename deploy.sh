#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

SOURCE_BRANCH="real-world"
TARGET_BRANCH="gh-pages"

# Save some useful information
REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
SHA=`git rev-parse --verify HEAD`

# Clone the existing gh-pages for this repo into tmp
# Create a new empty branch if gh-pages doesn't exist yet (should only happen on first deploy)
git clone $REPO tmp
cd tmp
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH
cd ..

# Clean out existing contents
rm -rf tmp/**/* || exit 0

# Build source
npm run build
cp -r build/ tmp/

# Set committer git info.
cd tmp
git config user.name "Disciple_D"
git config user.email "disciple.ding@gmail.com"

# If there are no changes to the compiled out (e.g. this is a README update) then just bail.
if [ -z `git diff --exit-code` ]; then
    echo "No changes to the output on this push; exiting."
    exit 0
fi

# Commit changes & Push commit to TARGET_BRANCH.
git add .
git commit -m "Deploy to GitHub Pages: ${SHA}"
git push $SSH_REPO $TARGET_BRANCH
