/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Lang } from './Lang';
import type { NotificationType } from './NotificationType';

export type NotificationLegacyMessage = {
    type?: NotificationType;
    templateKey?: string;
    templateData?: string;
    locale?: Lang;
};

