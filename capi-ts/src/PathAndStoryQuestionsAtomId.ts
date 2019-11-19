/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.5.0
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 */
import * as thrift from '@creditkarma/thrift-server-core';
export interface IPathAndStoryQuestionsAtomId {
  path: string;
  storyQuestionsAtomId: string;
}
export interface IPathAndStoryQuestionsAtomIdArgs {
  path: string;
  storyQuestionsAtomId: string;
}
export const PathAndStoryQuestionsAtomIdCodec: thrift.IStructCodec<
  IPathAndStoryQuestionsAtomIdArgs,
  IPathAndStoryQuestionsAtomId
> = {
  encode(
    args: IPathAndStoryQuestionsAtomIdArgs,
    output: thrift.TProtocol
  ): void {
    const obj = {
      path: args.path,
      storyQuestionsAtomId: args.storyQuestionsAtomId,
    };
    output.writeStructBegin('PathAndStoryQuestionsAtomId');
    if (obj.path != null) {
      output.writeFieldBegin('path', thrift.TType.STRING, 1);
      output.writeString(obj.path);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[path] is unset!'
      );
    }
    if (obj.storyQuestionsAtomId != null) {
      output.writeFieldBegin('storyQuestionsAtomId', thrift.TType.STRING, 2);
      output.writeString(obj.storyQuestionsAtomId);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[storyQuestionsAtomId] is unset!'
      );
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  },
  decode(input: thrift.TProtocol): IPathAndStoryQuestionsAtomId {
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
            _args.path = value_1;
          } else {
            input.skip(fieldType);
          }
          break;
        case 2:
          if (fieldType === thrift.TType.STRING) {
            const value_2: string = input.readString();
            _args.storyQuestionsAtomId = value_2;
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
    if (_args.path !== undefined && _args.storyQuestionsAtomId !== undefined) {
      return {
        path: _args.path,
        storyQuestionsAtomId: _args.storyQuestionsAtomId,
      };
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Unable to read PathAndStoryQuestionsAtomId from input'
      );
    }
  },
};
export class PathAndStoryQuestionsAtomId extends thrift.StructLike
  implements IPathAndStoryQuestionsAtomId {
  public path: string;
  public storyQuestionsAtomId: string;
  public readonly _annotations: thrift.IThriftAnnotations = {};
  public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
  constructor(args: IPathAndStoryQuestionsAtomIdArgs) {
    super();
    if (args.path != null) {
      const value_3: string = args.path;
      this.path = value_3;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[path] is unset!'
      );
    }
    if (args.storyQuestionsAtomId != null) {
      const value_4: string = args.storyQuestionsAtomId;
      this.storyQuestionsAtomId = value_4;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[storyQuestionsAtomId] is unset!'
      );
    }
  }
  public static read(input: thrift.TProtocol): PathAndStoryQuestionsAtomId {
    return new PathAndStoryQuestionsAtomId(
      PathAndStoryQuestionsAtomIdCodec.decode(input)
    );
  }
  public static write(
    args: IPathAndStoryQuestionsAtomIdArgs,
    output: thrift.TProtocol
  ): void {
    return PathAndStoryQuestionsAtomIdCodec.encode(args, output);
  }
  public write(output: thrift.TProtocol): void {
    return PathAndStoryQuestionsAtomIdCodec.encode(this, output);
  }
}