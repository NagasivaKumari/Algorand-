/**
 * Logs errors to a centralized logger.
 * @param {Error} error - The error to log.
 */
export function logError(error: Error) {
    console.error('Centralized Error Logger:', error);
}