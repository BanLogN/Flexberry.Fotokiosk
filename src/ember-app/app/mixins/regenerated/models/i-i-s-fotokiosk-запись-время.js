import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  дата: DS.attr('date'),
  статус: DS.attr('i-i-s-fotokiosk-статусы'),
  прайсЛист: DS.belongsTo('i-i-s-fotokiosk-прайс-лист', { inverse: null, async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-fotokiosk-запись-время.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-fotokiosk-запись-время.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-fotokiosk-запись-время.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  прайсЛист: {
    descriptionKey: 'models.i-i-s-fotokiosk-запись-время.validations.прайсЛист.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьВремяE', 'i-i-s-fotokiosk-запись-время', {
    время: attr('Время', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    прайсЛист: belongsTo('i-i-s-fotokiosk-прайс-лист', 'Прайс лист', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ЗаписьВремяL', 'i-i-s-fotokiosk-запись-время', {
    время: attr('Время', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    прайсЛист: belongsTo('i-i-s-fotokiosk-прайс-лист', 'Наименование', {
      наименование: attr('Наименование', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
