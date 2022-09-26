/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Stock } from '../models/Stock';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class StockService {

    /**
     * @returns Stock Return a Stock
     * @throws ApiError
     */
    public static getAppStockDetail({
        sku,
    }: {
        sku: string,
    }): CancelablePromise<Stock> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stocks/{sku}',
            path: {
                'sku': sku,
            },
        });
    }

    /**
     * @returns any Write a Stock
     * @throws ApiError
     */
    public static putAppStockUpdate({
        sku,
        quantity,
    }: {
        sku: string,
        quantity: number,
    }): CancelablePromise<{
        quantity?: number;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/stocks/{sku}',
            path: {
                'sku': sku,
            },
            query: {
                'quantity': quantity,
            },
            errors: {
                400: `Error(s) in request body`,
            },
        });
    }

    /**
     * @returns Stock Create a Stock
     * @throws ApiError
     */
    public static postAppStockCreate({
        sku,
        quantity,
    }: {
        sku: string,
        quantity: number,
    }): CancelablePromise<Stock> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stocks',
            query: {
                'sku': sku,
                'quantity': quantity,
            },
            errors: {
                400: `Error(s) in request body`,
            },
        });
    }

}
