## flyover

### install

```bash
~$ tnpm i @alipay/flyover --save
```

### documents

#### toast

```js
import { toast } from '@alipay/flyover';
```

basic:
```js
toast('hello world');
```

with options:
```js
toast('hello world', { type: 'success', duration: 2000 });
```


#### alert

```js
import { alert } from '@alipay/flyover';
```

basic:
```js
alert('hello world');
```


### license

This project is under Alibaba Inc Source Code License.
