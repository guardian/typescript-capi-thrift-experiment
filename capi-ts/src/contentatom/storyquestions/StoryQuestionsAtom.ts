/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.5.0
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 */
import * as thrift from '@creditkarma/thrift-server-core';
import * as com_gu_contentatom_thrift from './../../com/gu/contentatom/thrift';
import * as __NAMESPACE__ from './.';
export interface IStoryQuestionsAtom {
  relatedStoryId: string;
  relatedStoryLinkType: __NAMESPACE__.RelatedStoryLinkType;
  title: string;
  editorialQuestions?: Array<__NAMESPACE__.IQuestionSet>;
  userQuestions?: Array<__NAMESPACE__.IQuestionSet>;
  notifications?: com_gu_contentatom_thrift.INotificationProviders;
  closeDate?: thrift.Int64;
}
export interface IStoryQuestionsAtomArgs {
  relatedStoryId: string;
  relatedStoryLinkType: __NAMESPACE__.RelatedStoryLinkType;
  title: string;
  editorialQuestions?: Array<__NAMESPACE__.IQuestionSetArgs>;
  userQuestions?: Array<__NAMESPACE__.IQuestionSetArgs>;
  notifications?: com_gu_contentatom_thrift.INotificationProvidersArgs;
  closeDate?: number | string | thrift.Int64;
}
export const StoryQuestionsAtomCodec: thrift.IStructCodec<
  IStoryQuestionsAtomArgs,
  IStoryQuestionsAtom
