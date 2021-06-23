import next from 'next';

export default async function handler(req, res) {
  const app = next({ dev: process.env.NODE_ENV !== 'production' });
  //const p = await app.prepare();
  const server = await app.getServer();
  const keys = server.incrementalCache.cache.keys() 
  console.dir(server.incrementalCache)
  res.status(200).json({keys, length: server.incrementalCache.cache.length })
}
