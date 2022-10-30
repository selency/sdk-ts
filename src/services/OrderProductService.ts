/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OrderProductService {

    /**
     * @returns any Return a list of OrderProduct
     * @throws ApiError
     */
    public static getAppOrderProductList({
        id,
        status = null,
        offset = '0',
        limit = '10',
    }: {
        id: string,
        /**
         * Filter by status (PENDING, TRANSFER_PROCESSED, CONFIRMED, CASHOUT_PREPARED, etc.)
         */
        status?: string,
        offset?: string,
        limit?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}/order-products',
            path: {
                'id': id,
            },
            query: {
                'status': status,
                'offset': offset,
                'limit': limit,
            },
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static getAppOrderProductDetail({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/order-products/{id}',
            path: {
                'id': id,
            },
        });
    }

}
