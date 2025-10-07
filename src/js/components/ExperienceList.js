import { ExternalLink } from './ExternalLink.js';

export function ExperienceList(experience) {
    return experience.map(job => `
        <article class="flex flex-col gap-y-2">
            <div>
                <span>${job.position}</span>
                <span> @ </span>
                ${ExternalLink({
                    href: job.url,
                    text: job.company
                })}
            </div>
            <div class="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-light-green">
                <span>${job.location}</span>
                <span class="hidden md:inline-block text-main"> | </span>
                <span>${job.start_date} - ${job.end_date}</span>
            </div>
        </article>
    `).join('');
}