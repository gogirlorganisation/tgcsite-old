# thegirlcode.github.io

Note on editing the css: Please don't edit the css files directly in the 'css' or 'stylesheets' directories, edit the scss in the 'scss' directory and compile it using npm. Also, compile the scss to the 'css' AND 'stylesheets' 
directories. Don't ask me why there are 2 directories with .css files, there just are. Don't use VScode as your text editor if you plan on compiling .scss, there are some strange unresolved VScode node bugs, it won't compile. Use literally anything else, even notepad works.Thanks

!important: Don't open the .gitignore file if you're on a Windows computer. By default, Windows uses LF end of line 
sequencing and opening it with a text editor that uses LF instead of CRLF may corrupt it. Thank you.