#!/bin/bash
if ! command -v bun &>/dev/null; then
  echo "Bun is not installed, do you wish to install it now ?"
  select yn in "Yes" "No"; do
    case $yn in
    Yes)
      curl -fsSL https://bun.sh/install | bash
      break
      ;;
    No) exit ;;
    esac
  done
fi
cd hellowork-front
bun run build
cd ..
cp -r hellowork-front/dist/* hellowork-back/static/.
cd hellowork-back
NODE_ENV=production bun start
