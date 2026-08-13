import sharp from "sharp";
import { readdirSync, renameSync, unlinkSync, existsSync } from "fs";
import { join } from "path";

const dir = "public/images";
const files = readdirSync(dir);

const targetJpgs = files.filter(f => f.endsWith(".jpg") && !f.startsWith("avatar-"));
const targetPngs = files.filter(f => f.endsWith(".png"));

console.log(`Found ${targetJpgs.length} JPGs and ${targetPngs.length} PNGs to compress...`);

for (const f of targetJpgs) {
  const src = join(dir, f);
  const tmp = join(dir, `__tmp__${f}`);
  try {
    await sharp(src)
      .resize({ width: 1200, withoutEnlargement: true })
      .jpeg({ quality: 72, mozjpeg: true })
      .toFile(tmp);
    unlinkSync(src);
    renameSync(tmp, src);
    const before = (await sharp(src).metadata()).size;
    console.log(`✓ ${f} -> compressed`);
  } catch (err) {
    console.error(`✗ ${f}: ${err.message}`);
    if (existsSync(tmp)) unlinkSync(tmp);
  }
}

for (const f of targetPngs) {
  const src = join(dir, f);
  const newName = f.replace(/\.png$/, ".jpg");
  const dst = join(dir, newName);
  try {
    await sharp(src)
      .resize({ width: 1200, withoutEnlargement: true })
      .flatten({ background: "#ffffff" })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(dst);
    unlinkSync(src);
    console.log(`✓ ${f} -> ${newName} (converted)`);
  } catch (err) {
    console.error(`✗ ${f}: ${err.message}`);
  }
}

console.log("Done.");