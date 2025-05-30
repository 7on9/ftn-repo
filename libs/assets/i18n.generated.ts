/* DO NOT EDIT, file generated by nestjs-i18n */

/* eslint-disable */
/* prettier-ignore */
import { Path } from "nestjs-i18n";
/* prettier-ignore */
export type I18nTranslations = {
    "enum": {
        "NSMember": {
            "EAddressType": {
                "HOME": string;
                "COMPANY": string;
            };
            "EMembershipType": {
                "PERSONAL": string;
                "ENTERPRISE": string;
            };
            "EMemberType": {
                "MEMBER": string;
                "COLLABORATOR": string;
                "POST_OFFICE": string;
            };
            "EStatus": {
                "INACTIVE": string;
                "ACTIVE": string;
                "WAITING_FOR_VERIFY": string;
                "DELETED": string;
                "WAITING_FOR_APPROVE": string;
            };
            "EBusinessType": {
                "LED_ADVERTISEMENT": string;
                "SOCIAL_SECURITY_CARD": string;
                "TOURISM": string;
                "HEALTH": string;
                "SME360": string;
                "FOOD": string;
                "RETAIL": string;
                "EDUCATION": string;
            };
        };
    };
    "member": {
        "AuthMemberService": {
            "error": {
                "member_existed": string;
                "member_not_existed": string;
                "referral_code_invalid": string;
                "token_expired": string;
            };
        };
        "order": {
            "notification": {
                "so_pending_receiving": string;
                "so_refund_amount": string;
            };
        };
    };
    "payment": {
        "hello": string;
        "notification": {
            "purchase_card": {
                "title": string;
                "body": string;
            };
        };
        "check_status_transaction": {
            "purchase_card": {
                "message_success": string;
                "message_warning": string;
            };
        };
    };
    "validation": {
        "NOT_EMPTY": string;
        "INVALID_EMAIL": string;
        "INVALID_BOOLEAN": string;
        "MIN": string;
        "MAX": string;
    };
    "withdraw": {
        "WithdrawService": {
            "error": {
                "out_of_limit": string;
                "not_exist_any_withdraw_request": string;
                "withdraw_statement_not_exist": string;
                "withdraw_statement_not_pending": string;
                "withdraw_statement_not_pending_or_waiting_approval": string;
                "withdraw_statement_not_pending_or_rejected": string;
                "withdraw_profile_not_exist": string;
                "withdraw_statement_not_approved": string;
                "withdraw_transaction_not_exist": string;
                "withdraw_transaction_not_pending_or_rejected": string;
                "withdraw_request_not_rejected": string;
                "withdraw_profile_contract_not_exist": string;
                "need_to_complete_withdraw_profile": string;
            };
        };
    };
};
/* prettier-ignore */
export type I18nPath = Path<I18nTranslations>;
