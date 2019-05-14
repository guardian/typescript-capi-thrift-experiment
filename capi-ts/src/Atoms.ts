/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.5.0
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 */
import * as thrift from '@creditkarma/thrift-server-core';
import * as com_gu_contentatom_thrift from './com/gu/contentatom/thrift';
export interface IAtoms {
  quizzes?: Array<com_gu_contentatom_thrift.IAtom>;
  viewpoints?: Array<com_gu_contentatom_thrift.IAtom>;
  media?: Array<com_gu_contentatom_thrift.IAtom>;
  explainers?: Array<com_gu_contentatom_thrift.IAtom>;
  cta?: Array<com_gu_contentatom_thrift.IAtom>;
  interactives?: Array<com_gu_contentatom_thrift.IAtom>;
  reviews?: Array<com_gu_contentatom_thrift.IAtom>;
  recipes?: Array<com_gu_contentatom_thrift.IAtom>;
  storyquestions?: Array<com_gu_contentatom_thrift.IAtom>;
  qandas?: Array<com_gu_contentatom_thrift.IAtom>;
  guides?: Array<com_gu_contentatom_thrift.IAtom>;
  profiles?: Array<com_gu_contentatom_thrift.IAtom>;
  timelines?: Array<com_gu_contentatom_thrift.IAtom>;
  commonsdivisions?: Array<com_gu_contentatom_thrift.IAtom>;
  charts?: Array<com_gu_contentatom_thrift.IAtom>;
  audios?: Array<com_gu_contentatom_thrift.IAtom>;
}
export interface IAtomsArgs {
  quizzes?: Array<com_gu_contentatom_thrift.IAtomArgs>;
  viewpoints?: Array<com_gu_contentatom_thrift.IAtomArgs>;
  media?: Array<com_gu_contentatom_thrift.IAtomArgs>;
  explainers?: Array<com_gu_contentatom_thrift.IAtomArgs>;
  cta?: Array<com_gu_contentatom_thrift.IAtomArgs>;
  interactives?: Array<com_gu_contentatom_thrift.IAtomArgs>;
  reviews?: Array<com_gu_contentatom_thrift.IAtomArgs>;
  recipes?: Array<com_gu_contentatom_thrift.IAtomArgs>;
  storyquestions?: Array<com_gu_contentatom_thrift.IAtomArgs>;
  qandas?: Array<com_gu_contentatom_thrift.IAtomArgs>;
  guides?: Array<com_gu_contentatom_thrift.IAtomArgs>;
  profiles?: Array<com_gu_contentatom_thrift.IAtomArgs>;
  timelines?: Array<com_gu_contentatom_thrift.IAtomArgs>;
  commonsdivisions?: Array<com_gu_contentatom_thrift.IAtomArgs>;
  charts?: Array<com_gu_contentatom_thrift.IAtomArgs>;
  audios?: Array<com_gu_contentatom_thrift.IAtomArgs>;
}
export const AtomsCodec: thrift.IStructCodec<IAtomsArgs, IAtoms> = {
  encode(args: IAtomsArgs, output: thrift.TProtocol): void {
    const obj = {
      quizzes: args.quizzes,
      viewpoints: args.viewpoints,
      media: args.media,
      explainers: args.explainers,
      cta: args.cta,
      interactives: args.interactives,
      reviews: args.reviews,
      recipes: args.recipes,
      storyquestions: args.storyquestions,
      qandas: args.qandas,
      guides: args.guides,
      profiles: args.profiles,
      timelines: args.timelines,
      commonsdivisions: args.commonsdivisions,
      charts: args.charts,
      audios: args.audios,
    };
    output.writeStructBegin('Atoms');
    if (obj.quizzes != null) {
      output.writeFieldBegin('quizzes', thrift.TType.LIST, 1);
      output.writeListBegin(thrift.TType.STRUCT, obj.quizzes.length);
      obj.quizzes.forEach(
        (value_1: com_gu_contentatom_thrift.IAtomArgs): void => {
          com_gu_contentatom_thrift.AtomCodec.encode(value_1, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (obj.viewpoints != null) {
      output.writeFieldBegin('viewpoints', thrift.TType.LIST, 2);
      output.writeListBegin(thrift.TType.STRUCT, obj.viewpoints.length);
      obj.viewpoints.forEach(
        (value_2: com_gu_contentatom_thrift.IAtomArgs): void => {
          com_gu_contentatom_thrift.AtomCodec.encode(value_2, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (obj.media != null) {
      output.writeFieldBegin('media', thrift.TType.LIST, 3);
      output.writeListBegin(thrift.TType.STRUCT, obj.media.length);
      obj.media.forEach(
        (value_3: com_gu_contentatom_thrift.IAtomArgs): void => {
          com_gu_contentatom_thrift.AtomCodec.encode(value_3, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (obj.explainers != null) {
      output.writeFieldBegin('explainers', thrift.TType.LIST, 4);
      output.writeListBegin(thrift.TType.STRUCT, obj.explainers.length);
      obj.explainers.forEach(
        (value_4: com_gu_contentatom_thrift.IAtomArgs): void => {
          com_gu_contentatom_thrift.AtomCodec.encode(value_4, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (obj.cta != null) {
      output.writeFieldBegin('cta', thrift.TType.LIST, 5);
      output.writeListBegin(thrift.TType.STRUCT, obj.cta.length);
      obj.cta.forEach(
        (value_5: com_gu_contentatom_thrift.IAtomArgs): void => {
          com_gu_contentatom_thrift.AtomCodec.encode(value_5, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (obj.interactives != null) {
      output.writeFieldBegin('interactives', thrift.TType.LIST, 6);
      output.writeListBegin(thrift.TType.STRUCT, obj.interactives.length);
      obj.interactives.forEach(
        (value_6: com_gu_contentatom_thrift.IAtomArgs): void => {
          com_gu_contentatom_thrift.AtomCodec.encode(value_6, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (obj.reviews != null) {
      output.writeFieldBegin('reviews', thrift.TType.LIST, 7);
      output.writeListBegin(thrift.TType.STRUCT, obj.reviews.length);
      obj.reviews.forEach(
        (value_7: com_gu_contentatom_thrift.IAtomArgs): void => {
          com_gu_contentatom_thrift.AtomCodec.encode(value_7, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (obj.recipes != null) {
      output.writeFieldBegin('recipes', thrift.TType.LIST, 8);
      output.writeListBegin(thrift.TType.STRUCT, obj.recipes.length);
      obj.recipes.forEach(
        (value_8: com_gu_contentatom_thrift.IAtomArgs): void => {
          com_gu_contentatom_thrift.AtomCodec.encode(value_8, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (obj.storyquestions != null) {
      output.writeFieldBegin('storyquestions', thrift.TType.LIST, 9);
      output.writeListBegin(thrift.TType.STRUCT, obj.storyquestions.length);
      obj.storyquestions.forEach(
        (value_9: com_gu_contentatom_thrift.IAtomArgs): void => {
          com_gu_contentatom_thrift.AtomCodec.encode(value_9, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (obj.qandas != null) {
      output.writeFieldBegin('qandas', thrift.TType.LIST, 10);
      output.writeListBegin(thrift.TType.STRUCT, obj.qandas.length);
      obj.qandas.forEach(
        (value_10: com_gu_contentatom_thrift.IAtomArgs): void => {
          com_gu_contentatom_thrift.AtomCodec.encode(value_10, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (obj.guides != null) {
      output.writeFieldBegin('guides', thrift.TType.LIST, 11);
      output.writeListBegin(thrift.TType.STRUCT, obj.guides.length);
      obj.guides.forEach(
        (value_11: com_gu_contentatom_thrift.IAtomArgs): void => {
          com_gu_contentatom_thrift.AtomCodec.encode(value_11, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (obj.profiles != null) {
      output.writeFieldBegin('profiles', thrift.TType.LIST, 12);
      output.writeListBegin(thrift.TType.STRUCT, obj.profiles.length);
      obj.profiles.forEach(
        (value_12: com_gu_contentatom_thrift.IAtomArgs): void => {
          com_gu_contentatom_thrift.AtomCodec.encode(value_12, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (obj.timelines != null) {
      output.writeFieldBegin('timelines', thrift.TType.LIST, 13);
      output.writeListBegin(thrift.TType.STRUCT, obj.timelines.length);
      obj.timelines.forEach(
        (value_13: com_gu_contentatom_thrift.IAtomArgs): void => {
          com_gu_contentatom_thrift.AtomCodec.encode(value_13, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (obj.commonsdivisions != null) {
      output.writeFieldBegin('commonsdivisions', thrift.TType.LIST, 14);
      output.writeListBegin(thrift.TType.STRUCT, obj.commonsdivisions.length);
      obj.commonsdivisions.forEach(
        (value_14: com_gu_contentatom_thrift.IAtomArgs): void => {
          com_gu_contentatom_thrift.AtomCodec.encode(value_14, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (obj.charts != null) {
      output.writeFieldBegin('charts', thrift.TType.LIST, 15);
      output.writeListBegin(thrift.TType.STRUCT, obj.charts.length);
      obj.charts.forEach(
        (value_15: com_gu_contentatom_thrift.IAtomArgs): void => {
          com_gu_contentatom_thrift.AtomCodec.encode(value_15, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    }
    if (obj.audios != null) {
      output.writeFieldBegin('audios', thrift.TType.LIST, 16);
      output.writeListBegin(thrift.TType.STRUCT, obj.audios.length);
      obj.audios.forEach(
        (value_16: com_gu_contentatom_thrift.IAtomArgs): void => {
          com_gu_contentatom_thrift.AtomCodec.encode(value_16, output);
        }
      );
      output.writeListEnd();
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  },
  decode(input: thrift.TProtocol): IAtoms {
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
            const value_17: Array<com_gu_contentatom_thrift.IAtom> = new Array<
              com_gu_contentatom_thrift.IAtom
            >();
            const metadata_1: thrift.IThriftList = input.readListBegin();
            const size_1: number = metadata_1.size;
            for (let i_1: number = 0; i_1 < size_1; i_1++) {
              const value_18: com_gu_contentatom_thrift.IAtom = com_gu_contentatom_thrift.AtomCodec.decode(
                input
              );
              value_17.push(value_18);
            }
            input.readListEnd();
            _args.quizzes = value_17;
          } else {
            input.skip(fieldType);
          }
          break;
        case 2:
          if (fieldType === thrift.TType.LIST) {
            const value_19: Array<com_gu_contentatom_thrift.IAtom> = new Array<
              com_gu_contentatom_thrift.IAtom
            >();
            const metadata_2: thrift.IThriftList = input.readListBegin();
            const size_2: number = metadata_2.size;
            for (let i_2: number = 0; i_2 < size_2; i_2++) {
              const value_20: com_gu_contentatom_thrift.IAtom = com_gu_contentatom_thrift.AtomCodec.decode(
                input
              );
              value_19.push(value_20);
            }
            input.readListEnd();
            _args.viewpoints = value_19;
          } else {
            input.skip(fieldType);
          }
          break;
        case 3:
          if (fieldType === thrift.TType.LIST) {
            const value_21: Array<com_gu_contentatom_thrift.IAtom> = new Array<
              com_gu_contentatom_thrift.IAtom
            >();
            const metadata_3: thrift.IThriftList = input.readListBegin();
            const size_3: number = metadata_3.size;
            for (let i_3: number = 0; i_3 < size_3; i_3++) {
              const value_22: com_gu_contentatom_thrift.IAtom = com_gu_contentatom_thrift.AtomCodec.decode(
                input
              );
              value_21.push(value_22);
            }
            input.readListEnd();
            _args.media = value_21;
          } else {
            input.skip(fieldType);
          }
          break;
        case 4:
          if (fieldType === thrift.TType.LIST) {
            const value_23: Array<com_gu_contentatom_thrift.IAtom> = new Array<
              com_gu_contentatom_thrift.IAtom
            >();
            const metadata_4: thrift.IThriftList = input.readListBegin();
            const size_4: number = metadata_4.size;
            for (let i_4: number = 0; i_4 < size_4; i_4++) {
              const value_24: com_gu_contentatom_thrift.IAtom = com_gu_contentatom_thrift.AtomCodec.decode(
                input
              );
              value_23.push(value_24);
            }
            input.readListEnd();
            _args.explainers = value_23;
          } else {
            input.skip(fieldType);
          }
          break;
        case 5:
          if (fieldType === thrift.TType.LIST) {
            const value_25: Array<com_gu_contentatom_thrift.IAtom> = new Array<
              com_gu_contentatom_thrift.IAtom
            >();
            const metadata_5: thrift.IThriftList = input.readListBegin();
            const size_5: number = metadata_5.size;
            for (let i_5: number = 0; i_5 < size_5; i_5++) {
              const value_26: com_gu_contentatom_thrift.IAtom = com_gu_contentatom_thrift.AtomCodec.decode(
                input
              );
              value_25.push(value_26);
            }
            input.readListEnd();
            _args.cta = value_25;
          } else {
            input.skip(fieldType);
          }
          break;
        case 6:
          if (fieldType === thrift.TType.LIST) {
            const value_27: Array<com_gu_contentatom_thrift.IAtom> = new Array<
              com_gu_contentatom_thrift.IAtom
            >();
            const metadata_6: thrift.IThriftList = input.readListBegin();
            const size_6: number = metadata_6.size;
            for (let i_6: number = 0; i_6 < size_6; i_6++) {
              const value_28: com_gu_contentatom_thrift.IAtom = com_gu_contentatom_thrift.AtomCodec.decode(
                input
              );
              value_27.push(value_28);
            }
            input.readListEnd();
            _args.interactives = value_27;
          } else {
            input.skip(fieldType);
          }
          break;
        case 7:
          if (fieldType === thrift.TType.LIST) {
            const value_29: Array<com_gu_contentatom_thrift.IAtom> = new Array<
              com_gu_contentatom_thrift.IAtom
            >();
            const metadata_7: thrift.IThriftList = input.readListBegin();
            const size_7: number = metadata_7.size;
            for (let i_7: number = 0; i_7 < size_7; i_7++) {
              const value_30: com_gu_contentatom_thrift.IAtom = com_gu_contentatom_thrift.AtomCodec.decode(
                input
              );
              value_29.push(value_30);
            }
            input.readListEnd();
            _args.reviews = value_29;
          } else {
            input.skip(fieldType);
          }
          break;
        case 8:
          if (fieldType === thrift.TType.LIST) {
            const value_31: Array<com_gu_contentatom_thrift.IAtom> = new Array<
              com_gu_contentatom_thrift.IAtom
            >();
            const metadata_8: thrift.IThriftList = input.readListBegin();
            const size_8: number = metadata_8.size;
            for (let i_8: number = 0; i_8 < size_8; i_8++) {
              const value_32: com_gu_contentatom_thrift.IAtom = com_gu_contentatom_thrift.AtomCodec.decode(
                input
              );
              value_31.push(value_32);
            }
            input.readListEnd();
            _args.recipes = value_31;
          } else {
            input.skip(fieldType);
          }
          break;
        case 9:
          if (fieldType === thrift.TType.LIST) {
            const value_33: Array<com_gu_contentatom_thrift.IAtom> = new Array<
              com_gu_contentatom_thrift.IAtom
            >();
            const metadata_9: thrift.IThriftList = input.readListBegin();
            const size_9: number = metadata_9.size;
            for (let i_9: number = 0; i_9 < size_9; i_9++) {
              const value_34: com_gu_contentatom_thrift.IAtom = com_gu_contentatom_thrift.AtomCodec.decode(
                input
              );
              value_33.push(value_34);
            }
            input.readListEnd();
            _args.storyquestions = value_33;
          } else {
            input.skip(fieldType);
          }
          break;
        case 10:
          if (fieldType === thrift.TType.LIST) {
            const value_35: Array<com_gu_contentatom_thrift.IAtom> = new Array<
              com_gu_contentatom_thrift.IAtom
            >();
            const metadata_10: thrift.IThriftList = input.readListBegin();
            const size_10: number = metadata_10.size;
            for (let i_10: number = 0; i_10 < size_10; i_10++) {
              const value_36: com_gu_contentatom_thrift.IAtom = com_gu_contentatom_thrift.AtomCodec.decode(
                input
              );
              value_35.push(value_36);
            }
            input.readListEnd();
            _args.qandas = value_35;
          } else {
            input.skip(fieldType);
          }
          break;
        case 11:
          if (fieldType === thrift.TType.LIST) {
            const value_37: Array<com_gu_contentatom_thrift.IAtom> = new Array<
              com_gu_contentatom_thrift.IAtom
            >();
            const metadata_11: thrift.IThriftList = input.readListBegin();
            const size_11: number = metadata_11.size;
            for (let i_11: number = 0; i_11 < size_11; i_11++) {
              const value_38: com_gu_contentatom_thrift.IAtom = com_gu_contentatom_thrift.AtomCodec.decode(
                input
              );
              value_37.push(value_38);
            }
            input.readListEnd();
            _args.guides = value_37;
          } else {
            input.skip(fieldType);
          }
          break;
        case 12:
          if (fieldType === thrift.TType.LIST) {
            const value_39: Array<com_gu_contentatom_thrift.IAtom> = new Array<
              com_gu_contentatom_thrift.IAtom
            >();
            const metadata_12: thrift.IThriftList = input.readListBegin();
            const size_12: number = metadata_12.size;
            for (let i_12: number = 0; i_12 < size_12; i_12++) {
              const value_40: com_gu_contentatom_thrift.IAtom = com_gu_contentatom_thrift.AtomCodec.decode(
                input
              );
              value_39.push(value_40);
            }
            input.readListEnd();
            _args.profiles = value_39;
          } else {
            input.skip(fieldType);
          }
          break;
        case 13:
          if (fieldType === thrift.TType.LIST) {
            const value_41: Array<com_gu_contentatom_thrift.IAtom> = new Array<
              com_gu_contentatom_thrift.IAtom
            >();
            const metadata_13: thrift.IThriftList = input.readListBegin();
            const size_13: number = metadata_13.size;
            for (let i_13: number = 0; i_13 < size_13; i_13++) {
              const value_42: com_gu_contentatom_thrift.IAtom = com_gu_contentatom_thrift.AtomCodec.decode(
                input
              );
              value_41.push(value_42);
            }
            input.readListEnd();
            _args.timelines = value_41;
          } else {
            input.skip(fieldType);
          }
          break;
        case 14:
          if (fieldType === thrift.TType.LIST) {
            const value_43: Array<com_gu_contentatom_thrift.IAtom> = new Array<
              com_gu_contentatom_thrift.IAtom
            >();
            const metadata_14: thrift.IThriftList = input.readListBegin();
            const size_14: number = metadata_14.size;
            for (let i_14: number = 0; i_14 < size_14; i_14++) {
              const value_44: com_gu_contentatom_thrift.IAtom = com_gu_contentatom_thrift.AtomCodec.decode(
                input
              );
              value_43.push(value_44);
            }
            input.readListEnd();
            _args.commonsdivisions = value_43;
          } else {
            input.skip(fieldType);
          }
          break;
        case 15:
          if (fieldType === thrift.TType.LIST) {
            const value_45: Array<com_gu_contentatom_thrift.IAtom> = new Array<
              com_gu_contentatom_thrift.IAtom
            >();
            const metadata_15: thrift.IThriftList = input.readListBegin();
            const size_15: number = metadata_15.size;
            for (let i_15: number = 0; i_15 < size_15; i_15++) {
              const value_46: com_gu_contentatom_thrift.IAtom = com_gu_contentatom_thrift.AtomCodec.decode(
                input
              );
              value_45.push(value_46);
            }
            input.readListEnd();
            _args.charts = value_45;
          } else {
            input.skip(fieldType);
          }
          break;
        case 16:
          if (fieldType === thrift.TType.LIST) {
            const value_47: Array<com_gu_contentatom_thrift.IAtom> = new Array<
              com_gu_contentatom_thrift.IAtom
            >();
            const metadata_16: thrift.IThriftList = input.readListBegin();
            const size_16: number = metadata_16.size;
            for (let i_16: number = 0; i_16 < size_16; i_16++) {
              const value_48: com_gu_contentatom_thrift.IAtom = com_gu_contentatom_thrift.AtomCodec.decode(
                input
              );
              value_47.push(value_48);
            }
            input.readListEnd();
            _args.audios = value_47;
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
      quizzes: _args.quizzes,
      viewpoints: _args.viewpoints,
      media: _args.media,
      explainers: _args.explainers,
      cta: _args.cta,
      interactives: _args.interactives,
      reviews: _args.reviews,
      recipes: _args.recipes,
      storyquestions: _args.storyquestions,
      qandas: _args.qandas,
      guides: _args.guides,
      profiles: _args.profiles,
      timelines: _args.timelines,
      commonsdivisions: _args.commonsdivisions,
      charts: _args.charts,
      audios: _args.audios,
    };
  },
};
export class Atoms extends thrift.StructLike implements IAtoms {
  public quizzes?: Array<com_gu_contentatom_thrift.IAtom>;
  public viewpoints?: Array<com_gu_contentatom_thrift.IAtom>;
  public media?: Array<com_gu_contentatom_thrift.IAtom>;
  public explainers?: Array<com_gu_contentatom_thrift.IAtom>;
  public cta?: Array<com_gu_contentatom_thrift.IAtom>;
  public interactives?: Array<com_gu_contentatom_thrift.IAtom>;
  public reviews?: Array<com_gu_contentatom_thrift.IAtom>;
  public recipes?: Array<com_gu_contentatom_thrift.IAtom>;
  public storyquestions?: Array<com_gu_contentatom_thrift.IAtom>;
  public qandas?: Array<com_gu_contentatom_thrift.IAtom>;
  public guides?: Array<com_gu_contentatom_thrift.IAtom>;
  public profiles?: Array<com_gu_contentatom_thrift.IAtom>;
  public timelines?: Array<com_gu_contentatom_thrift.IAtom>;
  public commonsdivisions?: Array<com_gu_contentatom_thrift.IAtom>;
  public charts?: Array<com_gu_contentatom_thrift.IAtom>;
  public audios?: Array<com_gu_contentatom_thrift.IAtom>;
  public readonly _annotations: thrift.IThriftAnnotations = {};
  public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
  constructor(args: IAtomsArgs = {}) {
    super();
    if (args.quizzes != null) {
      const value_49: Array<com_gu_contentatom_thrift.IAtom> = new Array<
        com_gu_contentatom_thrift.IAtom
      >();
      args.quizzes.forEach(
        (value_65: com_gu_contentatom_thrift.IAtomArgs): void => {
          const value_66: com_gu_contentatom_thrift.IAtom = new com_gu_contentatom_thrift.Atom(
            value_65
          );
          value_49.push(value_66);
        }
      );
      this.quizzes = value_49;
    }
    if (args.viewpoints != null) {
      const value_50: Array<com_gu_contentatom_thrift.IAtom> = new Array<
        com_gu_contentatom_thrift.IAtom
      >();
      args.viewpoints.forEach(
        (value_67: com_gu_contentatom_thrift.IAtomArgs): void => {
          const value_68: com_gu_contentatom_thrift.IAtom = new com_gu_contentatom_thrift.Atom(
            value_67
          );
          value_50.push(value_68);
        }
      );
      this.viewpoints = value_50;
    }
    if (args.media != null) {
      const value_51: Array<com_gu_contentatom_thrift.IAtom> = new Array<
        com_gu_contentatom_thrift.IAtom
      >();
      args.media.forEach(
        (value_69: com_gu_contentatom_thrift.IAtomArgs): void => {
          const value_70: com_gu_contentatom_thrift.IAtom = new com_gu_contentatom_thrift.Atom(
            value_69
          );
          value_51.push(value_70);
        }
      );
      this.media = value_51;
    }
    if (args.explainers != null) {
      const value_52: Array<com_gu_contentatom_thrift.IAtom> = new Array<
        com_gu_contentatom_thrift.IAtom
      >();
      args.explainers.forEach(
        (value_71: com_gu_contentatom_thrift.IAtomArgs): void => {
          const value_72: com_gu_contentatom_thrift.IAtom = new com_gu_contentatom_thrift.Atom(
            value_71
          );
          value_52.push(value_72);
        }
      );
      this.explainers = value_52;
    }
    if (args.cta != null) {
      const value_53: Array<com_gu_contentatom_thrift.IAtom> = new Array<
        com_gu_contentatom_thrift.IAtom
      >();
      args.cta.forEach(
        (value_73: com_gu_contentatom_thrift.IAtomArgs): void => {
          const value_74: com_gu_contentatom_thrift.IAtom = new com_gu_contentatom_thrift.Atom(
            value_73
          );
          value_53.push(value_74);
        }
      );
      this.cta = value_53;
    }
    if (args.interactives != null) {
      const value_54: Array<com_gu_contentatom_thrift.IAtom> = new Array<
        com_gu_contentatom_thrift.IAtom
      >();
      args.interactives.forEach(
        (value_75: com_gu_contentatom_thrift.IAtomArgs): void => {
          const value_76: com_gu_contentatom_thrift.IAtom = new com_gu_contentatom_thrift.Atom(
            value_75
          );
          value_54.push(value_76);
        }
      );
      this.interactives = value_54;
    }
    if (args.reviews != null) {
      const value_55: Array<com_gu_contentatom_thrift.IAtom> = new Array<
        com_gu_contentatom_thrift.IAtom
      >();
      args.reviews.forEach(
        (value_77: com_gu_contentatom_thrift.IAtomArgs): void => {
          const value_78: com_gu_contentatom_thrift.IAtom = new com_gu_contentatom_thrift.Atom(
            value_77
          );
          value_55.push(value_78);
        }
      );
      this.reviews = value_55;
    }
    if (args.recipes != null) {
      const value_56: Array<com_gu_contentatom_thrift.IAtom> = new Array<
        com_gu_contentatom_thrift.IAtom
      >();
      args.recipes.forEach(
        (value_79: com_gu_contentatom_thrift.IAtomArgs): void => {
          const value_80: com_gu_contentatom_thrift.IAtom = new com_gu_contentatom_thrift.Atom(
            value_79
          );
          value_56.push(value_80);
        }
      );
      this.recipes = value_56;
    }
    if (args.storyquestions != null) {
      const value_57: Array<com_gu_contentatom_thrift.IAtom> = new Array<
        com_gu_contentatom_thrift.IAtom
      >();
      args.storyquestions.forEach(
        (value_81: com_gu_contentatom_thrift.IAtomArgs): void => {
          const value_82: com_gu_contentatom_thrift.IAtom = new com_gu_contentatom_thrift.Atom(
            value_81
          );
          value_57.push(value_82);
        }
      );
      this.storyquestions = value_57;
    }
    if (args.qandas != null) {
      const value_58: Array<com_gu_contentatom_thrift.IAtom> = new Array<
        com_gu_contentatom_thrift.IAtom
      >();
      args.qandas.forEach(
        (value_83: com_gu_contentatom_thrift.IAtomArgs): void => {
          const value_84: com_gu_contentatom_thrift.IAtom = new com_gu_contentatom_thrift.Atom(
            value_83
          );
          value_58.push(value_84);
        }
      );
      this.qandas = value_58;
    }
    if (args.guides != null) {
      const value_59: Array<com_gu_contentatom_thrift.IAtom> = new Array<
        com_gu_contentatom_thrift.IAtom
      >();
      args.guides.forEach(
        (value_85: com_gu_contentatom_thrift.IAtomArgs): void => {
          const value_86: com_gu_contentatom_thrift.IAtom = new com_gu_contentatom_thrift.Atom(
            value_85
          );
          value_59.push(value_86);
        }
      );
      this.guides = value_59;
    }
    if (args.profiles != null) {
      const value_60: Array<com_gu_contentatom_thrift.IAtom> = new Array<
        com_gu_contentatom_thrift.IAtom
      >();
      args.profiles.forEach(
        (value_87: com_gu_contentatom_thrift.IAtomArgs): void => {
          const value_88: com_gu_contentatom_thrift.IAtom = new com_gu_contentatom_thrift.Atom(
            value_87
          );
          value_60.push(value_88);
        }
      );
      this.profiles = value_60;
    }
    if (args.timelines != null) {
      const value_61: Array<com_gu_contentatom_thrift.IAtom> = new Array<
        com_gu_contentatom_thrift.IAtom
      >();
      args.timelines.forEach(
        (value_89: com_gu_contentatom_thrift.IAtomArgs): void => {
          const value_90: com_gu_contentatom_thrift.IAtom = new com_gu_contentatom_thrift.Atom(
            value_89
          );
          value_61.push(value_90);
        }
      );
      this.timelines = value_61;
    }
    if (args.commonsdivisions != null) {
      const value_62: Array<com_gu_contentatom_thrift.IAtom> = new Array<
        com_gu_contentatom_thrift.IAtom
      >();
      args.commonsdivisions.forEach(
        (value_91: com_gu_contentatom_thrift.IAtomArgs): void => {
          const value_92: com_gu_contentatom_thrift.IAtom = new com_gu_contentatom_thrift.Atom(
            value_91
          );
          value_62.push(value_92);
        }
      );
      this.commonsdivisions = value_62;
    }
    if (args.charts != null) {
      const value_63: Array<com_gu_contentatom_thrift.IAtom> = new Array<
        com_gu_contentatom_thrift.IAtom
      >();
      args.charts.forEach(
        (value_93: com_gu_contentatom_thrift.IAtomArgs): void => {
          const value_94: com_gu_contentatom_thrift.IAtom = new com_gu_contentatom_thrift.Atom(
            value_93
          );
          value_63.push(value_94);
        }
      );
      this.charts = value_63;
    }
    if (args.audios != null) {
      const value_64: Array<com_gu_contentatom_thrift.IAtom> = new Array<
        com_gu_contentatom_thrift.IAtom
      >();
      args.audios.forEach(
        (value_95: com_gu_contentatom_thrift.IAtomArgs): void => {
          const value_96: com_gu_contentatom_thrift.IAtom = new com_gu_contentatom_thrift.Atom(
            value_95
          );
          value_64.push(value_96);
        }
      );
      this.audios = value_64;
    }
  }
  public static read(input: thrift.TProtocol): Atoms {
    return new Atoms(AtomsCodec.decode(input));
  }
  public static write(args: IAtomsArgs, output: thrift.TProtocol): void {
    return AtomsCodec.encode(args, output);
  }
  public write(output: thrift.TProtocol): void {
    return AtomsCodec.encode(this, output);
  }
}