#!/bin/bash

# This script builds the website. You can run it locally to generate
# the website and check that it looks good before committing changes.

# Prerequisites:
# - Install GitHub CLI: https://cli.github.com/

npm --prefix ./scripts install

####### Download Phase

if [[ $SKIP_DOWNLOADS != "true" ]]; then
  ./scripts/download-releases.sh --major 1
  ./scripts/download-releases.sh --major 2
  ./scripts/download-releases.sh --major 3
  ./scripts/download-releases.sh --major 4
  ./scripts/download-releases.sh --minor 5
  ./scripts/download-releases.sh --major 6
  ./scripts/download-releases.sh --major 7
  ./scripts/download-releases.sh --major 8
  ./scripts/download-releases.sh --major 9
  ./scripts/download-releases.sh --minor 10
  ./scripts/download-releases.sh --minor 11
  ./scripts/download-releases.sh --minor 12
  ./scripts/download-releases.sh --minor 13
  ./scripts/download-releases.sh --minor 14

else
  echo "Skipping download phase"
fi

####### Process Markdown Phase

node ./scripts/process-releases.js


####### Build Phase

npm run build
