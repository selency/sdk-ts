/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationLegacyMessage } from '../models/NotificationLegacyMessage';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NotificationService {

    /**
     * @returns NotificationLegacyMessage created notification
     * @throws ApiError
     */
    public static postAppNotificationCreate(): CancelablePromise<NotificationLegacyMessage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notifications',
        });
    }

}
