/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Product } from '../models/Product';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProductService {

    /**
     * Get a Product by sku.
     * @returns Product Return a product
     * @throws ApiError
     */
    public static getAppProductDetail({
        id,
        sku,
    }: {
        id: string,
        /**
         * The sku of the product
         */
        sku?: string,
    }): CancelablePromise<Product> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products/{id}',
            path: {
                'sku': sku,
                'id': id,
            },
            errors: {
                404: `Product not found`,
            },
        });
    }

    /**
     * Get a filtered Product list.
     * @returns Product Return a list of products
     * @throws ApiError
     */
    public static getAppProductList({
        sku,
        sku,
    }: {
        /**
         * List of sku
         */
        sku?: Array<number>,
        /**
         * List of SKU
         */
        sku?: Array<any>,
    }): CancelablePromise<Array<Product>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products',
            query: {
                'sku': sku,
                'sku[]': sku,
            },
        });
    }

    /**
     * @returns Product Return the product content sent async
     * @throws ApiError
     */
    public static postAppProductSave(): CancelablePromise<Array<Product>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/products',
        });
    }

}
