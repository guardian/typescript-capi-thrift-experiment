/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.5.0
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 */
import * as thrift from '@creditkarma/thrift-server-core';
import * as __NAMESPACE__ from './.';
export interface IContent {
  id: string;
  type: __NAMESPACE__.ContentType;
  sectionId?: string;
  sectionName?: string;
  webPublicationDate?: __NAMESPACE__.ICapiDateTime;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  fields?: __NAMESPACE__.IContentFields;
  tags: Array<__NAMESPACE__.ITag>;
  elements?: Array<__NAMESPACE__.IElement>;
  references: Array<__NAMESPACE__.IReference>;
  isExpired?: boolean;
  blocks?: __NAMESPACE__.IBlocks;
  rights?: __NAMESPACE__.IRights;
  crossword?: __NAMESPACE__.ICrossword;
  atoms?: __NAMESPACE__.IAtoms;
  stats?: __NAMESPACE__.IContentStats;
  section?: __NAMESPACE__.ISection;
  debug?: __NAMESPACE__.IDebug;
  isGone?: boolean;
  isHosted: boolean;
  pillarId?: string;
  pillarName?: string;
}
export interface IContentArgs {
  id: string;
  type?: __NAMESPACE__.ContentType;
  sectionId?: string;
  sectionName?: string;
  webPublicationDate?: __NAMESPACE__.ICapiDateTimeArgs;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  fields?: __NAMESPACE__.IContentFieldsArgs;
  tags?: Array<__NAMESPACE__.ITagArgs>;
  elements?: Array<__NAMESPACE__.IElementArgs>;
  references?: Array<__NAMESPACE__.IReferenceArgs>;
  isExpired?: boolean;
  blocks?: __NAMESPACE__.IBlocksArgs;
  rights?: __NAMESPACE__.IRightsArgs;
  crossword?: __NAMESPACE__.ICrosswordArgs;
  atoms?: __NAMESPACE__.IAtomsArgs;
  stats?: __NAMESPACE__.IContentStatsArgs;
  section?: __NAMESPACE__.ISectionArgs;
  debug?: __NAMESPACE__.IDebugArgs;
  isGone?: boolean;
  isHosted?: boolean;
  pillarId?: string;
  pillarName?: string;
}
export const ContentCodec: thrift.IStructCodec<IContentArgs, IContent> = {
  encode(args: IContentArgs, output: thrift.TProtocol): void {
    const obj = {
      id: args.id,
      type: args.type != null ? args.type : __NAMESPACE__.ContentType.ARTICLE,
      sectionId: args.sectionId,
      sectionName: args.sectionName,
      webPublicationDate: args.webPublicationDate,
      webTitle: args.webTitle,
      webUrl: args.webUrl,
      apiUrl: args.apiUrl,
      fields: args.fields,
      tags: args.tags != null ? args.tags : [],
      elements: args.elements,
      references: args.references != null ? args.references : [],
      isExpired: args.isExpired,
      blocks: args.blocks,
      rights: args.rights,
      crossword: args.crossword,
      atoms: args.atoms,
      stats: args.stats,
      section: args.section,
      debug: args.debug,
      isGone: args.isGone,
      isHosted: args.isHosted != null ? args.isHosted : false,
      pillarId: args.pillarId,
      pillarName: args.pillarName,
    };
    output.writeStructBegin('Content');
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
    if (obj.type != null) {
      output.writeFieldBegin('type', thrift.TType.I32, 2);
      output.writeI32(obj.type);
      output.writeFieldEnd();
    }
    if (obj.sectionId != null) {
      output.writeFieldBegin('sectionId', thrift.TType.STRING, 3);
      output.writeString(obj.sectionId);
      output.writeFieldEnd();
    }
    if (obj.sectionName != null) {
      output.writeFieldBegin('sectionName', thrift.TType.STRING, 4);
      output.writeString(obj.sectionName);
      output.writeFieldEnd();
    }
    if (obj.webPublicationDate != null) {
      output.writeFieldBegin('webPublicationDate', thrift.TType.STRUCT, 5);
      __NAMESPACE__.CapiDateTimeCodec.encode(obj.webPublicationDate, output);
      output.writeFieldEnd();
    }
    if (obj.webTitle != null) {
      output.writeFieldBegin('webTitle', thrift.TType.STRING, 6);
      output.writeString(obj.webTitle);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[webTitle] is unset!'
      );
    }
    if (obj.webUrl != null) {
      output.writeFieldBegin('webUrl', thrift.TType.STRING, 7);
      output.writeString(obj.webUrl);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[webUrl] is unset!'
      );
    }
    if (obj.apiUrl != null) {
      output.writeFieldBegin('apiUrl', thrift.TType.STRING, 8);
      output.writeString(obj.apiUrl);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[apiUrl] is unset!'
      );
    }
    if (obj.fields != null) {
      output.writeFieldBegin('fields', thrift.TType.STRUCT, 9);
      __NAMESPACE__.ContentFieldsCodec.encode(obj.fields, output);
      output.writeFieldEnd();
    }
    if (obj.tags != null) {
      output.writeFieldBegin('tags', thrift.TType.LIST, 10);
      output.writeListBegin(thrift.TType.STRUCT, obj.tags.length);
      obj.tags.forEach(
        (value_1: __NAMESPACE__.ITagArgs): void => {
          __NAMESPACE__.TagCodec.encode(value_1, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (obj.elements != null) {
      output.writeFieldBegin('elements', thrift.TType.LIST, 11);
      output.writeListBegin(thrift.TType.STRUCT, obj.elements.length);
      obj.elements.forEach(
        (value_2: __NAMESPACE__.IElementArgs): void => {
          __NAMESPACE__.ElementCodec.encode(value_2, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (obj.references != null) {
      output.writeFieldBegin('references', thrift.TType.LIST, 12);
      output.writeListBegin(thrift.TType.STRUCT, obj.references.length);
      obj.references.forEach(
        (value_3: __NAMESPACE__.IReferenceArgs): void => {
          __NAMESPACE__.ReferenceCodec.encode(value_3, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (obj.isExpired != null) {
      output.writeFieldBegin('isExpired', thrift.TType.BOOL, 13);
      output.writeBool(obj.isExpired);
      output.writeFieldEnd();
    }
    if (obj.blocks != null) {
      output.writeFieldBegin('blocks', thrift.TType.STRUCT, 14);
      __NAMESPACE__.BlocksCodec.encode(obj.blocks, output);
      output.writeFieldEnd();
    }
    if (obj.rights != null) {
      output.writeFieldBegin('rights', thrift.TType.STRUCT, 15);
      __NAMESPACE__.RightsCodec.encode(obj.rights, output);
      output.writeFieldEnd();
    }
    if (obj.crossword != null) {
      output.writeFieldBegin('crossword', thrift.TType.STRUCT, 16);
      __NAMESPACE__.CrosswordCodec.encode(obj.crossword, output);
      output.writeFieldEnd();
    }
    if (obj.atoms != null) {
      output.writeFieldBegin('atoms', thrift.TType.STRUCT, 17);
      __NAMESPACE__.AtomsCodec.encode(obj.atoms, output);
      output.writeFieldEnd();
    }
    if (obj.stats != null) {
      output.writeFieldBegin('stats', thrift.TType.STRUCT, 18);
      __NAMESPACE__.ContentStatsCodec.encode(obj.stats, output);
      output.writeFieldEnd();
    }
    if (obj.section != null) {
      output.writeFieldBegin('section', thrift.TType.STRUCT, 19);
      __NAMESPACE__.SectionCodec.encode(obj.section, output);
      output.writeFieldEnd();
    }
    if (obj.debug != null) {
      output.writeFieldBegin('debug', thrift.TType.STRUCT, 20);
      __NAMESPACE__.DebugCodec.encode(obj.debug, output);
      output.writeFieldEnd();
    }
    if (obj.isGone != null) {
      output.writeFieldBegin('isGone', thrift.TType.BOOL, 21);
      output.writeBool(obj.isGone);
      output.writeFieldEnd();
    }
    if (obj.isHosted != null) {
      output.writeFieldBegin('isHosted', thrift.TType.BOOL, 23);
      output.writeBool(obj.isHosted);
      output.writeFieldEnd();
    }
    if (obj.pillarId != null) {
      output.writeFieldBegin('pillarId', thrift.TType.STRING, 24);
      output.writeString(obj.pillarId);
      output.writeFieldEnd();
    }
    if (obj.pillarName != null) {
      output.writeFieldBegin('pillarName', thrift.TType.STRING, 25);
      output.writeString(obj.pillarName);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  },
  decode(input: thrift.TProtocol): IContent {
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
            const value_4: string = input.readString();
            _args.id = value_4;
          } else {
            input.skip(fieldType);
          }
          break;
        case 2:
          if (fieldType === thrift.TType.I32) {
            const value_5: __NAMESPACE__.ContentType = input.readI32();
            _args.type = value_5;
          } else {
            input.skip(fieldType);
          }
          break;
        case 3:
          if (fieldType === thrift.TType.STRING) {
            const value_6: string = input.readString();
            _args.sectionId = value_6;
          } else {
            input.skip(fieldType);
          }
          break;
        case 4:
          if (fieldType === thrift.TType.STRING) {
            const value_7: string = input.readString();
            _args.sectionName = value_7;
          } else {
            input.skip(fieldType);
          }
          break;
        case 5:
          if (fieldType === thrift.TType.STRUCT) {
            const value_8: __NAMESPACE__.ICapiDateTime = __NAMESPACE__.CapiDateTimeCodec.decode(
              input
            );
            _args.webPublicationDate = value_8;
          } else {
            input.skip(fieldType);
          }
          break;
        case 6:
          if (fieldType === thrift.TType.STRING) {
            const value_9: string = input.readString();
            _args.webTitle = value_9;
          } else {
            input.skip(fieldType);
          }
          break;
        case 7:
          if (fieldType === thrift.TType.STRING) {
            const value_10: string = input.readString();
            _args.webUrl = value_10;
          } else {
            input.skip(fieldType);
          }
          break;
        case 8:
          if (fieldType === thrift.TType.STRING) {
            const value_11: string = input.readString();
            _args.apiUrl = value_11;
          } else {
            input.skip(fieldType);
          }
          break;
        case 9:
          if (fieldType === thrift.TType.STRUCT) {
            const value_12: __NAMESPACE__.IContentFields = __NAMESPACE__.ContentFieldsCodec.decode(
              input
            );
            _args.fields = value_12;
          } else {
            input.skip(fieldType);
          }
          break;
        case 10:
          if (fieldType === thrift.TType.LIST) {
            const value_13: Array<__NAMESPACE__.ITag> = new Array<
              __NAMESPACE__.ITag
            >();
            const metadata_1: thrift.IThriftList = input.readListBegin();
            const size_1: number = metadata_1.size;
            for (let i_1: number = 0; i_1 < size_1; i_1++) {
              const value_14: __NAMESPACE__.ITag = __NAMESPACE__.TagCodec.decode(
                input
              );
              value_13.push(value_14);
            }
            input.readListEnd();
            _args.tags = value_13;
          } else {
            input.skip(fieldType);
          }
          break;
        case 11:
          if (fieldType === thrift.TType.LIST) {
            const value_15: Array<__NAMESPACE__.IElement> = new Array<
              __NAMESPACE__.IElement
            >();
            const metadata_2: thrift.IThriftList = input.readListBegin();
            const size_2: number = metadata_2.size;
            for (let i_2: number = 0; i_2 < size_2; i_2++) {
              const value_16: __NAMESPACE__.IElement = __NAMESPACE__.ElementCodec.decode(
                input
              );
              value_15.push(value_16);
            }
            input.readListEnd();
            _args.elements = value_15;
          } else {
            input.skip(fieldType);
          }
          break;
        case 12:
          if (fieldType === thrift.TType.LIST) {
            const value_17: Array<__NAMESPACE__.IReference> = new Array<
              __NAMESPACE__.IReference
            >();
            const metadata_3: thrift.IThriftList = input.readListBegin();
            const size_3: number = metadata_3.size;
            for (let i_3: number = 0; i_3 < size_3; i_3++) {
              const value_18: __NAMESPACE__.IReference = __NAMESPACE__.ReferenceCodec.decode(
                input
              );
              value_17.push(value_18);
            }
            input.readListEnd();
            _args.references = value_17;
          } else {
            input.skip(fieldType);
          }
          break;
        case 13:
          if (fieldType === thrift.TType.BOOL) {
            const value_19: boolean = input.readBool();
            _args.isExpired = value_19;
          } else {
            input.skip(fieldType);
          }
          break;
        case 14:
          if (fieldType === thrift.TType.STRUCT) {
            const value_20: __NAMESPACE__.IBlocks = __NAMESPACE__.BlocksCodec.decode(
              input
            );
            _args.blocks = value_20;
          } else {
            input.skip(fieldType);
          }
          break;
        case 15:
          if (fieldType === thrift.TType.STRUCT) {
            const value_21: __NAMESPACE__.IRights = __NAMESPACE__.RightsCodec.decode(
              input
            );
            _args.rights = value_21;
          } else {
            input.skip(fieldType);
          }
          break;
        case 16:
          if (fieldType === thrift.TType.STRUCT) {
            const value_22: __NAMESPACE__.ICrossword = __NAMESPACE__.CrosswordCodec.decode(
              input
            );
            _args.crossword = value_22;
          } else {
            input.skip(fieldType);
          }
          break;
        case 17:
          if (fieldType === thrift.TType.STRUCT) {
            const value_23: __NAMESPACE__.IAtoms = __NAMESPACE__.AtomsCodec.decode(
              input
            );
            _args.atoms = value_23;
          } else {
            input.skip(fieldType);
          }
          break;
        case 18:
          if (fieldType === thrift.TType.STRUCT) {
            const value_24: __NAMESPACE__.IContentStats = __NAMESPACE__.ContentStatsCodec.decode(
              input
            );
            _args.stats = value_24;
          } else {
            input.skip(fieldType);
          }
          break;
        case 19:
          if (fieldType === thrift.TType.STRUCT) {
            const value_25: __NAMESPACE__.ISection = __NAMESPACE__.SectionCodec.decode(
              input
            );
            _args.section = value_25;
          } else {
            input.skip(fieldType);
          }
          break;
        case 20:
          if (fieldType === thrift.TType.STRUCT) {
            const value_26: __NAMESPACE__.IDebug = __NAMESPACE__.DebugCodec.decode(
              input
            );
            _args.debug = value_26;
          } else {
            input.skip(fieldType);
          }
          break;
        case 21:
          if (fieldType === thrift.TType.BOOL) {
            const value_27: boolean = input.readBool();
            _args.isGone = value_27;
          } else {
            input.skip(fieldType);
          }
          break;
        case 23:
          if (fieldType === thrift.TType.BOOL) {
            const value_28: boolean = input.readBool();
            _args.isHosted = value_28;
          } else {
            input.skip(fieldType);
          }
          break;
        case 24:
          if (fieldType === thrift.TType.STRING) {
            const value_29: string = input.readString();
            _args.pillarId = value_29;
          } else {
            input.skip(fieldType);
          }
          break;
        case 25:
          if (fieldType === thrift.TType.STRING) {
            const value_30: string = input.readString();
            _args.pillarName = value_30;
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
      _args.type !== undefined &&
      _args.webTitle !== undefined &&
      _args.webUrl !== undefined &&
      _args.apiUrl !== undefined &&
      _args.tags !== undefined &&
      _args.references !== undefined &&
      _args.isHosted !== undefined
    ) {
      return {
        id: _args.id,
        type:
          _args.type != null ? _args.type : __NAMESPACE__.ContentType.ARTICLE,
        sectionId: _args.sectionId,
        sectionName: _args.sectionName,
        webPublicationDate: _args.webPublicationDate,
        webTitle: _args.webTitle,
        webUrl: _args.webUrl,
        apiUrl: _args.apiUrl,
        fields: _args.fields,
        tags: _args.tags != null ? _args.tags : [],
        elements: _args.elements,
        references: _args.references != null ? _args.references : [],
        isExpired: _args.isExpired,
        blocks: _args.blocks,
        rights: _args.rights,
        crossword: _args.crossword,
        atoms: _args.atoms,
        stats: _args.stats,
        section: _args.section,
        debug: _args.debug,
        isGone: _args.isGone,
        isHosted: _args.isHosted != null ? _args.isHosted : false,
        pillarId: _args.pillarId,
        pillarName: _args.pillarName,
      };
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Unable to read Content from input'
      );
    }
  },
};
export class Content extends thrift.StructLike implements IContent {
  public id: string;
  public type: __NAMESPACE__.ContentType = __NAMESPACE__.ContentType.ARTICLE;
  public sectionId?: string;
  public sectionName?: string;
  public webPublicationDate?: __NAMESPACE__.ICapiDateTime;
  public webTitle: string;
  public webUrl: string;
  public apiUrl: string;
  public fields?: __NAMESPACE__.IContentFields;
  public tags: Array<__NAMESPACE__.ITag> = [];
  public elements?: Array<__NAMESPACE__.IElement>;
  public references: Array<__NAMESPACE__.IReference> = [];
  public isExpired?: boolean;
  public blocks?: __NAMESPACE__.IBlocks;
  public rights?: __NAMESPACE__.IRights;
  public crossword?: __NAMESPACE__.ICrossword;
  public atoms?: __NAMESPACE__.IAtoms;
  public stats?: __NAMESPACE__.IContentStats;
  public section?: __NAMESPACE__.ISection;
  public debug?: __NAMESPACE__.IDebug;
  public isGone?: boolean;
  public isHosted: boolean = false;
  public pillarId?: string;
  public pillarName?: string;
  public readonly _annotations: thrift.IThriftAnnotations = {};
  public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
  constructor(args: IContentArgs) {
    super();
    if (args.id != null) {
      const value_31: string = args.id;
      this.id = value_31;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[id] is unset!'
      );
    }
    if (args.type != null) {
      const value_32: __NAMESPACE__.ContentType = args.type;
      this.type = value_32;
    }
    if (args.sectionId != null) {
      const value_33: string = args.sectionId;
      this.sectionId = value_33;
    }
    if (args.sectionName != null) {
      const value_34: string = args.sectionName;
      this.sectionName = value_34;
    }
    if (args.webPublicationDate != null) {
      const value_35: __NAMESPACE__.ICapiDateTime = new __NAMESPACE__.CapiDateTime(
        args.webPublicationDate
      );
      this.webPublicationDate = value_35;
    }
    if (args.webTitle != null) {
      const value_36: string = args.webTitle;
      this.webTitle = value_36;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[webTitle] is unset!'
      );
    }
    if (args.webUrl != null) {
      const value_37: string = args.webUrl;
      this.webUrl = value_37;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[webUrl] is unset!'
      );
    }
    if (args.apiUrl != null) {
      const value_38: string = args.apiUrl;
      this.apiUrl = value_38;
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Required field[apiUrl] is unset!'
      );
    }
    if (args.fields != null) {
      const value_39: __NAMESPACE__.IContentFields = new __NAMESPACE__.ContentFields(
        args.fields
      );
      this.fields = value_39;
    }
    if (args.tags != null) {
      const value_40: Array<__NAMESPACE__.ITag> = new Array<
        __NAMESPACE__.ITag
      >();
      args.tags.forEach(
        (value_55: __NAMESPACE__.ITagArgs): void => {
          const value_56: __NAMESPACE__.ITag = new __NAMESPACE__.Tag(value_55);
          value_40.push(value_56);
        }
      );
      this.tags = value_40;
    }
    if (args.elements != null) {
      const value_41: Array<__NAMESPACE__.IElement> = new Array<
        __NAMESPACE__.IElement
      >();
      args.elements.forEach(
        (value_57: __NAMESPACE__.IElementArgs): void => {
          const value_58: __NAMESPACE__.IElement = new __NAMESPACE__.Element(
            value_57
          );
          value_41.push(value_58);
        }
      );
      this.elements = value_41;
    }
    if (args.references != null) {
      const value_42: Array<__NAMESPACE__.IReference> = new Array<
        __NAMESPACE__.IReference
      >();
      args.references.forEach(
        (value_59: __NAMESPACE__.IReferenceArgs): void => {
          const value_60: __NAMESPACE__.IReference = new __NAMESPACE__.Reference(
            value_59
          );
          value_42.push(value_60);
        }
      );
      this.references = value_42;
    }
    if (args.isExpired != null) {
      const value_43: boolean = args.isExpired;
      this.isExpired = value_43;
    }
    if (args.blocks != null) {
      const value_44: __NAMESPACE__.IBlocks = new __NAMESPACE__.Blocks(
        args.blocks
      );
      this.blocks = value_44;
    }
    if (args.rights != null) {
      const value_45: __NAMESPACE__.IRights = new __NAMESPACE__.Rights(
        args.rights
      );
      this.rights = value_45;
    }
    if (args.crossword != null) {
      const value_46: __NAMESPACE__.ICrossword = new __NAMESPACE__.Crossword(
        args.crossword
      );
      this.crossword = value_46;
    }
    if (args.atoms != null) {
      const value_47: __NAMESPACE__.IAtoms = new __NAMESPACE__.Atoms(
        args.atoms
      );
      this.atoms = value_47;
    }
    if (args.stats != null) {
      const value_48: __NAMESPACE__.IContentStats = new __NAMESPACE__.ContentStats(
        args.stats
      );
      this.stats = value_48;
    }
    if (args.section != null) {
      const value_49: __NAMESPACE__.ISection = new __NAMESPACE__.Section(
        args.section
      );
      this.section = value_49;
    }
    if (args.debug != null) {
      const value_50: __NAMESPACE__.IDebug = new __NAMESPACE__.Debug(
        args.debug
      );
      this.debug = value_50;
    }
    if (args.isGone != null) {
      const value_51: boolean = args.isGone;
      this.isGone = value_51;
    }
    if (args.isHosted != null) {
      const value_52: boolean = args.isHosted;
      this.isHosted = value_52;
    }
    if (args.pillarId != null) {
      const value_53: string = args.pillarId;
      this.pillarId = value_53;
    }
    if (args.pillarName != null) {
      const value_54: string = args.pillarName;
      this.pillarName = value_54;
    }
  }
  public static read(input: thrift.TProtocol): Content {
    return new Content(ContentCodec.decode(input));
  }
  public static write(args: IContentArgs, output: thrift.TProtocol): void {
    return ContentCodec.encode(args, output);
  }
  public write(output: thrift.TProtocol): void {
    return ContentCodec.encode(this, output);
  }
}