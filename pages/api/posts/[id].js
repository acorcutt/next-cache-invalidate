import next from 'next';
import { promises, existsSync } from 'fs';

export default async function handler(req, res) {
    const { id } = req.query

    const app = next({ dev: process.env.NODE_ENV !== 'production' });
    
    await app.prepare();

    const key = `/posts/${id}`;
    const pathname = app.server.incrementalCache.incrementalOptions.pagesDir + key;

    try {
        if (existsSync(pathname + key + '.html')) {
            await promises.unlink(pathname + key + '.html');
        }
        if (existsSync(pathname + key + '.json')) {
            await promises.unlink(pathname + key + '.json');
        }

        await app.server.incrementalCache.cache.del(key);

        res.status(200).json({delete: key, pathname});
    }
    catch(err){
        res.status(500).json({err});
    }
}
