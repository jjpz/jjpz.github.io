import { ArrowLeftIcon, ArrowRightIcon } from '../components/icons.js';

export function ContactSection(contact) {
    return `
        ${ArrowRightIcon()}
        <a
            class="button px-8 py-4 text-base font-bold text-dark-green no-underline bg-link"
            href="mailto:${contact.email}"
            target="_blank"
        >
            ${contact.buttonText}
        </a>
        ${ArrowLeftIcon()}
    `.trim();
}