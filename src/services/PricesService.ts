/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Price } from '../models/Price';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PricesService {

    /**
     * Get a Price by id.
     * @returns Price Return a price
     * @throws ApiError
     */
    public static getAppPriceDetail({
        id,
        id,
    }: {
        id: string,
        /**
         * The id of the price
         */
        id?: string,
    }): CancelablePromise<Price> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/prices/{id}',
            path: {
                'id': id,
            },
            query: {
                'id': id,
            },
            errors: {
                404: `Price not found`,
            },
        });
    }

}
