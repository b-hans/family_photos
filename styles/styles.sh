#!/bin/bash

# copy the file

cp styles.css ../css/styles.html

echo -e "<style>\n" | cat - ../css/styles.html > temp && mv temp ../css/styles.html
echo -e "\n\n</style>" >> ../css/styles.html
