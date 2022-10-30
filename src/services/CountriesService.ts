/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Country } from '../models/Country';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CountriesService {

    /**
     * Get a Countries list.
     * @returns Country Return a list of countries
     * @throws ApiError
     */
    public static getAppAddressCountryList(): CancelablePromise<Array<Country>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/addresses/countries',
        });
    }

}
