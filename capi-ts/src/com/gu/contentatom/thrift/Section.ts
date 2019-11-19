/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.5.0
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 */
import * as thrift from '@creditkarma/thrift-server-core';
export interface ISection {
  id: thrift.Int64;
  name?: string;
  pathPrefix?: string;
  slug?: string;
}
export interface ISectionArgs {
  id: number | string | thrift.Int64;
  name?: string;
  pathPrefix?: string;
  slug?: string;
}
export const SectionCodec: thrift.IStructCodec<ISectionArgs, ISection> = {
  encode(args: ISectionArgs, output: thrift.TProtocol): void {
    const obj = {
      id:
        typeof args.id === 'number'
          ? new thrift.Int64(args.id)
          : typeof args.id === 'string'
          ? thrift.Int64.fromDecimalString(args.id)
          : args.id,
      name: args.name,
      pathPrefix: args.pathPrefix,
      slug: args.slug,
    };
    output.writeStructBegin('Section');
    if (obj.id != null) {
      output.writeFieldBegin('id', thrift.TType.I64, 1);
      output.writeI64(
        typeof obj.id === 'number'
          ? new thrift.Int64(obj.id)
          : typeof obj.id === 'string'
          ? thrift.Int64.fromDecimalString(obj.id)
          : obj.id
      );
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[id] is unset!'
      );
    }
    if (obj.name != null) {
      output.writeFieldBegin('name', thrift.TType.STRING, 2);
      output.writeString(obj.name);
      output.writeFieldEnd();
    }
    if (obj.pathPrefix != null) {
      output.writeFieldBegin('pathPrefix', thrift.TType.STRING, 3);
      output.writeString(obj.pathPrefix);
      output.writeFieldEnd();
    }
    if (obj.slug != null) {
      output.writeFieldBegin('slug', thrift.TType.STRING, 4);
      output.writeString(obj.slug);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  },
  decode(input: thrift.TProtocol): ISection {
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
          } else {
            input.skip(fieldType);
          }
          break;
        case 2:
          if (fieldType === thrift.TType.STRING) {
            const value_2: string = input.readString();
            _args.name = value_2;
          } else {
            input.skip(fieldType);
          }
          break;
        case 3:
          if (fieldType === thrift.TType.STRING) {
            const value_3: string = input.readString();
            _args.pathPrefix = value_3;
          } else {
            input.skip(fieldType);
          }
          break;
        case 4:
          if (fieldType === thrift.TType.STRING) {
            const value_4: string = input.readString();
            _args.slug = value_4;
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
    if (_args.id !== undefined) {
      return {
        id: _args.id,
        name: _args.name,
        pathPrefix: _args.pathPrefix,
        slug: _args.slug,
      };
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Unable to read Section from input'
      );
    }
  },
};
export class Section extends thrift.StructLike implements ISection {
  public id: thrift.Int64;
  public name?: string;
  public pathPrefix?: string;
  public slug?: string;
  public readonly _annotations: thrift.IThriftAnnotations = {};
  public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
  constructor(args: ISectionArgs) {
    super();
    if (args.id != null) {
      const value_5: thrift.Int64 =
        typeof args.id === 'number'
          ? new thrift.Int64(args.id)
          : typeof args.id === 'string'
          ? thrift.Int64.fromDecimalString(args.id)
          : args.id;
      this.id = value_5;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[id] is unset!'
      );
    }
    if (args.name != null) {
      const value_6: string = args.name;
      this.name = value_6;
    }
    if (args.pathPrefix != null) {
      const value_7: string = args.pathPrefix;
      this.pathPrefix = value_7;
    }
    if (args.slug != null) {
      const value_8: string = args.slug;
      this.slug = value_8;
    }
  }
  public static read(input: thrift.TProtocol): Section {
    return new Section(SectionCodec.decode(input));
  }
  public static write(args: ISectionArgs, output: thrift.TProtocol): void {
    return SectionCodec.encode(args, output);
  }
  public write(output: thrift.TProtocol): void {
    return SectionCodec.encode(this, output);
  }
}