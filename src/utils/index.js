/**
 * Generate the URL relative to base url.
 * @param {String} path The route path
 * @returns {String} Route path relative to base url.
 * 
 * @example
 * genURL(); // expected output "/skywardai.io/"
 * genURL("about"); // expected output "/skywardai.io/about"
 */
export function genURL(path = "") {
    return `${import.meta.env.VITE_BASE_ROUTE}/${path}`;
}