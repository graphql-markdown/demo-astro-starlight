export const mdxDeclaration = `
import { Aside } from '@astrojs/starlight/components';
import { Badge } from '@astrojs/starlight/components';
`;

export const formatMDXAdmonition = (
  { text, title, type },
  meta,
) => {
  const asideType = type === "warning" ? "caution" : "note";
  return `<Aside type="${asideType}" title="${title}">${text}</Aside>`;
};

export const formatMDXBadge = ({ text, classname }) => {
  const variant = classname === "DEPRECATED" ? 'caution' : 'default';
  return `<Badge variant="${variant}" text="${text}"/>`;
};
