/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Material } from '../models/Material';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MaterialService {

    /**
     * Get a Material list.
     * @returns Material Return a list of materials
     * @throws ApiError
     */
    public static getAppProductMetadataMaterialList(): CancelablePromise<Array<Material>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products/metadata/materials',
        });
    }

}
