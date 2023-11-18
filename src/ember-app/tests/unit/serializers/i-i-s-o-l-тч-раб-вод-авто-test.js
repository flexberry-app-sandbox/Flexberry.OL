import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-o-l-тч-раб-вод-авто', 'Unit | Serializer | i-i-s-o-l-тч-раб-вод-авто', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-o-l-тч-раб-вод-авто',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-o-l-договор',
    'model:i-i-s-o-l-должности',
    'model:i-i-s-o-l-журнал-учета',
    'model:i-i-s-o-l-контрагент',
    'model:i-i-s-o-l-организация',
    'model:i-i-s-o-l-персонал',
    'model:i-i-s-o-l-путевой-лист',
    'model:i-i-s-o-l-рук-отд-лог',
    'model:i-i-s-o-l-т-ч-водитель',
    'model:i-i-s-o-l-т-ч-задан-вод',
    'model:i-i-s-o-l-трансп-ср',
    'model:i-i-s-o-l-тч-движ-г-с-м',
    'model:i-i-s-o-l-тч-раб-вод-авто',
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
