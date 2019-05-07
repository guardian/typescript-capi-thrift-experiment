/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.5.0
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 */
import * as thrift from '@creditkarma/thrift-server-core';
export interface ITextElementFields {
  html?: string;
}
export interface ITextElementFieldsArgs {
  html?: string;
}
export const TextElementFieldsCodec: thrift.IStructCodec<
  ITextElementFieldsArgs,
  ITextElementFields
> = {
  encode(args: ITextElementFieldsArgs, output: thrift.TProtocol): void {
    const obj = {
      html: args.html,
    };
    output.writeStructBegin('TextElementFields');
    if (obj.html != null) {
      output.writeFieldBegin('html', thrift.TType.STRING, 1);
      output.writeString(obj.html);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  },
  decode(input: thrift.TProtocol): ITextElementFields {
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
            _args.html = value_1;
          } else {
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
      html: _args.html,
    };
  },
};
export class TextElementFields extends thrift.StructLike
  implements ITextElementFields {
  public html?: string;
  public readonly _annotations: thrift.IThriftAnnotations = {};
  public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
  constructor(args: ITextElementFieldsArgs = {}) {
    super();
    if (args.html != null) {
      const value_2: string = args.html;
      this.html = value_2;
    }
  }
  public static read(input: thrift.TProtocol): TextElementFields {
    return new TextElementFields(TextElementFieldsCodec.decode(input));
  }
  public static write(
    args: ITextElementFieldsArgs,
    output: thrift.TProtocol
  ): void {
    return TextElementFieldsCodec.encode(args, output);
  }
  public write(output: thrift.TProtocol): void {
    return TextElementFieldsCodec.encode(this, output);
  }
}
