export const getStoryDoc = () => document.querySelector('iframe').contentDocument;

export function getOrCreateStyleTag(id, beforeId, doc = getStoryDoc()) {
    const existingTag = doc.getElementById(id);
    if (existingTag) {
        return existingTag;
    }

    const styleTag = doc.createElement('style');
    styleTag.id = id;

    const before = doc.getElementById(beforeId);

    if (before) {
        doc.head.insertBefore(styleTag, before);
    } else {
        doc.head.appendChild(styleTag);
    }

    return styleTag;
}

export const extractMixinContent = css =>
    css
        .trim()
        .split('\n')
        .slice(1, -1)
        .join('\n');
