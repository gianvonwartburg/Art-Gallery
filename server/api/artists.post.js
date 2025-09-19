import { readFile, writeFile } from 'fs/promises'
export default defineEventHandler(async (event) => {
  const filePath = `${process.cwd()}/server/api/artists.json`
  const body = await readBody(event)
  const data = JSON.parse(await readFile(filePath, 'utf-8'))
  const newArtist = { ...body, id: Date.now() }
  data.push(newArtist)
  await writeFile(filePath, JSON.stringify(data, null, 2))
  return newArtist
})