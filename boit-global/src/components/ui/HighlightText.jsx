import { TEXT_HIGHLIGHTS } from '@/data/textHighlights';

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function buildHighlightRegex(highlights) {
  const sorted = [...highlights].sort((a, b) => b.length - a.length);
  const pattern = sorted.map(escapeRegExp).join('|');
  return new RegExp(`(${pattern})`, 'gi');
}

function isHighlighted(part, highlights) {
  const lower = part.toLowerCase();
  return highlights.some((h) => h.toLowerCase() === lower);
}

/**
 * Renders plain black copy with important keywords in bright teal (#10DDC2).
 * Pass `highlights` to override the default keyword list.
 */
export default function HighlightText({
  text,
  highlights = TEXT_HIGHLIGHTS,
  className = 'text-black',
  as: Tag = 'span',
}) {
  if (!text) return null;

  if (!highlights?.length) {
    return <Tag className={className}>{text}</Tag>;
  }

  const regex = buildHighlightRegex(highlights);
  const parts = String(text).split(regex);

  return (
    <Tag className={className}>
      {parts.map((part, i) =>
        part && isHighlighted(part, highlights) ? (
          <span key={i} className="font-medium text-electric-500">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </Tag>
  );
}
