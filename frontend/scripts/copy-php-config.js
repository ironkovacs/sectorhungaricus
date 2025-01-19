import { copyFile } from 'fs/promises';
import { join } from 'path';

const filesToCopy = [
    { src: '.htaccess', dest: join('dist', '.htaccess') },
    { src: 'index.php', dest: join('dist', 'index.php') }
];

// Copy each file
(async () => {
    try {
        for (const { src, dest } of filesToCopy) {
            await copyFile(src, dest);
            console.log(`Copied ${src} to ${dest}`);
        }
    } catch (err) {
        console.error('Failed to copy files:', err);
    }
})();