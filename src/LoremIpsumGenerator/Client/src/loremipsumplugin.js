'use strict';
import { loremIpsum } from 'lorem-ipsum';

(function () {
  /**
   * @param {import('tinymce').TinyMCE} tinymce
   */
  function plugin(tinymce) {
    tinymce.PluginManager.add('lorem-ipsum', function (editor) {
      editor.ui.registry.addMenuButton('loremIpsumButton', {
        text: 'Add Lorem Ipsum',
        fetch: (callback) => {
          const items = [
            {
              type: 'menuitem',
              text: 'Short sentence',
              icon: 'horizontal-rule',
              onAction: () =>
                editor.insertContent(loremIpsum({ count: 1, units: 'sentences' })),
            },
            {
              type: 'menuitem',
              text: '1 paragraph',
              icon: 'border-style',
              onAction: () =>
                editor.insertContent(loremIpsum({ count: 1, units: 'paragraphs' })),
            },
            {
              type: 'menuitem',
              text: 'Enter number of characters',
              icon: 'text',
              onAction: () => {
                editor.windowManager.open({
                  title: 'Generate Lorem Ipsum',
                  body: {
                    type: 'panel',
                    items: [
                      {
                        type: 'input',
                        name: 'count',
                        label: 'Specify number of characters',
                        inputMode: 'numeric',
                      },
                    ],
                  },
                  buttons: [
                    {
                      type: 'submit',
                      text: 'Insert',
                    },
                    {
                      type: 'cancel',
                      text: 'Cancel',
                    },
                  ],
                  onSubmit: (api) => {
                    const data = api.getData();
                    const count = parseInt(data.count, 10) || 50;

                    const loremText = loremIpsum({
                      count,
                      units: 'words',
                      format: 'plain',
                    });

                    editor.insertContent(loremText.substring(0, count));
                    api.close();
                  },
                });
              },
            },
            {
              type: 'menuitem',
              text: 'Enter custom number of sentences',
              icon: 'border-width',
              onAction: () => {
                editor.windowManager.open({
                  title: 'Generate Lorem Ipsum',
                  body: {
                    type: 'panel',
                    items: [
                      {
                        type: 'input',
                        name: 'count',
                        label: 'Number of sentences',
                        inputMode: 'numeric',
                      },
                    ],
                  },
                  buttons: [
                    {
                      type: 'submit',
                      text: 'Insert',
                    },
                    {
                      type: 'cancel',
                      text: 'Cancel',
                    },
                  ],
                  onSubmit: (api) => {
                    const data = api.getData();
                    const count = parseInt(data.count, 10) || 1;

                    editor.insertContent(loremIpsum({ count, units: 'sentences' }));
                    api.close();
                  },
                });
              },
            },
          ];
          callback(items);
        },
      });

      return {
        getMetadata: function () {
          return {
            name: 'Custom Lorem Ipsum',
            url: 'http://exampleplugindocs',
          };
        },
      };
    });
  }

  tinymce.init({
    selector: "#editor",
    plugins: "lorem-ipsum",
    toolbar: "loremIpsumButton",
    setup: (editor) => {
      editor.on("init", () => {
        console.log("TinyMCE Initialized:", editor);
        console.log("UI Registry:", editor.ui.registry);
      });
    },
  });

  if (window && 'tinymce' in window) {
    plugin(window.tinymce);
  }
})();
