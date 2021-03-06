/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
import * as ResultGroup from "./ResultGroup";
export interface IResultGroups {
    groups: Array<ResultGroup.IResultGroup>;
}
export interface IResultGroupsArgs {
    groups: Array<ResultGroup.IResultGroupArgs>;
}
export const ResultGroupsCodec: thrift.IStructCodec<IResultGroupsArgs, IResultGroups> = {
    encode(args: IResultGroupsArgs, output: thrift.TProtocol): void {
        const obj: any = {
            groups: args.groups
        };
        output.writeStructBegin("ResultGroups");
        if (obj.groups != null) {
            output.writeFieldBegin("groups", thrift.TType.LIST, 1);
            output.writeListBegin(thrift.TType.STRUCT, obj.groups.length);
            obj.groups.forEach((value_1: ResultGroup.IResultGroupArgs): void => {
                ResultGroup.ResultGroupCodec.encode(value_1, output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[groups] is unset!");
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IResultGroups {
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
                    if (fieldType === thrift.TType.LIST) {
                        const value_2: Array<ResultGroup.IResultGroup> = new Array<ResultGroup.IResultGroup>();
                        const metadata_1: thrift.IThriftList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_3: ResultGroup.IResultGroup = ResultGroup.ResultGroupCodec.decode(input);
                            value_2.push(value_3);
                        }
                        input.readListEnd();
                        _args.groups = value_2;
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
        if (_args.groups !== undefined) {
            return {
                groups: _args.groups
            };
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read ResultGroups from input");
        }
    }
};
export class ResultGroups extends thrift.StructLike implements IResultGroups {
    public groups: Array<ResultGroup.IResultGroup>;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IResultGroupsArgs) {
        super();
        if (args.groups != null) {
            const value_4: Array<ResultGroup.IResultGroup> = new Array<ResultGroup.IResultGroup>();
            args.groups.forEach((value_5: ResultGroup.IResultGroupArgs): void => {
                const value_6: ResultGroup.IResultGroup = new ResultGroup.ResultGroup(value_5);
                value_4.push(value_6);
            });
            this.groups = value_4;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[groups] is unset!");
        }
    }
    public static read(input: thrift.TProtocol): ResultGroups {
        return new ResultGroups(ResultGroupsCodec.decode(input));
    }
    public static write(args: IResultGroupsArgs, output: thrift.TProtocol): void {
        return ResultGroupsCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return ResultGroupsCodec.encode(this, output);
    }
}
