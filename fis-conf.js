//npm install -g fis-parser-sass
fis.match('*.scss', {
  rExt: '.css', // from .scss to .css
  parser: fis.plugin('sass', {
    //fis-parser-sass option
  })
});

fis.match('*.jade', {
  rExt: '.html',
  loaderLang: 'html',
  parser: fis.plugin('jade', {
    pretty  : true
  })
});

// npm install [-g] fis3-hook-module
fis.hook('module', {
    mode: 'commonJs'  // requirejs加载器设置值为 'amd'
});
fis.match('/mod/*.js', {
    isMod: true, // 指明模块文件，组件建议都是匿名方式 define
    release: '/static/$0'
});
fis.match('::package', {
    postpackager: fis.plugin('loader', {
        resourceType: 'commonJs',
        useInlineMap: true // 资源映射表内嵌
    })
})

fis.media('prod')
.match('::packager', {
  postpackager: fis.plugin('loader', {
    allInOne: true
  })
})
.match('*.{css,scss}', {
  optimizer: fis.plugin('clean-css')
})
.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});