import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-fotokiosk-расход-материад', 'Unit | Serializer | i-i-s-fotokiosk-расход-материад', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-fotokiosk-расход-материад',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-fotokiosk-статусы',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
