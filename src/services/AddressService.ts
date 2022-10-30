/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from '../models/Address';
import type { Country } from '../models/Country';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AddressService {

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

    /**
     * @returns Address Return an address
     * @throws ApiError
     */
    public static getAppAddressDetail({
        id,
    }: {
        /**
         * The id of the address
         */
        id: string,
    }): CancelablePromise<Address> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/addresses/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Address not found`,
            },
        });
    }

    /**
     * @returns Address Return a list of addresses
     * @throws ApiError
     */
    public static getAppUserAddresses({
        id,
    }: {
        /**
         * The id of the user to find addresses for
         */
        id: string,
    }): CancelablePromise<Array<Address>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}/addresses',
            path: {
                'id': id,
            },
            errors: {
                404: `User not found`,
            },
        });
    }

}
