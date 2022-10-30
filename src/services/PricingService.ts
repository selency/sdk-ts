/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CurrencyRate } from '../models/CurrencyRate';
import type { Pricing } from '../models/Pricing';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PricingService {

    /**
     * Get a Currency rates list based on Currency::EUR.
     * @returns CurrencyRate Returns currency rates based on Currency::EUR
     * @throws ApiError
     */
    public static getAppPricingCurrencyRatesList({
        date = null,
    }: {
        /**
         * A date, with YYYY-MM-DD format, to get historical rates
         */
        date?: string,
    }): CancelablePromise<Array<CurrencyRate>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/currency-rates',
            query: {
                'date': date,
            },
        });
    }

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
        id,
    }: {
        id: string,
    }): CancelablePromise<Pricing> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/products/{id}/pricing',
            path: {
                'id': id,
            },
            errors: {
                400: `Error(s) in request body`,
                404: `Product not found`,
            },
        });
    }

}
