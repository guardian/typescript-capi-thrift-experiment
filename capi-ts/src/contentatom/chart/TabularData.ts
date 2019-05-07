/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.5.0
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 */
import * as thrift from '@creditkarma/thrift-server-core';
import * as __NAMESPACE__ from './.';
export interface ITabularData {
  rowHeadersType: __NAMESPACE__.RowType;
  columnHeaders: Array<string>;
  rowHeaders: Array<string>;
  rowData: Array<Array<number>>;
}
export interface ITabularDataArgs {
  rowHeadersType: __NAMESPACE__.RowType;
  columnHeaders: Array<string>;
  rowHeaders: Array<string>;
  rowData: Array<Array<number>>;
}
export const TabularDataCodec: thrift.IStructCodec<
  ITabularDataArgs,
  ITabularData
> = {
  encode(args: ITabularDataArgs, output: thrift.TProtocol): void {
    const obj = {
      rowHeadersType: args.rowHeadersType,
      columnHeaders: args.columnHeaders,
      rowHeaders: args.rowHeaders,
      rowData: args.rowData,
    };
    output.writeStructBegin('TabularData');
    if (obj.rowHeadersType != null) {
      output.writeFieldBegin('rowHeadersType', thrift.TType.I32, 1);
      output.writeI32(obj.rowHeadersType);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[rowHeadersType] is unset!'
      );
    }
    if (obj.columnHeaders != null) {
      output.writeFieldBegin('columnHeaders', thrift.TType.LIST, 2);
      output.writeListBegin(thrift.TType.STRING, obj.columnHeaders.length);
      obj.columnHeaders.forEach(
        (value_1: string): void => {
          output.writeString(value_1);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[columnHeaders] is unset!'
      );
    }
    if (obj.rowHeaders != null) {
      output.writeFieldBegin('rowHeaders', thrift.TType.LIST, 3);
      output.writeListBegin(thrift.TType.STRING, obj.rowHeaders.length);
      obj.rowHeaders.forEach(
        (value_2: string): void => {
          output.writeString(value_2);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[rowHeaders] is unset!'
      );
    }
    if (obj.rowData != null) {
      output.writeFieldBegin('rowData', thrift.TType.LIST, 4);
      output.writeListBegin(thrift.TType.LIST, obj.rowData.length);
      obj.rowData.forEach(
        (value_3: Array<number>): void => {
          output.writeListBegin(thrift.TType.DOUBLE, value_3.length);
          value_3.forEach(
            (value_4: number): void => {
              output.writeDouble(value_4);
            }
          );
          output.writeListEnd();
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[rowData] is unset!'
      );
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  },
  decode(input: thrift.TProtocol): ITabularData {
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
          if (fieldType === thrift.TType.I32) {
            const value_5: __NAMESPACE__.RowType = input.readI32();
            _args.rowHeadersType = value_5;
          } else {
            input.skip(fieldType);
          }
          break;
        case 2:
          if (fieldType === thrift.TType.LIST) {
            const value_6: Array<string> = new Array<string>();
            const metadata_1: thrift.IThriftList = input.readListBegin();
            const size_1: number = metadata_1.size;
            for (let i_1: number = 0; i_1 < size_1; i_1++) {
              const value_7: string = input.readString();
              value_6.push(value_7);
            }
            input.readListEnd();
            _args.columnHeaders = value_6;
          } else {
            input.skip(fieldType);
          }
          break;
        case 3:
          if (fieldType === thrift.TType.LIST) {
            const value_8: Array<string> = new Array<string>();
            const metadata_2: thrift.IThriftList = input.readListBegin();
            const size_2: number = metadata_2.size;
            for (let i_2: number = 0; i_2 < size_2; i_2++) {
              const value_9: string = input.readString();
              value_8.push(value_9);
            }
            input.readListEnd();
            _args.rowHeaders = value_8;
          } else {
            input.skip(fieldType);
          }
          break;
        case 4:
          if (fieldType === thrift.TType.LIST) {
            const value_10: Array<Array<number>> = new Array<Array<number>>();
            const metadata_3: thrift.IThriftList = input.readListBegin();
            const size_3: number = metadata_3.size;
            for (let i_3: number = 0; i_3 < size_3; i_3++) {
              const value_11: Array<number> = new Array<number>();
              const metadata_4: thrift.IThriftList = input.readListBegin();
              const size_4: number = metadata_4.size;
              for (let i_4: number = 0; i_4 < size_4; i_4++) {
                const value_12: number = input.readDouble();
                value_11.push(value_12);
              }
              input.readListEnd();
              value_10.push(value_11);
            }
            input.readListEnd();
            _args.rowData = value_10;
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
      _args.rowHeadersType !== undefined &&
      _args.columnHeaders !== undefined &&
      _args.rowHeaders !== undefined &&
      _args.rowData !== undefined
    ) {
      return {
        rowHeadersType: _args.rowHeadersType,
        columnHeaders: _args.columnHeaders,
        rowHeaders: _args.rowHeaders,
        rowData: _args.rowData,
      };
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Unable to read TabularData from input'
      );
    }
  },
};
export class TabularData extends thrift.StructLike implements ITabularData {
  public rowHeadersType: __NAMESPACE__.RowType;
  public columnHeaders: Array<string>;
  public rowHeaders: Array<string>;
  public rowData: Array<Array<number>>;
  public readonly _annotations: thrift.IThriftAnnotations = {};
  public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
  constructor(args: ITabularDataArgs) {
    super();
    if (args.rowHeadersType != null) {
      const value_13: __NAMESPACE__.RowType = args.rowHeadersType;
      this.rowHeadersType = value_13;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[rowHeadersType] is unset!'
      );
    }
    if (args.columnHeaders != null) {
      const value_14: Array<string> = new Array<string>();
      args.columnHeaders.forEach(
        (value_17: string): void => {
          const value_18: string = value_17;
          value_14.push(value_18);
        }
      );
      this.columnHeaders = value_14;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[columnHeaders] is unset!'
      );
    }
    if (args.rowHeaders != null) {
      const value_15: Array<string> = new Array<string>();
      args.rowHeaders.forEach(
        (value_19: string): void => {
          const value_20: string = value_19;
          value_15.push(value_20);
        }
      );
      this.rowHeaders = value_15;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[rowHeaders] is unset!'
      );
    }
    if (args.rowData != null) {
      const value_16: Array<Array<number>> = new Array<Array<number>>();
      args.rowData.forEach(
        (value_21: Array<number>): void => {
          const value_22: Array<number> = new Array<number>();
          value_21.forEach(
            (value_23: number): void => {
              const value_24: number = value_23;
              value_22.push(value_24);
            }
          );
          value_16.push(value_22);
        }
      );
      this.rowData = value_16;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[rowData] is unset!'
      );
    }
  }
  public static read(input: thrift.TProtocol): TabularData {
    return new TabularData(TabularDataCodec.decode(input));
  }
  public static write(args: ITabularDataArgs, output: thrift.TProtocol): void {
    return TabularDataCodec.encode(args, output);
  }
  public write(output: thrift.TProtocol): void {
    return TabularDataCodec.encode(this, output);
  }
}
