/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.5.0
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 */
import * as thrift from '@creditkarma/thrift-server-core';
import * as __NAMESPACE__ from './.';
export interface IAnswer {
  answerText: string;
  assets: Array<__NAMESPACE__.IAsset>;
  weight: number;
  revealText?: string;
  id: string;
  bucket?: Array<string>;
}
export interface IAnswerArgs {
  answerText: string;
  assets: Array<__NAMESPACE__.IAssetArgs>;
  weight: number;
  revealText?: string;
  id: string;
  bucket?: Array<string>;
}
export const AnswerCodec: thrift.IStructCodec<IAnswerArgs, IAnswer> = {
  encode(args: IAnswerArgs, output: thrift.TProtocol): void {
    const obj = {
      answerText: args.answerText,
      assets: args.assets,
      weight: args.weight,
      revealText: args.revealText,
      id: args.id,
      bucket: args.bucket,
    };
    output.writeStructBegin('Answer');
    if (obj.answerText != null) {
      output.writeFieldBegin('answerText', thrift.TType.STRING, 1);
      output.writeString(obj.answerText);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[answerText] is unset!'
      );
    }
    if (obj.assets != null) {
      output.writeFieldBegin('assets', thrift.TType.LIST, 2);
      output.writeListBegin(thrift.TType.STRUCT, obj.assets.length);
      obj.assets.forEach(
        (value_1: __NAMESPACE__.IAssetArgs): void => {
          __NAMESPACE__.AssetCodec.encode(value_1, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[assets] is unset!'
      );
    }
    if (obj.weight != null) {
      output.writeFieldBegin('weight', thrift.TType.I16, 3);
      output.writeI16(obj.weight);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[weight] is unset!'
      );
    }
    if (obj.revealText != null) {
      output.writeFieldBegin('revealText', thrift.TType.STRING, 4);
      output.writeString(obj.revealText);
      output.writeFieldEnd();
    }
    if (obj.id != null) {
      output.writeFieldBegin('id', thrift.TType.STRING, 5);
      output.writeString(obj.id);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[id] is unset!'
      );
    }
    if (obj.bucket != null) {
      output.writeFieldBegin('bucket', thrift.TType.LIST, 6);
      output.writeListBegin(thrift.TType.STRING, obj.bucket.length);
      obj.bucket.forEach(
        (value_2: string): void => {
          output.writeString(value_2);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  },
  decode(input: thrift.TProtocol): IAnswer {
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
            const value_3: string = input.readString();
            _args.answerText = value_3;
          } else {
            input.skip(fieldType);
          }
          break;
        case 2:
          if (fieldType === thrift.TType.LIST) {
            const value_4: Array<__NAMESPACE__.IAsset> = new Array<
              __NAMESPACE__.IAsset
            >();
            const metadata_1: thrift.IThriftList = input.readListBegin();
            const size_1: number = metadata_1.size;
            for (let i_1: number = 0; i_1 < size_1; i_1++) {
              const value_5: __NAMESPACE__.IAsset = __NAMESPACE__.AssetCodec.decode(
                input
              );
              value_4.push(value_5);
            }
            input.readListEnd();
            _args.assets = value_4;
          } else {
            input.skip(fieldType);
          }
          break;
        case 3:
          if (fieldType === thrift.TType.I16) {
            const value_6: number = input.readI16();
            _args.weight = value_6;
          } else {
            input.skip(fieldType);
          }
          break;
        case 4:
          if (fieldType === thrift.TType.STRING) {
            const value_7: string = input.readString();
            _args.revealText = value_7;
          } else {
            input.skip(fieldType);
          }
          break;
        case 5:
          if (fieldType === thrift.TType.STRING) {
            const value_8: string = input.readString();
            _args.id = value_8;
          } else {
            input.skip(fieldType);
          }
          break;
        case 6:
          if (fieldType === thrift.TType.LIST) {
            const value_9: Array<string> = new Array<string>();
            const metadata_2: thrift.IThriftList = input.readListBegin();
            const size_2: number = metadata_2.size;
            for (let i_2: number = 0; i_2 < size_2; i_2++) {
              const value_10: string = input.readString();
              value_9.push(value_10);
            }
            input.readListEnd();
            _args.bucket = value_9;
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
    if (
      _args.answerText !== undefined &&
      _args.assets !== undefined &&
      _args.weight !== undefined &&
      _args.id !== undefined
    ) {
      return {
        answerText: _args.answerText,
        assets: _args.assets,
        weight: _args.weight,
        revealText: _args.revealText,
        id: _args.id,
        bucket: _args.bucket,
      };
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Unable to read Answer from input'
      );
    }
  },
};
export class Answer extends thrift.StructLike implements IAnswer {
  public answerText: string;
  public assets: Array<__NAMESPACE__.IAsset>;
  public weight: number;
  public revealText?: string;
  public id: string;
  public bucket?: Array<string>;
  public readonly _annotations: thrift.IThriftAnnotations = {};
  public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
  constructor(args: IAnswerArgs) {
    super();
    if (args.answerText != null) {
      const value_11: string = args.answerText;
      this.answerText = value_11;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[answerText] is unset!'
      );
    }
    if (args.assets != null) {
      const value_12: Array<__NAMESPACE__.IAsset> = new Array<
        __NAMESPACE__.IAsset
      >();
      args.assets.forEach(
        (value_17: __NAMESPACE__.IAssetArgs): void => {
          const value_18: __NAMESPACE__.IAsset = new __NAMESPACE__.Asset(
            value_17
          );
          value_12.push(value_18);
        }
      );
      this.assets = value_12;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[assets] is unset!'
      );
    }
    if (args.weight != null) {
      const value_13: number = args.weight;
      this.weight = value_13;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[weight] is unset!'
      );
    }
    if (args.revealText != null) {
      const value_14: string = args.revealText;
      this.revealText = value_14;
    }
    if (args.id != null) {
      const value_15: string = args.id;
      this.id = value_15;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[id] is unset!'
      );
    }
    if (args.bucket != null) {
      const value_16: Array<string> = new Array<string>();
      args.bucket.forEach(
        (value_19: string): void => {
          const value_20: string = value_19;
          value_16.push(value_20);
        }
      );
      this.bucket = value_16;
    }
  }
  public static read(input: thrift.TProtocol): Answer {
    return new Answer(AnswerCodec.decode(input));
  }
  public static write(args: IAnswerArgs, output: thrift.TProtocol): void {
    return AnswerCodec.encode(args, output);
  }
  public write(output: thrift.TProtocol): void {
    return AnswerCodec.encode(this, output);
  }
}