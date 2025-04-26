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

module.exports = {
  mdxDeclaration,
  formatMDXAdmonition,
  formatMDXBadge,
};
