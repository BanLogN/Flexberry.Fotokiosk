import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаУслуги: DS.attr('date'),
  записьВремя: DS.belongsTo('i-i-s-fotokiosk-запись-время', { inverse: null, async: false }),
  прайсЛист: DS.belongsTo('i-i-s-fotokiosk-прайс-лист', { inverse: null, async: false }),
  записьКлиента: DS.belongsTo('i-i-s-fotokiosk-запись-клиента', { inverse: 'услуга', async: false })
});

export let ValidationRules = {
  датаУслуги: {
    descriptionKey: 'models.i-i-s-fotokiosk-услуга.validations.датаУслуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  записьВремя: {
    descriptionKey: 'models.i-i-s-fotokiosk-услуга.validations.записьВремя.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  прайсЛист: {
    descriptionKey: 'models.i-i-s-fotokiosk-услуга.validations.прайсЛист.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  записьКлиента: {
    descriptionKey: 'models.i-i-s-fotokiosk-услуга.validations.записьКлиента.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УслугаE', 'i-i-s-fotokiosk-услуга', {
    датаУслуги: attr('Дата услуги', { index: 0 }),
    прайсЛист: belongsTo('i-i-s-fotokiosk-прайс-лист', 'Прайс лист', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' }),
    записьВремя: belongsTo('i-i-s-fotokiosk-запись-время', 'Запись время', {
      время: attr('Время', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'время' })
  });
};
