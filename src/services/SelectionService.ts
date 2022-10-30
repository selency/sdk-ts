/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Selection } from '../models/Selection';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SelectionService {

    /**
     * @returns Selection Return an array of one selection for the mobile homepage
     * @throws ApiError
     */
    public static getAppSelectionHomepageMobile(): CancelablePromise<Array<Selection>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/homepage-mobile',
        });
    }

}
