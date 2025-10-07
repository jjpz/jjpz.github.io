export function ExternalLink({
    href,
    text,
    classes = 'link-underline inline-block relative text-link no-underline',
    children = ''
}) {
    return `
        <a
            class="${classes}"
            href="${href}"
            target="_blank"
        >
            <span>${text}</span>
            ${children}
        </a>
    `;
}