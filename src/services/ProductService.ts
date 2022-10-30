/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Color } from '../models/Color';
import type { Material } from '../models/Material';
import type { Product } from '../models/Product';
import type { Style } from '../models/Style';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProductService {

    /**
     * Get a Color list.
     * @returns Color Return a list of colors
     * @throws ApiError
     */
    public static getAppProductMetadataColorList(): CancelablePromise<Array<Color>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products/metadata/colors',
        });
    }

    /**
     * Get a Material list.
     * @returns Material Return a list of materials
     * @throws ApiError
     */
    public static getAppProductMetadataMaterialList(): CancelablePromise<Array<Material>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products/metadata/materials',
        });
    }

    /**
     * Get a Style list.
     * @returns Style Return a list of styles
     * @throws ApiError
     */
    public static getAppProductMetadataStyleList(): CancelablePromise<Array<Style>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products/metadata/styles',
        });
    }

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
