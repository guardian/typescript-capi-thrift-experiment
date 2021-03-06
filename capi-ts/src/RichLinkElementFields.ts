/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
import * as Sponsorship from "./Sponsorship";
export interface IRichLinkElementFields {
    url?: string;
    originalUrl?: string;
    linkText?: string;
    linkPrefix?: string;
    role?: string;
    sponsorship?: Sponsorship.ISponsorship;
}
export interface IRichLinkElementFieldsArgs {
    url?: string;
    originalUrl?: string;
    linkText?: string;
    linkPrefix?: string;
    role?: string;
    sponsorship?: Sponsorship.ISponsorshipArgs;
}
export const RichLinkElementFieldsCodec: thrift.IStructCodec<IRichLinkElementFieldsArgs, IRichLinkElementFields> = {
    encode(args: IRichLinkElementFieldsArgs, output: thrift.TProtocol): void {
        const obj: any = {
            url: args.url,
            originalUrl: args.originalUrl,
            linkText: args.linkText,
            linkPrefix: args.linkPrefix,
            role: args.role,
            sponsorship: args.sponsorship
        };
        output.writeStructBegin("RichLinkElementFields");
        if (obj.url != null) {
            output.writeFieldBegin("url", thrift.TType.STRING, 1);
            output.writeString(obj.url);
            output.writeFieldEnd();
        }
        if (obj.originalUrl != null) {
            output.writeFieldBegin("originalUrl", thrift.TType.STRING, 2);
            output.writeString(obj.originalUrl);
            output.writeFieldEnd();
        }
        if (obj.linkText != null) {
            output.writeFieldBegin("linkText", thrift.TType.STRING, 3);
            output.writeString(obj.linkText);
            output.writeFieldEnd();
        }
        if (obj.linkPrefix != null) {
            output.writeFieldBegin("linkPrefix", thrift.TType.STRING, 4);
            output.writeString(obj.linkPrefix);
            output.writeFieldEnd();
        }
        if (obj.role != null) {
            output.writeFieldBegin("role", thrift.TType.STRING, 5);
            output.writeString(obj.role);
            output.writeFieldEnd();
        }
        if (obj.sponsorship != null) {
            output.writeFieldBegin("sponsorship", thrift.TType.STRUCT, 6);
            Sponsorship.SponsorshipCodec.encode(obj.sponsorship, output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IRichLinkElementFields {
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
                        _args.url = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.STRING) {
                        const value_2: string = input.readString();
                        _args.originalUrl = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.TType.STRING) {
                        const value_3: string = input.readString();
                        _args.linkText = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.TType.STRING) {
                        const value_4: string = input.readString();
                        _args.linkPrefix = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.TType.STRING) {
                        const value_5: string = input.readString();
                        _args.role = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.TType.STRUCT) {
                        const value_6: Sponsorship.ISponsorship = Sponsorship.SponsorshipCodec.decode(input);
                        _args.sponsorship = value_6;
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
        return {
            url: _args.url,
            originalUrl: _args.originalUrl,
            linkText: _args.linkText,
            linkPrefix: _args.linkPrefix,
            role: _args.role,
            sponsorship: _args.sponsorship
        };
    }
};
export class RichLinkElementFields extends thrift.StructLike implements IRichLinkElementFields {
    public url?: string;
    public originalUrl?: string;
    public linkText?: string;
    public linkPrefix?: string;
    public role?: string;
    public sponsorship?: Sponsorship.ISponsorship;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IRichLinkElementFieldsArgs = {}) {
        super();
        if (args.url != null) {
            const value_7: string = args.url;
            this.url = value_7;
        }
        if (args.originalUrl != null) {
            const value_8: string = args.originalUrl;
            this.originalUrl = value_8;
        }
        if (args.linkText != null) {
            const value_9: string = args.linkText;
            this.linkText = value_9;
        }
        if (args.linkPrefix != null) {
            const value_10: string = args.linkPrefix;
            this.linkPrefix = value_10;
        }
        if (args.role != null) {
            const value_11: string = args.role;
            this.role = value_11;
        }
        if (args.sponsorship != null) {
            const value_12: Sponsorship.ISponsorship = new Sponsorship.Sponsorship(args.sponsorship);
            this.sponsorship = value_12;
        }
    }
    public static read(input: thrift.TProtocol): RichLinkElementFields {
        return new RichLinkElementFields(RichLinkElementFieldsCodec.decode(input));
    }
    public static write(args: IRichLinkElementFieldsArgs, output: thrift.TProtocol): void {
        return RichLinkElementFieldsCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return RichLinkElementFieldsCodec.encode(this, output);
    }
}
