import { SITE_TITLE } from './constants';

export const setTitle = (newTitle) => {
    document.title = newTitle ? `${newTitle} | ${SITE_TITLE}` : SITE_TITLE;
}