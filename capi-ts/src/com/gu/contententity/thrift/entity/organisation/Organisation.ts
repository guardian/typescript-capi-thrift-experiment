/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.5.0
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 */
import * as thrift from '@creditkarma/thrift-server-core';
export interface IOrganisation {
  name: string;
}
export interface IOrganisationArgs {
  name: string;
}
export const OrganisationCodec: thrift.IStructCodec<
  IOrganisationArgs,
  IOrganisation
> = {
  encode(args: IOrganisationArgs, output: thrift.TProtocol): void {
    const obj = {
      name: args.name,
    };
    output.writeStructBegin('Organisation');
    if (obj.name != null) {
      output.writeFieldBegin('name', thrift.TType.STRING, 1);
      output.writeString(obj.name);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[name] is unset!'
      );
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  },
  decode(input: thrift.TProtocol): IOrganisation {
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
            _args.name = value_1;
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
    if (_args.name !== undefined) {
      return {
        name: _args.name,
      };
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Unable to read Organisation from input'
      );
    }
  },
};
export class Organisation extends thrift.StructLike implements IOrganisation {
  public name: string;
  public readonly _annotations: thrift.IThriftAnnotations = {};
  public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
  constructor(args: IOrganisationArgs) {
    super();
    if (args.name != null) {
      const value_2: string = args.name;
      this.name = value_2;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[name] is unset!'
      );
    }
  }
  public static read(input: thrift.TProtocol): Organisation {
    return new Organisation(OrganisationCodec.decode(input));
  }
  public static write(args: IOrganisationArgs, output: thrift.TProtocol): void {
    return OrganisationCodec.encode(args, output);
  }
  public write(output: thrift.TProtocol): void {
    return OrganisationCodec.encode(this, output);
  }
}
