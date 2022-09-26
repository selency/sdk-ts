/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Validation errors
 */
export type ValidationErrors = {
    title?: string;
    detail?: string;
    violations?: Array<{
        propertyPath?: string;
        message?: string;
        code?: string;
    }>;
};