> = {
  encode(args: IStoryQuestionsAtomArgs, output: thrift.TProtocol): void {
    const obj = {
      relatedStoryId: args.relatedStoryId,
      relatedStoryLinkType: args.relatedStoryLinkType,
      title: args.title,
      editorialQuestions: args.editorialQuestions,
      userQuestions: args.userQuestions,
      notifications: args.notifications,
      closeDate:
        typeof args.closeDate === 'number'
          ? new thrift.Int64(args.closeDate)
          : typeof args.closeDate === 'string'
          ? thrift.Int64.fromDecimalString(args.closeDate)
          : args.closeDate,
    };
    output.writeStructBegin('StoryQuestionsAtom');
    if (obj.relatedStoryId != null) {
      output.writeFieldBegin('relatedStoryId', thrift.TType.STRING, 1);
      output.writeString(obj.relatedStoryId);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[relatedStoryId] is unset!'
      );
    }
    if (obj.relatedStoryLinkType != null) {
      output.writeFieldBegin('relatedStoryLinkType', thrift.TType.I32, 2);
      output.writeI32(obj.relatedStoryLinkType);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[relatedStoryLinkType] is unset!'
      );
    }
    if (obj.title != null) {
      output.writeFieldBegin('title', thrift.TType.STRING, 3);
      output.writeString(obj.title);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[title] is unset!'
      );
    }
    if (obj.editorialQuestions != null) {
      output.writeFieldBegin('editorialQuestions', thrift.TType.LIST, 4);
      output.writeListBegin(thrift.TType.STRUCT, obj.editorialQuestions.length);
      obj.editorialQuestions.forEach(
        (value_1: __NAMESPACE__.IQuestionSetArgs): void => {
          __NAMESPACE__.QuestionSetCodec.encode(value_1, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (obj.userQuestions != null) {
      output.writeFieldBegin('userQuestions', thrift.TType.LIST, 5);
      output.writeListBegin(thrift.TType.STRUCT, obj.userQuestions.length);
      obj.userQuestions.forEach(
        (value_2: __NAMESPACE__.IQuestionSetArgs): void => {
          __NAMESPACE__.QuestionSetCodec.encode(value_2, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (obj.notifications != null) {
      output.writeFieldBegin('notifications', thrift.TType.STRUCT, 6);
      com_gu_contentatom_thrift.NotificationProvidersCodec.encode(
        obj.notifications,
        output
      );
      output.writeFieldEnd();
    }
    if (obj.closeDate != null) {
      output.writeFieldBegin('closeDate', thrift.TType.I64, 7);
      output.writeI64(
        typeof obj.closeDate === 'number'
          ? new thrift.Int64(obj.closeDate)
          : typeof obj.closeDate === 'string'
          ? thrift.Int64.fromDecimalString(obj.closeDate)
          : obj.closeDate
      );
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  },
  decode(input: thrift.TProtocol): IStoryQuestionsAtom {
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
            _args.relatedStoryId = value_3;
          } else {
            input.skip(fieldType);
          }
          break;
        case 2:
          if (fieldType === thrift.TType.I32) {
            const value_4: __NAMESPACE__.RelatedStoryLinkType = input.readI32();
            _args.relatedStoryLinkType = value_4;
          } else {
            input.skip(fieldType);
          }
          break;
        case 3:
          if (fieldType === thrift.TType.STRING) {
            const value_5: string = input.readString();
            _args.title = value_5;
          } else {
            input.skip(fieldType);
          }
          break;
        case 4:
          if (fieldType === thrift.TType.LIST) {
            const value_6: Array<__NAMESPACE__.IQuestionSet> = new Array<
              __NAMESPACE__.IQuestionSet
            >();
            const metadata_1: thrift.IThriftList = input.readListBegin();
            const size_1: number = metadata_1.size;
            for (let i_1: number = 0; i_1 < size_1; i_1++) {
              const value_7: __NAMESPACE__.IQuestionSet = __NAMESPACE__.QuestionSetCodec.decode(
                input
              );
              value_6.push(value_7);
            }
            input.readListEnd();
            _args.editorialQuestions = value_6;
          } else {
            input.skip(fieldType);
          }
          break;
        case 5:
          if (fieldType === thrift.TType.LIST) {
            const value_8: Array<__NAMESPACE__.IQuestionSet> = new Array<
              __NAMESPACE__.IQuestionSet
            >();
            const metadata_2: thrift.IThriftList = input.readListBegin();
            const size_2: number = metadata_2.size;
            for (let i_2: number = 0; i_2 < size_2; i_2++) {
              const value_9: __NAMESPACE__.IQuestionSet = __NAMESPACE__.QuestionSetCodec.decode(
                input
              );
              value_8.push(value_9);
            }
            input.readListEnd();
            _args.userQuestions = value_8;
          } else {
            input.skip(fieldType);
          }
          break;
        case 6:
          if (fieldType === thrift.TType.STRUCT) {
            const value_10: com_gu_contentatom_thrift.INotificationProviders = com_gu_contentatom_thrift.NotificationProvidersCodec.decode(
              input
            );
            _args.notifications = value_10;
          } else {
            input.skip(fieldType);
          }
          break;
        case 7:
          if (fieldType === thrift.TType.I64) {
            const value_11: thrift.Int64 = input.readI64();
            _args.closeDate = value_11;
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
      _args.relatedStoryId !== undefined &&
      _args.relatedStoryLinkType !== undefined &&
      _args.title !== undefined
    ) {
      return {
        relatedStoryId: _args.relatedStoryId,
        relatedStoryLinkType: _args.relatedStoryLinkType,
        title: _args.title,
        editorialQuestions: _args.editorialQuestions,
        userQuestions: _args.userQuestions,
        notifications: _args.notifications,
        closeDate: _args.closeDate,
      };
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Unable to read StoryQuestionsAtom from input'
      );
    }
  },
};
export class StoryQuestionsAtom extends thrift.StructLike
  implements IStoryQuestionsAtom {
  public relatedStoryId: string;
  public relatedStoryLinkType: __NAMESPACE__.RelatedStoryLinkType;
  public title: string;
  public editorialQuestions?: Array<__NAMESPACE__.IQuestionSet>;
  public userQuestions?: Array<__NAMESPACE__.IQuestionSet>;
  public notifications?: com_gu_contentatom_thrift.INotificationProviders;
  public closeDate?: thrift.Int64;
  public readonly _annotations: thrift.IThriftAnnotations = {};
  public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
  constructor(args: IStoryQuestionsAtomArgs) {
    super();
    if (args.relatedStoryId != null) {
      const value_12: string = args.relatedStoryId;
      this.relatedStoryId = value_12;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[relatedStoryId] is unset!'
      );
    }
    if (args.relatedStoryLinkType != null) {
      const value_13: __NAMESPACE__.RelatedStoryLinkType =
        args.relatedStoryLinkType;
      this.relatedStoryLinkType = value_13;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[relatedStoryLinkType] is unset!'
      );
    }
    if (args.title != null) {
      const value_14: string = args.title;
      this.title = value_14;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[title] is unset!'
      );
    }
    if (args.editorialQuestions != null) {
      const value_15: Array<__NAMESPACE__.IQuestionSet> = new Array<
        __NAMESPACE__.IQuestionSet
      >();
      args.editorialQuestions.forEach(
        (value_19: __NAMESPACE__.IQuestionSetArgs): void => {
          const value_20: __NAMESPACE__.IQuestionSet = new __NAMESPACE__.QuestionSet(
            value_19
          );
          value_15.push(value_20);
        }
      );
      this.editorialQuestions = value_15;
    }
    if (args.userQuestions != null) {
      const value_16: Array<__NAMESPACE__.IQuestionSet> = new Array<
        __NAMESPACE__.IQuestionSet
      >();
      args.userQuestions.forEach(
        (value_21: __NAMESPACE__.IQuestionSetArgs): void => {
          const value_22: __NAMESPACE__.IQuestionSet = new __NAMESPACE__.QuestionSet(
            value_21
          );
          value_16.push(value_22);
        }
      );
      this.userQuestions = value_16;
    }
    if (args.notifications != null) {
      const value_17: com_gu_contentatom_thrift.INotificationProviders = new com_gu_contentatom_thrift.NotificationProviders(
        args.notifications
      );
      this.notifications = value_17;
    }
    if (args.closeDate != null) {
      const value_18: thrift.Int64 =
        typeof args.closeDate === 'number'
          ? new thrift.Int64(args.closeDate)
          : typeof args.closeDate === 'string'
          ? thrift.Int64.fromDecimalString(args.closeDate)
          : args.closeDate;
      this.closeDate = value_18;
    }
  }
  public static read(input: thrift.TProtocol): StoryQuestionsAtom {
    return new StoryQuestionsAtom(StoryQuestionsAtomCodec.decode(input));
  }
  public static write(
    args: IStoryQuestionsAtomArgs,
    output: thrift.TProtocol
  ): void {
    return StoryQuestionsAtomCodec.encode(args, output);
  }
  public write(output: thrift.TProtocol): void {
    return StoryQuestionsAtomCodec.encode(this, output);
  }
}
