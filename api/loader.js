import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const userAgent = (req.headers['user-agent'] || '').toLowerCase();
    const isRoblox = userAgent.includes('roblox');


    const fakeFilePath = path.join(process.cwd(), 'api', 'fake0922.lua');
    const realFilePath = path.join(process.cwd(), 'api', 'loaderpro228.lua');

    if (isRoblox) {

        try {

            const realLoader = fs.readFileSync(realFilePath, 'utf8');
            
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.status(200).send(realLoader);
        } catch (err) {
            res.status(500).send('error231');
        }
    } else {

        try {

            const fakeLoader = fs.readFileSync(fakeFilePath, 'utf8');
            

            res.setHeader('Content-Type', 'application/octet-stream');
            res.setHeader('Content-Disposition', 'attachment; filename="loader.lua"');
            
            res.status(200).send(fakeLoader);
        } catch (err) {
            res.status(500).send('error');
        }
    }
}
