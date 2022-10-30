/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MediumService {

    /**
     * @returns any Remove the background of an existing image uuid.
     * @throws ApiError
     */
    public static postAppMediumBackgroundRemove({
        uuid,
        id,
        recreate,
    }: {
        uuid: string,
        id: string,
        /**
         * Force recreating the media without background.
         */
        recreate?: boolean,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/media/{id}/remove-background',
            path: {
                'uuid': uuid,
                'id': id,
            },
            query: {
                'recreate': recreate,
            },
        });
    }

}
