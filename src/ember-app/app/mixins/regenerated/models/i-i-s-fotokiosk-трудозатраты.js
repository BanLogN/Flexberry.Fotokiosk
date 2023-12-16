import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаОтчета: DS.attr('date'),
  сотрудники: DS.belongsTo('i-i-s-fotokiosk-сотрудники', { inverse: null, async: false }),
  расходМатериад: DS.hasMany('i-i-s-fotokiosk-расход-материад', { inverse: 'трудозатраты', async: false })
});

export let ValidationRules = {
  датаОтчета: {
    descriptionKey: 'models.i-i-s-fotokiosk-трудозатраты.validations.датаОтчета.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-fotokiosk-трудозатраты.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  расходМатериад: {
    descriptionKey: 'models.i-i-s-fotokiosk-трудозатраты.validations.расходМатериад.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТрудозатратыE', 'i-i-s-fotokiosk-трудозатраты', {
    датаОтчета: attr('Дата отчета', { index: 0 }),
    сотрудники: belongsTo('i-i-s-fotokiosk-сотрудники', 'Сотрудники', {
      фИОСотрудника: attr('Ф и о сотрудника', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'фИОСотрудника' }),
    расходМатериад: hasMany('i-i-s-fotokiosk-расход-материад', 'Расход материад', {
      количество: attr('Количество', { index: 0 }),
      материал: belongsTo('i-i-s-fotokiosk-материал', 'Материал', {
        наименование: attr('Наименование', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ТрудозатратыL', 'i-i-s-fotokiosk-трудозатраты', {
    датаОтчета: attr('Дата отчета', { index: 0 }),
    сотрудники: belongsTo('i-i-s-fotokiosk-сотрудники', 'Ф и о сотрудника', {
      фИОСотрудника: attr('Ф и о сотрудника', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
