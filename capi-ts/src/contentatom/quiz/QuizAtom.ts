/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.5.0
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 */
import * as thrift from '@creditkarma/thrift-server-core';
import * as __NAMESPACE__ from './.';
export interface IQuizAtom {
  id: string;
  title: string;
  revealAtEnd: boolean;
  published: boolean;
  quizType: string;
  defaultColumns?: number;
  content: __NAMESPACE__.IQuizContent;
}
export interface IQuizAtomArgs {
  id: string;
  title: string;
  revealAtEnd: boolean;
  published: boolean;
  quizType: string;
  defaultColumns?: number;
  content: __NAMESPACE__.IQuizContentArgs;
}
export const QuizAtomCodec: thrift.IStructCodec<IQuizAtomArgs, IQuizAtom> = {
  encode(args: IQuizAtomArgs, output: thrift.TProtocol): void {
    const obj = {
      id: args.id,
      title: args.title,
      revealAtEnd: args.revealAtEnd,
      published: args.published,
      quizType: args.quizType,
      defaultColumns: args.defaultColumns,
      content: args.content,
    };
    output.writeStructBegin('QuizAtom');
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
    if (obj.title != null) {
      output.writeFieldBegin('title', thrift.TType.STRING, 2);
      output.writeString(obj.title);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[title] is unset!'
      );
    }
    if (obj.revealAtEnd != null) {
      output.writeFieldBegin('revealAtEnd', thrift.TType.BOOL, 6);
      output.writeBool(obj.revealAtEnd);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[revealAtEnd] is unset!'
      );
    }
    if (obj.published != null) {
      output.writeFieldBegin('published', thrift.TType.BOOL, 7);
      output.writeBool(obj.published);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[published] is unset!'
      );
    }
    if (obj.quizType != null) {
      output.writeFieldBegin('quizType', thrift.TType.STRING, 8);
      output.writeString(obj.quizType);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[quizType] is unset!'
      );
    }
    if (obj.defaultColumns != null) {
      output.writeFieldBegin('defaultColumns', thrift.TType.I16, 9);
      output.writeI16(obj.defaultColumns);
      output.writeFieldEnd();
    }
    if (obj.content != null) {
      output.writeFieldBegin('content', thrift.TType.STRUCT, 10);
      __NAMESPACE__.QuizContentCodec.encode(obj.content, output);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[content] is unset!'
      );
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  },
  decode(input: thrift.TProtocol): IQuizAtom {
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
            _args.title = value_2;
          } else {
            input.skip(fieldType);
          }
          break;
        case 6:
          if (fieldType === thrift.TType.BOOL) {
            const value_3: boolean = input.readBool();
            _args.revealAtEnd = value_3;
          } else {
            input.skip(fieldType);
          }
          break;
        case 7:
          if (fieldType === thrift.TType.BOOL) {
            const value_4: boolean = input.readBool();
            _args.published = value_4;
          } else {
            input.skip(fieldType);
          }
          break;
        case 8:
          if (fieldType === thrift.TType.STRING) {
            const value_5: string = input.readString();
            _args.quizType = value_5;
          } else {
            input.skip(fieldType);
          }
          break;
        case 9:
          if (fieldType === thrift.TType.I16) {
            const value_6: number = input.readI16();
            _args.defaultColumns = value_6;
          } else {
            input.skip(fieldType);
          }
          break;
        case 10:
          if (fieldType === thrift.TType.STRUCT) {
            const value_7: __NAMESPACE__.IQuizContent = __NAMESPACE__.QuizContentCodec.decode(
              input
            );
            _args.content = value_7;
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
      _args.title !== undefined &&
      _args.revealAtEnd !== undefined &&
      _args.published !== undefined &&
      _args.quizType !== undefined &&
      _args.content !== undefined
    ) {
      return {
        id: _args.id,
        title: _args.title,
        revealAtEnd: _args.revealAtEnd,
        published: _args.published,
        quizType: _args.quizType,
        defaultColumns: _args.defaultColumns,
        content: _args.content,
      };
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Unable to read QuizAtom from input'
      );
    }
  },
};
export class QuizAtom extends thrift.StructLike implements IQuizAtom {
  public id: string;
  public title: string;
  public revealAtEnd: boolean;
  public published: boolean;
  public quizType: string;
  public defaultColumns?: number;
  public content: __NAMESPACE__.IQuizContent;
  public readonly _annotations: thrift.IThriftAnnotations = {};
  public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
  constructor(args: IQuizAtomArgs) {
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
    if (args.title != null) {
      const value_9: string = args.title;
      this.title = value_9;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[title] is unset!'
      );
    }
    if (args.revealAtEnd != null) {
      const value_10: boolean = args.revealAtEnd;
      this.revealAtEnd = value_10;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[revealAtEnd] is unset!'
      );
    }
    if (args.published != null) {
      const value_11: boolean = args.published;
      this.published = value_11;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[published] is unset!'
      );
    }
    if (args.quizType != null) {
      const value_12: string = args.quizType;
      this.quizType = value_12;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[quizType] is unset!'
      );
    }
    if (args.defaultColumns != null) {
      const value_13: number = args.defaultColumns;
      this.defaultColumns = value_13;
    }
    if (args.content != null) {
      const value_14: __NAMESPACE__.IQuizContent = new __NAMESPACE__.QuizContent(
        args.content
      );
      this.content = value_14;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[content] is unset!'
      );
    }
  }
  public static read(input: thrift.TProtocol): QuizAtom {
    return new QuizAtom(QuizAtomCodec.decode(input));
  }
  public static write(args: IQuizAtomArgs, output: thrift.TProtocol): void {
    return QuizAtomCodec.encode(args, output);
  }
  public write(output: thrift.TProtocol): void {
    return QuizAtomCodec.encode(this, output);
  }
}
