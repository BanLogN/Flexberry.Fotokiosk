import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РасходМатериадMixin
} from '../mixins/regenerated/models/i-i-s-fotokiosk-расход-материад';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РасходМатериадMixin, Validations, {
});

defineProjections(Model);

export default Model;
