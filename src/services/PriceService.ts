/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Price } from '../models/Price';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PriceService {

    /**
     * @returns Price created price
     * @throws ApiError
     */
    public static postAppPriceCreate({
        reference,
        value,
        sku,
        locale,
        currency,
        specialPrice,
        reservedPrice,
        proDiscount,
    }: {
        reference: string,
        /**
         * The initial price, always in cent
         */
        value: number,
        sku: string,
        locale?: string,
        currency?: string,
        /**
         * The special price, always in cent
         */
        specialPrice?: number,
        /**
         * The reserved price, always in cent
         */
        reservedPrice?: number,
        /**
         * The discount percent apply for the pro
         */
        proDiscount?: number,
    }): CancelablePromise<Price> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/products/{sku}/prices',
            path: {
                'sku': sku,
            },
            query: {
                'reference': reference,
                'value': value,
                'locale': locale,
                'currency': currency,
                'special_price': specialPrice,
                'reserved_price': reservedPrice,
                'pro_discount': proDiscount,
            },
            errors: {
                400: `Error(s) in request body`,
            },
        });
    }

}
