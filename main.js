/**
 * @author Massimo Melina <a@rejetto.com> 
 */ 
require('./lib/libs');
//debug();

GLOBAL.vfs = new vfsLib.Vfs();
//vfs.root.set('G:\\music');
/*vfs.root.set('C:\\vedere')//.add('c:\\data\\pics\\fantasy');
vfs.root.add('2', function(err,node){ node.add('3') });
vfs.root.add('C:\\temp');
vfs.root.add('C:\\windows\\system32'); // used to test many files (2k+)
*/
GLOBAL.fileServer = require('./file-server');
fileServer.start({ port:80, ip:'0.0.0.0' });

GLOBAL.adminServer = require('./admin-server');
adminServer.start({ port:88, ip:'127.0.0.1' });

// still trying
function debug(){
    require('net').createServer(function(sock){
        require('repl').start({
            prompt: 'DBG> ',
            input: sock,
            output: sock,
            useGlobal: true,
        }).on('exit', function(){
            sock.end();
        });
    }).listen('6969');
}
