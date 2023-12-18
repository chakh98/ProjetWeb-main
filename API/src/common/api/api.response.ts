import {ApiCodeResponse} from '@common/api';
export interface ApiResponse {
    result: boolean;
    code: ApiCodeResponse;
    data: any;
}