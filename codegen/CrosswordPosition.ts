/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.5.0
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
export interface ICrosswordPosition {
    x: number;
    y: number;
}
export interface ICrosswordPositionArgs {
    x: number;
    y: number;
}
export const CrosswordPositionCodec: thrift.IStructCodec<ICrosswordPositionArgs, ICrosswordPosition> = {
    encode(args: ICrosswordPositionArgs, output: thrift.TProtocol): void {
        const obj = {
            x: args.x,
            y: args.y
        };
        output.writeStructBegin("CrosswordPosition");
        if (obj.x != null) {
            output.writeFieldBegin("x", thrift.TType.I32, 1);
            output.writeI32(obj.x);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[x] is unset!");
        }
        if (obj.y != null) {
            output.writeFieldBegin("y", thrift.TType.I32, 2);
            output.writeI32(obj.y);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[y] is unset!");
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): ICrosswordPosition {
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
                    if (fieldType === thrift.TType.I32) {
                        const value_1: number = input.readI32();
                        _args.x = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.I32) {
                        const value_2: number = input.readI32();
                        _args.y = value_2;
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
        if (_args.x !== undefined && _args.y !== undefined) {
            return {
                x: _args.x,
                y: _args.y
            };
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read CrosswordPosition from input");
        }
    }
};
export class CrosswordPosition extends thrift.StructLike implements ICrosswordPosition {
    public x: number;
    public y: number;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: ICrosswordPositionArgs) {
        super();
        if (args.x != null) {
            const value_3: number = args.x;
            this.x = value_3;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[x] is unset!");
        }
        if (args.y != null) {
            const value_4: number = args.y;
            this.y = value_4;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[y] is unset!");
        }
    }
    public static read(input: thrift.TProtocol): CrosswordPosition {
        return new CrosswordPosition(CrosswordPositionCodec.decode(input));
    }
    public static write(args: ICrosswordPositionArgs, output: thrift.TProtocol): void {
        return CrosswordPositionCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return CrosswordPositionCodec.encode(this, output);
    }
}
