<template>
  <div>
    <v-card class="mt-5">
      <v-card-title>Text fields</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field label="Outlined" outlined clearable counter="25" color="purple darken-2" hint="hint hint hint hint" />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field label="Outlined" outlined clearable dense color="blue darken-2" hint="hint hint hint hint" persistent-hint />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field outlined label="Prepend" prepend-icon="place"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field outlined label="Prepend inner" prepend-inner-icon="place"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field outlined label="Append" append-icon="place"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              outlined
              label="Append outer"
              append-outer-icon="place"
              error
              :error-messages="['error1', 'error2']"
              error-count="2"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field label="Outlined" outlined clearable suffix="@gmail.com" success :success-messages="['done']" />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field outlined clearable>
              <template v-slot:label>
                What about <strong>icon</strong> here? <v-icon style="vertical-align: middle">find_in_page</v-icon>
              </template>
            </v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="mt-5">
      <v-card-title>Text fields</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6">
            <v-textarea outlined label="Outlined textarea" clearable />
          </v-col>
          <v-col cols="12" sm="6">
            <v-textarea outlined label="Outlined textarea" clearable row-height="15" auto-grow />
          </v-col>
          <v-col cols="12" sm="6">
            <v-textarea outlined label="prepend-icon" clearable prepend-icon="comment" auto-grow />
          </v-col>
          <v-col cols="12" sm="6">
            <v-textarea outlined label="append-icon" clearable append-icon="comment" auto-grow />
          </v-col>
          <v-col cols="12" sm="6">
            <v-textarea outlined label="prepend-inner-icon" clearable prepend-inner-icon="comment" auto-grow />
          </v-col>
          <v-col cols="12" sm="6">
            <v-textarea outlined label="append-outer-icon" clearable append-outer-icon="comment" auto-grow />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="mt-5">
      <v-card-title>Selects</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6">
            <v-select v-model="selectSelected1" :items="selectItems1" label="Outlined style" outlined clearable />
          </v-col>
          <v-col cols="12" sm="6">
            <v-select v-model="selectSelected1" :items="selectItems1" label="Outlined style" outlined dense clearable />
          </v-col>
          <v-col cols="12" sm="6">
            <v-select v-model="selectSelected1" :items="selectItems1" label="prepend-icon" outlined prepend-icon="comment" />
          </v-col>
          <v-col cols="12" sm="6">
            <v-select v-model="selectSelected1" :items="selectItems1" label="append-icon" outlined append-icon="comment" />
          </v-col>
          <v-col cols="12" sm="6">
            <v-select v-model="selectSelected1" :items="selectItems1" label="prepend-inner-icon" outlined prepend-inner-icon="comment" />
          </v-col>
          <v-col cols="12" sm="6">
            <v-select v-model="selectSelected1" :items="selectItems1" label="append-outer-icon" outlined append-outer-icon="comment" />
          </v-col>
          <v-col cols="12" sm="6">
            <v-select v-model="selectSelected2" :items="selectItems1" label="Outlined style" outlined multiple chips />
          </v-col>
          <v-col cols="12" sm="6">
            <v-select v-model="selectSelected2" :items="selectItems1" label="Outlined style" outlined multiple small-chips />
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              v-model="selectSelected3"
              :items="selectItems2"
              label="Custom items"
              outlined
              clearable
              item-text="state"
              item-value="abbr"
              return-object
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              v-model="selectSelected4"
              :items="selectItems2"
              label="Custom items"
              outlined
              clearable
              item-text="state"
              item-value="abbr"
              return-object
              multiple
              chips
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="mt-5">
      <v-card-title>Combobox</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6">
            <v-combobox
              v-model="comboSelected1"
              :items="comboItems1"
              label="Select a favorite activity or create a new one"
              multiple
            ></v-combobox>
          </v-col>
          <v-col cols="12" sm="6">
            <v-combobox v-model="comboSelected1" :items="comboItems1" label="I use chips" multiple chips></v-combobox>
          </v-col>
          <v-col cols="12" sm="6">
            <v-combobox v-model="comboSelected1" :items="comboItems1" label="I use a scoped slot" multiple chips>
              <template v-slot:selection="data">
                <v-chip
                  :key="JSON.stringify(data.item)"
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  :disabled="data.disabled"
                  @click:close="data.parent.selectItem(data.item)"
                >
                  <v-avatar class="accent white--text" left v-text="data.item.slice(0, 1).toUpperCase()"></v-avatar>
                  {{ data.item }}
                </v-chip>
              </template>
            </v-combobox>
          </v-col>
          <v-col cols="12" sm="6">
            <v-combobox
              v-model="comboSelected1"
              :items="comboItems1"
              label="Select a favorite activity or create a new one"
              multiple
              dense
            ></v-combobox>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="mt-5">
      <v-card-title>Selection</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6">
            <v-checkbox v-model="checkBox1" :label="`Checkbox 1: ${checkBox1.toString()}`" />
            <v-checkbox v-model="checkBox2" :label="`Checkbox 2: ${checkBox2.toString()}`" />
          </v-col>
          <v-col cols="12" sm="6">
            <p>{{ checkBoxSelected1 }}</p>
            <v-checkbox v-model="checkBoxSelected1" label="John" value="John"></v-checkbox>
            <v-checkbox v-model="checkBoxSelected1" label="Jacob" value="Jacob"></v-checkbox>
          </v-col>
          <v-col cols="12" sm="6">
            <v-checkbox input-value="true" value />
            <v-checkbox value />
            <v-checkbox value indeterminate />
          </v-col>
          <v-col cols="12" sm="6">
            <v-checkbox input-value="true" value disabled />
            <v-checkbox value disabled />
          </v-col>
          <v-col cols="12" sm="6">
            <p>{{ checkBoxSelected2 }}</p>
            <v-checkbox v-model="checkBoxSelected2" label="red" color="red" value="red" />
            <v-checkbox v-model="checkBoxSelected2" label="orange" color="orange" value="orange" />
            <v-checkbox v-model="checkBoxSelected2" label="indigo" color="indigo" value="indigo" />
          </v-col>
          <v-col cols="12" sm="6">
            <v-checkbox v-model="checkBoxSelected2" label="primary" color="primary" value="primary" />
            <v-checkbox v-model="checkBoxSelected2" label="info" color="info" value="info" />
            <v-checkbox v-model="checkBoxSelected2" label="error" color="error" value="error" />
          </v-col>
          <v-col cols="12" sm="6">
            <p>{{ radioSelected1 || 'null' }}</p>
            <v-radio-group v-model="radioSelected1" :mandatory="false">
              <v-radio label="Radio 1" value="radio-1" color="orange" />
              <v-radio label="Radio 2" value="radio-2" color="indigo" />
            </v-radio-group>
          </v-col>
          <v-col cols="12" sm="6">
            <p>{{ radioSelected2 || 'null' }}</p>
            <v-radio-group v-model="radioSelected2" :mandatory="false" row>
              <v-radio label="Radio 1" value="radio-1" color="info" />
              <v-radio label="Radio 2" value="radio-2" color="error" />
            </v-radio-group>
          </v-col>
          <v-col cols="12" sm="6">
            <v-switch v-model="switch1" :label="`Switch 1: ${switch1.toString()}`" color="orange"></v-switch>
            <v-switch v-model="switch2" :label="`Switch 2: ${switch2.toString()}`" color="indigo"></v-switch>
          </v-col>
          <v-col cols="12" sm="6">
            <p>{{ switchSelected1 }}</p>
            <v-switch v-model="switchSelected1" label="John" value="John" color="success"></v-switch>
            <v-switch v-model="switchSelected1" label="Jacob" value="Jacob" color="warning"></v-switch>
          </v-col>
          <v-col cols="12" sm="6">
            <v-switch value input-value="true" />
            <v-switch />
            <v-switch value input-value="true" disabled />
            <v-switch disabled />
          </v-col>
          <v-col cols="12" sm="6">
            <v-switch v-model="switch1" :label="`Switch 1: ${switch1.toString()}`" color="orange" flat></v-switch>
            <v-switch v-model="switch2" :label="`Switch 2: ${switch2.toString()}`" color="indigo" flat></v-switch>
          </v-col>
          <v-col cols="12" sm="6">
            <v-switch v-model="switch1" :label="`Switch 1: ${switch1.toString()}`" color="orange" inset></v-switch>
            <v-switch v-model="switch2" :label="`Switch 2: ${switch2.toString()}`" color="indigo" inset></v-switch>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class PageFormIndex extends Vue {
  // data
  selectItems1: string[] = ['Foo', 'Bar', 'Fizz', 'Buzz', 'Test1', 'Test2', 'Test3'];
  selectItems2: Object[] = [
    { state: 'Florida', abbr: 'FL' },
    { state: 'Georgia', abbr: 'GA' },
    { state: 'Nebraska', abbr: 'NE' },
    { state: 'California', abbr: 'CA' },
    { state: 'New York', abbr: 'NY' },
  ];

  selectSelected1: string = '';
  selectSelected2: string[] = [];
  selectSelected3: Object = { state: 'Florida', abbr: 'FL' };
  selectSelected4: Object[] = [];

  comboItems1: string[] = ['Programming', 'Design', 'Vue', 'Vuetify'];
  comboSelected1: string[] = [];

  checkBox1: boolean = true;
  checkBox2: boolean = false;
  checkBoxSelected1: string[] = [];
  checkBoxSelected2: string[] = [];

  radioSelected1: string = '';
  radioSelected2: string = '';

  switch1: boolean = true;
  switch2: boolean = false;
  switchSelected1: string[] = [];
}
</script>
