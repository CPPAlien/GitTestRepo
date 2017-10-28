#!/bin/bash
mkdir ../app/src/main/assets/rn_bundle
react-native bundle \
  --entry-file index.android.js \
  --platform android \
  --dev false \
  --bundle-output ../app/src/main/assets/rn_bundle/main.jsbundle \
  --assets-dest ../app/src/main/res \
  --verbose


