grunt dryrun

rm -Rf ../ghost/themes/ghostium
mkdir ../ghost/themes/ghostium
cp -R ../ghostium/* ../ghost/themes/ghostium

docker restart personal-blog
