const validTestsFromEmberTestSuite = [
  {
    code: 'export default Component.extend();',
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
  },
  {
    code: `export default Component.extend({
          role: "sloth",
  
          vehicle: alias("car"),
  
          levelOfHappiness: computed("attitude", "health", () => {
          }),
  
          actions: {}
        });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
  },
  {
    code: `export default Component.extend({
          role: "sloth",
  
          levelOfHappiness: computed("attitude", "health", () => {
          }),
  
          actions: {}
        });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
  },
  {
    code: `export default Component.extend({
          levelOfHappiness: computed("attitude", "health", () => {
          }),
  
          actions: {}
        });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
  },
  {
    code: `export default Component.extend(TestMixin, {
          levelOfHappiness: computed("attitude", "health", () => {
          }),
  
          actions: {}
        });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
  },
  {
    code: `export default Component.extend(TestMixin, TestMixin2, {
          levelOfHappiness: computed("attitude", "health", () => {
          }),
  
          actions: {}
        });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
  },
  {
    code: `export default Component.extend({
          abc: Ember.inject.service(),
          def: inject.service(),
          ghi: service(),
  
          role: "sloth",
  
          levelOfHappiness: computed("attitude", "health", () => {
          })
        });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
  },
  {
    code: `
          import { inject } from '@ember/service';
          export default Component.extend({
            abc: inject(),
            def: inject.service(),
            ghi: service(),
  
            role: "sloth",
  
            levelOfHappiness: computed("attitude", "health", () => {
            })
          });
        `,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
  },
  {
    code: `export default Component.extend({
          role: "sloth",
          abc: [],
          def: {},
  
          ghi: alias("def")
        });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
  },
  {
    code: `export default Component.extend({
          levelOfHappiness: computed("attitude", "health", () => {
          }),
  
          abc: Ember.observer("aaaa", () => {
          }),
  
          def: observer("aaaa", () => {
          }),
  
          actions: {}
        });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
  },
  {
    code: `export default Component.extend({
          abc: observer("aaaa", () => {
          }),
  
          customFunc() {
            return true;
          },

          init() {
          },

          actions: {},
        });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
  },
  {
    code: `export default Component.extend({
          igh: service(),
  
          abc: [],
          def: true,
  
          singleComp: alias("abc"),
  
          multiComp: computed(() => {
          }),
  
          obs: observer("aaa", () => {
          }),
  
          customFunc() {
            return true;
          },

          init() {
          },
  
          actions: {},
        });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
  },
  {
    code: `export default Component.extend({
          init() {
          },
          didReceiveAttrs() {
          },
          willRender() {
          },
          willInsertElement() {
          },
          didInsertElement() {
          },
          didRender() {
          },
          didUpdateAttrs() {
          },
          willUpdate() {
          },
          didUpdate() {
          },
          willDestroyElement() {
          },
          willClearRender() {
          },
          didDestroyElement() {
          },
  
          actions: {}
        });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
  },
  {
    code: `export default Component.extend({
          test: service(),
  
          tSomeAction: task(function* (url) {
          }),
          
          didReceiveAttrs() {
          },
        });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
  },
  {
    code: `export default Component.extend({
          test: service(),
  
          test2: computed.equal("asd", "qwe"),
  
          tSomeAction: task(function* (url) {
          }).restartable(),

          didReceiveAttrs() {
          },
        });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
  },
  {
    code: `export default Component.extend({
          test: service(),
  
          someEmptyMethod() {},
  
          _anotherPrivateFnc() {
            return true;
          },

          tSomeAction: task(function* (url) {
          }),

          didReceiveAttrs() {
          },
        });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
  },
  {
    code: `export default Component.extend({
          classNameBindings: ["filterDateSelectClass"],
          content: [],
          currentMonthEndDate: null,
          currentMonthStartDate: null,
          optionValuePath: "value",
          optionLabelPath: "label",
          typeOfDate: null,
          action: K
        });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
  },
  {
    code: `export default Component.extend({
          role: "sloth",
  
          levelOfHappiness: computed.or("asd", "qwe"),
  
          actions: {}
        });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
  },
  {
    code: `export default Component.extend({
          role: "sloth",
  
          levelOfHappiness: computed(function() {}),
  
          actions: {}
        });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
  },
  {
    code: `export default Component.extend({
          role: "sloth",
  
          levelOfHappiness: computed(function() {
          }),
  
          actions: {}
        });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
  },
  {
    code: `export default Component.extend({
          role: "sloth",
  
          computed1: computed(function() {
          }),
          computed2: alias('computed1'),
  
          actions: {},
  
          foobar: Ember.inject.service(),
        });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    options: [
      {
        order: [
          'private:property',
          'private:multi-line-function',
          'private:single-line-function',
          'actions',
        ],
      },
    ],
  },
  {
    code: `export default Component.extend({
          role: "sloth",
  
          computed1: alias('computed2'),
          computed3: alias('computed1'),
          computed2: computed(function() {
          }),
  
          actions: {},
  
          foobar: Ember.inject.service(),
        });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    options: [
      {
        order: [
          'private:property',
          'private:single-line-function',
          'private:multi-line-function',
          'actions',
        ],
      },
    ],
  },
  {
    code: `export default Component.extend({
          role: "sloth",
          qwe: foo ? 'bar' : null,
          abc: [],
          def: {},
  
          ghi: alias("def")
        });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
  },
  {
    code: `export default Component.extend({
          template: hbs\`Hello world {{name}}\`,
          name: "Jon Snow",
          actions: {}
        });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
  },
  {
    code: `export default Component.extend({
          layout,
          tabindex: -1,
  
          someComputedValue: computed.reads('count'),
        });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
  },
  {
    code: `export default Component.extend({
          foo: computed(function() {
          }).volatile(),
          bar: computed(function() {
          })
        });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
  },
  {
    code: `export default Component.extend({
          foo: computed(function() {
          }).volatile(),
          onFoo: () => {},
          onFoo() {},
          bar() { const foo = 'bar'}
        });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
  },
  {
    code: `export default Component.extend({
          onFoo() {},
          onFoo: () => {},
          foo: computed(function() {
          }).volatile(),
          bar() { const foo = 'bar'}
        });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    options: [
      {
        order: [
          'private:property',
          'private:empty-method',
          'private:single-line-function',
          'private:multi-line-function',
          'method',
        ],
      },
    ],
  },
];

const invalidTestsFromEmberTestSuite = [
  {
    code: `export default Component.extend({
      actions: {},

      role: "sloth",

      vehicle: alias("car"),

      levelOfHappiness: computed("attitude", "health", () => {
      })
    });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    errors: [
      {
        message:
          'The "role" private property should be above the actions hash on line 2',
        line: 4,
      },
      {
        message:
          'The "vehicle" private single-line function should be above the actions hash on line 2',
        line: 6,
      },
      {
        message:
          'The "levelOfHappiness" private multi-line function should be above the actions hash on line 2',
        line: 8,
      },
    ],
  },
  {
    code: `export default Component.extend({
      vehicle: alias("car"),

      role: "sloth",

      levelOfHappiness: computed("attitude", "health", () => {
      }),

      actions: {}
    });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    errors: [
      {
        message:
          'The "role" private property should be above the "vehicle" private single-line function on line 2',
        line: 4,
      },
    ],
  },
  {
    code: `export default Component.extend({
      levelOfHappiness: computed("attitude", "health", () => {
      }),

      vehicle: alias("car"),

      role: "sloth",

      actions: {}
    });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    errors: [
      {
        message:
          'The "vehicle" private single-line function should be above the "levelOfHappiness" private multi-line function on line 2',
        line: 5,
      },
      {
        message:
          'The "role" private property should be above the "levelOfHappiness" private multi-line function on line 2',
        line: 7,
      },
    ],
  },
  {
    code: `export default Component.extend(TestMixin, {
      levelOfHappiness: computed("attitude", "health", () => {
      }),

      vehicle: alias("car"),

      role: "sloth",

      actions: {}
    });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    errors: [
      {
        message:
          'The "vehicle" private single-line function should be above the "levelOfHappiness" private multi-line function on line 2',
        line: 5,
      },
      {
        message:
          'The "role" private property should be above the "levelOfHappiness" private multi-line function on line 2',
        line: 7,
      },
    ],
  },
  {
    code: `export default Component.extend(TestMixin, TestMixin2, {
      levelOfHappiness: computed("attitude", "health", () => {
      }),

      vehicle: alias("car"),

      role: "sloth",

      actions: {}
    });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    errors: [
      {
        message:
          'The "vehicle" private single-line function should be above the "levelOfHappiness" private multi-line function on line 2',
        line: 5,
      },
      {
        message:
          'The "role" private property should be above the "levelOfHappiness" private multi-line function on line 2',
        line: 7,
      },
    ],
  },
  {
    code: `export default Component.extend({
      abc: true,
      i18n: service()
    });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    errors: [
      {
        message:
          'The "i18n" service injection should be above the "abc" private property on line 2',
        line: 3,
      },
    ],
  },
  {
    code: `export default Component.extend({
      vehicle: alias("car"),
      i18n: service()
    });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    errors: [
      {
        message:
          'The "i18n" service injection should be above the "vehicle" private single-line function on line 2',
        line: 3,
      },
    ],
  },
  {
    code: `
      import { inject } from '@ember/service';
      export default Component.extend({
        vehicle: alias("car"),
        i18n: inject()
      });
    `,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    errors: [
      {
        message:
          'The "i18n" service injection should be above the "vehicle" private single-line function on line 4',
        line: 5,
      },
    ],
  },
  {
    code: `export default Component.extend({
      levelOfHappiness: observer("attitude", "health", () => {
      }),
      vehicle: alias("car")
    });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    errors: [
      {
        message:
          'The "vehicle" private single-line function should be above the "levelOfHappiness" observer on line 2',
        line: 4,
      },
    ],
  },
  {
    code: `export default Component.extend({
      levelOfHappiness: observer("attitude", "health", () => {
      }),
      aaa: computed("attitude", "health", () => {
      })
    });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    errors: [
      {
        message:
          'The "aaa" private multi-line function should be above the "levelOfHappiness" observer on line 2',
        line: 4,
      },
    ],
  },
  {
    code: `export default Component.extend({
      init() {
      },
      levelOfHappiness: observer("attitude", "health", () => {
      })
    });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    errors: [
      {
        message:
          'The "levelOfHappiness" observer should be above the "init" lifecycle hook on line 2',
        line: 4,
      },
    ],
  },
  {
    code: `export default Component.extend({
      actions: {},
      init() {
      }
    });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    errors: [
      {
        message:
          'The "init" lifecycle hook should be above the actions hash on line 2',
        line: 3,
      },
    ],
  },
  {
    code: `export default Component.extend({
      actions: {},
      customFunc() {
        const foo = 'bar';
      },
    });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    errors: [
      {
        message:
          'The "customFunc" method should be above the actions hash on line 2',
        line: 3,
      },
    ],
  },
  {
    code: `export default Component.extend(TestMixin, TestMixin2, {
      foo: alias("car"),

      levelOfHappiness: computed("attitude", "health", () => {
      }),

      vehicle: alias("car"),

      role: "sloth",

      actions: {}
    });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    errors: [
      {
        message:
          'The "vehicle" private single-line function should be above the "levelOfHappiness" private multi-line function on line 4',
        line: 7,
      },
      {
        message:
          'The "role" private property should be above the "foo" private single-line function on line 2',
        line: 9,
      },
    ],
  },
  {
    code: `let foo = 'foo';

    export default Component.extend(TestMixin, TestMixin2, {
      actions: {},
      [foo]: 'foo',
    });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    errors: [
      {
        message:
          'The private property should be above the actions hash on line 4',
        line: 5,
      },
    ],
  },
  {
    filename: 'example-app/components/some-component/component.js',
    code: `export default CustomComponent.extend({
      actions: {},
      role: "sloth",
    });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    errors: [
      {
        message:
          'The "role" private property should be above the actions hash on line 2',
        line: 3,
      },
    ],
  },
  {
    filename: 'example-app/components/some-component.js',
    code: `export default CustomComponent.extend({
      actions: {},
      role: "sloth",
    });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    errors: [
      {
        message:
          'The "role" private property should be above the actions hash on line 2',
        line: 3,
      },
    ],
  },
  {
    filename: 'example-app/twisted-path/some-component.js',
    code: `export default Component.extend({
      actions: {},
      role: "sloth",
    });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    errors: [
      {
        message:
          'The "role" private property should be above the actions hash on line 2',
        line: 3,
      },
    ],
  },
  {
    code: `export default Component.extend({
      name: "Jon Snow",
      actions: {},
      template: hbs\`Hello world {{name}}\`,
    });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    errors: [
      {
        message:
          'The "template" private property should be above the actions hash on line 3',
        line: 4,
      },
    ],
  },
  {
    code: `export default Component.extend({
      layout,
      someComputedValue: computed.reads('count'),

      tabindex: -1,
    });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    errors: [
      {
        message:
          'The "tabindex" private property should be above the "someComputedValue" private single-line function on line 3',
        line: 5,
      },
    ],
  },
  {
    code: `export default Component.extend({
      foo: computed(function() {
      }).volatile(),
      name: "Jon Snow",
    });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    errors: [
      {
        message:
          'The "name" private property should be above the "foo" private multi-line function on line 2',
        line: 4,
      },
    ],
  },
  {
    code: `export default Component.extend({
      actions: {},
      didReceiveAttrs() {},
      willDestroyElement() {},
      didInsertElement() {},
      init() {},
    });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    errors: [
      {
        message:
          'The "didReceiveAttrs" lifecycle hook should be above the actions hash on line 2',
        line: 3,
      },
      {
        message:
          'The "willDestroyElement" lifecycle hook should be above the actions hash on line 2',
        line: 4,
      },
      {
        message:
          'The "didInsertElement" lifecycle hook should be above the actions hash on line 2',
        line: 5,
      },
      {
        message:
          'The "init" lifecycle hook should be above the actions hash on line 2',
        line: 6,
      },
    ],
  },
  {
    code: `export default Component.extend({
      onFoo() {},
      foo: computed(function() {
      }).volatile(),
      bar() { const foo = 'bar'},
      onBar: () => {},
    });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    errors: [
      {
        message:
          'The "foo" private multi-line function should be above the "onFoo" private empty method on line 2',
        line: 3,
      },
      {
        message:
          'The "onBar" private empty method should be above the "bar" method on line 5',
        line: 6,
      },
    ],
  },
  {
    code: `export default Component.extend({
      levelOfHappiness: computed("attitude", "health", () => {
      }),

      vehicle: alias("car"),

      actions: {}
    });`,
    output: `export default Component.extend({
      vehicle: alias("car"),

      levelOfHappiness: computed("attitude", "health", () => {
      }),

      actions: {}
    });`,
    parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    errors: [
      {
        message:
          'The "vehicle" private single-line function should be above the "levelOfHappiness" private multi-line function on line 2',
        line: 5,
      },
    ],
  },
];

// ------------------------------------------------------------------------------
// Tests from ember test suite
// ------------------------------------------------------------------------------
const rule = require('../../lib/rules/order-in-components');
const RuleTester = require('eslint').RuleTester;

const eslintTester = new RuleTester();
eslintTester.run('order-in-components', rule, {
  // valid: [...validTestsFromEmberTestSuite],
  // invalid: [...invalidTestsFromEmberTestSuite],
  valid: [
    {
      code: `export default Component.extend({
        
        tagName: 'div',
        
        attributeBindings: [],

        classNames: [],
        
        classNameBindings: [],

        layout: '',

        session: service(),

        /**
         * @public 
         */
        publicProp: true,

        /**
         * @public 
         */
        failureAction: null,

        /**
         * @public 
         */
        successAction: function() {},

        /**
         * @type {Function}
         * @public 
         */
        warningAction: resolve,
        
        privateProp: [],
        
        singleComp: alias("abc"),
  
        multiComp: computed(() => {
        }),
  
        obs: observer("aaa", () => {
        }),

        customFunc() {
          return true;
        },
        
        myTask: task(function* () {
          yield theAnswerToLifeAndEverythingInTheUniverse();
        }),
        
        init() {
        },

        actions: {},
      });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    },
    ...validTestsFromEmberTestSuite,
  ],
  invalid: [
    {
      code: `export default Component.extend({
        myTask: task(function* (){}),
        
        bestAvenger: 'Dr.Strange',

        /** 
         * @public
        */
        catchPhrase: 'Na na na na batman',
    });`,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
      errors: [
        {
          message:
            'The "bestAvenger" private property should be above the "myTask" ember concurrency task on line 2',
          line: 4,
        },
        {
          message:
            'The "catchPhrase" public property should be above the "myTask" ember concurrency task on line 2',
          line: 9,
        },
      ],
    },
    ...invalidTestsFromEmberTestSuite,
  ],
});
