import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-fotokiosk-запись-клиента', 'Unit | Model | i-i-s-fotokiosk-запись-клиента', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-fotokiosk-запись-время',
    'model:i-i-s-fotokiosk-запись-клиента',
    'model:i-i-s-fotokiosk-материал',
    'model:i-i-s-fotokiosk-прайс-лист',
    'model:i-i-s-fotokiosk-расход-материад',
    'model:i-i-s-fotokiosk-сотрудники',
    'model:i-i-s-fotokiosk-трудозатраты',
    'model:i-i-s-fotokiosk-услуга',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
