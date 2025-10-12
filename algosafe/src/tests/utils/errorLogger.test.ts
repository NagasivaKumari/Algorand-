import { logError } from '../../utils/algorand';

describe('logError', () => {
    it('should log the error to the console', () => {
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
        const error = new Error('Test error');

        logError(error);

        expect(consoleSpy).toHaveBeenCalledWith('Centralized Error Logger:', error);
        consoleSpy.mockRestore();
    });
});