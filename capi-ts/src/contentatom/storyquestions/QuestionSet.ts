/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.5.0
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 */
import * as thrift from '@creditkarma/thrift-server-core';
import * as __NAMESPACE__ from './.';
export interface IQuestionSet {
  questionSetId: string;
  questionSetTitle: string;
  questions: Array<__NAMESPACE__.IQuestion>;
}
export interface IQuestionSetArgs {
  questionSetId: string;
  questionSetTitle: string;
  questions: Array<__NAMESPACE__.IQuestionArgs>;
}
export const QuestionSetCodec: thrift.IStructCodec<
  IQuestionSetArgs,
  IQuestionSet
> = {
  encode(args: IQuestionSetArgs, output: thrift.TProtocol): void {
    const obj = {
      questionSetId: args.questionSetId,
      questionSetTitle: args.questionSetTitle,
      questions: args.questions,
    };
    output.writeStructBegin('QuestionSet');
    if (obj.questionSetId != null) {
      output.writeFieldBegin('questionSetId', thrift.TType.STRING, 1);
      output.writeString(obj.questionSetId);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[questionSetId] is unset!'
      );
    }
    if (obj.questionSetTitle != null) {
      output.writeFieldBegin('questionSetTitle', thrift.TType.STRING, 2);
      output.writeString(obj.questionSetTitle);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[questionSetTitle] is unset!'
      );
    }
    if (obj.questions != null) {
      output.writeFieldBegin('questions', thrift.TType.LIST, 3);
      output.writeListBegin(thrift.TType.STRUCT, obj.questions.length);
      obj.questions.forEach(
        (value_1: __NAMESPACE__.IQuestionArgs): void => {
          __NAMESPACE__.QuestionCodec.encode(value_1, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[questions] is unset!'
      );
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  },
  decode(input: thrift.TProtocol): IQuestionSet {
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
            _args.questionSetId = value_2;
          } else {
            input.skip(fieldType);
          }
          break;
        case 2:
          if (fieldType === thrift.TType.STRING) {
            const value_3: string = input.readString();
            _args.questionSetTitle = value_3;
          } else {
            input.skip(fieldType);
          }
          break;
        case 3:
          if (fieldType === thrift.TType.LIST) {
            const value_4: Array<__NAMESPACE__.IQuestion> = new Array<
              __NAMESPACE__.IQuestion
            >();
            const metadata_1: thrift.IThriftList = input.readListBegin();
            const size_1: number = metadata_1.size;
            for (let i_1: number = 0; i_1 < size_1; i_1++) {
              const value_5: __NAMESPACE__.IQuestion = __NAMESPACE__.QuestionCodec.decode(
                input
              );
              value_4.push(value_5);
            }
            input.readListEnd();
            _args.questions = value_4;
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
      _args.questionSetId !== undefined &&
      _args.questionSetTitle !== undefined &&
      _args.questions !== undefined
    ) {
      return {
        questionSetId: _args.questionSetId,
        questionSetTitle: _args.questionSetTitle,
        questions: _args.questions,
      };
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Unable to read QuestionSet from input'
      );
    }
  },
};
export class QuestionSet extends thrift.StructLike implements IQuestionSet {
  public questionSetId: string;
  public questionSetTitle: string;
  public questions: Array<__NAMESPACE__.IQuestion>;
  public readonly _annotations: thrift.IThriftAnnotations = {};
  public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
  constructor(args: IQuestionSetArgs) {
    super();
    if (args.questionSetId != null) {
      const value_6: string = args.questionSetId;
      this.questionSetId = value_6;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[questionSetId] is unset!'
      );
    }
    if (args.questionSetTitle != null) {
      const value_7: string = args.questionSetTitle;
      this.questionSetTitle = value_7;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[questionSetTitle] is unset!'
      );
    }
    if (args.questions != null) {
      const value_8: Array<__NAMESPACE__.IQuestion> = new Array<
        __NAMESPACE__.IQuestion
      >();
      args.questions.forEach(
        (value_9: __NAMESPACE__.IQuestionArgs): void => {
          const value_10: __NAMESPACE__.IQuestion = new __NAMESPACE__.Question(
            value_9
          );
          value_8.push(value_10);
        }
      );
      this.questions = value_8;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[questions] is unset!'
      );
    }
  }
  public static read(input: thrift.TProtocol): QuestionSet {
    return new QuestionSet(QuestionSetCodec.decode(input));
  }
  public static write(args: IQuestionSetArgs, output: thrift.TProtocol): void {
    return QuestionSetCodec.encode(args, output);
  }
  public write(output: thrift.TProtocol): void {
    return QuestionSetCodec.encode(this, output);
  }
}
