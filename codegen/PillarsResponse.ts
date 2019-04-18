/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.5.0
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
import * as __NAMESPACE__ from "./.";
export interface IPillarsResponse {
    status: string;
    total: number;
    results: Array<__NAMESPACE__.IPillar>;
}
export interface IPillarsResponseArgs {
    status: string;
    total: number;
    results: Array<__NAMESPACE__.IPillarArgs>;
}
export const PillarsResponseCodec: thrift.IStructCodec<IPillarsResponseArgs, IPillarsResponse> = {
    encode(args: IPillarsResponseArgs, output: thrift.TProtocol): void {
        const obj = {
            status: args.status,
            total: args.total,
            results: args.results
        };
        output.writeStructBegin("PillarsResponse");
        if (obj.status != null) {
            output.writeFieldBegin("status", thrift.TType.STRING, 1);
            output.writeString(obj.status);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[status] is unset!");
        }
        if (obj.total != null) {
            output.writeFieldBegin("total", thrift.TType.I32, 2);
            output.writeI32(obj.total);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[total] is unset!");
        }
        if (obj.results != null) {
            output.writeFieldBegin("results", thrift.TType.LIST, 3);
            output.writeListBegin(thrift.TType.STRUCT, obj.results.length);
            obj.results.forEach((value_1: __NAMESPACE__.IPillarArgs): void => {
                __NAMESPACE__.PillarCodec.encode(value_1, output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[results] is unset!");
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IPillarsResponse {
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
                        _args.status = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.I32) {
                        const value_3: number = input.readI32();
                        _args.total = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.TType.LIST) {
                        const value_4: Array<__NAMESPACE__.IPillar> = new Array<__NAMESPACE__.IPillar>();
                        const metadata_1: thrift.IThriftList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_5: __NAMESPACE__.IPillar = __NAMESPACE__.PillarCodec.decode(input);
                            value_4.push(value_5);
                        }
                        input.readListEnd();
                        _args.results = value_4;
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
        if (_args.status !== undefined && _args.total !== undefined && _args.results !== undefined) {
            return {
                status: _args.status,
                total: _args.total,
                results: _args.results
            };
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read PillarsResponse from input");
        }
    }
};
export class PillarsResponse extends thrift.StructLike implements IPillarsResponse {
    public status: string;
    public total: number;
    public results: Array<__NAMESPACE__.IPillar>;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IPillarsResponseArgs) {
        super();
        if (args.status != null) {
            const value_6: string = args.status;
            this.status = value_6;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[status] is unset!");
        }
        if (args.total != null) {
            const value_7: number = args.total;
            this.total = value_7;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[total] is unset!");
        }
        if (args.results != null) {
            const value_8: Array<__NAMESPACE__.IPillar> = new Array<__NAMESPACE__.IPillar>();
            args.results.forEach((value_9: __NAMESPACE__.IPillarArgs): void => {
                const value_10: __NAMESPACE__.IPillar = new __NAMESPACE__.Pillar(value_9);
                value_8.push(value_10);
            });
            this.results = value_8;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[results] is unset!");
        }
    }
    public static read(input: thrift.TProtocol): PillarsResponse {
        return new PillarsResponse(PillarsResponseCodec.decode(input));
    }
    public static write(args: IPillarsResponseArgs, output: thrift.TProtocol): void {
        return PillarsResponseCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return PillarsResponseCodec.encode(this, output);
    }
}
