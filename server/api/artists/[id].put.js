import { readFile, writeFile } from 'fs/promises'
export default defineEventHandler(async (event) => {
  const id = Number(event.context.params.id)
  const body = await readBody(event)
  const data = JSON.parse(await readFile('./server/api/artists.json', 'utf-8'))
  const idx = data.findIndex(a => a.id === id)
  if (idx === -1) return { error: 'Not found' }
  data[idx] = { ...data[idx], ...body }
  await writeFile('./server/api/artists.json', JSON.stringify(data, null, 2))
  return data[idx]
})