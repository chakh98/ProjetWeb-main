import {ApiException} from "@common/api";
import {ApiCodeResponse} from "@common/api";

export class ProfilCreateException extends ApiException {
    constructor() {
        super(ApiCodeResponse.MEMBER_CREATE_EXCEPTION, 401);
    }
}
export class ProfilNotFoundException extends ApiException {
    constructor() {
        super(ApiCodeResponse.MEMBER_CREATE_EXCEPTION, 401);
    }
}
export class ProfilListException extends ApiException {
    constructor() {
        super(ApiCodeResponse.MEMBER_CREATE_EXCEPTION, 401);
    }
}
export class PublicationCreateException extends ApiException {
    constructor() {
        super(ApiCodeResponse.MEMBER_CREATE_EXCEPTION, 401);
    }
}
export class PublicationNotFoundException extends ApiException {
    constructor() {
        super(ApiCodeResponse.MEMBER_CREATE_EXCEPTION, 401);
    }
}
export class PublicationListException extends ApiException {
    constructor() {
        super(ApiCodeResponse.MEMBER_CREATE_EXCEPTION, 401);
    }
}
export class CommentaireCreateException extends ApiException {
    constructor() {
        super(ApiCodeResponse.MEMBER_CREATE_EXCEPTION, 401);
    }
}
export class CommentaireNotFoundException extends ApiException {
    constructor() {
        super(ApiCodeResponse.MEMBER_CREATE_EXCEPTION, 401);
    }
}
export class CommentaireListException extends ApiException {
    constructor() {
        super(ApiCodeResponse.MEMBER_CREATE_EXCEPTION, 401);
    }
}
export class LikeCreateException extends ApiException {
    constructor() {
        super(ApiCodeResponse.MEMBER_CREATE_EXCEPTION, 401);
    }
}
export class LikeNotFoundException extends ApiException {
    constructor() {
        super(ApiCodeResponse.MEMBER_CREATE_EXCEPTION, 401);
    }
}
export class LikeListException extends ApiException {
    constructor() {
        super(ApiCodeResponse.MEMBER_CREATE_EXCEPTION, 401);
    }
}