/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from '../models/Address';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

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

    /**
     * @returns User Return a user
     * @throws ApiError
     */
    public static getAppUserDetail({
        id,
    }: {
        id: string,
    }): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `User not found`,
            },
        });
    }

}
