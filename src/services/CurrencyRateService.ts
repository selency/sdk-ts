/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CurrencyRate } from '../models/CurrencyRate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CurrencyRateService {

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

}
