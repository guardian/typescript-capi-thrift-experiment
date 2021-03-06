/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
export interface IOffPlatform {
    applePodcastsUrl?: string;
    googlePodcastsUrl?: string;
    spotifyUrl?: string;
}
export interface IOffPlatformArgs {
    applePodcastsUrl?: string;
    googlePodcastsUrl?: string;
    spotifyUrl?: string;
}
export const OffPlatformCodec: thrift.IStructCodec<IOffPlatformArgs, IOffPlatform> = {
    encode(args: IOffPlatformArgs, output: thrift.TProtocol): void {
        const obj: any = {
            applePodcastsUrl: args.applePodcastsUrl,
            googlePodcastsUrl: args.googlePodcastsUrl,
            spotifyUrl: args.spotifyUrl
        };
        output.writeStructBegin("OffPlatform");
        if (obj.applePodcastsUrl != null) {
            output.writeFieldBegin("applePodcastsUrl", thrift.TType.STRING, 1);
            output.writeString(obj.applePodcastsUrl);
            output.writeFieldEnd();
        }
        if (obj.googlePodcastsUrl != null) {
            output.writeFieldBegin("googlePodcastsUrl", thrift.TType.STRING, 2);
            output.writeString(obj.googlePodcastsUrl);
            output.writeFieldEnd();
        }
        if (obj.spotifyUrl != null) {
            output.writeFieldBegin("spotifyUrl", thrift.TType.STRING, 3);
            output.writeString(obj.spotifyUrl);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IOffPlatform {
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
                        _args.applePodcastsUrl = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.STRING) {
                        const value_2: string = input.readString();
                        _args.googlePodcastsUrl = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.TType.STRING) {
                        const value_3: string = input.readString();
                        _args.spotifyUrl = value_3;
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
            applePodcastsUrl: _args.applePodcastsUrl,
            googlePodcastsUrl: _args.googlePodcastsUrl,
            spotifyUrl: _args.spotifyUrl
        };
    }
};
export class OffPlatform extends thrift.StructLike implements IOffPlatform {
    public applePodcastsUrl?: string;
    public googlePodcastsUrl?: string;
    public spotifyUrl?: string;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IOffPlatformArgs = {}) {
        super();
        if (args.applePodcastsUrl != null) {
            const value_4: string = args.applePodcastsUrl;
            this.applePodcastsUrl = value_4;
        }
        if (args.googlePodcastsUrl != null) {
            const value_5: string = args.googlePodcastsUrl;
            this.googlePodcastsUrl = value_5;
        }
        if (args.spotifyUrl != null) {
            const value_6: string = args.spotifyUrl;
            this.spotifyUrl = value_6;
        }
    }
    public static read(input: thrift.TProtocol): OffPlatform {
        return new OffPlatform(OffPlatformCodec.decode(input));
    }
    public static write(args: IOffPlatformArgs, output: thrift.TProtocol): void {
        return OffPlatformCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return OffPlatformCodec.encode(this, output);
    }
}
