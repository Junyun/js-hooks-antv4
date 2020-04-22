/**
 * pages页面快速生成脚本 ---组件
 * 
 * 用法：npm run com `文件名`
 * 
 */

const fs = require('fs');

const dirName = process.argv[2];
const capPirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1);
if (!dirName) {
  console.log('文件夹名称不能为空！');
  console.log('示例：npm run tep test');
  process.exit(0);
}

//页面模板
const indexTep = 
`import React from 'react';
import classNames from 'classnames';
import styles from './index.less';

const ${capPirName} = props => {
    return (
      <div>
        内容
      </div>
    )
}

export default ${capPirName}
`

// scss文件模版
const scssTep = 
`@import '~antd/es/style/themes/default.less';

.contain{
    width: 100%;
}
`

fs.mkdirSync(`./src/components/${dirName}`); // mkdir $1
process.chdir(`./src/components/${dirName}`); // cd $1

fs.writeFileSync(`index.tsx`, indexTep); // tsx
fs.writeFileSync(`index.less`, scssTep); // less
