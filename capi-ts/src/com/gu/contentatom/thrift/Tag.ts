/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
import * as Section from "./Section";
export interface ITag {
    id: thrift.Int64;
    type?: string;
    internalName?: string;
    externalName?: string;
    slug?: string;
    section?: Section.ISection;
    path?: string;
}
export interface ITagArgs {
    id: number | string | thrift.Int64;
    type?: string;
    internalName?: string;
    externalName?: string;
    slug?: string;
    section?: Section.ISectionArgs;
    path?: string;
}
export const TagCodec: thrift.IStructCodec<ITagArgs, ITag> = {
    encode(args: ITagArgs, output: thrift.TProtocol): void {
        const obj: any = {
            id: (typeof args.id === "number" ? new thrift.Int64(args.id) : typeof args.id === "string" ? thrift.Int64.fromDecimalString(args.id) : args.id),
            type: args.type,
            internalName: args.internalName,
            externalName: args.externalName,
            slug: args.slug,
            section: args.section,
            path: args.path
        };
        output.writeStructBegin("Tag");
        if (obj.id != null) {
            output.writeFieldBegin("id", thrift.TType.I64, 1);
            output.writeI64((typeof obj.id === "number" ? new thrift.Int64(obj.id) : typeof obj.id === "string" ? thrift.Int64.fromDecimalString(obj.id) : obj.id));
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[id] is unset!");
        }
        if (obj.type != null) {
            output.writeFieldBegin("type", thrift.TType.STRING, 2);
            output.writeString(obj.type);
            output.writeFieldEnd();
        }
        if (obj.internalName != null) {
            output.writeFieldBegin("internalName", thrift.TType.STRING, 3);
            output.writeString(obj.internalName);
            output.writeFieldEnd();
        }
        if (obj.externalName != null) {
            output.writeFieldBegin("externalName", thrift.TType.STRING, 4);
            output.writeString(obj.externalName);
            output.writeFieldEnd();
        }
        if (obj.slug != null) {
            output.writeFieldBegin("slug", thrift.TType.STRING, 5);
            output.writeString(obj.slug);
            output.writeFieldEnd();
        }
        if (obj.section != null) {
            output.writeFieldBegin("section", thrift.TType.STRUCT, 6);
            Section.SectionCodec.encode(obj.section, output);
            output.writeFieldEnd();
        }
        if (obj.path != null) {
            output.writeFieldBegin("path", thrift.TType.STRING, 7);
            output.writeString(obj.path);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): ITag {
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
                    if (fieldType === thrift.TType.I64) {
                        const value_1: thrift.Int64 = input.readI64();
                        _args.id = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.STRING) {
                        const value_2: string = input.readString();
                        _args.type = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.TType.STRING) {
                        const value_3: string = input.readString();
                        _args.internalName = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.TType.STRING) {
                        const value_4: string = input.readString();
                        _args.externalName = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.TType.STRING) {
                        const value_5: string = input.readString();
                        _args.slug = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.TType.STRUCT) {
                        const value_6: Section.ISection = Section.SectionCodec.decode(input);
                        _args.section = value_6;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 7:
                    if (fieldType === thrift.TType.STRING) {
                        const value_7: string = input.readString();
                        _args.path = value_7;
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
        if (_args.id !== undefined) {
            return {
                id: _args.id,
                type: _args.type,
                internalName: _args.internalName,
                externalName: _args.externalName,
                slug: _args.slug,
                section: _args.section,
                path: _args.path
            };
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read Tag from input");
        }
    }
};
export class Tag extends thrift.StructLike implements ITag {
    public id: thrift.Int64;
    public type?: string;
    public internalName?: string;
    public externalName?: string;
    public slug?: string;
    public section?: Section.ISection;
    public path?: string;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: ITagArgs) {
        super();
        if (args.id != null) {
            const value_8: thrift.Int64 = (typeof args.id === "number" ? new thrift.Int64(args.id) : typeof args.id === "string" ? thrift.Int64.fromDecimalString(args.id) : args.id);
            this.id = value_8;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[id] is unset!");
        }
        if (args.type != null) {
            const value_9: string = args.type;
            this.type = value_9;
        }
        if (args.internalName != null) {
            const value_10: string = args.internalName;
            this.internalName = value_10;
        }
        if (args.externalName != null) {
            const value_11: string = args.externalName;
            this.externalName = value_11;
        }
        if (args.slug != null) {
            const value_12: string = args.slug;
            this.slug = value_12;
        }
        if (args.section != null) {
            const value_13: Section.ISection = new Section.Section(args.section);
            this.section = value_13;
        }
        if (args.path != null) {
            const value_14: string = args.path;
            this.path = value_14;
        }
    }
    public static read(input: thrift.TProtocol): Tag {
        return new Tag(TagCodec.decode(input));
    }
    public static write(args: ITagArgs, output: thrift.TProtocol): void {
        return TagCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return TagCodec.encode(this, output);
    }
}
