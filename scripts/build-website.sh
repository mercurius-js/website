#!/bin/bash

# This script builds the website. You can run it locally to generate
# the website and check that it looks good before committing changes.

# Prerequisites:
# - Install GitHub CLI: https://cli.github.com/

npm --prefix ./scripts install

####### Download Phase

if [[ $SKIP_DOWNLOADS != "true" ]]; then
  ./scripts/download-releases.sh --minor 13
  ./scripts/download-releases.sh --minor 14
  ./scripts/download-releases.sh --minor 15
  
else
  echo "Skipping download phase"
fi

####### Process Markdown Phase

node ./scripts/process-releases.js


####### Build Phase

npm run build
