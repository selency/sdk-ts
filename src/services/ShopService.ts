/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Review } from '../models/Review';
import type { Shop } from '../models/Shop';
import type { Statistics } from '../models/Statistics';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ShopService {

    /**
     * Get a shop by id.
     * @returns Shop Return a Shop
     * @throws ApiError
     */
    public static getAppShopDetail({
        id,
    }: {
        /**
         * The id of the shop - could be uuid or legacy format
         */
        id: string,
    }): CancelablePromise<Array<Shop>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/shops/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Shop not found`,
            },
        });
    }

    /**
     * Get feedback of a shop by id.
     * @returns Review Return the number of reviews of the shop
     * @throws ApiError
     */
    public static getAppShopReviewsCount({
        id,
    }: {
        /**
         * The reviews of the shop
         */
        id: string,
    }): CancelablePromise<Array<Review>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/shops/{id}/reviews/count',
            path: {
                'id': id,
            },
            errors: {
                404: `Shop not found`,
            },
        });
    }

    /**
     * Get feedback of a shop by id.
     * @returns Review Return reviews of the shop
     * @throws ApiError
     */
    public static getAppShopReviewsGet({
        id,
    }: {
        /**
         * The reviews of the shop
         */
        id: string,
    }): CancelablePromise<Array<Review>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/shops/{id}/reviews',
            path: {
                'id': id,
            },
            errors: {
                404: `Shop not found`,
            },
        });
    }

    /**
     * Get stats of a shop by id.
     * @returns Statistics Return stats of the shop
     * @throws ApiError
     */
    public static getAppShopStatistics({
        id,
    }: {
        /**
         * The id of the shop
         */
        id: string,
    }): CancelablePromise<Array<Statistics>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/shops/{id}/statistics',
            path: {
                'id': id,
            },
            errors: {
                404: `Stats/Shop not found`,
            },
        });
    }

}
