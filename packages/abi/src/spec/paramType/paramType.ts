// Copyright 2015-2018 Parity Technologies (UK) Ltd.
// This file is part of Parity.
//
// SPDX-License-Identifier: MIT

import { ParamTypeEnum } from '../../types';
import TYPES from './types';

class ParamType {
  private _indexed?: boolean;
  private _length?: number;
  private _subtype?: ParamType;
  private _type: ParamTypeEnum;

  constructor(
    type: ParamTypeEnum,
    subtype: ParamType = null,
    length = 0,
    indexed = false
  ) {
    ParamType.validateType(type);

    this._type = type;
    this._subtype = subtype;
    this._length = length;
    this._indexed = indexed;
  }

  static validateType(type: ParamTypeEnum) {
    if (TYPES.some(_type => type === _type)) {
      return true;
    }

    throw new Error(`Invalid type ${type} received for ParamType`);
  }

  get type() {
    return this._type;
  }

  get subtype() {
    return this._subtype;
  }

  get length() {
    return this._length;
  }

  get indexed() {
    return this._indexed;
  }
}

export default ParamType;
