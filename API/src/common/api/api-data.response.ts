import { ApiCodeResponse } from '@common/api';

export interface ApiDataResponse {
    result: boolean;
    code: ApiCodeResponse;
    data: any;
}
