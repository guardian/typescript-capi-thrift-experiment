/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.5.0
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 */
import * as thrift from '@creditkarma/thrift-server-core';
import * as __NAMESPACE__ from './.';
export interface ITaxonomy {
  tags?: Array<__NAMESPACE__.ITagUsage>;
  contributors?: Array<__NAMESPACE__.ITag>;
  publication?: __NAMESPACE__.ITag;
  newspaper?: __NAMESPACE__.INewspaper;
  references?: Array<__NAMESPACE__.IReference>;
}
export interface ITaxonomyArgs {
  tags?: Array<__NAMESPACE__.ITagUsageArgs>;
  contributors?: Array<__NAMESPACE__.ITagArgs>;
  publication?: __NAMESPACE__.ITagArgs;
  newspaper?: __NAMESPACE__.INewspaperArgs;
  references?: Array<__NAMESPACE__.IReferenceArgs>;
}
export const TaxonomyCodec: thrift.IStructCodec<ITaxonomyArgs, ITaxonomy> = {
  encode(args: ITaxonomyArgs, output: thrift.TProtocol): void {
    const obj = {
      tags: args.tags,
      contributors: args.contributors,
      publication: args.publication,
      newspaper: args.newspaper,
      references: args.references,
    };
    output.writeStructBegin('Taxonomy');
    if (obj.tags != null) {
      output.writeFieldBegin('tags', thrift.TType.LIST, 1);
      output.writeListBegin(thrift.TType.STRUCT, obj.tags.length);
      obj.tags.forEach(
        (value_1: __NAMESPACE__.ITagUsageArgs): void => {
          __NAMESPACE__.TagUsageCodec.encode(value_1, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (obj.contributors != null) {
      output.writeFieldBegin('contributors', thrift.TType.LIST, 2);
      output.writeListBegin(thrift.TType.STRUCT, obj.contributors.length);
      obj.contributors.forEach(
        (value_2: __NAMESPACE__.ITagArgs): void => {
          __NAMESPACE__.TagCodec.encode(value_2, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (obj.publication != null) {
      output.writeFieldBegin('publication', thrift.TType.STRUCT, 3);
      __NAMESPACE__.TagCodec.encode(obj.publication, output);
      output.writeFieldEnd();
    }
    if (obj.newspaper != null) {
      output.writeFieldBegin('newspaper', thrift.TType.STRUCT, 4);
      __NAMESPACE__.NewspaperCodec.encode(obj.newspaper, output);
      output.writeFieldEnd();
    }
    if (obj.references != null) {
      output.writeFieldBegin('references', thrift.TType.LIST, 5);
      output.writeListBegin(thrift.TType.STRUCT, obj.references.length);
      obj.references.forEach(
        (value_3: __NAMESPACE__.IReferenceArgs): void => {
          __NAMESPACE__.ReferenceCodec.encode(value_3, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  },
  decode(input: thrift.TProtocol): ITaxonomy {
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
          if (fieldType === thrift.TType.LIST) {
            const value_4: Array<__NAMESPACE__.ITagUsage> = new Array<
              __NAMESPACE__.ITagUsage
            >();
            const metadata_1: thrift.IThriftList = input.readListBegin();
            const size_1: number = metadata_1.size;
            for (let i_1: number = 0; i_1 < size_1; i_1++) {
              const value_5: __NAMESPACE__.ITagUsage = __NAMESPACE__.TagUsageCodec.decode(
                input
              );
              value_4.push(value_5);
            }
            input.readListEnd();
            _args.tags = value_4;
          } else {
            input.skip(fieldType);
          }
          break;
        case 2:
          if (fieldType === thrift.TType.LIST) {
            const value_6: Array<__NAMESPACE__.ITag> = new Array<
              __NAMESPACE__.ITag
            >();
            const metadata_2: thrift.IThriftList = input.readListBegin();
            const size_2: number = metadata_2.size;
            for (let i_2: number = 0; i_2 < size_2; i_2++) {
              const value_7: __NAMESPACE__.ITag = __NAMESPACE__.TagCodec.decode(
                input
              );
              value_6.push(value_7);
            }
            input.readListEnd();
            _args.contributors = value_6;
          } else {
            input.skip(fieldType);
          }
          break;
        case 3:
          if (fieldType === thrift.TType.STRUCT) {
            const value_8: __NAMESPACE__.ITag = __NAMESPACE__.TagCodec.decode(
              input
            );
            _args.publication = value_8;
          } else {
            input.skip(fieldType);
          }
          break;
        case 4:
          if (fieldType === thrift.TType.STRUCT) {
            const value_9: __NAMESPACE__.INewspaper = __NAMESPACE__.NewspaperCodec.decode(
              input
            );
            _args.newspaper = value_9;
          } else {
            input.skip(fieldType);
          }
          break;
        case 5:
          if (fieldType === thrift.TType.LIST) {
            const value_10: Array<__NAMESPACE__.IReference> = new Array<
              __NAMESPACE__.IReference
            >();
            const metadata_3: thrift.IThriftList = input.readListBegin();
            const size_3: number = metadata_3.size;
            for (let i_3: number = 0; i_3 < size_3; i_3++) {
              const value_11: __NAMESPACE__.IReference = __NAMESPACE__.ReferenceCodec.decode(
                input
              );
              value_10.push(value_11);
            }
            input.readListEnd();
            _args.references = value_10;
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
    return {
      tags: _args.tags,
      contributors: _args.contributors,
      publication: _args.publication,
      newspaper: _args.newspaper,
      references: _args.references,
    };
  },
};
export class Taxonomy extends thrift.StructLike implements ITaxonomy {
  public tags?: Array<__NAMESPACE__.ITagUsage>;
  public contributors?: Array<__NAMESPACE__.ITag>;
  public publication?: __NAMESPACE__.ITag;
  public newspaper?: __NAMESPACE__.INewspaper;
  public references?: Array<__NAMESPACE__.IReference>;
  public readonly _annotations: thrift.IThriftAnnotations = {};
  public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
  constructor(args: ITaxonomyArgs = {}) {
    super();
    if (args.tags != null) {
      const value_12: Array<__NAMESPACE__.ITagUsage> = new Array<
        __NAMESPACE__.ITagUsage
      >();
      args.tags.forEach(
        (value_17: __NAMESPACE__.ITagUsageArgs): void => {
          const value_18: __NAMESPACE__.ITagUsage = new __NAMESPACE__.TagUsage(
            value_17
          );
          value_12.push(value_18);
        }
      );
      this.tags = value_12;
    }
    if (args.contributors != null) {
      const value_13: Array<__NAMESPACE__.ITag> = new Array<
        __NAMESPACE__.ITag
      >();
      args.contributors.forEach(
        (value_19: __NAMESPACE__.ITagArgs): void => {
          const value_20: __NAMESPACE__.ITag = new __NAMESPACE__.Tag(value_19);
          value_13.push(value_20);
        }
      );
      this.contributors = value_13;
    }
    if (args.publication != null) {
      const value_14: __NAMESPACE__.ITag = new __NAMESPACE__.Tag(
        args.publication
      );
      this.publication = value_14;
    }
    if (args.newspaper != null) {
      const value_15: __NAMESPACE__.INewspaper = new __NAMESPACE__.Newspaper(
        args.newspaper
      );
      this.newspaper = value_15;
    }
    if (args.references != null) {
      const value_16: Array<__NAMESPACE__.IReference> = new Array<
        __NAMESPACE__.IReference
      >();
      args.references.forEach(
        (value_21: __NAMESPACE__.IReferenceArgs): void => {
          const value_22: __NAMESPACE__.IReference = new __NAMESPACE__.Reference(
            value_21
          );
          value_16.push(value_22);
        }
      );
      this.references = value_16;
    }
  }
  public static read(input: thrift.TProtocol): Taxonomy {
    return new Taxonomy(TaxonomyCodec.decode(input));
  }
  public static write(args: ITaxonomyArgs, output: thrift.TProtocol): void {
    return TaxonomyCodec.encode(args, output);
  }
  public write(output: thrift.TProtocol): void {
    return TaxonomyCodec.encode(this, output);
  }
}