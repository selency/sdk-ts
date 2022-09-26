/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Style } from '../models/Style';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class StyleService {

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

}
