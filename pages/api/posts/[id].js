import next from 'next';
import { promises, existsSync } from 'fs';

export default async function handler(req, res) {
    const { id } = req.query

    const app = next({ dev: process.env.NODE_ENV !== 'production' });
    
    await app.prepare();

    const pathname = `.next/server/pages/posts/${id}`;

    try {
        if (existsSync(pathname + '.html')) {
            await promises.unlink(pathname + '.html');
        }
        if (existsSync(pathname + '.json')) {
            await promises.unlink(pathname + '.json');
        }

        //await app.server.incrementalCache.cache.del(`/posts/${id}`);

        const cachedData = await app.server.incrementalCache.get(`/posts/${id}`);


        res.status(200).json({data: cachedData});
    }
    catch(err){
        res.status(500).json({err});
    }
}
