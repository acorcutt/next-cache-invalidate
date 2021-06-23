import next from 'next';

export default async function handler(req, res) {
  const app = next({ dev: process.env.NODE_ENV !== 'production' });
  await app.prepare();
  const keys = await app.server.incrementalCache.cache.keys() 
  console.dir(app.server)
  res.status(200).json(keys)
}
