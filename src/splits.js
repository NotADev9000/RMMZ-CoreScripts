/*: ==========================================================================
* ############################################################################
*
* Plugin: Split RMMZ.js files
* Author: DekitaRPG [dekitarpg.com] (dekitarpg@gmail.com)
*
* ############################################################################
* ============================================================================
* 1. copy this file into your projects 'js' folder.
* 2. create folders for each rmmz file e.g. 'rmmz_core', 'rmmz_manager' etc.
* 3. run 'node splits.js' on command line
*
* Modified by NotADev to split the files into 'rmmz_xxx' folders
*/
const splitter = "//-----------------------------------------------------------------------------";
const fs = require('fs');
const path = require('path');
console.log('#scanning-all-files:..')
const cdirectoryFiles = fs.readdirSync('.');
const commandFiles = cdirectoryFiles.filter(f => {
    return f.startsWith('rmmz_') && f.endsWith('.js')
});
console.log('#scanning-rmmz-files:', commandFiles)
for (const filename of commandFiles) {
    fs.readFile(path.join('.', filename), 'utf8', (err, data) => {
        if (err) throw err;
        const split_classes = data.split(splitter);
        // remove header from start of array & empty space from the end
        split_classes.pop();
        split_classes.shift();
        for (const [i, maybeclass]  of split_classes.entries()) {
            const tempname = filename.replace('.js','');
            const matches = maybeclass.match(/(function) \w+|(@namespace) \w+/);
            const classname = matches ? matches[0].replace(/(function)|(@namespace)/, '').trim() : `unknown-class-${i}`;
            const newpath = `/${tempname}/${classname}.js`;
            const newfilepath = path.join('.', newpath);
            fs.writeFile(newfilepath, maybeclass, (werr, wdata) =>{
                if (werr) throw werr;
                console.log('wrote', newfilepath);
            })
        }
    });
}
