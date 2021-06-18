
set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/kb274483/vue-practiceAPI-album.git main:gh-pages

cd -