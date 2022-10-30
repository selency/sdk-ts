/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Banner } from '../models/Banner';
import type { ColorTheme } from '../models/ColorTheme';
import type { Selection } from '../models/Selection';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CmsService {

    /**
     * @returns ColorTheme Return latest ColorTheme for given platform
     * @throws ApiError
     */
    public static getAppCmsColorThemesLatest({
        platform = 'mobile_app',
    }: {
        /**
         * Type of platform mobile_app or web_app
         */
        platform?: string,
    }): CancelablePromise<Array<ColorTheme>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cms/color-themes/latest',
            query: {
                'platform': platform,
            },
        });
    }

    /**
     * @returns Banner Return a Banner.
     * @throws ApiError
     */
    public static getAppCmsBannerLatest({
        type = null,
    }: {
        /**
         * Type of BannerType:MOBILE or BannerType:WEB
         */
        type?: string,
    }): CancelablePromise<Array<Banner>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cms/banners/latest',
            query: {
                'type': type,
            },
        });
    }

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
