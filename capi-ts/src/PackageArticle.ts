/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
import * as com_gu_storypackage_model_v1 from "./com/gu/storypackage/model/v1";
import * as Content from "./Content";
export interface IPackageArticle {
    metadata: com_gu_storypackage_model_v1.IArticle;
    content: Content.IContent;
}
export interface IPackageArticleArgs {
    metadata: com_gu_storypackage_model_v1.IArticleArgs;
    content: Content.IContentArgs;
}
export const PackageArticleCodec: thrift.IStructCodec<IPackageArticleArgs, IPackageArticle> = {
    encode(args: IPackageArticleArgs, output: thrift.TProtocol): void {
        const obj: any = {
            metadata: args.metadata,
            content: args.content
        };
        output.writeStructBegin("PackageArticle");
        if (obj.metadata != null) {
            output.writeFieldBegin("metadata", thrift.TType.STRUCT, 1);
            com_gu_storypackage_model_v1.ArticleCodec.encode(obj.metadata, output);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[metadata] is unset!");
        }
        if (obj.content != null) {
            output.writeFieldBegin("content", thrift.TType.STRUCT, 2);
            Content.ContentCodec.encode(obj.content, output);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[content] is unset!");
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IPackageArticle {
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
                    if (fieldType === thrift.TType.STRUCT) {
                        const value_1: com_gu_storypackage_model_v1.IArticle = com_gu_storypackage_model_v1.ArticleCodec.decode(input);
                        _args.metadata = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.STRUCT) {
                        const value_2: Content.IContent = Content.ContentCodec.decode(input);
                        _args.content = value_2;
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
        if (_args.metadata !== undefined && _args.content !== undefined) {
            return {
                metadata: _args.metadata,
                content: _args.content
            };
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read PackageArticle from input");
        }
    }
};
export class PackageArticle extends thrift.StructLike implements IPackageArticle {
    public metadata: com_gu_storypackage_model_v1.IArticle;
    public content: Content.IContent;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IPackageArticleArgs) {
        super();
        if (args.metadata != null) {
            const value_3: com_gu_storypackage_model_v1.IArticle = new com_gu_storypackage_model_v1.Article(args.metadata);
            this.metadata = value_3;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[metadata] is unset!");
        }
        if (args.content != null) {
            const value_4: Content.IContent = new Content.Content(args.content);
            this.content = value_4;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[content] is unset!");
        }
    }
    public static read(input: thrift.TProtocol): PackageArticle {
        return new PackageArticle(PackageArticleCodec.decode(input));
    }
    public static write(args: IPackageArticleArgs, output: thrift.TProtocol): void {
        return PackageArticleCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return PackageArticleCodec.encode(this, output);
    }
}
