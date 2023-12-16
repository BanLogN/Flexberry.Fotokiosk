import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗаписи: DS.attr('date', { defaultValue() { return new Date(); } }),
  телефон: DS.attr('string'),
  фамилияИмя: DS.attr('string'),
  сотрудники: DS.belongsTo('i-i-s-fotokiosk-сотрудники', { inverse: null, async: false }),
  услуга: DS.hasMany('i-i-s-fotokiosk-услуга', { inverse: 'записьКлиента', async: false })
});

export let ValidationRules = {
  датаЗаписи: {
    descriptionKey: 'models.i-i-s-fotokiosk-запись-клиента.validations.датаЗаписи.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-fotokiosk-запись-клиента.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилияИмя: {
    descriptionKey: 'models.i-i-s-fotokiosk-запись-клиента.validations.фамилияИмя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-fotokiosk-запись-клиента.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-fotokiosk-запись-клиента.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьКлиентаE', 'i-i-s-fotokiosk-запись-клиента', {
    датаЗаписи: attr('Дата записи', { index: 0 }),
    фамилияИмя: attr('Фамилия имя', { index: 1 }),
    телефон: attr('Телефон', { index: 2 }),
    сотрудники: belongsTo('i-i-s-fotokiosk-сотрудники', 'Сотрудники', {
      фИОСотрудника: attr('Ф и о сотрудника', { index: 4, hidden: true }),
      должность: attr('Должность', { index: 5 })
    }, { index: 3, displayMemberPath: 'фИОСотрудника' }),
    услуга: hasMany('i-i-s-fotokiosk-услуга', 'Услуга', {
      датаУслуги: attr('Дата услуги', { index: 0 }),
      прайсЛист: belongsTo('i-i-s-fotokiosk-прайс-лист', 'Прайс лист', {
        наименование: attr('Наименование', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'наименование' }),
      записьВремя: belongsTo('i-i-s-fotokiosk-запись-время', 'Запись время', {
        время: attr('Время', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'время' })
    })
  });

  modelClass.defineProjection('ЗаписьКлиентаL', 'i-i-s-fotokiosk-запись-клиента', {
    датаЗаписи: attr('Дата записи', { index: 0 }),
    фамилияИмя: attr('Фамилия имя', { index: 1 }),
    телефон: attr('Телефон', { index: 2 }),
    сотрудники: belongsTo('i-i-s-fotokiosk-сотрудники', 'Ф и о сотрудника', {
      фИОСотрудника: attr('Ф и о сотрудника', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
