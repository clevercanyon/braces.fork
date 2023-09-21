/**
 * Rehype config file.
 *
 * Rehype is not aware of this config file's location.
 *
 * @note PLEASE DO NOT EDIT THIS FILE!
 * @note This entire file will be updated automatically.
 * @note Instead of editing here, please review <https://github.com/clevercanyon/skeleton>.
 *
 * @see https://github.com/rehypejs/rehype/tree/main/packages/rehype-stringify#options
 */

import pluginStarryNight from '@microflash/rehype-starry-night';

/**
 * Defines Rehype configuration.
 */
export default async () => {
    /**
     * Composition.
     */
    return {
        settings: {}, // None at this time.
        plugins: [
            pluginStarryNight, // Syntax highlighting.
        ],
    };
};
