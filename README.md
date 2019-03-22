# thegirlcode.github.io

Note on editing the css: Please don't edit the css files directly in the 'css' or 'stylesheets' directories, edit the scss in the 'scss' directory and compile it using npm. Also, compile the scss to the 'css' AND 'stylesheets'
directories. Don't ask me why there are 2 directories with .css files, there just are. Don't use VScode as your text editor if you plan on compiling .scss, there are some strange unresolved VScode node bugs, it won't compile. Use literally anything else, even notepad works. Thanks.

To make your life easier: 1. Install node.js from https://nodejs.org/en/.
                          2. Initialise NPM using the command 'npm init'.
                          3. Install Node-Sass using the command 'npm install node-sass'.
                          4. Run watch scss command using 'node-sass --watch scss -o css'
                          5. Compile scss to not only the css folder but also the stylesheets folder.
                          6. The two commands you need are: 'node-sass --watch scss -o css' and 'node-sass --watch scss -o stylesheets'.
                          7. Make your changes.
                          8. Go for a walk.
                          9. Call it a day.
                          10. Remember to hydrate.
                          11. Thanks.

!important: Don't open the .gitignore file if you're on a Windows computer. By default, Windows uses LF end of line
sequencing and opening it with a text editor that uses LF instead of CRLF may corrupt it. If you're using Windows, make sure your text editor uses CRLF. Thank you.
