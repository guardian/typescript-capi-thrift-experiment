/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.5.0
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
import * as __NAMESPACE__ from "./.";
export interface IImage {
    assets: Array<__NAMESPACE__.IImageAsset>;
    master?: __NAMESPACE__.IImageAsset;
    mediaId: string;
    source?: string;
}
export interface IImageArgs {
    assets: Array<__NAMESPACE__.IImageAssetArgs>;
    master?: __NAMESPACE__.IImageAssetArgs;
    mediaId: string;
    source?: string;
}
export const ImageCodec: thrift.IStructCodec<IImageArgs, IImage> = {
    encode(args: IImageArgs, output: thrift.TProtocol): void {
        const obj = {
            assets: args.assets,
            master: args.master,
            mediaId: args.mediaId,
            source: args.source
        };
        output.writeStructBegin("Image");
        if (obj.assets != null) {
            output.writeFieldBegin("assets", thrift.TType.LIST, 1);
            output.writeListBegin(thrift.TType.STRUCT, obj.assets.length);
            obj.assets.forEach((value_1: __NAMESPACE__.IImageAssetArgs): void => {
                __NAMESPACE__.ImageAssetCodec.encode(value_1, output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[assets] is unset!");
        }
        if (obj.master != null) {
            output.writeFieldBegin("master", thrift.TType.STRUCT, 2);
            __NAMESPACE__.ImageAssetCodec.encode(obj.master, output);
            output.writeFieldEnd();
        }
        if (obj.mediaId != null) {
            output.writeFieldBegin("mediaId", thrift.TType.STRING, 3);
            output.writeString(obj.mediaId);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[mediaId] is unset!");
        }
        if (obj.source != null) {
            output.writeFieldBegin("source", thrift.TType.STRING, 4);
            output.writeString(obj.source);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IImage {
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
                        const value_2: Array<__NAMESPACE__.IImageAsset> = new Array<__NAMESPACE__.IImageAsset>();
                        const metadata_1: thrift.IThriftList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_3: __NAMESPACE__.IImageAsset = __NAMESPACE__.ImageAssetCodec.decode(input);
                            value_2.push(value_3);
                        }
                        input.readListEnd();
                        _args.assets = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.STRUCT) {
                        const value_4: __NAMESPACE__.IImageAsset = __NAMESPACE__.ImageAssetCodec.decode(input);
                        _args.master = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.TType.STRING) {
                        const value_5: string = input.readString();
                        _args.mediaId = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.TType.STRING) {
                        const value_6: string = input.readString();
                        _args.source = value_6;
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
        if (_args.assets !== undefined && _args.mediaId !== undefined) {
            return {
                assets: _args.assets,
                master: _args.master,
                mediaId: _args.mediaId,
                source: _args.source
            };
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read Image from input");
        }
    }
};
export class Image extends thrift.StructLike implements IImage {
    public assets: Array<__NAMESPACE__.IImageAsset>;
    public master?: __NAMESPACE__.IImageAsset;
    public mediaId: string;
    public source?: string;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IImageArgs) {
        super();
        if (args.assets != null) {
            const value_7: Array<__NAMESPACE__.IImageAsset> = new Array<__NAMESPACE__.IImageAsset>();
            args.assets.forEach((value_11: __NAMESPACE__.IImageAssetArgs): void => {
                const value_12: __NAMESPACE__.IImageAsset = new __NAMESPACE__.ImageAsset(value_11);
                value_7.push(value_12);
            });
            this.assets = value_7;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[assets] is unset!");
        }
        if (args.master != null) {
            const value_8: __NAMESPACE__.IImageAsset = new __NAMESPACE__.ImageAsset(args.master);
            this.master = value_8;
        }
        if (args.mediaId != null) {
            const value_9: string = args.mediaId;
            this.mediaId = value_9;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[mediaId] is unset!");
        }
        if (args.source != null) {
            const value_10: string = args.source;
            this.source = value_10;
        }
    }
    public static read(input: thrift.TProtocol): Image {
        return new Image(ImageCodec.decode(input));
    }
    public static write(args: IImageArgs, output: thrift.TProtocol): void {
        return ImageCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return ImageCodec.encode(this, output);
    }
}
