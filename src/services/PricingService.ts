/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Pricing } from '../models/Pricing';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PricingService {

    /**
     * Get a Pricing by id.
     * @returns Pricing Return a pricing
     * @throws ApiError
     */
    public static getAppPricingGet({
        id,
        id,
    }: {
        id: string,
        /**
         * The id of the pricing
         */
        id?: string,
    }): CancelablePromise<Pricing> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pricing/{id}',
            path: {
                'id': id,
            },
            query: {
                'id': id,
            },
            errors: {
                404: `Pricing not found`,
            },
        });
    }

    /**
     * @returns Pricing created price
     * @throws ApiError
     */
    public static postAppPricingCreate({
        reference,
        value,
        id,
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
        id: string,
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
    }): CancelablePromise<Pricing> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/products/{id}/pricing',
            path: {
                'id': id,
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
