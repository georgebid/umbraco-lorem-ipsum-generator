/** @type {import('vite').UserConfig} */
export default {
  // ...
  build: {
    lib: {
      entry: 'src/loremipsumplugin.js',
      name: 'loremipsumplugin',
      fileName: 'loremipsumplugin',
      formats: ['umd'],
    },
    outDir: '../wwwroot/LoremIpsumGenerator'
  }
}
