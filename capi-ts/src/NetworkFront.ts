/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.5.0
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 */
import * as thrift from '@creditkarma/thrift-server-core';
export interface INetworkFront {
  id: string;
  path: string;
  edition: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
}
export interface INetworkFrontArgs {
  id: string;
  path: string;
  edition: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
}
export const NetworkFrontCodec: thrift.IStructCodec<
  INetworkFrontArgs,
  INetworkFront
> = {
  encode(args: INetworkFrontArgs, output: thrift.TProtocol): void {
    const obj = {
      id: args.id,
      path: args.path,
      edition: args.edition,
      webTitle: args.webTitle,
      webUrl: args.webUrl,
      apiUrl: args.apiUrl,
    };
    output.writeStructBegin('NetworkFront');
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
    if (obj.path != null) {
      output.writeFieldBegin('path', thrift.TType.STRING, 2);
      output.writeString(obj.path);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[path] is unset!'
      );
    }
    if (obj.edition != null) {
      output.writeFieldBegin('edition', thrift.TType.STRING, 3);
      output.writeString(obj.edition);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[edition] is unset!'
      );
    }
    if (obj.webTitle != null) {
      output.writeFieldBegin('webTitle', thrift.TType.STRING, 4);
      output.writeString(obj.webTitle);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[webTitle] is unset!'
      );
    }
    if (obj.webUrl != null) {
      output.writeFieldBegin('webUrl', thrift.TType.STRING, 5);
      output.writeString(obj.webUrl);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[webUrl] is unset!'
      );
    }
    if (obj.apiUrl != null) {
      output.writeFieldBegin('apiUrl', thrift.TType.STRING, 6);
      output.writeString(obj.apiUrl);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[apiUrl] is unset!'
      );
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  },
  decode(input: thrift.TProtocol): INetworkFront {
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
            _args.id = value_1;
          } else {
            input.skip(fieldType);
          }
          break;
        case 2:
          if (fieldType === thrift.TType.STRING) {
            const value_2: string = input.readString();
            _args.path = value_2;
          } else {
            input.skip(fieldType);
          }
          break;
        case 3:
          if (fieldType === thrift.TType.STRING) {
            const value_3: string = input.readString();
            _args.edition = value_3;
          } else {
            input.skip(fieldType);
          }
          break;
        case 4:
          if (fieldType === thrift.TType.STRING) {
            const value_4: string = input.readString();
            _args.webTitle = value_4;
          } else {
            input.skip(fieldType);
          }
          break;
        case 5:
          if (fieldType === thrift.TType.STRING) {
            const value_5: string = input.readString();
            _args.webUrl = value_5;
          } else {
            input.skip(fieldType);
          }
          break;
        case 6:
          if (fieldType === thrift.TType.STRING) {
            const value_6: string = input.readString();
            _args.apiUrl = value_6;
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
      _args.path !== undefined &&
      _args.edition !== undefined &&
      _args.webTitle !== undefined &&
      _args.webUrl !== undefined &&
      _args.apiUrl !== undefined
    ) {
      return {
        id: _args.id,
        path: _args.path,
        edition: _args.edition,
        webTitle: _args.webTitle,
        webUrl: _args.webUrl,
        apiUrl: _args.apiUrl,
      };
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Unable to read NetworkFront from input'
      );
    }
  },
};
export class NetworkFront extends thrift.StructLike implements INetworkFront {
  public id: string;
  public path: string;
  public edition: string;
  public webTitle: string;
  public webUrl: string;
  public apiUrl: string;
  public readonly _annotations: thrift.IThriftAnnotations = {};
  public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
  constructor(args: INetworkFrontArgs) {
    super();
    if (args.id != null) {
      const value_7: string = args.id;
      this.id = value_7;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[id] is unset!'
      );
    }
    if (args.path != null) {
      const value_8: string = args.path;
      this.path = value_8;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[path] is unset!'
      );
    }
    if (args.edition != null) {
      const value_9: string = args.edition;
      this.edition = value_9;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[edition] is unset!'
      );
    }
    if (args.webTitle != null) {
      const value_10: string = args.webTitle;
      this.webTitle = value_10;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[webTitle] is unset!'
      );
    }
    if (args.webUrl != null) {
      const value_11: string = args.webUrl;
      this.webUrl = value_11;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[webUrl] is unset!'
      );
    }
    if (args.apiUrl != null) {
      const value_12: string = args.apiUrl;
      this.apiUrl = value_12;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[apiUrl] is unset!'
      );
    }
  }
  public static read(input: thrift.TProtocol): NetworkFront {
    return new NetworkFront(NetworkFrontCodec.decode(input));
  }
  public static write(args: INetworkFrontArgs, output: thrift.TProtocol): void {
    return NetworkFrontCodec.encode(args, output);
  }
  public write(output: thrift.TProtocol): void {
    return NetworkFrontCodec.encode(this, output);
  }
}
