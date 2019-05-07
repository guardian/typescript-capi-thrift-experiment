/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.5.0
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 */
import * as thrift from '@creditkarma/thrift-server-core';
import * as __NAMESPACE__ from './.';
export interface ITimelineAtom {
  typeLabel?: string;
  events: Array<__NAMESPACE__.ITimelineItem>;
  description?: string;
}
export interface ITimelineAtomArgs {
  typeLabel?: string;
  events: Array<__NAMESPACE__.ITimelineItemArgs>;
  description?: string;
}
export const TimelineAtomCodec: thrift.IStructCodec<
  ITimelineAtomArgs,
  ITimelineAtom
> = {
  encode(args: ITimelineAtomArgs, output: thrift.TProtocol): void {
    const obj = {
      typeLabel: args.typeLabel,
      events: args.events,
      description: args.description,
    };
    output.writeStructBegin('TimelineAtom');
    if (obj.typeLabel != null) {
      output.writeFieldBegin('typeLabel', thrift.TType.STRING, 1);
      output.writeString(obj.typeLabel);
      output.writeFieldEnd();
    }
    if (obj.events != null) {
      output.writeFieldBegin('events', thrift.TType.LIST, 3);
      output.writeListBegin(thrift.TType.STRUCT, obj.events.length);
      obj.events.forEach(
        (value_1: __NAMESPACE__.ITimelineItemArgs): void => {
          __NAMESPACE__.TimelineItemCodec.encode(value_1, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[events] is unset!'
      );
    }
    if (obj.description != null) {
      output.writeFieldBegin('description', thrift.TType.STRING, 4);
      output.writeString(obj.description);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  },
  decode(input: thrift.TProtocol): ITimelineAtom {
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
            _args.typeLabel = value_2;
          } else {
            input.skip(fieldType);
          }
          break;
        case 3:
          if (fieldType === thrift.TType.LIST) {
            const value_3: Array<__NAMESPACE__.ITimelineItem> = new Array<
              __NAMESPACE__.ITimelineItem
            >();
            const metadata_1: thrift.IThriftList = input.readListBegin();
            const size_1: number = metadata_1.size;
            for (let i_1: number = 0; i_1 < size_1; i_1++) {
              const value_4: __NAMESPACE__.ITimelineItem = __NAMESPACE__.TimelineItemCodec.decode(
                input
              );
              value_3.push(value_4);
            }
            input.readListEnd();
            _args.events = value_3;
          } else {
            input.skip(fieldType);
          }
          break;
        case 4:
          if (fieldType === thrift.TType.STRING) {
            const value_5: string = input.readString();
            _args.description = value_5;
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
    if (_args.events !== undefined) {
      return {
        typeLabel: _args.typeLabel,
        events: _args.events,
        description: _args.description,
      };
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Unable to read TimelineAtom from input'
      );
    }
  },
};
export class TimelineAtom extends thrift.StructLike implements ITimelineAtom {
  public typeLabel?: string;
  public events: Array<__NAMESPACE__.ITimelineItem>;
  public description?: string;
  public readonly _annotations: thrift.IThriftAnnotations = {};
  public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
  constructor(args: ITimelineAtomArgs) {
    super();
    if (args.typeLabel != null) {
      const value_6: string = args.typeLabel;
      this.typeLabel = value_6;
    }
    if (args.events != null) {
      const value_7: Array<__NAMESPACE__.ITimelineItem> = new Array<
        __NAMESPACE__.ITimelineItem
      >();
      args.events.forEach(
        (value_9: __NAMESPACE__.ITimelineItemArgs): void => {
          const value_10: __NAMESPACE__.ITimelineItem = new __NAMESPACE__.TimelineItem(
            value_9
          );
          value_7.push(value_10);
        }
      );
      this.events = value_7;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[events] is unset!'
      );
    }
    if (args.description != null) {
      const value_8: string = args.description;
      this.description = value_8;
    }
  }
  public static read(input: thrift.TProtocol): TimelineAtom {
    return new TimelineAtom(TimelineAtomCodec.decode(input));
  }
  public static write(args: ITimelineAtomArgs, output: thrift.TProtocol): void {
    return TimelineAtomCodec.encode(args, output);
  }
  public write(output: thrift.TProtocol): void {
    return TimelineAtomCodec.encode(this, output);
  }
}
