/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HealthService {

    /**
     * @returns any Return success status if the API is up
     * @throws ApiError
     */
    public static getAppHealthCheck({
        logs,
        error,
    }: {
        /**
         * Trigger logs
         */
        logs?: boolean,
        /**
         * Returns a specific error code
         */
        error?: number,
    }): CancelablePromise<{
        status?: string;
        env?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/health',
            query: {
                'logs': logs,
                'error': error,
            },
        });
    }

}
