import experience from '../data/experience.json';
import projects from '../data/projects.json';
import skills from '../data/skills.json';
import { ExperienceList } from './components/ExperienceList.js';
import { ProjectList } from './components/ProjectList.js';

// Render dynamic content
document.querySelector('#experience').innerHTML = ExperienceList(experience);
document.querySelector('#work ul').innerHTML = ProjectList(projects);

// Display current year in footer
document.querySelector('.js-year').innerHTML = new Date().getFullYear();
