/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
export interface IContentAtomElementFields {
    atomId: string;
    atomType: string;
}
export interface IContentAtomElementFieldsArgs {
    atomId: string;
    atomType: string;
}
export const ContentAtomElementFieldsCodec: thrift.IStructCodec<IContentAtomElementFieldsArgs, IContentAtomElementFields> = {
    encode(args: IContentAtomElementFieldsArgs, output: thrift.TProtocol): void {
        const obj: any = {
            atomId: args.atomId,
            atomType: args.atomType
        };
        output.writeStructBegin("ContentAtomElementFields");
        if (obj.atomId != null) {
            output.writeFieldBegin("atomId", thrift.TType.STRING, 1);
            output.writeString(obj.atomId);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[atomId] is unset!");
        }
        if (obj.atomType != null) {
            output.writeFieldBegin("atomType", thrift.TType.STRING, 2);
            output.writeString(obj.atomType);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[atomType] is unset!");
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IContentAtomElementFields {
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
                        _args.atomId = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.STRING) {
                        const value_2: string = input.readString();
                        _args.atomType = value_2;
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
        if (_args.atomId !== undefined && _args.atomType !== undefined) {
            return {
                atomId: _args.atomId,
                atomType: _args.atomType
            };
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read ContentAtomElementFields from input");
        }
    }
};
export class ContentAtomElementFields extends thrift.StructLike implements IContentAtomElementFields {
    public atomId: string;
    public atomType: string;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IContentAtomElementFieldsArgs) {
        super();
        if (args.atomId != null) {
            const value_3: string = args.atomId;
            this.atomId = value_3;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[atomId] is unset!");
        }
        if (args.atomType != null) {
            const value_4: string = args.atomType;
            this.atomType = value_4;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[atomType] is unset!");
        }
    }
    public static read(input: thrift.TProtocol): ContentAtomElementFields {
        return new ContentAtomElementFields(ContentAtomElementFieldsCodec.decode(input));
    }
    public static write(args: IContentAtomElementFieldsArgs, output: thrift.TProtocol): void {
        return ContentAtomElementFieldsCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return ContentAtomElementFieldsCodec.encode(this, output);
    }
}
