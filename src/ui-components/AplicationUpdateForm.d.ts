/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Aplication } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AplicationUpdateFormInputValues = {
    name?: string;
    about?: string;
    age?: string;
    color?: string;
    image?: string;
};
export declare type AplicationUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    about?: ValidationFunction<string>;
    age?: ValidationFunction<string>;
    color?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AplicationUpdateFormOverridesProps = {
    AplicationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    about?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
    color?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AplicationUpdateFormProps = React.PropsWithChildren<{
    overrides?: AplicationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    aplication?: Aplication;
    onSubmit?: (fields: AplicationUpdateFormInputValues) => AplicationUpdateFormInputValues;
    onSuccess?: (fields: AplicationUpdateFormInputValues) => void;
    onError?: (fields: AplicationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AplicationUpdateFormInputValues) => AplicationUpdateFormInputValues;
    onValidate?: AplicationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AplicationUpdateForm(props: AplicationUpdateFormProps): React.ReactElement;
