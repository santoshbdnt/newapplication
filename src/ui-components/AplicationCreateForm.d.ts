/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AplicationCreateFormInputValues = {
    name?: string;
    about?: string;
    age?: string;
    color?: string;
    image?: string;
};
export declare type AplicationCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    about?: ValidationFunction<string>;
    age?: ValidationFunction<string>;
    color?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AplicationCreateFormOverridesProps = {
    AplicationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    about?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
    color?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AplicationCreateFormProps = React.PropsWithChildren<{
    overrides?: AplicationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AplicationCreateFormInputValues) => AplicationCreateFormInputValues;
    onSuccess?: (fields: AplicationCreateFormInputValues) => void;
    onError?: (fields: AplicationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AplicationCreateFormInputValues) => AplicationCreateFormInputValues;
    onValidate?: AplicationCreateFormValidationValues;
} & React.CSSProperties>;
export default function AplicationCreateForm(props: AplicationCreateFormProps): React.ReactElement;
