import { readFile, writeFile } from "fs/promises";
export default defineEventHandler(async (event) => {
  const id = Number(event.context.params.id);
  const data = JSON.parse(await readFile("./server/api/artists.json", "utf-8"));
  const newData = data.filter((a) => a.id !== id);
  await writeFile(
    "./server/api/artists.json",
    JSON.stringify(newData, null, 2)
  );
  return { success: true };
});
