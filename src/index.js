import React from 'react';
import ReactDOM from 'react-dom';

import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

import 'antd/dist/antd.css'
import 'ant-design-pro/dist/ant-design-pro.css';
import 'ant-design-icons/dist/anticons.min.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

moment.locale('zh-cn');

ReactDOM.render(<LocaleProvider locale={zhCN}><App /></LocaleProvider>, document.getElementById('root'));

serviceWorker.unregister();
