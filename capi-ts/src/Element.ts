/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.5.0
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 */
import * as thrift from '@creditkarma/thrift-server-core';
import * as __NAMESPACE__ from './.';
export interface IElement {
  id: string;
  relation: string;
  type: __NAMESPACE__.ElementType;
  galleryIndex?: number;
  assets: Array<__NAMESPACE__.IAsset>;
}
export interface IElementArgs {
  id: string;
  relation: string;
  type: __NAMESPACE__.ElementType;
  galleryIndex?: number;
  assets: Array<__NAMESPACE__.IAssetArgs>;
}
export const ElementCodec: thrift.IStructCodec<IElementArgs, IElement> = {
  encode(args: IElementArgs, output: thrift.TProtocol): void {
    const obj = {
      id: args.id,
      relation: args.relation,
      type: args.type,
      galleryIndex: args.galleryIndex,
      assets: args.assets,
    };
    output.writeStructBegin('Element');
    if (obj.id != null) {
      output.writeFieldBegin('id', thrift.TType.STRING, 1);
      output.writeString(obj.id);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[id] is unset!'
      );
    }
    if (obj.relation != null) {
      output.writeFieldBegin('relation', thrift.TType.STRING, 2);
      output.writeString(obj.relation);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[relation] is unset!'
      );
    }
    if (obj.type != null) {
      output.writeFieldBegin('type', thrift.TType.I32, 3);
      output.writeI32(obj.type);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[type] is unset!'
      );
    }
    if (obj.galleryIndex != null) {
      output.writeFieldBegin('galleryIndex', thrift.TType.I32, 4);
      output.writeI32(obj.galleryIndex);
      output.writeFieldEnd();
    }
    if (obj.assets != null) {
      output.writeFieldBegin('assets', thrift.TType.LIST, 5);
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
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  },
  decode(input: thrift.TProtocol): IElement {
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
            _args.id = value_2;
          } else {
            input.skip(fieldType);
          }
          break;
        case 2:
          if (fieldType === thrift.TType.STRING) {
            const value_3: string = input.readString();
            _args.relation = value_3;
          } else {
            input.skip(fieldType);
          }
          break;
        case 3:
          if (fieldType === thrift.TType.I32) {
            const value_4: __NAMESPACE__.ElementType = input.readI32();
            _args.type = value_4;
          } else {
            input.skip(fieldType);
          }
          break;
        case 4:
          if (fieldType === thrift.TType.I32) {
            const value_5: number = input.readI32();
            _args.galleryIndex = value_5;
          } else {
            input.skip(fieldType);
          }
          break;
        case 5:
          if (fieldType === thrift.TType.LIST) {
            const value_6: Array<__NAMESPACE__.IAsset> = new Array<
              __NAMESPACE__.IAsset
            >();
            const metadata_1: thrift.IThriftList = input.readListBegin();
            const size_1: number = metadata_1.size;
            for (let i_1: number = 0; i_1 < size_1; i_1++) {
              const value_7: __NAMESPACE__.IAsset = __NAMESPACE__.AssetCodec.decode(
                input
              );
              value_6.push(value_7);
            }
            input.readListEnd();
            _args.assets = value_6;
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
      _args.id !== undefined &&
      _args.relation !== undefined &&
      _args.type !== undefined &&
      _args.assets !== undefined
    ) {
      return {
        id: _args.id,
        relation: _args.relation,
        type: _args.type,
        galleryIndex: _args.galleryIndex,
        assets: _args.assets,
      };
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Unable to read Element from input'
      );
    }
  },
};
export class Element extends thrift.StructLike implements IElement {
  public id: string;
  public relation: string;
  public type: __NAMESPACE__.ElementType;
  public galleryIndex?: number;
  public assets: Array<__NAMESPACE__.IAsset>;
  public readonly _annotations: thrift.IThriftAnnotations = {};
  public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
  constructor(args: IElementArgs) {
    super();
    if (args.id != null) {
      const value_8: string = args.id;
      this.id = value_8;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[id] is unset!'
      );
    }
    if (args.relation != null) {
      const value_9: string = args.relation;
      this.relation = value_9;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[relation] is unset!'
      );
    }
    if (args.type != null) {
      const value_10: __NAMESPACE__.ElementType = args.type;
      this.type = value_10;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[type] is unset!'
      );
    }
    if (args.galleryIndex != null) {
      const value_11: number = args.galleryIndex;
      this.galleryIndex = value_11;
    }
    if (args.assets != null) {
      const value_12: Array<__NAMESPACE__.IAsset> = new Array<
        __NAMESPACE__.IAsset
      >();
      args.assets.forEach(
        (value_13: __NAMESPACE__.IAssetArgs): void => {
          const value_14: __NAMESPACE__.IAsset = new __NAMESPACE__.Asset(
            value_13
          );
          value_12.push(value_14);
        }
      );
      this.assets = value_12;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[assets] is unset!'
      );
    }
  }
  public static read(input: thrift.TProtocol): Element {
    return new Element(ElementCodec.decode(input));
  }
  public static write(args: IElementArgs, output: thrift.TProtocol): void {
    return ElementCodec.encode(args, output);
  }
  public write(output: thrift.TProtocol): void {
    return ElementCodec.encode(this, output);
  }
}
