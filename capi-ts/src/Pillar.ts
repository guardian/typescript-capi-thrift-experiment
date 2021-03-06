/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
export interface IPillar {
    id: string;
    name: string;
    sectionIds: Array<string>;
}
export interface IPillarArgs {
    id: string;
    name: string;
    sectionIds: Array<string>;
}
export const PillarCodec: thrift.IStructCodec<IPillarArgs, IPillar> = {
    encode(args: IPillarArgs, output: thrift.TProtocol): void {
        const obj: any = {
            id: args.id,
            name: args.name,
            sectionIds: args.sectionIds
        };
        output.writeStructBegin("Pillar");
        if (obj.id != null) {
            output.writeFieldBegin("id", thrift.TType.STRING, 1);
            output.writeString(obj.id);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[id] is unset!");
        }
        if (obj.name != null) {
            output.writeFieldBegin("name", thrift.TType.STRING, 2);
            output.writeString(obj.name);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[name] is unset!");
        }
        if (obj.sectionIds != null) {
            output.writeFieldBegin("sectionIds", thrift.TType.LIST, 3);
            output.writeListBegin(thrift.TType.STRING, obj.sectionIds.length);
            obj.sectionIds.forEach((value_1: string): void => {
                output.writeString(value_1);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[sectionIds] is unset!");
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IPillar {
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
                        const value_2: string = input.readString();
                        _args.id = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.STRING) {
                        const value_3: string = input.readString();
                        _args.name = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.TType.LIST) {
                        const value_4: Array<string> = new Array<string>();
                        const metadata_1: thrift.IThriftList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_5: string = input.readString();
                            value_4.push(value_5);
                        }
                        input.readListEnd();
                        _args.sectionIds = value_4;
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
        if (_args.id !== undefined && _args.name !== undefined && _args.sectionIds !== undefined) {
            return {
                id: _args.id,
                name: _args.name,
                sectionIds: _args.sectionIds
            };
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read Pillar from input");
        }
    }
};
export class Pillar extends thrift.StructLike implements IPillar {
    public id: string;
    public name: string;
    public sectionIds: Array<string>;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IPillarArgs) {
        super();
        if (args.id != null) {
            const value_6: string = args.id;
            this.id = value_6;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[id] is unset!");
        }
        if (args.name != null) {
            const value_7: string = args.name;
            this.name = value_7;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[name] is unset!");
        }
        if (args.sectionIds != null) {
            const value_8: Array<string> = new Array<string>();
            args.sectionIds.forEach((value_9: string): void => {
                const value_10: string = value_9;
                value_8.push(value_10);
            });
            this.sectionIds = value_8;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[sectionIds] is unset!");
        }
    }
    public static read(input: thrift.TProtocol): Pillar {
        return new Pillar(PillarCodec.decode(input));
    }
    public static write(args: IPillarArgs, output: thrift.TProtocol): void {
        return PillarCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return PillarCodec.encode(this, output);
    }
}
