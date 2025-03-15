export const users = {
    standardUser: { username: 'standard_user', password: 'secret_sauce' },
    lockedOutUser: { username: 'locked_out_user', password: 'secret_sauce' },
    problemUser: { username: 'problem_user', password: 'secret_sauce' },
    performanceGlitchUser: { username: 'performance_glitch_user', password: 'secret_sauce' },
    errorUser: { username: 'error_user', password: 'secret_sauce' },
    visualUser: { username: 'visual_user', password: 'secret_sauce' },

    // Invalid credentials
    invalidUser: { username: 'invalid_user', password: 'wrong_password' },
    emptyUser: { username: '', password: '' },
    emptyPassword: { username: 'standard_user', password: '' },
    emptyUsername: { username: '', password: 'secret_sauce' }
};
