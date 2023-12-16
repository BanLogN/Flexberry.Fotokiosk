import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  материал: DS.belongsTo('i-i-s-fotokiosk-материал', { inverse: null, async: false }),
  трудозатраты: DS.belongsTo('i-i-s-fotokiosk-трудозатраты', { inverse: 'расходМатериад', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-fotokiosk-расход-материад.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  материал: {
    descriptionKey: 'models.i-i-s-fotokiosk-расход-материад.validations.материал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  трудозатраты: {
    descriptionKey: 'models.i-i-s-fotokiosk-расход-материад.validations.трудозатраты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасходМатериадE', 'i-i-s-fotokiosk-расход-материад', {
    количество: attr('Количество', { index: 0 }),
    материал: belongsTo('i-i-s-fotokiosk-материал', 'Материал', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' })
  });
};
