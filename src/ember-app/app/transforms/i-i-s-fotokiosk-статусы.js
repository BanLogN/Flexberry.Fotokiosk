import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СтатусыEnum from '../enums/i-i-s-fotokiosk-статусы';

export default FlexberryEnum.extend({
  enum: СтатусыEnum,
  sourceType: 'IIS.Fotokiosk.Статусы'
});
