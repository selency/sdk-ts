/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Category } from '../models/Category';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CategoryService {

    /**
     * Get a Category by id.
     * @returns Category Return a category
     * @throws ApiError
     */
    public static getAppCategoryDetail({
        id,
    }: {
        /**
         * The id of the category
         */
        id: string,
    }): CancelablePromise<Category> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/categories/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Category not found`,
            },
        });
    }

}
