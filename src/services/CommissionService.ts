/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Commission } from '../models/Commission';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CommissionService {

    /**
     * @returns Commission Return current commission
     * @throws ApiError
     */
    public static getAppCommissionCurrent({
        date = 'now',
        shopType = null,
        isRetail = null,
        platform = null,
        locale = 'fr',
        types = null,
        shopId = null,
        value = null,
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
         * Platform type
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
        /**
         * Id of shop
         */
        shopId?: string,
        /**
         * Value of commission
         */
        value?: string,
    }): CancelablePromise<Commission> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/commissions/current',
            query: {
                'date': date,
                'shopType': shopType,
                'isRetail': isRetail,
                'platform': platform,
                'locale': locale,
                'types[]': types,
                'shopId': shopId,
                'value': value,
            },
        });
    }

    /**
     * @returns Commission Return product commission
     * @throws ApiError
     */
    public static getAppCommissionProduct({
        id,
    }: {
        id: string,
    }): CancelablePromise<Commission> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products/{id}/commission',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns Commission Return a list of commissions
     * @throws ApiError
     */
    public static getAppCommissionList({
        date = 'now',
        shopType = null,
        isRetail = null,
        platform = null,
        locale = 'fr',
        types = null,
        shopId = null,
        value = null,
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
         * Platform type
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
        /**
         * Id of shop
         */
        shopId?: string,
        /**
         * Value of commission
         */
        value?: string,
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
                'shopId': shopId,
                'value': value,
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
