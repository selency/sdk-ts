/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Color } from '../models/Color';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ColorService {

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

}
