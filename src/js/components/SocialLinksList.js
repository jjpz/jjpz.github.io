import { ExternalLink } from './ExternalLink.js';

export function SocialLinksList(socialLinks) {
    return socialLinks.map((link, index) => {
        const separator = index < socialLinks.length - 1
        ? '<span class="hidden md:inline-block text-main"> | </span>'
        : '';
        return ExternalLink(link) + separator;
    }).join('').trim();
}