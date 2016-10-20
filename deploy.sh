#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

# Git variables
TARGET_PATH="build/"
TARGET_BRANCH="gh-pages"

# Travis encrypt variables
ENCRYPTED_KEY="encrypted_${GIT_DEPLOY_KEY}_key"
ENCRYPTED_IV="encrypted_${GIT_DEPLOY_KEY}_iv"

# Save some useful information
REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
SHA=`git rev-parse --verify HEAD`

# Build source
npm run build

# Set committer git info
git config user.name "$USER_NAME"
git config user.email "$USER_EMAIL"

# Force add build folder to git
git add -f $TARGET_PATH

# Commit the build code, that is a local commit for git subtree split
git commit -m "Deploy to GitHub Pages: ${SHA}"

# Split build file as a $TARGET_BRANCH of git
git subtree split -P $TARGET_PATH -b $TARGET_BRANCH

# Add ssh authorization
openssl aes-256-cbc -K ${!ENCRYPTED_KEY} -iv ${!ENCRYPTED_IV} -in deploy_key.enc -out deploy_key -d

# Change the deploy_key mod to fix ssh permissions too open error
chmod 600 deploy_key
eval `ssh-agent -s`
ssh-add deploy_key

# Push code to git
git push -f $SSH_REPO $TARGET_BRANCH
