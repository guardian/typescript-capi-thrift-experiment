/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
export interface IEdition {
    id: string;
    webTitle: string;
    webUrl: string;
    apiUrl: string;
    code: string;
}
export interface IEditionArgs {
    id: string;
    webTitle: string;
    webUrl: string;
    apiUrl: string;
    code: string;
}
export const EditionCodec: thrift.IStructCodec<IEditionArgs, IEdition> = {
    encode(args: IEditionArgs, output: thrift.TProtocol): void {
        const obj: any = {
            id: args.id,
            webTitle: args.webTitle,
            webUrl: args.webUrl,
            apiUrl: args.apiUrl,
            code: args.code
        };
        output.writeStructBegin("Edition");
        if (obj.id != null) {
            output.writeFieldBegin("id", thrift.TType.STRING, 1);
            output.writeString(obj.id);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[id] is unset!");
        }
        if (obj.webTitle != null) {
            output.writeFieldBegin("webTitle", thrift.TType.STRING, 2);
            output.writeString(obj.webTitle);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[webTitle] is unset!");
        }
        if (obj.webUrl != null) {
            output.writeFieldBegin("webUrl", thrift.TType.STRING, 3);
            output.writeString(obj.webUrl);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[webUrl] is unset!");
        }
        if (obj.apiUrl != null) {
            output.writeFieldBegin("apiUrl", thrift.TType.STRING, 4);
            output.writeString(obj.apiUrl);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[apiUrl] is unset!");
        }
        if (obj.code != null) {
            output.writeFieldBegin("code", thrift.TType.STRING, 5);
            output.writeString(obj.code);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[code] is unset!");
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IEdition {
        let _args: any = {};
        input.readStructBegin();
        while (true) {
            const ret: thrift.IThriftField = input.readFieldBegin();
            const fieldType: thrift.TType = ret.fieldType;
            const fieldId: number = ret.fieldId;
            if (fieldType === thrift.TType.STOP) {
                break;
            }
            switch (fieldId) {
                case 1:
                    if (fieldType === thrift.TType.STRING) {
                        const value_1: string = input.readString();
                        _args.id = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.STRING) {
                        const value_2: string = input.readString();
                        _args.webTitle = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.TType.STRING) {
                        const value_3: string = input.readString();
                        _args.webUrl = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.TType.STRING) {
                        const value_4: string = input.readString();
                        _args.apiUrl = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.TType.STRING) {
                        const value_5: string = input.readString();
                        _args.code = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        if (_args.id !== undefined && _args.webTitle !== undefined && _args.webUrl !== undefined && _args.apiUrl !== undefined && _args.code !== undefined) {
            return {
                id: _args.id,
                webTitle: _args.webTitle,
                webUrl: _args.webUrl,
                apiUrl: _args.apiUrl,
                code: _args.code
            };
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read Edition from input");
        }
    }
};
export class Edition extends thrift.StructLike implements IEdition {
    public id: string;
    public webTitle: string;
    public webUrl: string;
    public apiUrl: string;
    public code: string;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IEditionArgs) {
        super();
        if (args.id != null) {
            const value_6: string = args.id;
            this.id = value_6;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[id] is unset!");
        }
        if (args.webTitle != null) {
            const value_7: string = args.webTitle;
            this.webTitle = value_7;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[webTitle] is unset!");
        }
        if (args.webUrl != null) {
            const value_8: string = args.webUrl;
            this.webUrl = value_8;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[webUrl] is unset!");
        }
        if (args.apiUrl != null) {
            const value_9: string = args.apiUrl;
            this.apiUrl = value_9;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[apiUrl] is unset!");
        }
        if (args.code != null) {
            const value_10: string = args.code;
            this.code = value_10;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[code] is unset!");
        }
    }
    public static read(input: thrift.TProtocol): Edition {
        return new Edition(EditionCodec.decode(input));
    }
    public static write(args: IEditionArgs, output: thrift.TProtocol): void {
        return EditionCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return EditionCodec.encode(this, output);
    }
}
