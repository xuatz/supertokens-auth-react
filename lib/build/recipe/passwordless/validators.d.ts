export declare function defaultEmailValidator(value: any): string | undefined;
export declare function defaultPhoneNumberValidator(
    value: string
): "Phone number must be of type string" | "Phone number is invalid" | undefined;
export declare function userInputCodeValidate(value: any): Promise<string | undefined>;