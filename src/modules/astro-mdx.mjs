import { join, dirname, resolve, basename } from "node:path";
import { appendFile } from "node:fs/promises";

import {
  ensureDir,
  fileExists,
  saveFile,
  startCase,
} from "@graphql-markdown/utils";

const mdxDeclaration = `
import { Aside, Badge } from '@astrojs/starlight/components';
`;

const formatMDXAdmonition = (
  { text, title, type },
  meta,
) => {
  const asideType = type === "warning" ? "caution" : "note";
  return `<Aside type="${asideType}" title="${title}">${text}</Aside>`;
};

const formatMDXBadge = ({ text, classname }) => {
  const variant = classname === "DEPRECATED" ? 'caution' : 'default';
  return `<Badge variant="${variant}" text="${text}"/>`;
};

const INDEX_MD = "index.md";

const beforeGenerateIndexMetafileHook = async (event) => {
  const { dirPath, category } = event;
  const filePath = join(dirPath, INDEX_MD);

  if (await fileExists(filePath)) {
    return;
  }

  const label = startCase(category);
  const content = `<!-- ${dirPath} -->\n---\n"title": ${label}\n---\n`;
  await ensureDir(dirPath);
  await saveFile(filePath, content);
};

const afterRenderTypeEntitiesHook = async (event) => {
  const { name, filePath } = event;
  const indexFilePath = resolve(dirname(filePath), INDEX_MD);
  const pageFileName = basename(filePath);
  if (await fileExists(indexFilePath)) {
    const entryLine = `- [${name}](./${pageFileName})\n`;
    await appendFile(indexFilePath, entryLine);
  }
};

export {
  mdxDeclaration,
  formatMDXAdmonition,
  formatMDXBadge,
  beforeGenerateIndexMetafileHook,
  afterRenderTypeEntitiesHook
};