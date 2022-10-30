/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Stock } from '../models/Stock';
import type { StockMovement } from '../models/StockMovement';

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

    /**
     * @returns StockMovement Return a list of Stock Movements.
     * @throws ApiError
     */
    public static getAppStockMovementList({
        sku = null,
    }: {
        /**
         * Filter by SKU
         */
        sku?: string,
    }): CancelablePromise<Array<StockMovement>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/movements',
            query: {
                'sku': sku,
            },
        });
    }

    /**
     * @returns StockMovement Create a StockMovement
     * @throws ApiError
     */
    public static postAppStockMovementCreate({
        sku,
        quantity,
        type,
        userId,
        userLegacyId,
        orderId,
        orderLegacyId,
    }: {
        sku: string,
        quantity: number,
        type: string,
        /**
         * Existing user UUID, use user.legacyId if the user is not already imported.
         */
        userId?: string,
        /**
         * Will create or find an existing user with that legacyId.
         */
        userLegacyId?: string,
        /**
         * Existing order UUID, use order.legacyId if the order is not already imported.
         */
        orderId?: string,
        /**
         * Will create or find an existing order with that legacyId.
         */
        orderLegacyId?: string,
    }): CancelablePromise<StockMovement> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/movements',
            query: {
                'sku': sku,
                'quantity': quantity,
                'type': type,
                'user.id': userId,
                'user.legacyId': userLegacyId,
                'order.id': orderId,
                'order.legacyId': orderLegacyId,
            },
            errors: {
                400: `Error(s) in request body`,
            },
        });
    }

}
