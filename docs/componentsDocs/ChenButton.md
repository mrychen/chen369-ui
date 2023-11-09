# 按钮组件

<h3>状态按钮</h3>
<c-button type="default">default按钮</c-button>
<c-button type="success">success按钮</c-button>
<c-button type="primary">primary按钮</c-button>
<c-button type="danger">danger按钮</c-button>
<c-button type="warning">warning按钮</c-button>
<c-button type="info">info按钮</c-button>

```
<c-button type="default">default按钮</c-button>
<c-button type="success">success按钮</c-button>
<c-button type="primary">primary按钮</c-button>
<c-button type="danger">danger按钮</c-button>
<c-button type="warning">warning按钮</c-button>
<c-button type="info">info按钮</c-button>
```

---

<h3>朴素按钮</h3>
<c-button type="default" plain>default按钮</c-button>
<c-button type="success" plain>success按钮</c-button>
<c-button type="primary" plain>primary按钮</c-button>
<c-button type="danger" plain>danger按钮</c-button>
<c-button type="warning" plain>warning按钮</c-button>
<c-button type="info" plain>info按钮</c-button>

```
<c-button type="default" plain>default 按钮</c-button>
<c-button type="success" plain>success 按钮</c-button>
<c-button type="primary" plain>primary 按钮</c-button>
<c-button type="danger" plain>danger 按钮</c-button>
<c-button type="warning" plain>warning 按钮</c-button>
<c-button type="info" plain>info 按钮</c-button>

```

---

<h3>圆角按钮</h3>
<c-button type="default" round>default按钮</c-button>
<c-button type="success" round>success按钮</c-button>
<c-button type="primary" round>primary按钮</c-button>
<c-button type="danger" round>danger按钮</c-button>
<c-button type="warning" round>warning按钮</c-button>
<c-button type="info" round>info按钮</c-button>

```
<c-button type="default" round>default按钮</c-button>
<c-button type="success" round>success按钮</c-button>
<c-button type="primary" round>primary按钮</c-button>
<c-button type="danger" round>danger按钮</c-button>
<c-button type="warning" round>warning按钮</c-button>
<c-button type="info" round>info按钮</c-button>
```

---

<h3>禁用按钮</h3>
<c-button type="default" disabled>default按钮</c-button>
<c-button type="success" disabled>success按钮</c-button>
<c-button type="primary" disabled>primary按钮</c-button>
<c-button type="danger" disabled>danger按钮</c-button>
<c-button type="warning" disabled>warning按钮</c-button>
<c-button type="info" disabled>info按钮</c-button>

```

<c-button type="default" disabled>default按钮</c-button>
<c-button type="success" disabled>success按钮</c-button>
<c-button type="primary" disabled>primary按钮</c-button>
<c-button type="danger" disabled>danger按钮</c-button>
<c-button type="warning" disabled>warning按钮</c-button>
<c-button type="info" disabled>info按钮</c-button>
```

---

<h3>实现icon</h3>
<c-button type="default" circle icon="yanjing"></c-button>
<c-button type="success" circle icon="guanbi"></c-button>
<c-button type="primary" circle icon="huanyipi"></c-button>
<c-button type="danger" circle icon="search"></c-button>
<c-button type="warning" circle icon="app4"></c-button>
<c-button type="info" circle icon="Aa"></c-button>

```

<c-button type="default" circle icon="yanjing"></c-button>
<c-button type="success" circle icon="guanbi"></c-button>
<c-button type="primary" circle icon="huanyipi"></c-button>
<c-button type="danger" circle icon="search"></c-button>
<c-button type="warning" circle icon="app4"></c-button>
<c-button type="info" circle icon="Aa"></c-button>
```

---

<h3>函数功能</h3>
<c-button type="default" @click="()=>{alert('你好')}">default按钮</c-button>

```
<c-button type="default" @click="()=>{alert('你好')}">default按钮</c-button>
```

---

<h3>按钮的大小</h3>
<c-button type="danger" size="large">large按钮</c-button>
<c-button type="danger" size="default">default按钮</c-button>
<c-button type="default" size="medium">default按钮</c-button>
<c-button type="success" size="small">success按钮</c-button>
<c-button type="primary" size="mini">primary按钮</c-button>

```
<c-button type="danger" size="large">large按钮</c-button>
<c-button type="danger" size="default">default按钮</c-button>
<c-button type="default" size="medium">default按钮</c-button>
<c-button type="success" size="small">success按钮</c-button>
<c-button type="primary" size="mini">primary按钮</c-button>
```

---

<h3>背景颜色</h3>
<c-button type="danger" size="large" backgroundColor="green">large按钮</c-button>
<c-button
    type="danger"
    size="default"
backgroundColor="red"
    >default按钮</c-button>
<c-button type="default" size="medium" backgroundColor="black"
    >default按钮</c-button>
<c-button type="success" size="small" backgroundColor="green">success按钮</c-button>
<c-button type="primary" size="mini" backgroundColor="purple">primary按钮</c-button>

```
<h3>背景颜色</h3>
<c-button type="danger" size="large" backgroundColor="green">large按钮</c-button>
<c-button
    type="danger"
    size="default"
backgroundColor="red"
    >default按钮</c-button>
<c-button type="default" size="medium" backgroundColor="black"
    >default按钮</c-button>
<c-button type="success" size="small" backgroundColor="green">success按钮</c-button>
<c-button type="primary" size="mini" backgroundColor="purple">primary按钮</c-button>
```

---

<h3>背景图片</h3>
<h4>在线图片</h4>
<c-button
      type="danger"
      size="default"
      backgroundImage="https://tse4-mm.cn.bing.net/th/id/OIP-C.avb9nDfw3kq7NOoP0grM4wHaEK?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      >default 按钮</c-button>

```
<c-button
      type="danger"
      size="default"
      backgroundImage="https://tse4-mm.cn.bing.net/th/id/OIP-C.avb9nDfw3kq7NOoP0grM4wHaEK?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      >default按钮</c-button>
```

# Attributes

| 参数            | 说明                                                    | 类型    | 是否必要 | 默认值  |
| --------------- | ------------------------------------------------------- | ------- | -------- | ------- |
| size            | "default", "medium", "small", "mini"                    | string  | false    | medium  |
| type            | "default","success","primary","danger","warning","info" | string  | false    | default |
| plain           | 朴素按钮                                                | boolean | false    | false   |
| mimicry         | 拟态按钮                                                | boolean | false    | false   |
| circle          | 圆形按钮                                                | boolean | false    | false   |
| round           | round 圆角按钮                                          | boolean | false    | false   |
| disabled        | 无                                                      | boolean | false    | false   |
| icon            | icon                                                    | boolean | false    | ''      |
| color           | 文字颜色                                                | string  | false    | #fff    |
| backgroundImage | 按钮背景图片                                            | string  | false    | ''      |
| backgroundColor | 按钮背景颜色                                            | string  | false    | #fff    |
