/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
import * as com_gu_contententity_thrift from "./../../com/gu/contententity/thrift";
export interface ITimelineItem {
    title: string;
    date: thrift.Int64;
    body?: string;
    entities?: Array<com_gu_contententity_thrift.IEntity>;
    dateFormat?: string;
    toDate?: thrift.Int64;
}
export interface ITimelineItemArgs {
    title: string;
    date: number | string | thrift.Int64;
    body?: string;
    entities?: Array<com_gu_contententity_thrift.IEntityArgs>;
    dateFormat?: string;
    toDate?: number | string | thrift.Int64;
}
export const TimelineItemCodec: thrift.IStructCodec<ITimelineItemArgs, ITimelineItem> = {
    encode(args: ITimelineItemArgs, output: thrift.TProtocol): void {
        const obj: any = {
            title: args.title,
            date: (typeof args.date === "number" ? new thrift.Int64(args.date) : typeof args.date === "string" ? thrift.Int64.fromDecimalString(args.date) : args.date),
            body: args.body,
            entities: args.entities,
            dateFormat: args.dateFormat,
            toDate: (typeof args.toDate === "number" ? new thrift.Int64(args.toDate) : typeof args.toDate === "string" ? thrift.Int64.fromDecimalString(args.toDate) : args.toDate)
        };
        output.writeStructBegin("TimelineItem");
        if (obj.title != null) {
            output.writeFieldBegin("title", thrift.TType.STRING, 1);
            output.writeString(obj.title);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[title] is unset!");
        }
        if (obj.date != null) {
            output.writeFieldBegin("date", thrift.TType.I64, 2);
            output.writeI64((typeof obj.date === "number" ? new thrift.Int64(obj.date) : typeof obj.date === "string" ? thrift.Int64.fromDecimalString(obj.date) : obj.date));
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[date] is unset!");
        }
        if (obj.body != null) {
            output.writeFieldBegin("body", thrift.TType.STRING, 3);
            output.writeString(obj.body);
            output.writeFieldEnd();
        }
        if (obj.entities != null) {
            output.writeFieldBegin("entities", thrift.TType.LIST, 4);
            output.writeListBegin(thrift.TType.STRUCT, obj.entities.length);
            obj.entities.forEach((value_1: com_gu_contententity_thrift.IEntityArgs): void => {
                com_gu_contententity_thrift.EntityCodec.encode(value_1, output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (obj.dateFormat != null) {
            output.writeFieldBegin("dateFormat", thrift.TType.STRING, 5);
            output.writeString(obj.dateFormat);
            output.writeFieldEnd();
        }
        if (obj.toDate != null) {
            output.writeFieldBegin("toDate", thrift.TType.I64, 6);
            output.writeI64((typeof obj.toDate === "number" ? new thrift.Int64(obj.toDate) : typeof obj.toDate === "string" ? thrift.Int64.fromDecimalString(obj.toDate) : obj.toDate));
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): ITimelineItem {
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
                        _args.title = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.I64) {
                        const value_3: thrift.Int64 = input.readI64();
                        _args.date = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.TType.STRING) {
                        const value_4: string = input.readString();
                        _args.body = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.TType.LIST) {
                        const value_5: Array<com_gu_contententity_thrift.IEntity> = new Array<com_gu_contententity_thrift.IEntity>();
                        const metadata_1: thrift.IThriftList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_6: com_gu_contententity_thrift.IEntity = com_gu_contententity_thrift.EntityCodec.decode(input);
                            value_5.push(value_6);
                        }
                        input.readListEnd();
                        _args.entities = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.TType.STRING) {
                        const value_7: string = input.readString();
                        _args.dateFormat = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.TType.I64) {
                        const value_8: thrift.Int64 = input.readI64();
                        _args.toDate = value_8;
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
        if (_args.title !== undefined && _args.date !== undefined) {
            return {
                title: _args.title,
                date: _args.date,
                body: _args.body,
                entities: _args.entities,
                dateFormat: _args.dateFormat,
                toDate: _args.toDate
            };
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read TimelineItem from input");
        }
    }
};
export class TimelineItem extends thrift.StructLike implements ITimelineItem {
    public title: string;
    public date: thrift.Int64;
    public body?: string;
    public entities?: Array<com_gu_contententity_thrift.IEntity>;
    public dateFormat?: string;
    public toDate?: thrift.Int64;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: ITimelineItemArgs) {
        super();
        if (args.title != null) {
            const value_9: string = args.title;
            this.title = value_9;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[title] is unset!");
        }
        if (args.date != null) {
            const value_10: thrift.Int64 = (typeof args.date === "number" ? new thrift.Int64(args.date) : typeof args.date === "string" ? thrift.Int64.fromDecimalString(args.date) : args.date);
            this.date = value_10;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[date] is unset!");
        }
        if (args.body != null) {
            const value_11: string = args.body;
            this.body = value_11;
        }
        if (args.entities != null) {
            const value_12: Array<com_gu_contententity_thrift.IEntity> = new Array<com_gu_contententity_thrift.IEntity>();
            args.entities.forEach((value_15: com_gu_contententity_thrift.IEntityArgs): void => {
                const value_16: com_gu_contententity_thrift.IEntity = new com_gu_contententity_thrift.Entity(value_15);
                value_12.push(value_16);
            });
            this.entities = value_12;
        }
        if (args.dateFormat != null) {
            const value_13: string = args.dateFormat;
            this.dateFormat = value_13;
        }
        if (args.toDate != null) {
            const value_14: thrift.Int64 = (typeof args.toDate === "number" ? new thrift.Int64(args.toDate) : typeof args.toDate === "string" ? thrift.Int64.fromDecimalString(args.toDate) : args.toDate);
            this.toDate = value_14;
        }
    }
    public static read(input: thrift.TProtocol): TimelineItem {
        return new TimelineItem(TimelineItemCodec.decode(input));
    }
    public static write(args: ITimelineItemArgs, output: thrift.TProtocol): void {
        return TimelineItemCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return TimelineItemCodec.encode(this, output);
    }
}
