import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number'),
  наименование: DS.attr('string')
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-fotokiosk-материал.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-fotokiosk-материал.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МатериалE', 'i-i-s-fotokiosk-материал', {
    код: attr('Код', { index: 0 }),
    наименование: attr('Наименование', { index: 1 })
  });

  modelClass.defineProjection('МатериалL', 'i-i-s-fotokiosk-материал', {
    код: attr('Код', { index: 0 }),
    наименование: attr('Наименование', { index: 1 })
  });
};
