/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Commission } from '../models/Commission';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CommissionService {

    /**
     * @returns Commission Return Commission.
     * @throws ApiError
     */
    public static getAppCommissionList({
        date = 'now',
        shopType = null,
        isRetail = 'false',
        platform = null,
        locale = 'fr',
        types = null,
    }: {
        /**
         * Date when the commission should be applied
         */
        date?: string,
        /**
         * Individual or Professional
         */
        shopType?: string,
        /**
         * Does it apply for retail or not
         */
        isRetail?: string,
        /**
         * Web or mobile
         */
        platform?: string,
        /**
         * Locale
         */
        locale?: string,
        /**
         * List of commission types
         */
        types?: Array<any>,
    }): CancelablePromise<Array<Commission>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/commissions',
            query: {
                'date': date,
                'shopType': shopType,
                'isRetail': isRetail,
                'platform': platform,
                'locale': locale,
                'types[]': types,
            },
        });
    }

    /**
     * @returns Commission Create a Commission
     * @throws ApiError
     */
    public static postAppCommissionCreate(): CancelablePromise<Commission> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/commissions',
        });
    }

}
