/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.5.0
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 */
import * as thrift from '@creditkarma/thrift-server-core';
export interface IAsset {
  type: string;
  data: string;
}
export interface IAssetArgs {
  type: string;
  data: string;
}
export const AssetCodec: thrift.IStructCodec<IAssetArgs, IAsset> = {
  encode(args: IAssetArgs, output: thrift.TProtocol): void {
    const obj = {
      type: args.type,
      data: args.data,
    };
    output.writeStructBegin('Asset');
    if (obj.type != null) {
      output.writeFieldBegin('type', thrift.TType.STRING, 1);
      output.writeString(obj.type);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[type] is unset!'
      );
    }
    if (obj.data != null) {
      output.writeFieldBegin('data', thrift.TType.STRING, 2);
      output.writeString(obj.data);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[data] is unset!'
      );
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  },
  decode(input: thrift.TProtocol): IAsset {
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
            _args.type = value_1;
          } else {
            input.skip(fieldType);
          }
          break;
        case 2:
          if (fieldType === thrift.TType.STRING) {
            const value_2: string = input.readString();
            _args.data = value_2;
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
    if (_args.type !== undefined && _args.data !== undefined) {
      return {
        type: _args.type,
        data: _args.data,
      };
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Unable to read Asset from input'
      );
    }
  },
};
export class Asset extends thrift.StructLike implements IAsset {
  public type: string;
  public data: string;
  public readonly _annotations: thrift.IThriftAnnotations = {};
  public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
  constructor(args: IAssetArgs) {
    super();
    if (args.type != null) {
      const value_3: string = args.type;
      this.type = value_3;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[type] is unset!'
      );
    }
    if (args.data != null) {
      const value_4: string = args.data;
      this.data = value_4;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[data] is unset!'
      );
    }
  }
  public static read(input: thrift.TProtocol): Asset {
    return new Asset(AssetCodec.decode(input));
  }
  public static write(args: IAssetArgs, output: thrift.TProtocol): void {
    return AssetCodec.encode(args, output);
  }
  public write(output: thrift.TProtocol): void {
    return AssetCodec.encode(this, output);
  }
}
