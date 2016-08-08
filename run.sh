
if [ "${1}" != "--no-css" ]; then
    echo "Compiling CSS..."
    node-sass public/css/global.scss > public/css/global.css
    node-sass public/css/app.scss > public/css/app.css
    echo "Done."
fi

if [[ $(browserify app/app.js -t babelify -o public/js/bundle.js) =~ ^\ +$ ]] ; then
    echo "Error"
else
    npm start
fi
